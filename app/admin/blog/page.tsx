"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
	_id: string;
	title: string;
	excerpt: string;
	slug: string;
	image: string;
	tags: string[];
	readTime: string;
	likes: number;
	comments: any[];
	createdAt: string;
}

export default function BlogPage() {
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
	const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetchBlogs();
	}, []);

	const fetchBlogs = async () => {
		try {
			const response = await fetch("/api/blogs");
			if (response.ok) {
				const blogs = await response.json();
				setBlogPosts(blogs);
				setFilteredPosts(blogs); // Initialize filtered list
			}
		} catch (error) {
			console.error("Error fetching blogs:", error);
		} finally {
			setLoading(false);
		}
	};

	// Search effect
	useEffect(() => {
		const query = searchQuery.toLowerCase();
		const filtered = blogPosts.filter((post) => {
			const titleMatch = post.title.toLowerCase().includes(query);
			const tagMatch = post.tags.some((tag) =>
				tag.toLowerCase().includes(query)
			);
			const dateMatch = new Date(post.createdAt)
				.toLocaleDateString()
				.toLowerCase()
				.includes(query);

			return titleMatch || tagMatch || dateMatch;
		});
		setFilteredPosts(filtered);
	}, [searchQuery, blogPosts]);

	if (loading) {
		return (
			<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
				<div className='container mx-auto max-w-6xl'>
					<div className='text-center'>Loading blogs...</div>
				</div>
			</main>
		);
	}

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				{/* Header */}
				<div className='mb-10'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>Blog</h1>
					<p className='text-xl text-gray-600 max-w-3xl'>
						Thoughts, insights, and discussions on Computer Science, Artificial
						Intelligence, and their impact on society and healthcare.
					</p>
				</div>

				{/* Search */}
				<div className='flex flex-col sm:flex-row items-center gap-4 mb-8'>
					<input
						type='text'
						placeholder='Search by title, tag, or date'
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className='w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
					/>
					<Search className='border-2 p-4 rounded-md'></Search>
				</div>

				{/* Blog Posts */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{filteredPosts.map((post) => (
						<div
							key={post._id}
							className='border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow'>
							<div className='relative h-48'>
								<Image
									src={post.image || "/placeholder.svg"}
									alt={post.title}
									fill
									className='object-cover'
								/>
							</div>
							<div className='p-6'>
								<div className='flex items-center text-sm text-gray-500 mb-3'>
									<span>{new Date(post.createdAt).toLocaleDateString()}</span>
									<span className='mx-2'>•</span>
									<span>{post.readTime}</span>
								</div>
								<h2 className='text-2xl font-semibold text-gray-900 mb-2'>
									{post.title}
								</h2>
								<p className='text-gray-600 mb-4'>{post.excerpt}</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{post.tags.map((tag, index) => (
										<Badge
											key={index}
											variant='secondary'>
											{tag}
										</Badge>
									))}
								</div>
								<div className='flex justify-between items-center'>
									<div className='flex items-center space-x-4 text-gray-500'>
										<div className='flex items-center'>
											<MessageSquare className='h-4 w-4 mr-1' />
											<span>{post.comments.length}</span>
										</div>
									</div>
									<Link
										href={`/blog/${post.slug}`}
										className='text-gray-900 font-medium hover:underline'>
										Read More
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{filteredPosts.length === 0 && (
					<div className='text-center py-12'>
						<p className='text-gray-600'>No blog posts found.</p>
					</div>
				)}
			</div>
		</main>
	);
}
