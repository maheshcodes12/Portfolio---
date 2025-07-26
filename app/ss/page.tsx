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
		</main>
	);
}
