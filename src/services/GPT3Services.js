import {Configuration, OpenAIApi} from 'openai';

// Configure the OpenAI API with your API key
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create an instance of the OpenAIApi using the configuration
const openai = new OpenAIApi(configuration);

export default async function getGPT3Response(userMessage) {
  try {
    const response = await openai.createCompletion({
      engine: 'text-davinci-002',
      prompt: userMessage,
      max_tokens: 50,
    });

    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error communicating with GPT-3.5:', error);
    return 'Sorry, I encountered an error.';
  }
}
