"use client";

import type React from "react";

import { useState } from "react";
import {
	Mail,
	MapPin,
	Clock,
	Github,
	Linkedin,
	Twitter,
	Loader,
	GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [loading, setIsLoading] = useState(false);

	// const handleSubmit = (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	// Handle form submission here
	// 	console.log("Form submitted:", formData);
	// 	// Reset form
	// 	setFormData({ name: "", email: "", subject: "", message: "" });
	// };

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		// setStatusMessage(null); // Clear previous messages
		// setIsError(false);      // Clear previous error state

		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				// setStatusMessage('Message sent successfully! We will get back to you soon.');
				setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
			} else {
				const errorData = await response.json();
				// setStatusMessage(errorData.message || 'Failed to send message. Please try again.');
				// setIsError(true);
			}
		} catch (error) {
			console.error("Submission error:", error);
			//   setStatusMessage('An unexpected error occurred. Please try again later.');
			//   setIsError(true);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				<div className='mb-10'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>Contact Me</h1>
					<p className='text-xl text-gray-600 max-w-3xl'>
						Get in touch for collaborations, speaking engagements, or research
						inquiries.
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-1 gap-12'>
					{/* Contact Form */}
					{/* <div className='bg-white border border-gray-200 rounded-lg p-8'>
						<h2 className='text-2xl font-semibold text-gray-900 mb-6'>
							Send a Message
						</h2>
						<form
							onSubmit={handleSubmit}
							className='space-y-6'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<Input
									id='name'
									name='name'
									type='text'
									value={formData.name}
									onChange={handleChange}
									required
									className='mt-1'
								/>
							</div>

							<div>
								<Label htmlFor='email'>Email</Label>
								<Input
									id='email'
									name='email'
									type='email'
									value={formData.email}
									onChange={handleChange}
									required
									className='mt-1'
								/>
							</div>

							<div>
								<Label htmlFor='subject'>Subject</Label>
								<Input
									id='subject'
									name='subject'
									type='text'
									value={formData.subject}
									onChange={handleChange}
									required
									className='mt-1'
								/>
							</div>

							<div>
								<Label htmlFor='message'>Message</Label>
								<Textarea
									id='message'
									name='message'
									rows={6}
									value={formData.message}
									onChange={handleChange}
									required
									className='mt-1'
								/>
							</div>

							{loading ? (
								<Button
									type='submit'
									className='w-full'>
									Sending <Loader></Loader>
								</Button>
							) : (
								<Button
									type='submit'
									className='w-full'>
									Send Message
								</Button>
							)}
						</form>
					</div> */}

					{/* Contact Information */}
					<div className='space-y-8'>
						{/* Contact Details */}
						<div className='bg-gray-50 rounded-lg p-8'>
							<h2 className='text-2xl font-semibold text-gray-900 mb-6'>
								Contact Information
							</h2>

							<div className='space-y-6'>
								<div className='flex items-start'>
									<Mail className='h-6 w-6 text-gray-600 mr-4 mt-1' />
									<div>
										<h3 className='font-semibold text-gray-900'>Email</h3>
										<p className='text-gray-600'>jubitaneja@gmail.com</p>
									</div>
								</div>

								<div className='flex items-start'>
									{/* <MapPin className='h-6 w-6 text-gray-600 mr-4 mt-1' />
									 */}
									<Clock className='h-6 w-6 text-gray-600 mr-4 mt-1' />

									<div>
										<h3 className='font-semibold text-gray-900'>
											Office Hours
										</h3>
										<p className='text-gray-600'>
											1 pm to 3 pm Pacific time
											<br />
											Email me and we can schedule a time to chat.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Social Media */}
						<div className='bg-white border border-gray-200 rounded-lg p-8'>
							<h2 className='text-2xl font-semibold text-gray-900 mb-6'>
								Connect Online
							</h2>

							<div className='flex space-x-4'>
								{/* GitHub */}
								<a
									href='https://github.com/jubitaneja'
									target='_blank'
									rel='noopener noreferrer'
									className='group relative flex items-center justify-center w-12 h-12 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors'>
									<Github className='h-6 w-6' />
									<span className='absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-black px-2 py-1 rounded'>
										GitHub
									</span>
								</a>

								{/* LinkedIn */}
								<a
									href='https://linkedin.com/in/jubitaneja'
									target='_blank'
									rel='noopener noreferrer'
									className='group relative flex items-center justify-center w-12 h-12 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors'>
									<Linkedin className='h-6 w-6' />
									<span className='absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-blue-700 px-2 py-1 rounded'>
										LinkedIn
									</span>
								</a>

								{/* Google Scholar */}
								<a
									href='https://scholar.google.com/citations?view_op=list_works&hl=en&hl=en&user=_0828QEAAAAJ'
									target='_blank'
									rel='noopener noreferrer'
									className='group relative flex items-center justify-center w-12 h-12 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors'>
									<GraduationCap className='h-6 w-6' />
									<span className='absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-indigo-600 px-2 py-1 rounded'>
										Google Scholar
									</span>
								</a>

								{/* Twitter/X */}
								<a
									href='https://x.com/jubitaneja'
									target='_blank'
									rel='noopener noreferrer'
									className='group relative flex items-center justify-center w-12 h-12 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1A91DA] transition-colors'>
									<Twitter className='h-6 w-6' />
									<span className='absolute bottom-full mb-2 hidden group-hover:block text-xs text-white bg-[#1DA1F2] px-2 py-1 rounded'>
										Twitter / X
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
