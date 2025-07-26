"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const StickySection = () => {
	const sectionRef = useRef(null);
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsSticky(!entry.isIntersecting);
			},
			{ threshold: 0 }
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			if (sectionRef.current) {
				observer.unobserve(sectionRef.current);
			}
		};
	}, []);

	return (
		<>
			<div ref={sectionRef}></div> {/* Marker */}
			<section
				className={`bg-white border-y border-gray-200 transition-all duration-200 z-50 ${
					isSticky ? "fixed top-0 left-0 w-full shadow" : "relative"
				}`}>
				{/* Your section content here */}
				<section className='py-16 px-4 md:px-6 lg:px-8 bg-gray-50'>
					<div className='container mx-auto max-w-6xl'>
						<div className='flex flex-col md:flex-row gap-8 md:gap-12 items-center'>
							<div className='flex-1'>
								<h2 className='text-3xl font-bold text-gray-900 mb-6'>
									About Me
								</h2>
								<p className='text-lg text-gray-600 mb-6'>
									I am currently working on AI Compilers to generate
									compute-efficient kernels at RiSE group in Microsoft Research.
									My broader research interests are in writing compilers,
									compilers for AI/ML, compiler optimizations, static analysis,
									superoptimization, and verification. Overall, I am excited
									about improving compiler construction by using formal methods,
									LLMs, etc.
								</p>
								<Link
									href='/about'
									className='inline-flex items-center text-gray-900 font-medium hover:underline'>
									Learn more about me <ArrowRight className='ml-2 h-4 w-4' />
								</Link>
							</div>
							<div className='flex-1 flex justify-center md:justify-end'>
								<div className='relative w-full max-w-md h-64 rounded-lg overflow-hidden shadow-lg'>
									<Image
										src='/placeholder.svg?height=256&width=512'
										alt='About Jubi'
										fill
										className='object-cover'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Contact Preview */}
				<section className='py-16 px-4 md:px-6 lg:px-8 bg-white'>
					<div className='container mx-auto max-w-6xl text-center'>
						<h2 className='text-3xl font-bold text-gray-900 mb-4'>
							Get in Touch
						</h2>
						<p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
							Interested in collaborations, speaking engagements, or research
							inquiries? Feel free to reach out.
						</p>
						<Link
							href='/contact'
							className='px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors inline-block'>
							Contact Me
						</Link>
					</div>
				</section>
				<div className='max-w-6xl mx-auto p-4'>Sticky/Original Section</div>
			</section>
		</>
	);
};

export default StickySection;
