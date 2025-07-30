"use client";
import { Badge } from "@/components/ui/badge";

export default function TalksPage() {
	const talks = [
		{
			id: 1,
			title: "LLM-Vectorizer: LLM-based Verified Loop Vectorizer Invited talk.",
			venue:
				" UC Santa Cruz, UC Berkeley, Uber Technologies, PNW PLSE 2024, CGO 2025, LATHC 2025",
			date: "2024, 2025",
			type: "Keynote",
			link:"/talks/Jubi_LLM_Vectorizer_Talk_ext.pdf"
		},
		{
			id: 2,
			title:
				" Improving Compiler Construction using Formal Methods, Invited talk.",
			venue:
				"UC Berkeley Programming Systems Seminar group, and Microsoft Research.",
			date: "June 2020",
			type: "Invited Talk",
			video: "https://www.youtube.com/watch?v=de8Ak0nY1hA",
			link:"/talks/slides-improving-compiler-construction-talk.pdf"

		},
		{
			id: 5,
			title:
				"Testing Static Analyses for Precision and Soundness",
			venue:
				"CGO 2020",
			date: "Feb 2020",
			type: "Invited Talk",
			video: "",
			link:"/talks/Slides-Testing-Static-Analyses-CGO20.pdf"

		},
		{
			id: 3,
			title:
				"Exploiting and Improving LLVM’s Dataflow Analyses using a Superoptimizer, Student Research Competition.",
			venue: "LLVM Developers’ Meeting, San Jose, CA, USA.",
			date: "October 2017",
			type: "Guest Lecture",
			video: "https://www.youtube.com/watch?v=WyMTa2_yNHQ&t=526s",
			link:"/talks/Slides-exploiting-and-improving-llvm-DFA.pdf"

		},
		{
			id: 4,
			title:
				"You're NOT Alone: Chasing the Journey of Learning and Belonging, Invited Talk.",
			venue: "Community.o Summit",
			abstract:"Have you experienced question reluctance? Have you found yourself isolated, struggling constantly to feel better and make progress? Has imposter syndrome kicked in when you finally started to feel better? These are all real things and very common among all of us, especially beginners. This talk is about one such experience that a PhD student went through and the solutions she found helpful while chasing her journey of learning in the past one decade. Maybe these solutions might not help you, but some of you will feel a lot more comfortable resonating with the similar experiences.",
			date: "2021",
			type: "Invited Talk",
			video: "https://www.youtube.com/watch?v=JbmR1nEfnh8",
			link:""

		},
	];

	function extractYouTubeId(url: string) {
		try {
			const urlObj = new URL(url);
			return urlObj.searchParams.get("v");
		} catch {
			return null;
		}
	}

	return (
		<main className='min-h-screen py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				<div className='mb-10'>
					<h1 className='text-4xl font-bold text-gray-900 mb-4'>
						Talks & Presentations
					</h1>
				</div>

				{/* Talks List */}
				<div className='space-y-6'>
					{talks.map((talk) => (
						<div
							key={talk.id}
							className='bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow'>
							<div className='flex justify-between items-start mb-3'>
								<h2 className='text-2xl font-semibold text-gray-900'>
									{talk.title}
								</h2>
							</div>
							<p className='text-gray-600 text-lg mb-2'>{talk.venue}</p>
							<p className='text-gray-500 mb-4'>{talk.date} {talk.link.length > 0 && <a target='_blank' href={`${talk.link}`}><span className="text-blue-600"> | Slides</span></a>}</p>
							<p className='text-gray-600 text-lg mb-4'>{talk.abstract || ""}</p>
							

							<div className='w-full flex justify-center'>
								{talk.video && (
									<div
										className='relative w-[40vw]'
										style={{ paddingBottom: "30%", height: 0 }}>
										<iframe
											src={`https://www.youtube.com/embed/${extractYouTubeId(
												talk.video
											)}`}
											title={talk.title}
											frameBorder='0'
											allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
											allowFullScreen
											className='absolute top-0 left-0 w-full h-full rounded-lg'></iframe>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				{/* <FlipbookViewer></FlipbookViewer> */}
			</div>
		</main>
	);
}
