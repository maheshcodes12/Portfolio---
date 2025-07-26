import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Building, Award, Users } from "lucide-react";

export default function EducationHighlights() {
	const education = [
		{
			degree: "Doctor of Philosophy (PhD), Computer Science",
			institution: "University of Utah",
			period: "2013-2020",
			description: "Advisor: Prof. John Regehr",
		},
		{
			degree: "Punjab University",
			institution: "B,Tech, Computer Science",
			period: "2006-2010",
			description: "University Gold Medalist",
		},
	];

	return (
		<section className='max-w-6xl mx-auto'>
			<div className='flex items-center mb-8'>
				<GraduationCap className='h-8 w-8 text-gray-900 mr-3' />
				<h2 className='text-3xl font-bold text-gray-900'>Education</h2>
			</div>
			<div className='space-y-8'>
				{education.map((edu, index) => (
					<div
						key={index}
						className='border-l-4 border-gray-200 pl-6'>
						<div className='flex flex-col md:flex-row md:justify-between md:items-start mb-2'>
							<h3 className='text-xl font-semibold text-gray-900'>
								{edu.degree}
							</h3>
							<span className='text-gray-600 font-medium'>{edu.period}</span>
						</div>
						<p className='text-lg text-gray-700 mb-2'>{edu.institution}</p>
						<p className='text-gray-600'>{edu.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}
