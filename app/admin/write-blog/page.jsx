"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X, Plus } from "lucide-react";

export default function WriteBlogPage() {
	const router = useRouter();
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const [blogData, setBlogData] = useState({
		title: "",
		excerpt: "",
		content: "",
		tags: [],
		image: "",
		readTime: "",
		mediaType: "",
		mediaUrl: "",
	});

	const [newTag, setNewTag] = useState("");

	const handleAuth = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Simple hardcoded password check
		if (password === "admin123") {
			setIsAuthenticated(true);
		} else {
			alert("Invalid password");
		}

		setIsLoading(false);
	};

	const addTag = () => {
		if (newTag.trim() && !blogData.tags.includes(newTag.trim())) {
			setBlogData({
				...blogData,
				tags: [...blogData.tags, newTag.trim()],
			});
			setNewTag("");
		}
	};

	const removeTag = (tagToRemove) => {
		setBlogData({
			...blogData,
			tags: blogData.tags.filter((tag) => tag !== tagToRemove),
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		try {
			const response = await fetch("/api/blogs", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(blogData),
			});

			if (response.ok) {
				const result = await response.json();
				alert("Blog published successfully!");
				router.push(`/blog/${result.slug}`);
			} else {
				alert("Failed to publish blog");
			}
		} catch (error) {
			console.error("Error publishing blog:", error);
			alert("Error publishing blog");
		}

		setIsLoading(false);
	};

	if (!isAuthenticated) {
		return (
			<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8 flex items-center justify-center'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle>Admin Authentication</CardTitle>
					</CardHeader>
					<CardContent>
						<form
							onSubmit={handleAuth}
							className='space-y-4'>
							<div>
								<Label htmlFor='password'>Password</Label>
								<Input
									id='password'
									type='password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<Button
								type='submit'
								className='w-full'
								disabled={isLoading}>
								{isLoading ? "Authenticating..." : "Login"}
							</Button>
						</form>
					</CardContent>
				</Card>
			</main>
		);
	}

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-4xl'>
				<div className='mb-8'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Write New Blog Post
					</h1>
					<p className='text-gray-600'>
						Create and publish a new blog post with markdown support.
					</p>
				</div>

				<form
					onSubmit={handleSubmit}
					className='space-y-6'>
					<div>
						<Label htmlFor='title'>Title</Label>
						<Input
							id='title'
							value={blogData.title}
							onChange={(e) =>
								setBlogData({ ...blogData, title: e.target.value })
							}
							required
							className='mt-1'
						/>
					</div>

					<div>
						<Label htmlFor='excerpt'>Excerpt</Label>
						<Textarea
							id='excerpt'
							value={blogData.excerpt}
							onChange={(e) =>
								setBlogData({ ...blogData, excerpt: e.target.value })
							}
							required
							rows={3}
							className='mt-1'
						/>
					</div>

					<div>
						<label
							htmlFor='mediaType'
							className='block text-sm font-medium text-gray-700'>
							Featured Media Type
						</label>
						<select
							id='mediaType'
							value={blogData.mediaType}
							onChange={(e) =>
								setBlogData({ ...blogData, mediaType: e.target.value })
							}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'>
							<option value='image'>Image</option>
							<option value='video'>Video</option>
						</select>
					</div>

					<div>
						<label
							htmlFor='mediaUrl'
							className='block text-sm font-medium text-gray-700'>
							Featured {blogData.mediaType === "image" ? "Image" : "Video"} URL
						</label>
						<input
							id='mediaUrl'
							value={blogData.mediaUrl}
							onChange={(e) =>
								setBlogData({ ...blogData, mediaUrl: e.target.value })
							}
							placeholder={`https://example.com/${blogData.mediaType === "image" ? "image.jpg" : "video.mp4"}`}
							className='mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
						/>
					</div>

					<div>
						<Label htmlFor='readTime'>Read Time</Label>
						<Input
							id='readTime'
							value={blogData.readTime}
							onChange={(e) =>
								setBlogData({ ...blogData, readTime: e.target.value })
							}
							placeholder='5 min read'
							required
							className='mt-1'
						/>
					</div>

					<div>
						<Label>Tags</Label>
						<div className='flex gap-2 mt-2 mb-3'>
							<Input
								value={newTag}
								onChange={(e) => setNewTag(e.target.value)}
								placeholder='Add a tag'
								onKeyPress={(e) =>
									e.key === "Enter" && (e.preventDefault(), addTag())
								}
							/>
							<Button
								type='button'
								onClick={addTag}
								size='sm'>
								<Plus className='h-4 w-4' />
							</Button>
						</div>
						<div className='flex flex-wrap gap-2'>
							{blogData.tags.map((tag) => (
								<Badge
									key={tag}
									variant='secondary'
									className='flex items-center gap-1'>
									{tag}
									<X
										className='h-3 w-3 cursor-pointer'
										onClick={() => removeTag(tag)}
									/>
								</Badge>
							))}
						</div>
					</div>

					<div>
						<Label htmlFor='content'>Content (Markdown)</Label>
						<Textarea
							id='content'
							value={blogData.content}
							onChange={(e) =>
								setBlogData({ ...blogData, content: e.target.value })
							}
							required
							rows={20}
							className='mt-1 font-mono'
							placeholder='Write your blog content in markdown...'
						/>
					</div>

					<div className='flex gap-4'>
						<Button
							type='submit'
							disabled={isLoading}>
							{isLoading ? "Publishing..." : "Publish Blog"}
						</Button>
						<Button
							type='button'
							variant='outline'
							onClick={() => router.push("/blog")}>
							Cancel
						</Button>
					</div>
				</form>
			</div>
		</main>
	);
}
