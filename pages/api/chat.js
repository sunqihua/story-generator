import {NextApiRequest, NextApiResponse} from 'next';
import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || ''
});
export default async function handler(
  req,res
) {
  const {prompt} = req.body;

  if (req.method !== 'POST') {
    return res.status(400).json({error: 'Invalid request'});
  }
console.log("start..");
  const response =await openai.chat.completions.create({
    messages: [{ role: "system", content: "give me around 5 story title and topic is"+prompt }], // Use note directly, no need for props
    model: "gpt-3.5-turbo",
    temperature: 0.6,
    max_tokens: 100,
    n: 1,
  });
  console.log("end..");

  return res.status(200).json({
    data: response.data
  });
}
