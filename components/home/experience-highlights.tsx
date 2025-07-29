import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Award, Users } from "lucide-react";

export default function ExperienceHighlights() {
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

	return (
		<section className='max-w-6xl mx-auto'>
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
	);
}
