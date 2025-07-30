import {
	Users,
	GraduationCap,
	Award,
	BookOpen,
	Target,
	Heart,
	Clock,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function MentoringPage() {
	const mentoringPhilosophy = [
		{
			title: "PhD Students",
			description:
				"Currently Mentoring 3 PhD students in compiler optimization, 2 graduted PhD students (now in industry and academia).",
			icon: Target,
		},
		{
			title: "Undergraduate Research",
			description:
				"Summer research program mentor (2020-2023), Supervised 10+ undergraduate research projects.",
			icon: Award,
		},
		{
			title: "Teaching",
			description:
				"Advanced Compiler Design (Graduate Level), Programming Languages Theory, Systems Programming",
			icon: GraduationCap,
		},
	];

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				<div className='mb-10'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Mentoring & Teaching
					</h1>
				</div>

				{/* Mentoring Philosophy */}
				<section className='mb-16'>
					
					<div className='bg-white border border-gray-200 rounded-lg p-6'>
						<div className='flex items-center mb-4'>
							<div className='p-3 bg-gray-100 rounded-lg mr-4'>
								<GraduationCap className='h-6 w-6 text-gray-700' />
							</div>
							<h3 className='text-xl font-semibold text-gray-900'>
								SIGPLAN-M Long-Term Mentor
							</h3>
						</div>

						<p className='text-gray-600 mb-2'>
							I mentor motivated undergraduate students and early-career
							professionals who are curious about research and considering
							graduate school but aren’t sure where to start. Whether you're
							exploring academic pathways or feeling stuck in the application
							process, I offer structured guidance to help you navigate research
							careers with clarity and confidence.
						</p>

						<div className='flex items-start bg-gray-50 border-l-4 border-blue-500 p-4 mb-4 rounded-md'>
							<a
								href='https://blog.sigplan.org/2021/01/05/introducing-sigplan-m/'
								target='_blank'
								rel='noopener noreferrer'
								className='shrink-0 mr-4'>
								<img
									src='/sigplan.png'
									alt='SIGPLAN Blog'
									className='w-20 h-20 rounded object-cover'
								/>
							</a>
							<p className='text-sm text-gray-700 italic'>
								“Have you ever had a mentor who helped you get where you are?
								I’ve had many, and I can’t imagine where I’d be without them.
								But I also know that it takes some combination of resources and
								luck to find good mentors right now, and I don’t think it ought
								to. So for the past six months, I’ve been working to create a
								new mentoring program — now an official SIGPLAN committee. This
								post describes the program and the journey that led me to create
								it.”
							</p>
						</div>

						<a
							href='https://blog.sigplan.org/2021/01/05/introducing-sigplan-m/'
							target='_blank'
							rel='noopener noreferrer'
							className='inline-flex items-center text-sm font-medium text-blue-600 hover:underline'>
							Read full blog on SIGPLAN &rarr;
						</a>
					</div>

					<section className='bg-blue-50 border-t border-b border-blue-200 py-10 px-6 md:px-12 my-12 rounded-lg shadow-sm'>
						<div className='max-w-4xl mx-auto text-center'>
							<h2 className='text-2xl md:text-3xl font-semibold text-blue-900 mb-4 flex items-center justify-center gap-2'>
								<Clock className='h-6 w-6 text-blue-700' />
								Open Office Hours
							</h2>
							<p className='text-gray-700 text-base md:text-lg mb-6'>
								I host regular office hours open to anyone who has questions
								about research, grad school, or just wants to chat about career
								paths.
							</p>

							<div className='flex items-center justify-center gap-4 flex-wrap'>
								<a
									href='#' 
									className='text-blue-700 hover:underline text-sm font-medium'>
									Details Coming Soon &rarr;
								</a>
							</div>

							<p className='mt-6 text-gray-500 text-xs italic'>
								TBD — scheduling details, format, and topics will be updated
								shortly.
							</p>
						</div>
					</section>
				</section>
			</div>
		</main>
	);
}
