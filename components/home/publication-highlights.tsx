import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PublicationHighlights() {
	const publications = [
		{
			id: 1,
			title: "Souper: A synthesizing superoptimizer",
			journal: "arXiv preprint arXiv:1711.04422",
			tags: ["82 citations"],
			link: "/publications/ethical-considerations",
		},
		{
			id: 2,
			title:
				"Souper: a synthesizing superoptimizer. CoRR abs/1711.04422 (2017)",
			journal: "arXiv preprint arXiv:1711.04422",
			tags: ["13 citations"],
			link: "/publications/explainable-ml-clinical",
		},
		{
			id: 3,
			title:
				"ClassInvGen: Class Invariant Synthesis using Large Language Models",
			journal: "arXiv preprint arXiv:2502.18917",
			tags: ["1 citations"],
			link: "/publications/defending-neural-networks",
		},
	];

	const conferencePapers = [
		{
			id: 1,
			title: "Privacy-Preserving Techniques for Medical NLP Systems",
			conference:
				"Proceedings of the International Conference on Natural Language Processing (ICNLP 2022)",
			tags: ["NLP", "Healthcare", "Privacy"],
			link: "/publications/privacy-preserving-nlp",
		},
		{
			id: 2,
			title:
				"Towards More Interpretable Deep Learning Models in Clinical Settings",
			conference: "Proceedings of the Conference on AI in Medicine (AIM 2020)",
			tags: ["Deep Learning", "Healthcare"],
			link: "/publications/interpretable-deep-learning",
		},
	];

	return (
		<section className='py-16 px-4 md:px-6 lg:px-8 bg-white'>
			<div className='container mx-auto max-w-6xl'>
				<div className='flex justify-between items-center mb-10'>
					<div>
						<h2 className='text-3xl font-bold text-gray-900 mb-2'>
							Publications
						</h2>
						<p className='text-lg text-gray-600'>
							Peer-reviewed journals and conference papers
						</p>
					</div>
					<Link
						href='/papers'
						className='hidden md:inline-flex items-center text-gray-900 font-medium hover:underline'>
						View All Publications <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>

				<div className='space-y-12'>
					{/* Journal Articles */}
					<div className='space-y-6'>
						{publications.map((pub) => (
							<div
								key={pub.id}
								className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
								<h3 className='text-xl font-semibold text-gray-900 mb-2'>
									{pub.title}
								</h3>
								<p className='text-gray-600 mb-4'>{pub.journal}</p>
								<div className='flex flex-wrap gap-2 mb-4'>
									{pub.tags.map((tag, index) => (
										<Badge
											key={index}
											variant='secondary'>
											{tag}
										</Badge>
									))}
								</div>
								<Link
									href={pub.link}
									className='inline-flex items-center text-gray-900 font-medium hover:underline'>
									Read More <ArrowRight className='ml-1 h-4 w-4' />
								</Link>
							</div>
						))}
					</div>

					{/* Conference Papers */}
					{/* <div>
						<h3 className='text-xl font-semibold text-gray-900 mb-6'>
							Conference Papers
						</h3>
						<div className='space-y-6'>
							{conferencePapers.map((paper) => (
								<div
									key={paper.id}
									className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										{paper.title}
									</h3>
									<p className='text-gray-600 mb-4'>{paper.conference}</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{paper.tags.map((tag, index) => (
											<Badge
												key={index}
												variant='secondary'>
												{tag}
											</Badge>
										))}
									</div>
									<Link
										href={paper.link}
										className='inline-flex items-center text-gray-900 font-medium hover:underline'>
										Read More <ArrowRight className='ml-1 h-4 w-4' />
									</Link>
								</div>
							))}
						</div>
					</div> */}
				</div>

				<div className='mt-8 text-center md:hidden'>
					<Link
						href='/publications'
						className='inline-flex items-center text-gray-900 font-medium hover:underline'>
						View All Publications <ArrowRight className='ml-2 h-4 w-4' />
					</Link>
				</div>
			</div>
		</section>
	);
}
