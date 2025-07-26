"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

import ResearchHighlights from "@/components/home/research-highlights";
import PublicationHighlights from "@/components/home/publication-highlights";
import BlogHighlights from "@/components/home/blog-highlights";
import ProjectHighlights from "@/components/home/projects-highlights";
import ExperienceHighlights from "@/components/home/experience-highlights";
import EducationHighlights from "@/components/home/education-highlights";

export default function Home() {
	const [showStickyNav, setShowStickyNav] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const heroSection = document.getElementById("hero");
			if (!heroSection) return;

			const rect = heroSection.getBoundingClientRect();
			setShowStickyNav(rect.bottom <= 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	};

	const scrollNews = (direction: "left" | "right") => {
		const container = document.getElementById("news-scroll");
		if (!container) return;
		container.scrollBy({
			left: direction === "left" ? -300 : 300,
			behavior: "smooth",
		});
	};

	const newsItems = [
		{
			date: "May 2025",
			text: "Invited to Chair Student Research Competition at CGO 2026",
			image: "/n1.png", // Add actual image path
		},
		{
			date: "March 2025",
			text: "Presented conference talk on LLM-Vectorizer at CGO 2025",
			image: "/n1.png",
		},
		{
			date: "Feb 2025",
			text: "Gave invited LSD seminar at UCSC",
			link: "https://lsd.ucsc.edu/lsd-seminar/2025wi/",
			image: "/n1.png",
		},
	];

	return (
		<main className='min-h-screen scroll-smooth'>
			{/* Hero Section */}
			<section
				id='hero'
				className='py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white'>
				<div className='container mx-auto max-w-6xl'>
					<div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
						<div className='flex-1'>
							<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
								Jubi Taneja
							</h1>
							<h2 className='text-xl md:text-2xl font-medium text-gray-700 mb-6'>
								PhD in Computer Science
							</h2>
							<p className='text-lg text-gray-600 mb-8 max-w-2xl'>
								Specializing in Artificial Intelligence and Machine Learning
								with a focus on ethical implications and applications in
								healthcare.....some text
							</p>
							<div className='flex flex-wrap gap-4'>
								<Link
									href='/contact'
									className='px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors'>
									Contact Me
								</Link>
							</div>
						</div>
						<div className='flex-1 flex justify-center md:justify-end'>
							<div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl'>
								<Image
									src='/juhitaneja.jpeg'
									alt='Dr. Juhi Taneja'
									fill
									className='object-cover'
									priority
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Research Interests Section */}
			<section className='bg-white py-16 px-4 md:px-6 lg:px-8 border-t border-gray-100'>
				<div className='container mx-auto max-w-6xl'>
					<h2 className='text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2'>
						<span className='text-black'>🧪 Research Interests</span>
					</h2>
					<div className='flex flex-wrap gap-4'>
						{[
							"AI for Compilers",
							"Compilers",
							"Compiler optimizations",
							"Formal Methods",
							"Superoptimization",
						].map((interest) => (
							<span
								key={interest}
								className='px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-md shadow-sm'>
								{interest}
							</span>
						))}
					</div>
				</div>
			</section>
			{/* News Section */}
			<section className='bg-gray-50 py-16 px-4 md:px-6 lg:px-8 border-t border-gray-100'>
				<div className='container mx-auto max-w-6xl'>
					<h2 className='text-2xl font-semibold text-gray-900 mb-6'>News</h2>

					<div className='relative'>
						{/* Scrollable area with extra side padding */}
						<div className='relative flex items-center'>
							{/* Left Button (shifted left outside of scroll area) */}
							<button
								onClick={() => scrollNews("left")}
								className='z-10 -ml-6 mr-2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100'>
								←
							</button>

							{/* Scrollable container */}
							<div
								id='news-scroll'
								className='overflow-x-auto scroll-smooth flex gap-6 pb-4 no-scrollbar snap-x snap-mandatory'>
								{newsItems.map((item, index) => (
									<div
										key={index}
										className='w-[400px] snap-start shrink-0 bg-white rounded-lg shadow-md border border-gray-200 p-4'>
										<img
											src={item.image}
											alt='news'
											className='w-full h-36 object-cover rounded-md mb-3'
										/>
										<p className='text-sm text-gray-500 mb-1 font-semibold'>
											{item.date}
										</p>
										<p className='text-gray-800 text-sm'>{item.text}</p>
										{item.link && (
											<a
												href={item.link}
												target='_blank'
												rel='noopener noreferrer'
												className='block mt-2 text-blue-600 text-sm underline'>
												See More
											</a>
										)}
									</div>
								))}
							</div>

							{/* Right Button (shifted right outside of scroll area) */}
							<button
								onClick={() => scrollNews("right")}
								className='z-10 -mr-6 ml-2 bg-white border border-gray-300 rounded-full p-2 shadow hover:bg-gray-100'>
								→
							</button>
						</div>
					</div>
				</div>
			</section>

			{/* Sticky Nav (appears after scrolling) */}
			{showStickyNav && (
				<section className='fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-4xl'>
					<div className='backdrop-blur-md bg-white/80 shadow-lg rounded-full px-4 py-2 border border-gray-200 transition-all duration-300'>
						<nav className='flex justify-center items-center flex-wrap gap-3'>
							{[
								"projects",
								"research",
								"blogs",
								"publications",
								"education",
								"experience",
							].map((section) => (
								<button
									key={section}
									onClick={() => scrollToSection(section)}
									className='px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-black transition-all duration-200 rounded-full'>
									{section.charAt(0).toUpperCase() + section.slice(1)}
								</button>
							))}
						</nav>
					</div>
				</section>
			)}

			{/* Placeholder Sections */}
			<section
				id='projects'
				className='min-h-[80vh] px-6'>
				<ProjectHighlights></ProjectHighlights>
			</section>
			<section
				id='research'
				className='min-h-[80vh] px-6 pt-20'>
				<ResearchHighlights></ResearchHighlights>
			</section>
			<section
				id='blogs'
				className='min-h-[80vh] px-6 pt-20'>
				<BlogHighlights></BlogHighlights>
			</section>
			<section
				id='publications'
				className='min-h-[80vh] px-6 pt-20'>
				<PublicationHighlights></PublicationHighlights>
			</section>
			<section
				id='education'
				className='min-h-[50vh] px-6 pt-20'>
				<EducationHighlights></EducationHighlights>
			</section>
			<section
				id='experience'
				className='min-h-[80vh] px-6 pt-32 pb-40'>
				<ExperienceHighlights></ExperienceHighlights>
			</section>
			<section className='py-16 bg-gray-50 text-center'>
				<h2 className='text-2xl font-semibold text-gray-900 mb-4'>
					Get in Touch
				</h2>
				<p className='text-gray-600 text-sm mb-1'>
					Interested in collaborations, speaking engagements, or research
					inquiries?
				</p>
				<p className='text-gray-600 text-sm mb-6'>Feel free to reach out.</p>

				<Link
					href='/contact'
					className='inline-block px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-full shadow hover:bg-blue-700 transition'>
					Contact Me
				</Link>
			</section>
		</main>
	);
}
