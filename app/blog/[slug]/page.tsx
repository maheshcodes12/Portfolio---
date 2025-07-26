"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
	Calendar,
	Clock,
	MessageSquare,
	ThumbsUp,
	Share2,
	Copy,
	Check,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import BlogSidebar from "@/components/blog/RightSidebar";

interface BlogPost {
	_id: string;
	title: string;
	content: string;
	image: string;
	tags: string[];
	readTime: string;

	comments: Comment[];
	createdAt: string;
	author: string;
	authorRole: string;
	slug: string;
}

interface Comment {
	_id: string;
	name: string;
	email: string;
	comment: string;
	createdAt: string;
}

export default function BlogPost({ params }: { params: { slug: string } }) {
	const [post, setPost] = useState<BlogPost | null>(null);
	const [loading, setLoading] = useState(true);
	const [liking, setLiking] = useState(false);
	const [commenting, setCommenting] = useState(false);
	const [copied, setCopied] = useState(false);
	const [commentForm, setCommentForm] = useState({
		name: "",
		email: "",
		comment: "",
	});

	useEffect(() => {
		fetchBlog();
	}, [params.slug]);

	const fetchBlog = async () => {
		try {
			const response = await fetch(`/api/blogs/${params.slug}`);
			if (response.ok) {
				const blog = await response.json();
				setPost(blog);
			} else if (response.status === 404) {
				notFound();
			}
		} catch (error) {
			console.error("Error fetching blog:", error);
		} finally {
			setLoading(false);
		}
	};

	const handleComment = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!post || commenting) return;

		setCommenting(true);
		try {
			const response = await fetch(`/api/blogs/${params.slug}/comments`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(commentForm),
			});

			if (response.ok) {
				const newComment = await response.json();
				setPost({
					...post,
					comments: [...post.comments, newComment],
				});
				setCommentForm({ name: "", email: "", comment: "" });
			}
		} catch (error) {
			console.error("Error adding comment:", error);
		} finally {
			setCommenting(false);
		}
	};

	const copyUrl = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (error) {
			console.error("Error copying URL:", error);
		}
	};

	if (loading) {
		return (
			<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
				<div className='container mx-auto max-w-4xl'>
					<div className='text-center'>Loading...</div>
				</div>
			</main>
		);
	}

	if (!post) {
		notFound();
	}

	return (
		<main className='min-h-screen max-w-[80vw] mx-auto py-12 px-4 md:px-6 lg:px-8 flex space-x-2'>
			<div className='container mx-auto max-w-4xl '>
				{/* Header */}
				<div className='mb-8'>
					<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
						{post.title}
					</h1>

					{/* Meta Information */}
					<div className='flex flex-wrap items-center gap-4 text-gray-600 mb-6'>
						<div className='flex items-center'>
							<Calendar className='h-4 w-4 mr-2' />
							<span>{new Date(post.createdAt).toLocaleDateString()}</span>
						</div>
						<div className='flex items-center'>
							<Clock className='h-4 w-4 mr-2' />
							<span>{post.readTime}</span>
						</div>

						<div className='flex items-center'>
							<MessageSquare className='h-4 w-4 mr-2' />
							<span>{post.comments.length} comments</span>
						</div>
					</div>

					{/* Tags */}
					<div className='flex flex-wrap gap-2 mb-6'>
						{post.tags.map((tag, index) => (
							<Badge
								key={index}
								variant='secondary'>
								{tag}
							</Badge>
						))}
					</div>

					{/* Author */}
					<div className='flex items-center gap-4 mb-8'>
						<Avatar className='h-12 w-12'>
							<AvatarImage
								src='/juhitaneja.jpeg?height=48&width=48'
								alt={post.author}
							/>
							<AvatarFallback>AM</AvatarFallback>
						</Avatar>
						<div>
							<p className='font-semibold text-gray-900'>{post.author}</p>
							<p className='text-gray-600'>{post.authorRole}</p>
						</div>
					</div>
				</div>

				{/* Featured Image */}
				<div className='relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden'>
					<Image
						src={post.image || "/placeholder.svg"}
						alt={post.title}
						fill
						className='object-cover'
						priority
					/>
				</div>

				{/* Content */}
				<div className='prose prose-lg prose-gray max-w-none mb-8 prose-headings:text-gray-900 prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-4 prose-h2:mt-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-5 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-strong:text-gray-900 prose-strong:font-semibold prose-em:italic prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-blockquote:border-l-4 prose-blockquote:border-gray-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-ul:list-disc prose-ul:pl-6 prose-ol:list-decimal prose-ol:pl-6 prose-li:mb-2 prose-a:text-blue-600 prose-a:underline hover:prose-a:text-blue-800'>
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						components={{
							h1: ({ children }) => (
								<h1 className='text-3xl font-bold text-gray-900 mb-6 mt-8'>
									{children}
								</h1>
							),
							h2: ({ children }) => (
								<h2 className='text-2xl font-semibold text-gray-900 mb-4 mt-6'>
									{children}
								</h2>
							),
							h3: ({ children }) => (
								<h3 className='text-xl font-semibold text-gray-900 mb-3 mt-5'>
									{children}
								</h3>
							),
							p: ({ children }) => (
								<p className='text-gray-700 leading-relaxed mb-4'>{children}</p>
							),
							strong: ({ children }) => (
								<strong className='font-semibold text-gray-900'>
									{children}
								</strong>
							),
							em: ({ children }) => <em className='italic'>{children}</em>,
							code: ({ children, ...props }) => {
								const isInline = !props.className?.includes("language-");
								return isInline ? (
									<code className='bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800'>
										{children}
									</code>
								) : (
									<code className='block bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto font-mono text-sm'>
										{children}
									</code>
								);
							},
							pre: ({ children }) => (
								<pre className='bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4'>
									{children}
								</pre>
							),
							blockquote: ({ children }) => (
								<blockquote className='border-l-4 border-gray-300 pl-6 italic text-gray-600 mb-4'>
									{children}
								</blockquote>
							),
							ul: ({ children }) => (
								<ul className='list-disc pl-6 mb-4 space-y-2'>{children}</ul>
							),
							ol: ({ children }) => (
								<ol className='list-decimal pl-6 mb-4 space-y-2'>{children}</ol>
							),
							li: ({ children }) => (
								<li className='text-gray-700'>{children}</li>
							),
							a: ({ href, children }) => (
								<a
									href={href}
									className='text-blue-600 underline hover:text-blue-800'>
									{children}
								</a>
							),
						}}>
						{post.content}
					</ReactMarkdown>
				</div>

				<Separator className='my-8' />

				{/* Share and Actions */}
				<div className='flex justify-between items-center mb-8'>
					<div className='flex items-center space-x-4'>
						<Button
							variant='outline'
							size='sm'
							className='flex items-center space-x-2 bg-transparent'>
							<MessageSquare className='h-4 w-4' />
							<span>{post.comments.length}</span>
						</Button>
					</div>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant='outline'
								size='sm'
								className='flex items-center space-x-2 bg-transparent'>
								<Share2 className='h-4 w-4' />
								<span>Share</span>
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Share this post</DialogTitle>
							</DialogHeader>
							<div className='flex items-center space-x-2'>
								<Input
									value={
										typeof window !== "undefined" ? window.location.href : ""
									}
									readOnly
								/>
								<Button
									onClick={copyUrl}
									size='sm'>
									{copied ? (
										<Check className='h-4 w-4' />
									) : (
										<Copy className='h-4 w-4' />
									)}
								</Button>
							</div>
						</DialogContent>
					</Dialog>
				</div>

				{/* Comments Section */}
				<div className='space-y-8'>
					<h3 className='text-2xl font-bold text-gray-900'>
						Comments ({post.comments.length})
					</h3>

					{/* Add Comment Form */}
					<form
						onSubmit={handleComment}
						className='space-y-4 bg-gray-50 p-6 rounded-lg'>
						<h4 className='text-lg font-semibold text-gray-900'>
							Leave a Comment
						</h4>
						<div className='text-red-500'>
							*
							<span>
								Name and email are optional — you're welcome to comment
								anonymously
							</span>
						</div>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									value={commentForm.name}
									onChange={(e) =>
										setCommentForm({ ...commentForm, name: e.target.value })
									}
								/>
							</div>
							<div>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									type='email'
									value={commentForm.email}
									onChange={(e) =>
										setCommentForm({ ...commentForm, email: e.target.value })
									}
								/>
							</div>
						</div>
						<div>
							<Label htmlFor='comment'>Comment</Label>
							<Textarea
								id='comment'
								rows={4}
								value={commentForm.comment}
								onChange={(e) =>
									setCommentForm({ ...commentForm, comment: e.target.value })
								}
								required
							/>
						</div>
						<Button
							type='submit'
							disabled={commenting}>
							{commenting ? "Posting..." : "Post Comment"}
						</Button>
					</form>

					{/* Comments List */}
					<div className='space-y-6'>
						{post.comments.map((comment) => (
							<div
								key={comment._id}
								className='border-l-4 border-gray-200 pl-6'>
								<div className='flex items-center gap-3 mb-2'>
									<Avatar className='h-8 w-8'>
										<AvatarFallback>
											{comment.name
												? comment.name.charAt(0).toUpperCase()
												: "a"}
										</AvatarFallback>
									</Avatar>
									<div>
										<p className='font-semibold text-gray-900'>
											{comment.name}
										</p>
										<p className='text-sm text-gray-500'>
											{new Date(comment.createdAt).toLocaleDateString()}
										</p>
									</div>
								</div>
								<p className='text-gray-700'>{comment.comment}</p>
							</div>
						))}
					</div>

					{post.comments.length === 0 && (
						<p className='text-gray-600 text-center py-8'>
							No comments yet. Be the first to comment!
						</p>
					)}
				</div>
			</div>
			<BlogSidebar
				author={post.author}
				tags={post.tags}></BlogSidebar>
		</main>
	);
}
