import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const type = searchParams.get("type"); // 'donki', 'horizons', 'apod'
  
  const API_KEY = process.env.NEXT_PUBLIC_NASA_API_KEY || "DEMO_KEY";

  try {
    if (type === "donki") {
      // Fetch solar flares from the last 7 days
      const endDate = new Date().toISOString().split("T")[0];
      const startDate = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];
      
      const res = await fetch(`https://api.nasa.gov/DONKI/FLR?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`, {
        next: { revalidate: 3600 } // Cache for 1 hour
      });
      const data = await res.json();
      return NextResponse.json(data);
    }
    
    if (type === "apod") {
      const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`, {
        next: { revalidate: 43200 } // 12 hours
      });
      const data = await res.json();
      return NextResponse.json(data);
    }

    return NextResponse.json({ error: "Invalid type parameter" }, { status: 400 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch NASA data" }, { status: 500 });
  }
}
