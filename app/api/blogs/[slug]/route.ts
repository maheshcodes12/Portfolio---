import { type NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export async function GET(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	try {
		await client.connect();
		const db = client.db("scholar_portfolio");
		const params_slug = await params.slug;
		const blog = await db.collection("blogs").findOne({ slug: params.slug });

		if (!blog) {
			return NextResponse.json({ error: "Blog not found" }, { status: 404 });
		}

		return NextResponse.json(blog);
	} catch (error) {
		console.error("Error fetching blog:", error);
		return NextResponse.json(
			{ error: "Failed to fetch blog" },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}
