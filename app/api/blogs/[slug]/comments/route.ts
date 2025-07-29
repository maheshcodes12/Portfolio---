import { type NextRequest, NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

export async function POST(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	try {
		const body = await request.json();
		const { name, email, comment } = body;

		const newComment = {
			_id: new ObjectId(),
			name,
			email,
			comment,
			createdAt: new Date(),
		};

		await client.connect();
		const db = client.db("scholar_portfolio");

		const result = await db
			.collection("blogs")
			.updateOne(
				{ slug: params.slug },
				{ $push: { comments: newComment as any } }
			);

		if (result.matchedCount === 0) {
			return NextResponse.json({ error: "Blog not found" }, { status: 404 });
		}

		return NextResponse.json(newComment);
	} catch (error) {
		console.error("Error adding comment:", error);
		return NextResponse.json(
			{ error: "Failed to add comment" },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}

export async function PUT(
	request: NextRequest,
	{ params }: { params: { slug: string } }
) {
	try {
		const body = await request.json();
		const { _id } = body;

		// const newComment = {
		// 	_id: new ObjectId(),
		// 	name,
		// 	email,
		// 	comment,
		// 	createdAt: new Date(),
		// };

		await client.connect();
		const db = client.db("scholar_portfolio");

		const result = await db.collection("blogs").deleteOne({ _id: _id });

		return NextResponse.json({ success: "True" });
	} catch (error) {
		console.error("Error adding comment:", error);
		return NextResponse.json(
			{ error: "Failed to add comment" },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}
