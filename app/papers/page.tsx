import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function PublicationsPage() {
	const conferencePapers = [
		{
			id: 1,
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
			awards: ["If any", "displayed here"],
			// tags: ["NLP", "Healthcare", "Privacy"],
			slides: "https://arxiv.org/abs/1711.04422",
			PDF: "https://arxiv.org/pdf/1711.04422",
			code: "",
			DOI: "",
		},
		{
			id: 2,
			title: "Testing static analyses for precision and soundness",
			conference:
				"Proceedings of the 18th ACM/IEEE International Symposium on Code Generation and Optimization",
			// location: "Toronto, Canada",
			year: 2020,
			authors: ["Jubi Taneja", " Zhengyang Liu", " John Regehr"],
			awards: ["If any", "displayed here"],
			tags: ["81-93"],
			PDF: "https://users.cs.utah.edu/~regehr/cgo20.pdf",
			slides: "https://dl.acm.org/doi/abs/10.1145/3368826.3377927",
			DOI: "",
			code: "",
		},
		{
			id: 3,
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
			awards: ["If any", "displayed here"],
			tags: ["81-93"],
			PDF: "https://dl.acm.org/doi/pdf/10.1145/3696443.3708929",
			slides: "https://dl.acm.org/doi/abs/10.1145/3696443.3708929",
			DOI: "",
			code: "",
		},
		{
			id: 3,
			title:
				"Souper: a synthesizing superoptimizer. CoRR abs/1711.04422 (2017)",
			conference: "arXiv preprint arXiv:1711.04422",
			// location: "Toronto, Canada",
			year: 2017,
			authors: [
				"Raimondas Sasnauskas",
				"Yang Chen",
				"Peter Collingbourne",
				"Jeroen Ketema",
				"Jubi Taneja",
				"John Regehr",
			],
			awards: ["If any", "displayed here"],
			tags: ["81-93"],
			// PDF: "https://dl.acm.org/doi/pdf/10.1145/3696443.3708929",
			slides:
				"https://scholar.google.com/scholar?cluster=11674221066882417478&hl=en&oi=scholarr",
			DOI: "",
			code: "",
		},
		{
			id: 4,
			title:
				"ClassInvGen: Class Invariant Synthesis using Large Language Models",
			conference: "arXiv preprint arXiv:2502.18917",
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
			awards: ["If any", "displayed here"],
			tags: ["81-93"],
			PDF: "https://arxiv.org/pdf/2502.18917",
			slides: "https://arxiv.org/abs/2502.18917",
			DOI: "",
			code: "",
		},
		{
			id: 5,
			title: "Improving Compiler Construction Using Formal Methods",
			conference: "The University of Utah",
			// location: "Toronto, Canada",
			year: 2025,
			authors: ["Jubi Taneja"],
			awards: ["If any", "displayed here"],
			tags: ["81-93"],
			// PDF: "https://arxiv.org/pdf/2502.18917",
			slides:
				"https://scholar.google.com/scholar?oi=bibs&cluster=18381484965464122472&btnI=1&hl=en",
			DOI: "",
			code: "",
		},
		{
			id: 5,
			title: "Report from the Artifact Evaluation Committee",
			conference:
				"2021 IEEE/ACM International Symposium on Code Generation and Optimization (CGO)",
			// location: "Toronto, Canada",
			year: 2021,
			authors: ["Jubi Taneja", "Michel Steuwer"],
			awards: ["If any", "displayed here"],
			tags: ["81-93"],
			// PDF: "https://arxiv.org/pdf/2502.18917",
			slides: "https://ieeexplore.ieee.org/abstract/document/9370336/",
			DOI: "",
			code: "",
		},
	];

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				<div className='mb-10'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>Papers</h1>
					<p className='text-xl text-gray-600 max-w-3xl'>
						(Updated list of papers with URLs attached) - check that for
						details.
					</p>
				</div>

				{/* <Tabs
					defaultValue='journals'
					className='w-full'>
					<TabsList className='grid w-full grid-cols-3 mb-8'>
						<TabsTrigger value='journals'>Journal Articles</TabsTrigger>
						<TabsTrigger value='conferences'>Conference Papers</TabsTrigger>
						<TabsTrigger value='books'>Book Chapters</TabsTrigger>
					</TabsList> */}

				{/* Journal Articles */}
				{/* <TabsContent value='journals'>
						<div className='space-y-8'>
							{journalArticles.map((article) => (
								<div
									key={article.id}
									className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
									<h2 className='text-2xl font-semibold text-gray-900 mb-2'>
										{article.title}
									</h2>
									<p className='text-gray-600 mb-2'>
										<span className='font-medium'>{article.journal}</span>,{" "}
										{article.volume}, {article.year}
									</p>
									<p className='text-gray-600 mb-4'>
										<span className='font-medium'>Authors:</span>{" "}
										{article.authors.join(", ")}
									</p>
									<p className='text-gray-600 mb-2'>
										<span className='font-medium'>DOI:</span> {article.doi}
									</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{article.tags?.map((tag, index) => (
											<Badge
												key={index}
												variant='secondary'>
												{tag}
											</Badge>
										))}
									</div>
									<p className='text-gray-700 italic'>{article.abstract}</p>
								</div>
							))}
						</div>
					</TabsContent> */}

				{/* Conference Papers */}
				{/* <TabsContent value='conferences'> */}
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
							{paper.awards && (
								<p className='text-gray-600 mb-4'>
									<span className='font-medium'>Awards:</span>{" "}
									{paper.awards.join(", ")}
								</p>
							)}
							{/* <div className='flex flex-wrap gap-2 mb-4'>
										{paper.tags.map((tag, index) => (
											<Badge
												key={index}
												variant='secondary'>
												{tag}
											</Badge>
										))}
									</div> */}
							{/* <p className='text-gray-700 italic'>{paper.abstract}</p> */}
							<div className='flex gap-2'>
								<a
									className=' text-blue-600'
									href={`${paper.DOI}`}
									target='blanck'>
									DOI
								</a>{" "}
								|{" "}
								<a
									className=' text-blue-600'
									href={`${paper.PDF}`}
									target='blanck'>
									PDF
								</a>{" "}
								|{" "}
								<a
									className=' text-blue-600'
									href={`${paper.code}`}
									target='blanck'>
									Code
								</a>{" "}
								|{" "}
								<a
									className=' text-blue-600'
									href={`${paper.slides}`}
									target='blanck'>
									Slides
								</a>
							</div>
						</div>
					))}
				</div>
				{/* </TabsContent> */}

				{/* Book Chapters */}
				{/* <TabsContent value='books'>
						<div className='space-y-8'>
							{bookChapters.map((chapter) => (
								<div
									key={chapter.id}
									className='border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
									<h2 className='text-2xl font-semibold text-gray-900 mb-2'>
										{chapter.title}
									</h2>
									<p className='text-gray-600 mb-2'>
										<span className='font-medium'>In:</span> {chapter.book},{" "}
										{chapter.publisher}, {chapter.year}
									</p>
									<p className='text-gray-600 mb-4'>
										<span className='font-medium'>Authors:</span>{" "}
										{chapter.authors.join(", ")}
									</p>
									<div className='flex flex-wrap gap-2 mb-4'>
										{chapter.tags.map((tag, index) => (
											<Badge
												key={index}
												variant='secondary'>
												{tag}
											</Badge>
										))}
									</div>
									<p className='text-gray-700 italic'>{chapter.abstract}</p>
								</div>
							))}
						</div>
					</TabsContent> */}
				{/* </Tabs> */}
			</div>
		</main>
	);
}
