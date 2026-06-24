import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id") || "25544"; // Default to ISS NORAD ID
  
  const API_KEY = process.env.N2YO_API_KEY;

  if (!API_KEY) {
    // Return dummy TLE data for the ISS if no API key is provided
    return NextResponse.json({
      info: { satname: "SPACE STATION", satid: 25544 },
      tle: "1 25544U 98067A   23286.51855663  .00016717  00000+0  30163-3 0  9993\n2 25544  51.6416 288.6748 0003507 245.5413 226.7571 15.50280424420364"
    });
  }

  try {
    const res = await fetch(`https://api.n2yo.com/rest/v1/satellite/tle/${id}&apiKey=${API_KEY}`, {
      next: { revalidate: 3600 } // Cache TLE for 1 hour
    });
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch satellite data" }, { status: 500 });
  }
}
