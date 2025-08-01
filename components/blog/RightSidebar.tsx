"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface BlogPost {
	_id: string;
	title: string;
	slug: string;
	createdAt: string;
	tags: string[];
}

export default function BlogSidebar({ author, tags }: any) {
	const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
	const [loading, setLoading] = useState(true);
	const searchParams = useSearchParams();
	const activeTag = searchParams.get("tag");

	useEffect(() => {
		const fetchBlogs = async () => {
			try {
				const response = await fetch("/api/blogs");
				if (response.ok) {
					const blogs = await response.json();
					setBlogPosts(blogs);
				}
			} catch (error) {
				console.error("Error fetching blogs:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchBlogs();
	}, []);

	const getUniqueTags = () => {
		return [...new Set(tags)].sort();
	};

	const getArchives = () => {
		const months = blogPosts.map((post) => {
			const date = new Date(post.createdAt);
			return `${date.toLocaleString("default", {
				month: "long",
			})} ${date.getFullYear()}`;
		});
		return [...new Set(months)];
	};

	const recentPosts = blogPosts.slice(0, 5);

	return (
		<aside className='w-full lg:w-1/3 lg:pl-8 mt-12 lg:mt-0 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0'>
			<div className='space-y-8 text-sm'>
				{/* Contributors */}
				<div>
					<h2 className='font-semibold text-gray-800 mb-2 text-nowrap'>
						CONTRIBUTORS
					</h2>
					<p className='text-gray-600 text-nowrap'>{author}</p>
				</div>

				{/* Tags */}
				<div>
					<h2 className='font-semibold text-gray-800 mb-2'>TAGS</h2>
					<div className="flex flex-wrap gap-1">
						{getUniqueTags().map((tag: any) => (
							<Link
								key={tag}
								href={`/blog?tag=${encodeURIComponent(tag)}`}
								className={`inline-block text-xs px-2 py-1 rounded transition-colors cursor-pointer ${
									activeTag === tag
										? 'bg-blue-500 text-white'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
								}`}>
								{tag}
							</Link>
						))}
					</div>
				</div>

				{/* Recent Posts */}
				<div>
					<h2 className='font-semibold text-gray-800 mb-2'>RECENT POSTS</h2>
					<ul className='text-gray-600 space-y-1 w-full text-nowrap'>
						{recentPosts.map((post) => (
							<li key={post._id}>
								<Link
									href={`/blog/${post.slug}`}
									className='hover:underline text-sm text-black'>
									{post.title}
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Archives */}
				<div>
					<h2 className='font-semibold text-gray-800 mb-2'>ARCHIVES</h2>
					<ul className='text-gray-600 space-y-1'>
						{getArchives().map((month, idx) => (
							<li
								key={idx}
								className='text-sm text-nowrap'>
								<Link
									href={`/blog?archive=${encodeURIComponent(month)}`}
									className='hover:underline text-blue-600'>
									{month}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
}