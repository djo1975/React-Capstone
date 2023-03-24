import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-KvN1DXN2S3MJ7mu6CyKLPqIs',
  apiKey: process.env.sk - Ozt60EPpHZrJGBrwvBBUT3BlbkFJg3H3wWHWIDjkygEMC1UZ,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
