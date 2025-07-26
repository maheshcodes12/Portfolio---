import { Trophy, Award, Medal, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AwardsPage() {
	const awards = [
		{
			id: 1,
			title: "Best Paper Award",
			organization:
				"ACM/IEEE International Symposium on Code Generation and Optimization",
			year: 2020,
			description:
				"Received Best Paper Award for Testing Static Analyses for Precision and Soundness paper at CGO 2020.",
			// category: "Research Excellence",
			icon: Trophy,
		},
		{
			id: 2,
			title: "Best Student Presentation Award",
			organization:
				"ACM/IEEE International Symposium on Code Generation and Optimization",
			year: 2020,
			description:
				"Received Best Student Presentation Award for Testing Static Analyses for Precision and Soundness paper at CGO 2020.",
			// category: "Publication",
			icon: Award,
		},
		{
			id: 3,
			title: "University Gold Medal",
			organization: "Punjabi University",
			year: 2010,
			description:
				"Awarded University Gold Medal for securing first rank in the order of merit in the Computer Science department of the University.",
			// category: "Teaching",
			icon: Star,
		},
	];

	const honors = [
		{
			title: "IEEE Senior Member",
			year: 2022,
			description:
				"Elevated to senior membership in recognition of professional accomplishments.",
		},
		{
			title: "ACM Distinguished Scientist",
			year: 2023,
			description:
				"Recognized for significant accomplishments in computing and information technology.",
		},
		{
			title: "Phi Beta Kappa",
			year: 2013,
			description:
				"Inducted into the national honor society for academic excellence.",
		},
	];

	const getCategoryColor = (category: string) => {
		const colors = {
			"Research Excellence": "bg-blue-100 text-blue-800",
			Publication: "bg-green-100 text-green-800",
			Teaching: "bg-purple-100 text-purple-800",
			Recognition: "bg-yellow-100 text-yellow-800",
			Funding: "bg-red-100 text-red-800",
			Academic: "bg-indigo-100 text-indigo-800",
			Competition: "bg-pink-100 text-pink-800",
			Fellowship: "bg-teal-100 text-teal-800",
		};
		return (
			colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
		);
	};

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				{/* Awards Section */}
				<section className='mb-16'>
					<h2 className='text-3xl font-bold text-gray-900 mb-8'>Awards</h2>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
						{awards.map((award) => {
							const IconComponent = award.icon;
							return (
								<div
									key={award.id}
									className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
									<div className='flex items-start justify-between mb-4'>
										<div className='flex items-center'>
											<div className='p-3 bg-gray-100 rounded-lg mr-4'>
												<IconComponent className='h-6 w-6 text-gray-700' />
											</div>
											<div>
												<h3 className='text-xl font-semibold text-gray-900'>
													{award.title}
												</h3>
												<p className='text-gray-600'>{award.organization}</p>
											</div>
										</div>
										<div className='text-right'>
											<span className='text-2xl font-bold text-gray-900'>
												{award.year}
											</span>
											{/* {award.category && (
												<Badge
													className={`ml-2 ${getCategoryColor(
														award.category
													)}`}>
													{award.category}
												</Badge>
											)} */}
										</div>
									</div>
									<p className='text-gray-700'>{award.description}</p>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</main>
	);
}
