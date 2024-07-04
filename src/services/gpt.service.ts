require('dotenv').config();
var fs = require('fs');
import OpenAI from "openai";

const openai = new OpenAI();


// function to encode file data to base64 encoded string
const base64Encode = (file) => {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}

const base64str = base64Encode('src/services/cat.jpg');

export class GPT {
  static async testRequest() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": "Wha is the core object in this image? Return ONLY that word but in Spanish"
            },
            {
              "type": "image_url",
              "image_url": {
                "url": `data:image/jpeg;base64,${base64str}`
              }
            }
          ]
        }
        ],
      model: "gpt-4o"
    })
    console.log("Result =>", completion.choices[0])
  }
}