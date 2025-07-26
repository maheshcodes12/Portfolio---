"use client";
import React, { useEffect, useState } from "react";

const GoogleScholarProfile = () => {
	const [profile, setProfile] = useState(null);
	const [publications, setPublications] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// Replace with your Google Scholar user ID
	// You can find this in your Google Scholar profile URL
	// https://scholar.google.com/citations?user=YOUR_USER_ID
	const scholarId = "JT_vMF4AAAAJ"; // Replace with actual ID

	// Note: Google Scholar doesn't have an official API
	// This is using a third-party service (SerpAPI) as an example
	// You'll need to sign up for SerpAPI and get an API key
	const serpApiKey =
		"bfbce4c1f80c9bb21fea26e0254d18b1522b47af0c2bde0120e488fc84470040"; // Replace with actual API key

	useEffect(() => {
		const fetchScholarData = async () => {
			try {
				setLoading(true);
				setError(null);

				// Call your local API route
				const res = await fetch(`/api/scholar?scholarId=${scholarId}`);

				if (!res.ok) {
					throw new Error(`Failed to fetch scholar data: ${res.status}`);
				}

				const data = await res.json();
				console.log("Scholar data from API route:", data);

				setProfile(data.profile);
				setPublications(data.publications || []);
			} catch (err) {
				console.error("Frontend fetch error:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		if (scholarId && scholarId !== "YOUR_SCHOLAR_ID") {
			fetchScholarData();
		} else {
			setError("Please provide a valid Google Scholar ID.");
			setLoading(false);
		}
	}, []);

	// Mock data for demonstration (remove this when you have real API access)
	const mockData = {
		profile: {
			name: "Dr. Your Name",
			affiliation: "Your Institution",
			email: "your.email@institution.edu",
			interests: [
				"Machine Learning",
				"Computer Vision",
				"Natural Language Processing",
			],
			thumbnail: "https://via.placeholder.com/150",
			cited_by: {
				table: [
					{ citations: { all: 1250, since_2019: 890 } },
					{ h_index: { all: 18, since_2019: 15 } },
					{ i10_index: { all: 25, since_2019: 20 } },
				],
			},
		},
		publications: [
			{
				title: "Deep Learning Approaches for Computer Vision",
				authors: "Your Name, Co-Author",
				publication: "Journal of AI Research",
				year: "2023",
				cited_by: { value: 45 },
				link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=example",
			},
			{
				title: "Neural Networks in Natural Language Processing",
				authors: "Your Name, Another Author",
				publication: "Conference on Machine Learning",
				year: "2022",
				cited_by: { value: 32 },
				link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=example",
			},
		],
	};

	if (loading) {
		return (
			<div className='p-4 max-w-4xl mx-auto'>
				<div className='flex items-center justify-center'>
					<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
					<span className='ml-2'>Loading Google Scholar data...</span>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='p-4 max-w-4xl mx-auto'>
				<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
					<strong>Error: </strong>
					{error}
				</div>
				<div className='bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded'>
					<strong>Note: </strong>This is showing mock data for demonstration. To
					use real data, you need to:
					<ul className='list-disc list-inside mt-2'>
						<li>Sign up for SerpAPI (serpapi.com)</li>
						<li>Get your Google Scholar user ID from your profile URL</li>
						<li>Replace the placeholder values in the code</li>
					</ul>
				</div>
			</div>
		);
	}

	// Use mock data for demonstration
	const displayProfile = profile || mockData.profile;
	const displayPublications =
		publications.length > 0 ? publications : mockData.publications;

	return (
		<div className='p-4 max-w-4xl mx-auto font-sans bg-gray-50 min-h-screen'>
			{/* Profile Section */}
			<div className='bg-white rounded-lg shadow-md p-6 mb-6'>
				<div className='flex items-center space-x-4 mb-4'>
					<img
						src={displayProfile.thumbnail || "https://via.placeholder.com/150"}
						alt='Profile'
						className='w-24 h-24 rounded-full border-2 border-gray-200'
					/>
					<div>
						<h1 className='text-3xl font-bold text-gray-800'>
							{displayProfile.name}
						</h1>
						<p className='text-lg text-gray-600'>
							{displayProfile.affiliation}
						</p>
						{displayProfile.email && (
							<p className='text-sm text-gray-500'>{displayProfile.email}</p>
						)}
					</div>
				</div>

				{/* Research Interests */}
				{displayProfile.interests && (
					<div className='mb-4'>
						<h3 className='text-lg font-semibold text-gray-700 mb-2'>
							Research Interests
						</h3>
						<div className='flex flex-wrap gap-2'>
							{displayProfile.interests.map((interest, index) => (
								<span
									key={index}
									className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
									{interest}
								</span>
							))}
						</div>
					</div>
				)}

				{/* Citation Metrics */}
				{displayProfile.cited_by && (
					<div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
						<div className='text-center p-4 bg-blue-50 rounded-lg'>
							<div className='text-2xl font-bold text-blue-600'>
								{displayProfile.cited_by.table?.[0]?.citations?.all || "N/A"}
							</div>
							<div className='text-sm text-gray-600'>Citations (All)</div>
							<div className='text-xs text-gray-500'>
								Since 2019:{" "}
								{displayProfile.cited_by.table?.[0]?.citations?.since_2019 ||
									"N/A"}
							</div>
						</div>
						<div className='text-center p-4 bg-green-50 rounded-lg'>
							<div className='text-2xl font-bold text-green-600'>
								{displayProfile.cited_by.table?.[1]?.h_index?.all || "N/A"}
							</div>
							<div className='text-sm text-gray-600'>h-index (All)</div>
							<div className='text-xs text-gray-500'>
								Since 2019:{" "}
								{displayProfile.cited_by.table?.[1]?.h_index?.since_2019 ||
									"N/A"}
							</div>
						</div>
						<div className='text-center p-4 bg-purple-50 rounded-lg'>
							<div className='text-2xl font-bold text-purple-600'>
								{displayProfile.cited_by.table?.[2]?.i10_index?.all || "N/A"}
							</div>
							<div className='text-sm text-gray-600'>i10-index (All)</div>
							<div className='text-xs text-gray-500'>
								Since 2019:{" "}
								{displayProfile.cited_by.table?.[2]?.i10_index?.since_2019 ||
									"N/A"}
							</div>
						</div>
					</div>
				)}
			</div>

			{/* Publications Section */}
			<div className='bg-white rounded-lg shadow-md p-6'>
				<h2 className='text-2xl font-bold mb-6 text-gray-800'>
					Recent Publications
				</h2>

				{displayPublications.length === 0 ? (
					<div className='text-center py-8 text-gray-500'>
						No publications found.
					</div>
				) : (
					<div className='space-y-4'>
						{displayPublications.map((pub, index) => (
							<div
								key={index}
								className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
								<div className='flex justify-between items-start mb-2'>
									<h3 className='text-lg font-semibold text-gray-800 flex-1'>
										{pub.link ? (
											<a
												href={pub.link}
												className='text-blue-600 hover:text-blue-800'
												target='_blank'
												rel='noopener noreferrer'>
												{pub.title}
											</a>
										) : (
											pub.title
										)}
									</h3>
									<div className='flex items-center space-x-4 text-sm text-gray-600'>
										<span className='flex items-center'>
											<span className='mr-1'>📅</span>
											{pub.year}
										</span>
										{pub.cited_by && (
											<span className='flex items-center'>
												<span className='mr-1'>📊</span>
												{pub.cited_by.value} citations
											</span>
										)}
									</div>
								</div>

								<p className='text-gray-600 mb-1'>
									<strong>Authors:</strong> {pub.authors}
								</p>

								<p className='text-gray-600 mb-2'>
									<strong>Publication:</strong> {pub.publication}
								</p>

								<div className='flex space-x-2'>
									{pub.link && (
										<a
											href={pub.link}
											className='px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm'
											target='_blank'
											rel='noopener noreferrer'>
											View Paper
										</a>
									)}
									<button
										onClick={() => navigator.clipboard.writeText(pub.title)}
										className='px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm'>
										Copy Title
									</button>
								</div>
							</div>
						))}
					</div>
				)}
			</div>

			{/* Instructions */}
			<div className='mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4'>
				<h3 className='font-semibold text-blue-800 mb-2'>
					Setup Instructions:
				</h3>
				<ol className='list-decimal list-inside text-sm text-blue-700 space-y-1'>
					<li>
						Go to your Google Scholar profile and copy your user ID from the URL
					</li>
					<li>Sign up for SerpAPI (serpapi.com) to get an API key</li>
					<li>Replace 'YOUR_SCHOLAR_ID' and 'YOUR_SERPAPI_KEY' in the code</li>
					<li>
						Alternatively, you can use web scraping libraries like Puppeteer or
						Cheerio
					</li>
				</ol>
			</div>
		</div>
	);
};

export default GoogleScholarProfile;
