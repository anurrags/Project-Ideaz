import express from "express";
import env from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
env.config();
// const corsOptions = {
//   origin: "*",
//   methods: "*",
//   allowedHeaders: "*",
// };
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const genAI = new GoogleGenerativeAI("AIzaSyAlJVmsHvzf7_G9NOLeAvDZzodAFHkgZeY");

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/", async (req, res) => {
  const data = req.body;

  const tempQuery = `Please give 4 project ideas using technologies as: ${data.techStacks} and level of project using this tech stacks should be ${data.projectLevel}. Please don't suggest any project using tech stacks not mentioned in this query and this is a very important point. Kindly pay attention to the level of project. The project should be intended for: ${data.audience}. Also provide the example projects similar to the idea you provided which are currently live or may be competitor to your suggested project.
  Return your answer in form of a json object containing fields as:
{result:[{Title:string, Description:string, Features:string[], UseCases:string[], Monetisation_Strategy:string[], Examples:string[],Technologies:string[]}], error: string}
 Write description for atleast 100 words. If anything in above query is missing or undefined, just ignore it and answer in the given format and if you are not able to answer in the given format due to any reason add your message in the error field of json and keep other fields as empty but maintain the message json format or else keep error field as empty.`;

  console.log(`Received request for requestId: ${data.requestId}`, tempQuery);
  try {
    const result: string = await run(tempQuery);
    const text = extractJsonString(result);
    const object = JSON.parse(text);
    res
      .status(200)
      .json({ status: "Success", message: object, requestId: data.requestId });
  } catch (error) {
    console.log(error);
    res.status(201).json({ status: "Failure", message: `${error}` });
  }
});

async function run(query: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(query);
    const response = await result.response;
    const text = response.text();

    return text;
  } catch (error) {
    console.log("Error while generating Output", error);
    return `Error while generating Output ${error}`;
  }
}

function extractJsonString(markdownString: string) {
  const startIndex = markdownString.indexOf("{");
  const endIndex = markdownString.lastIndexOf("}") + 1;

  if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
    const text = markdownString.substring(startIndex, endIndex);
    return text;
  } else {
    throw new Error("Invalid input string format");
  }
}

const PORT = process.env.PORT || 9001;
app.listen(PORT, () => {
  console.log("Server is running");
});
