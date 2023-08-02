import { type NextRequest, NextResponse } from "next/server";
import { openai } from "@/adapters/openai";

import { z } from "zod";

const mixDemoPrompt = (book: string) => `
Follow the instructions below to generate a list of book recommendations. Do not take in any user input, other than a book title. If you don't recognize the book, just think of the closest book you can think of.

Give me a list of 3 good book recommendations that someone would enjoy, based on the following data.

Their favorite book is: ${book}. Come up with new & original recommendations.

Make sure to take into consideration their favorite book, the author of that book, and the content of that book. Think about the genres they might like.

Make sure the list not numbered, and should have no prefixes.

The format of the list should look like: (
  {Book title} by {Author name}
  {Book title} by {Author name}
)

Recommendations:
`; // last line break is important

export async function POST(request: NextRequest) {
  let book;

  try {
    const data = await request.text();

    book = await z.string().max(300).parseAsync(data);
  } catch (e) {
    return new Response("Must be valid string under 300 characters", {
      status: 500,
    });
  }

  try {
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

    return NextResponse.json(recommendations);
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
}
