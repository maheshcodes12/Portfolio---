"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageSquare, ThumbsUp } from "lucide-react";
import { useState, useEffect } from "react";

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

export default function BlogHighlights() {
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

	const fetchBlogs = async () => {
		try {
			const response = await fetch("/api/blogs");
			if (response.ok) {
				const blogs = await response.json();
				setBlogPosts(blogs);
			}
		} catch (error) {
			console.error("Error fetching blogs:", error);
		}
	};

	useEffect(() => {
		fetchBlogs();
	}, []);

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<section className='py-16 px-4 md:px-6 lg:px-8 bg-gray-50'>
			<div className='container mx-auto max-w-6xl'>
				<div className='flex justify-between items-center mb-10'>
					<div>
						<h2 className='text-3xl font-bold text-gray-900 mb-2'>Blog</h2>
						<p className='text-lg text-gray-600'>
							Thoughts, insights, and discussions on Computer Science and AI
						</p>
					</div>
					<Link
						href='/blog'
						className='hidden md:inline-flex items-center text-gray-900 font-medium hover:underline'>
						View All Posts <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{blogPosts.map((post) => (
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
									<span>{formatDate(post.createdAt)}</span>
									<span className='mx-2'>•</span>
									<span>{post.readTime}</span>
								</div>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{post.title}
								</h3>
								<p className='text-gray-600 mb-4'>{post.excerpt}</p>
								<div className='flex justify-between items-center'>
									<div className='flex items-center space-x-4 text-gray-500'>
										<div className='flex items-center'>
											<ThumbsUp className='h-4 w-4 mr-1' />
											<span>{post.likes}</span>
										</div>
										<div className='flex items-center'>
											<MessageSquare className='h-4 w-4 mr-1' />
											<span>{post.comments?.length || 0}</span>
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

				<div className='mt-8 text-center md:hidden'>
					<Link
						href='/blog'
						className='inline-flex items-center text-gray-900 font-medium hover:underline'>
						View All Posts <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>
			</div>
		</section>
	);
}
