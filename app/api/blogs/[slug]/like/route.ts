import { type NextRequest, NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export async function POST(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	try {
		await client.connect();
		const db = client.db("scholar_portfolio");

		const result = await db
			.collection("blogs")
			.updateOne({ slug: params.slug }, { $inc: { likes: 1 } });

		if (result.matchedCount === 0) {
			return NextResponse.json({ error: "Blog not found" }, { status: 404 });
		}

		const updatedBlog = await db
			.collection("blogs")
			.findOne({ slug: params.slug });

		return NextResponse.json({ likes: updatedBlog?.likes });
	} catch (error) {
		console.error("Error liking blog:", error);
		return NextResponse.json({ error: "Failed to like blog" }, { status: 500 });
	} finally {
		await client.close();
	}
}
