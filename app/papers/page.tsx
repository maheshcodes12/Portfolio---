import { Badge } from "@/components/ui/badge";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PublicationsPage() {
	const conferencePapers = [
		{
			id: 11,
			title:
				"ClassInvGen: Class Invariant Synthesis using Large Language Models",
			conference: "8th International Symposium on AI Verification, SAIV 2025",
			// location: "Toronto, Canada",
			year: 2025,
			authors: [
				"Chuyue Sun",
				"Viraj Agashe",
				"Saikat Chakraborty",
				"Jubi Taneja",
				"Clark Barrett",
				"David Dill",
				"Xiaokang Qiu",
				"Shuvendu K Lahiri",
			],
			awards: [],
			// tags: ["81-93"],
			PDF: "https://arxiv.org/pdf/2502.18917",
			slides: "",
			DOI: "",
			code: "",
		},
		{
			id: 12,
			title: "LLM-Vectorizer: LLM-based Verified Loop Vectorizer",
			conference:
				"Proceedings of the 23rd ACM/IEEE International Symposium on Code Generation and Optimization",
			// location: "Toronto, Canada",
			year: 2020,
			authors: [
				"Jubi Taneja",
				"Avery Laird",
				"Cong Yan",
				"Madan Musuvathi",
				"Shuvendu K Lahiri",
			],
			awards: [],
			// tags: ["81-93"],
			PDF: "https://dl.acm.org/doi/pdf/10.1145/3696443.3708929",
			slides: "/talks/Jubi_LLM_Vectorizer_Talk_ext.pdf",
			DOI: "https://dl.acm.org/doi/10.1145/3696443.3708929",
			code: "",
		},
		{
			id: 13,
			title: "Improving Compiler Construction Using Formal Methods",
			conference: "The University of Utah",
			// location: "Toronto, Canada",
			year: 2025,
			authors: ["Jubi Taneja"],
			awards: [],
			// tags: ["81-93"],
			PDF: "https://github.com/jubitaneja/phd-dissertation/blob/main/dissertation.pdf",
			slides:
				"",
			DOI: "https://dl.acm.org/doi/abs/10.5555/AAI30241036",
			code: "",
		},
		{
			id: 14,
			title: "Testing static analyses for precision and soundness",
			conference:
				"Proceedings of the 18th ACM/IEEE International Symposium on Code Generation and Optimization",
			// location: "Toronto, Canada",
			year: 2020,
			authors: ["Jubi Taneja", " Zhengyang Liu", " John Regehr"],
			awards: [],
			// tags: ["81-93"],
			PDF: "https://users.cs.utah.edu/~regehr/cgo20.pdf",
			slides: "/talks/Slides-Testing-Static-Analyses-CGO20.pdf",
			DOI: "https://dl.acm.org/doi/10.1145/3368826.3377927",
			code: "https://github.com/jubitaneja/souper-cgo20-artifact",
		},
		{
			id: 15,
			title: "Souper: A synthesizing superoptimizer",
			conference: "arXiv preprint arXiv:1711.04422",
			// location: "Toronto, Canada",
			year: 2017,
			authors: [
				"R Sasnauskas",
				"Y Chen",
				"P Collingbourne",
				"J Ketema",
				"G Lup",
				"J Taneja",
			],
			awards: [],
			// tags: ["NLP", "Healthcare", "Privacy"],
			slides: "",
			PDF: "https://arxiv.org/pdf/1711.04422",
			code: "https://github.com/google/souper",
			DOI: "",
		},
	];

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>



				<div className='space-y-8'>
					{conferencePapers?.map((paper) => (
						<div
							key={paper.id}
							className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
							<h2 className='text-2xl font-semibold text-gray-900 mb-2'>
								{paper.title}
							</h2>
							<p className='text-gray-600 mb-2'>
								<span className='font-medium'>{paper.conference}</span>,{" "}
								{paper.year}
							</p>
							<p className='text-gray-600 mb-4'>
								<span className='font-medium'>Authors:</span>{" "}
								{paper.authors.join(", ")}
							</p>
							{paper.awards.length>0 && (
								<p className='text-gray-600 mb-4'>
									<span className='font-medium'>Awards:</span>{" "}
									{paper.awards.join(", ")}
								</p>
							)}
							<div className='flex gap-2 text-blue-600'>
								{[
									{ label: 'DOI', url: paper.DOI },
									{ label: 'PDF', url: paper.PDF },
									{ label: 'Code', url: paper.code },
									{ label: 'Slides', url: paper.slides },
								]
									.filter(item => item.url?.length > 0)
									.map((item, index, array) => (
									<React.Fragment key={item.label}>
										<a
										href={item.url}
										target='_blank'
										rel='noopener noreferrer'
										>
										{item.label}
										</a>
										{index < array.length - 1 && <span>|</span>}
									</React.Fragment>
								))}
							</div>
						</div>
					))}
				</div>
				{/* </TabsContent> */}
			</div>
		</main>
	);
}
