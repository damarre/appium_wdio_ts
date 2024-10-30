import fs from 'fs/promises';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function getCommandFromChatGPT(userPrompt, pageSource) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                { role: "system", content: "You are an assistant that provides commands in JSON format." },
                { role: "user", content: `Analyze this prompt: "${userPrompt}" along with the HTML source provided. Return a JSON object in this format, no additional text, JSON ONLY!:\n\n{
                  "action": "fill" or "click",
                  "target": "<XPATH selector>",
                  "value": "<text to fill, if action is 'fill'>"
                }\n\nHTML:\n${pageSource}` }
            ]
        });

        // Check if response is valid and has choices
        if (!response || !response.choices || response.choices.length === 0) {
            throw new Error("Invalid response from OpenAI API");
        }

        // Log the response for debugging
        // console.log("Raw response from OpenAI:", response.choices[0].message.content);

        let command;
        try {
            // Trim any surrounding whitespace and parse the JSON response
            command = JSON.parse(response.choices[0].message.content.trim());

            // Validate the expected structure
            if (
                command.action &&
                command.target &&
                (command.action === "click" || (command.action === "fill" && command.value))
            ) {
                console.log("Valid command:", command);
            } else {
                throw new Error("Invalid command structure");
            }
        } catch (parseError) {
            console.error("Failed to parse or validate JSON:", parseError);
            return null;
        }

        return command;
    } catch (apiError) {
        console.error("Error calling ChatGPT API:", apiError);
        return null;
    }
}

async function executeCommand(command, pageSource) {
    if (command.action === "fill") {
        const element = await $(command.target);
        await element.waitForDisplayed({ timeout: 2000 });
        await element.setValue(command.value);
        console.log(`Filled ${command.target} with ${command.value}`);
    } else if (command.action === "click") {
        const element = await $(command.target);
        await element.waitForDisplayed({ timeout: 2000 });

        await element.click();

        await driver.waitUntil(
            async () => (await driver.getPageSource()) !== pageSource,
            { timeout: 2000, timeoutMsg: 'Page source did not change after click.' }
        );
        console.log(`Clicked ${command.target}`);
    } else {
        console.log("Unknown action:", command.action);
    }
}

export async function ai(userPrompt: string): Promise<string> {
    console.log(userPrompt);
    let pageSource = await browser.getPageSource();
    let command = await getCommandFromChatGPT(userPrompt, pageSource);
    console.log(command);
    await executeCommand(command, pageSource)
}
