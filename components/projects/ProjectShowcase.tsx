"use client";

import Image from "next/image";
import { Tag } from "lucide-react";

interface ProjectShowcaseProps {
	title: string;
	description: string;
	technologies: string[];
	imageUrl: string;
	link: string;
	link2:string;
}

const ProjectShowcase = ({
	title,
	description,
	technologies,
	imageUrl,
	link,
	link2
}: ProjectShowcaseProps) => {
	return (
		<div className='bg-white rounded-xl shadow-md p-6 md:flex gap-6'>
			{/* Project Image */}
			<div className='w-full md:w-1/3'>
				<Image
					src={imageUrl}
					alt={title}
					width={400}
					height={300}
					className='rounded-lg object-cover w-full'
				/>
			</div>

			{/* Project Info */}
			<div className='w-full md:w-2/3 mt-4 md:mt-0'>
				<h2 className='text-2xl font-bold text-gray-900 mb-2'>{title}</h2>
				<p className='text-gray-700 text-base mb-4'>{description}</p>

				{/* Technologies */}
				<div className='flex flex-wrap items-center gap-2'>
					<Tag className='h-4 w-4 text-gray-500' />
					{technologies.map((tech, idx) => (
						<span
							key={idx}
							className='bg-blue-100 text-blue-700 text-sm font-medium px-2.5 py-0.5 rounded-lg'>
							{tech}
						</span>
					))}
				</div>

				<div className='pt-2'>
					{link.length >0 && <a
						href={`${link}`}
						target='blank'>
						<span className='text-blue-600'>CODE{link2.length > 0 && " | "}</span>
					</a>}
					
					{link2.length > 0 && <a
						href={`${link2}`}
						target='blank'>
						<span className='text-blue-600'>PDF</span>
					</a>}
				</div>
			</div>
		</div>
	);
};

export default ProjectShowcase;
