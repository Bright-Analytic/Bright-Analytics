import axios from "axios";
import * as cheerio from "cheerio";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const payload = await request.json();
  if (!payload.url) {
    return NextResponse.json(
      { success: false, message: "Payload has no url property." },
      { status: 400 },
    );
  }
  try {
    const response = await axios.get(payload.url);
    const $ = cheerio.load(response.data);
    const scriptExists =
      $(`script[src="https://scripts.adityasharma.live/script.js"]`).length > 0;
    return NextResponse.json(
      {
        success: true,
        message: scriptExists ? "Script installed." : "Not installed yet.",
        data: {
          scriptExists,
        },
      },
      { status: 200 },
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 400 },
    );
  }
}
