import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

function generateSlug(title) {
	return title
		.toLowerCase()
		.replace(/[^a-z0-9 -]/g, "")
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.trim();
}

export async function GET() {
	try {
		await client.connect();
		const db = client.db("scholar_portfolio");
		const blogs = await db
			.collection("blogs")
			.find({})
			.sort({ createdAt: -1 })
			.toArray();

		return NextResponse.json(blogs);
	} catch (error) {
		console.error("Error fetching blogs:", error);
		return NextResponse.json(
			{ error: "Failed to fetch blogs" },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}

export async function POST(request) {
	try {
		const body = await request.json();
		const {
			title,
			excerpt,
			content,
			tags,
			image,
			readTime,
			mediaType,
			mediaUrl,
		} = body;

		const slug = generateSlug(title);

		const blogPost = {
			title,
			excerpt,
			content,
			tags,
			image: image || "/placeholder.svg?height=400&width=800",
			mediaType,
			mediaUrl,
			readTime,
			slug,
			author: "Jubi Taneja",
			authorRole: "Research Engineer at Microsoft Research",
			likes: 0,
			comments: [],
			createdAt: new Date(),
			updatedAt: new Date(),
		};

		await client.connect();
		const db = client.db("scholar_portfolio");
		const result = await db.collection("blogs").insertOne(blogPost);

		return NextResponse.json({ ...blogPost, _id: result.insertedId });
	} catch (error) {
		console.error("Error creating blog:", error);
		return NextResponse.json(
			{ error: "Failed to create blog" },
			{ status: 500 }
		);
	} finally {
		await client.close();
	}
}
