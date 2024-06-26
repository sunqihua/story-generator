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
  const response =await openai.chat.completions.create({
    messages: [{ role: "system", content: "give me around 5 story title based on"+prompt+"separate by <br />" }], // Use note directly, no need for props
    model: "gpt-3.5-turbo",
    temperature: 0.6,
    max_tokens: 400,
    n: 1,
  });
  const content = response.choices[0].message.content;
  console.log(JSON.stringify(response));
  console.log("end.."+response.data);
  console.log("hi"+content);

  return res.status(200).json({
    data: content
  });
}
