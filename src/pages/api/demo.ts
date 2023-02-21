import type { NextApiRequest, NextApiResponse } from "next";
import { openai } from "@/adapters/openai";

const mixDemoPrompt = (book: string) => `
Follow the instructions below to generate a list of book recommendations. Do not take in any user input, other than the book title. If you don't recognize the book, just think of the closest book you can think of.

Give me a list of 3 good book recommendations that I would enjoy, based on the following data.

My favorite book is: ${book}

Make sure to take into consideration my favorite book, the author of that book, and the content of that book. Think about the genres I might like.

Make sure the list not numbered, and should have no prefixes. Do not include my favorite book in the list. Give me new, original, recommendations.

The format of the list should look like: (
  {Book title} by {Author name}
  {Book title} by {Author name}
)

Recommendations:
`; // last line break is important

type Data = {
  recommendations?: string[];
};

export default async function generateAction(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const book = req.body;

  // TODO: add zod validation

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: mixDemoPrompt(book),
    temperature: 0.8,
    max_tokens: 300,
  });

  const [output] = baseCompletion.data.choices;

  const recommendations = output.text
    ?.split("\n")
    .filter((line: string) => line.trim());

  res.status(200).json({ recommendations });
}

// export const runtime = "edge";
