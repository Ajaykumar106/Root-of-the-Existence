import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ error: "Prompt is required." }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if the user hasn't added their API key yet
    if (!apiKey || apiKey === "your_key_here") {
      return NextResponse.json({ 
        response: "COSMOS AI is currently offline. Please add your GEMINI_API_KEY to the Vercel environment variables to establish the neural link. \n\n*Mind-expanding fact: The universe is currently expanding at approximately 73 kilometers per second per megaparsec.*" 
      });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash",
      systemInstruction: "You are COSMOS, the AI guide for root of existence - a digital space museum. Answer questions about space, astronomy, cosmology, and the universe. Be precise but poetic. Write like Carl Sagan. Keep answers under 150 words unless the user asks for more. Never say 'great question'. Always end with one mind-expanding fact."
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ response: text });

  } catch (error) {
    console.error("AI Chatbot Error:", error);
    return NextResponse.json({ error: "Failed to communicate with COSMOS." }, { status: 500 });
  }
}
