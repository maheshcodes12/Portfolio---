// app/api/scholar/route.js
import { NextResponse } from "next/server";

export async function GET(req) {
	// const { searchParams } = new URL(req.url);
	const scholarId = "JT_vMF4AAAAJ";
	const apiKey =
		"bfbce4c1f80c9bb21fea26e0254d18b1522b47af0c2bde0120e488fc84470040";

	if (!scholarId || !apiKey) {
		return NextResponse.json(
			{ error: "Missing scholarId or API key" },
			{ status: 400 }
		);
	}

	try {
		const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${scholarId}&api_key=${apiKey}`;
		const res = await fetch(url);
		const data = await res.json();

		return NextResponse.json({
			profile: data.author,
			publications: data.articles || [],
		});
	} catch (err) {
		console.error("SerpAPI fetch failed:", err);
		return NextResponse.json(
			{ error: "Failed to fetch scholar data" },
			{ status: 500 }
		);
	}
}
