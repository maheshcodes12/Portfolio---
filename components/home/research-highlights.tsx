import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ResearchHighlights() {
	const researchProjects = [
		{
			id: 1,
			title: "Compiler Optimization Research",
			description:
				"Advanced research in compiler optimization techniques and program analysis",
			// period: "2021-Present",
			status: "Ongoing",
			link: "/research/ethical-ai-healthcare",
		},
		{
			id: 2,
			title: "Static Analysis Framework",
			description:
				"Development of novel static analysis techniques for performance optimization",
			status: "Published",
			link: "/research/explainable-ml",
		},
		{
			id: 3,
			title: "Programming Language Design",
			description:
				"Research on domain-specific languages and their compilation strategies",
			status: "In Progress",
			// period: "2017-2019",
			link: "/research/adversarial-attacks",
		},
	];

	return (
		<section className='py-16 px-4 md:px-6 lg:px-8 bg-white'>
			<div className='container mx-auto max-w-6xl'>
				<div className='flex justify-between items-center mb-10'>
					<div>
						<h2 className='text-3xl font-bold text-gray-900 mb-2'>Research</h2>
						<p className='text-lg text-gray-600'>
							Exploring the frontiers of Computer Science and Artificial
							Intelligence
						</p>
					</div>
					<Link
						href='/research'
						className='hidden md:inline-flex items-center text-gray-900 font-medium hover:underline'>
						View All Research <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{researchProjects.map((project) => (
						<div
							key={project.id}
							className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
							<div className='flex justify-between items-start mb-4'>
								<h3 className='text-xl font-semibold text-gray-900'>
									{project.title}
								</h3>
								<Badge
									variant={
										project.status === "Ongoing" ? "outline" : "secondary"
									}>
									{project.status}
								</Badge>
							</div>
							<p className='text-gray-600 mb-4'>{project.description}</p>
							<div className='flex justify-between items-center'>
								{/* <span className='text-sm text-gray-500'>{project.period}</span> */}
								<Link
									href={project.link}
									className='inline-flex items-center text-gray-900 font-medium hover:underline'>
									View Details <ArrowRight className='ml-1 h-4 w-4' />
								</Link>
							</div>
						</div>
					))}
				</div>

				<div className='mt-8 text-center md:hidden'>
					<Link
						href='/research'
						className='inline-flex items-center text-gray-900 font-medium hover:underline'>
						View All Research <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>
			</div>
		</section>
	);
}
