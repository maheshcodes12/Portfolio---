import { Badge } from "@/components/ui/badge";

export default function ResearchPage() {
	const researchProjects = [
		{
			id: 1,
			title: "Compiler Optimization Research",
			description:
				"Advanced research in compiler optimization techniques and program analysis",
			status: "Ongoing",
			tags: ["LLVM", "C++", "Program Analysis"],
		},
		{
			id: 2,
			title: "Static Analysis Framework",
			description:
				"Development of novel static analysis techniques for performance optimization",
			status: "Published",
			tags: ["Static Analysis", "MLIR", "Optimization"],
		},
		{
			id: 3,
			title: "Programming Language Design",
			description:
				"Research on domain-specific languages and their compilation strategies",
			status: "In Progress",
			tags: ["DSL", "Compiler Design", "Language Theory"],
		},
	];

	const getStatusColor = (status: string) => {
		switch (status) {
			case "Ongoing":
				return "bg-green-100 text-green-800 border-green-200";
			case "Published":
				return "bg-blue-100 text-blue-800 border-blue-200";
			case "In Progress":
				return "bg-yellow-100 text-yellow-800 border-yellow-200";
			default:
				return "bg-gray-100 text-gray-800 border-gray-200";
		}
	};

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				<div className='mb-10'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Research Projects
					</h1>
				</div>

				{/* Research Projects */}
				<div className='space-y-6'>
					{researchProjects.map((project) => (
						<div
							key={project.id}
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
							<div className='flex justify-between items-start mb-4'>
								<h2 className='text-2xl font-semibold text-gray-900'>
									{project.title}
								</h2>
								<Badge
									className={`${getStatusColor(project.status)} font-medium`}>
									{project.status}
								</Badge>
							</div>
							<p className='text-gray-600 mb-4'>{project.description}</p>
							<div className='flex flex-wrap gap-2'>
								{project.tags.map((tag, index) => (
									<Badge
										key={index}
										variant='secondary'
										className='bg-gray-100 text-gray-700 hover:bg-gray-200'>
										{tag}
									</Badge>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
}
