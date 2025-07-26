import Image from "next/image";
import { GraduationCap, Building, Award, Users } from "lucide-react";

export default function AboutPage() {
	const education = [
		{
			degree: "Doctor of Philosophy (PhD), Computer Science",
			institution: "University of Utah",
			period: "2013-2020",
			description: "Advisor: Prof. John Regehr",
		},
		{
			degree: "Punjab University",
			institution: "B,Tech, Computer Science",
			period: "2006-2010",
			description: "University Gold Medalist",
		},
	];

	const affiliations = [
		{
			role: "Research Engineer",
			organization: "Microsoft",
			period: "Jul 2021-Present",
			description:
				" Developing a PTX-level equivalence checker to ensure optimized GPU kernels maintain semantic integrity, enhancing code reliability. • Created the LLM-Vectorizer framework, leveraging large language models for verified loop vectorization, contributing to AI-driven compiler optimizations.Published research paper at CGO 2025, showcasing advancements in formal verification and AI-assisted code generation. URL: https://dl.acm.org/doi/10.1145/3696443.3708929",
		},
		{
			role: "SIGPLAN Long-Term Mentor",
			organization: "SIGPLAN",
			period: "Jun 2020-Present",
			description:
				"Working as a long-term SIGPLAN Mentor in the SIGPLAN-M program where I mentor Ph.D. students and software engineers across several countries.",
		},
		{
			role: "Research Intern (Web Assembly)",
			organization: "Mozilla",
			period: "May 2018-Aug 2018",
			description:
				"Worked on using superoptimization technique to implement an automatic peephole optimizer for an open-source JIT compiler, Cranelift. Mentor: Dan Gohman",
		},
		{
			role: "Samsung Research India - Delhi",
			organization: "Mozilla",
			period: "Sept 2011-Aug 2013",
			description:
				"Worked in the Linux Kernel Development Team. The project aimed at the development of partial prelink technique to reduce launch time of web browsing kits in the Samsung Smart TV.",
		},
		{
			role: "Research Fellow",
			organization: "IIT Bombay",
			period: "Jun 2010-July 2011",
			description:
				"Working on implementing the front-end of an extended generic dataflow analyzer (gdfa) in GCC which performs static analysis on programs on the basis of textual specifications.",
		},
		{
			role: "Summer Research Intern",
			organization: "IIT Bombay",
			period: "Jun 2009-Dec 2009",
			description:
				"Worked on specification-based code generation technique. Advisor: Prof. Uday Khedker",
		},
	];

	const interests = [
		"Ai for Compilers",
		"Compilers",
		"Compiler optimizations",
		"Formal Methods",
		"Superoptimization",
	];

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				{/* Hero Section */}
				<div className='flex flex-col md:flex-row gap-8 md:gap-12 mb-16'>
					<div className='flex-1'>
						<h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
							About Me
						</h1>
						<p className='text-xl text-gray-600 mb-6'>
							I am currently working on AI Compilers to generate
							compute-efficient kernels at RiSE group in Microsoft Research. My
							broader research interests are in writing compilers, compilers for
							AI/ML, compiler optimizations, static analysis, superoptimization,
							and verification. Overall, I am excited about improving compiler
							construction by using formal methods, LLMs, etc.
						</p>
						<p className='text-lg text-gray-600 mb-6'>__anything_else__</p>
					</div>
					<div className='flex-1 flex justify-center md:justify-end'>
						<div className='relative w-80 h-80 rounded-lg overflow-hidden shadow-xl'>
							<Image
								src='/juhitaneja.jpeg?height=320&width=320'
								alt='Jubi Taneja'
								fill
								className='object-cover'
								priority
							/>
						</div>
					</div>
				</div>

				{/* Education Section */}
				<section className='mb-16'>
					<div className='flex items-center mb-8'>
						<GraduationCap className='h-8 w-8 text-gray-900 mr-3' />
						<h2 className='text-3xl font-bold text-gray-900'>Education</h2>
					</div>
					<div className='space-y-8'>
						{education.map((edu, index) => (
							<div
								key={index}
								className='border-l-4 border-gray-200 pl-6'>
								<div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
									<h3 className='text-xl font-semibold text-gray-900'>
										{edu.degree}
									</h3>
									<span className='text-gray-600 font-medium'>
										{edu.period}
									</span>
								</div>
								<p className='text-lg text-gray-700 mb-2'>{edu.institution}</p>
								<p className='text-gray-600'>{edu.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Academic Affiliations */}
				<section className='mb-16'>
					<div className='flex items-center mb-8'>
						<Building className='h-8 w-8 text-gray-900 mr-3' />
						<h2 className='text-3xl font-bold text-gray-900'>Experience</h2>
					</div>
					<div className='space-y-8'>
						{affiliations.map((affiliation, index) => (
							<div
								key={index}
								className='border-l-4 border-gray-200 pl-6'>
								<div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
									<h3 className='text-xl font-semibold text-gray-900'>
										{affiliation.role}
									</h3>
									<span className='text-gray-600 font-medium'>
										{affiliation.period}
									</span>
								</div>
								<p className='text-lg text-gray-700 mb-2'>
									{affiliation.organization}
								</p>
								<p className='text-gray-600'>{affiliation.description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Research Interests */}
				<section className='mb-16'>
					<div className='flex items-center mb-8'>
						<Award className='h-8 w-8 text-gray-900 mr-3' />
						<h2 className='text-3xl font-bold text-gray-900'>
							Research Interests
						</h2>
					</div>
					<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
						{interests.map((interest, index) => (
							<div
								key={index}
								className='bg-gray-50 rounded-lg p-4 text-center'>
								<span className='text-gray-800 font-medium'>{interest}</span>
							</div>
						))}
					</div>
				</section>

				{/* Personal Philosophy */}
				{/* <section className='mb-16 bg-gray-50 rounded-lg p-8'>
					<h2 className='text-3xl font-bold text-gray-900 mb-6'>
						Research Philosophy
					</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						<div>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Ethical AI Development
							</h3>
							<p className='text-gray-600'>
								I believe that ethical considerations should be integrated into
								every stage of AI development, from initial design through
								deployment and ongoing monitoring. This includes ensuring
								fairness, transparency, and accountability in AI systems.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Interdisciplinary Collaboration
							</h3>
							<p className='text-gray-600'>
								The most impactful AI research happens at the intersection of
								multiple disciplines. I actively collaborate with healthcare
								professionals, ethicists, policymakers, and social scientists to
								ensure my research addresses real-world needs.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Open Science
							</h3>
							<p className='text-gray-600'>
								I am committed to open science principles, sharing research
								findings, code, and datasets whenever possible to accelerate
								progress in the field and enable reproducible research.
							</p>
						</div>
						<div>
							<h3 className='text-xl font-semibold text-gray-900 mb-4'>
								Education and Mentorship
							</h3>
							<p className='text-gray-600'>
								Teaching and mentoring the next generation of AI researchers is
								crucial for the field's future. I am passionate about creating
								inclusive learning environments and supporting diverse voices in
								AI research.
							</p>
						</div>
					</div>
				</section> */}

				{/* Contact Information */}
				{/* <section className='bg-white border border-gray-200 rounded-lg p-8'>
					<div className='flex items-center mb-6'>
						<Users className='h-8 w-8 text-gray-900 mr-3' />
						<h2 className='text-3xl font-bold text-gray-900'>Let's Connect</h2>
					</div>
					<p className='text-lg text-gray-600 mb-6'>
						I'm always interested in discussing research collaborations,
						speaking opportunities, and ways to advance ethical AI development.
						Feel free to reach out!
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div>
							<h3 className='font-semibold text-gray-900 mb-2'>Office</h3>
							<p className='text-gray-600'>
								Computer Science Building, Room 305
								<br />
								University of Washington
								<br />
								Seattle, WA
							</p>
						</div>
						<div>
							<h3 className='font-semibold text-gray-900 mb-2'>Office Hours</h3>
							<p className='text-gray-600'>
								Tuesday & Thursday: 2:00 PM - 4:00 PM
								<br />
								Or by appointment
							</p>
						</div>
					</div>
				</section> */}
			</div>
		</main>
	);
}
