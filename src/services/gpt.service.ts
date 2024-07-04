require('dotenv').config();
import OpenAI from "openai";

const openai = new OpenAI();

export class GPT {
  static async testRequest() {
    const completion = await openai.chat.completions.create({
      messages: [
          { "role": "assistant", "content": "Describe Gareth Southgates management style in 5 words"},
        ],
      model: "gpt-3.5-turbo"
    })
    console.log("Result =>", completion.choices[0])
  }
}