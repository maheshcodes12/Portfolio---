"use client";
import { Badge } from "@/components/ui/badge";
import FlipbookViewer from "@/components/flipbook/Book";

export default function TalksPage() {
	const talks = [
		{
			id: 1,
			title: "LLM-Vectorizer: LLM-based Verified Loop Vectorizer Invited talk.",
			venue:
				"UC Santa Cruz, Uber Technologies,PNW PLSE 2024, CGO 2025, LATHC 2025.",
			date: "2024, 2025",
			type: "Keynote",
		},
		{
			id: 2,
			title:
				" Improving Compiler Construction using Formal Methods, invited talk.",
			venue:
				"UC Berkeley Programming Systems Seminar group, and Microsoft Research.",
			date: "June 2020",
			type: "Invited Talk",
			video: "https://www.youtube.com/watch?v=de8Ak0nY1hA",
		},
		{
			id: 3,
			title:
				"Exploiting and Improving LLVM’s Dataflow Analyses using a Superoptimizer, Student Research Competition.",
			venue: "LLVM Developers’ Meeting, San Jose, CA, USA.",
			date: "October 2017",
			type: "Guest Lecture",
			video: "https://www.youtube.com/watch?v=WyMTa2_yNHQ&t=526s",
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
							<p className='text-gray-500 mb-4'>{talk.date}</p>
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
				<FlipbookViewer></FlipbookViewer>
			</div>
		</main>
	);
}
