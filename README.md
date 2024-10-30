![Results](https://github.com/damarre/xero/blob/main/misc/result.png?raw=true)


# # APPIUM WebdriverIO

This project is an automated testing setup for a mobile application using WebdriverIO and Appium. It includes sample login tests and dashboard reset functionality.

## Prerequisites

Ensure you have the following installed on your system:
- Node.js (version 20.0.0 or higher)
- npm (comes with Node.js)
- Appium server
- chatGPT api key

Install the necessary dependencies by running:

`npm install`

Add your gptKey:

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


Run the test:

`npm run ai.login`

Reset dashboard:

`npm run reset`
