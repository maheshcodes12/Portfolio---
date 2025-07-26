// FlipbookViewer.tsx
import React from "react";
import HTMLFlipBook from "react-pageflip";

const pages = [
	"/pdfs/page-1.jpg",
	"/pdfs/page-2.jpg",
	"/pdfs/page-3.jpg",
	"/pdfs/page-4.jpg",
	// Add more pages as needed
];

const FlipbookViewer: React.FC = () => {
	return (
		<div className='mt-6'>
			<h3 className='text-lg font-semibold text-gray-800 mb-3'>
				Flipbook Preview
			</h3>
			<div className='flex justify-center'>
				{/** Type assertion to any to bypass TypeScript errors */}
				{React.createElement(
					HTMLFlipBook as any,
					{
						width: 400,
						height: 550,
						showCover: true,
						className: "shadow-lg",
					},
					pages.map((src, idx) => (
						<div
							key={idx}
							className='page'>
							<img
								src={src}
								alt={`Page ${idx + 1}`}
								className='w-full h-full object-cover rounded'
							/>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default FlipbookViewer;
