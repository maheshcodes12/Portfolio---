"use client";
import React, { useEffect, useState } from "react";

const LinkedInProfile = () => {
	const [profile, setProfile] = useState(null);
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// LinkedIn API requires OAuth 2.0 authentication
	// You'll need to create a LinkedIn app and get proper credentials
	const accessToken = "YOUR_LINKEDIN_ACCESS_TOKEN"; // Replace with actual token

	const headers = {
		Authorization: `Bearer ${accessToken}`,
		"Content-Type": "application/json",
		"X-Restli-Protocol-Version": "2.0.0",
	};

	useEffect(() => {
		const fetchLinkedInData = async () => {
			try {
				setLoading(true);
				setError(null);

				// Fetch profile data
				// Note: LinkedIn API v2 requires specific permissions
				const profileUrl =
					"https://api.linkedin.com/v2/people/~:(id,localizedFirstName,localizedLastName,localizedHeadline,vanityName,profilePicture(displayImage~:playableStreams))";

				const profileRes = await fetch(profileUrl, { headers });

				if (!profileRes.ok) {
					throw new Error(`Failed to fetch profile: ${profileRes.status}`);
				}

				const profileData = await profileRes.json();
				console.log("LinkedIn profile data:", profileData);

				// Fetch posts (requires r_organization_social permission)
				const postsUrl =
					"https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:person:" +
					profileData.id +
					"&count=5";

				const postsRes = await fetch(postsUrl, { headers });

				if (postsRes.ok) {
					const postsData = await postsRes.json();
					setPosts(postsData.elements || []);
				}

				setProfile(profileData);
			} catch (err) {
				console.error("Error fetching LinkedIn data:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		// Only fetch if we have access token
		if (accessToken && accessToken !== "YOUR_LINKEDIN_ACCESS_TOKEN") {
			fetchLinkedInData();
		} else {
			setError("Please configure your LinkedIn access token");
			setLoading(false);
		}
	}, []);

	// Mock data for demonstration (remove this when you have real API access)
	const mockData = {
		profile: {
			localizedFirstName: "Your",
			localizedLastName: "Name",
			localizedHeadline:
				"Software Engineer | Full Stack Developer | Tech Enthusiast",
			vanityName: "yourname",
			profilePicture: "https://via.placeholder.com/150",
			experience: [
				{
					title: "Senior Software Engineer",
					company: "Tech Company",
					duration: "Jan 2022 - Present",
					location: "San Francisco, CA",
					description:
						"Leading development of scalable web applications using React and Node.js",
				},
				{
					title: "Software Engineer",
					company: "Previous Company",
					duration: "Jun 2019 - Dec 2021",
					location: "New York, NY",
					description: "Developed and maintained full-stack applications",
				},
			],
			education: [
				{
					school: "University Name",
					degree: "Bachelor of Science in Computer Science",
					duration: "2015 - 2019",
					location: "City, State",
				},
			],
			skills: [
				"JavaScript",
				"React",
				"Node.js",
				"Python",
				"SQL",
				"AWS",
				"Docker",
				"Git",
			],
			connections: 500,
			followers: 1200,
		},
		posts: [
			{
				id: "1",
				text: "Excited to share my latest project on machine learning applications!",
				createdAt: "2024-01-15T10:30:00Z",
				likes: 25,
				comments: 8,
				shares: 3,
			},
			{
				id: "2",
				text: "Great discussion at the tech conference today about the future of AI.",
				createdAt: "2024-01-10T14:20:00Z",
				likes: 42,
				comments: 12,
				shares: 6,
			},
		],
	};

	if (loading) {
		return (
			<div className='p-4 max-w-4xl mx-auto'>
				<div className='flex items-center justify-center'>
					<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
					<span className='ml-2'>Loading LinkedIn data...</span>
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
						<li>Create a LinkedIn Developer App</li>
						<li>Implement OAuth 2.0 authentication</li>
						<li>Request proper API permissions</li>
						<li>Get an access token for your profile</li>
					</ul>
				</div>
			</div>
		);
	}

	// Use mock data for demonstration
	const displayProfile = profile || mockData.profile;
	const displayPosts = posts.length > 0 ? posts : mockData.posts;

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<div className='p-4 max-w-4xl mx-auto font-sans bg-gray-50 min-h-screen'>
			{/* Profile Header */}
			<div className='bg-white rounded-lg shadow-md mb-6 overflow-hidden'>
				{/* Cover Photo */}
				<div className='h-32 bg-gradient-to-r from-blue-600 to-blue-800'></div>

				{/* Profile Info */}
				<div className='p-6'>
					<div className='flex items-start space-x-4 -mt-16'>
						<img
							src={
								displayProfile.profilePicture ||
								"https://via.placeholder.com/150"
							}
							alt='Profile'
							className='w-24 h-24 rounded-full border-4 border-white shadow-lg'
						/>
						<div className='mt-16'>
							<h1 className='text-3xl font-bold text-gray-800'>
								{displayProfile.localizedFirstName}{" "}
								{displayProfile.localizedLastName}
							</h1>
							<p className='text-lg text-gray-600 mb-2'>
								{displayProfile.localizedHeadline}
							</p>
							{displayProfile.vanityName && (
								<p className='text-sm text-gray-500'>
									linkedin.com/in/{displayProfile.vanityName}
								</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-2 gap-4 mt-6'>
						<div className='text-center'>
							<div className='text-2xl font-bold text-blue-600'>
								{displayProfile.connections || 0}
							</div>
							<div className='text-gray-600'>Connections</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-green-600'>
								{displayProfile.followers || 0}
							</div>
							<div className='text-gray-600'>Followers</div>
						</div>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
				{/* Left Column - About & Skills */}
				<div className='lg:col-span-1 space-y-6'>
					{/* Skills */}
					{displayProfile.skills && (
						<div className='bg-white rounded-lg shadow-md p-6'>
							<h2 className='text-xl font-bold mb-4 text-gray-800'>Skills</h2>
							<div className='flex flex-wrap gap-2'>
								{displayProfile.skills.map((skill, index) => (
									<span
										key={index}
										className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'>
										{skill}
									</span>
								))}
							</div>
						</div>
					)}

					{/* Education */}
					{displayProfile.education && (
						<div className='bg-white rounded-lg shadow-md p-6'>
							<h2 className='text-xl font-bold mb-4 text-gray-800'>
								Education
							</h2>
							<div className='space-y-4'>
								{displayProfile.education.map((edu, index) => (
									<div
										key={index}
										className='border-l-4 border-blue-500 pl-4'>
										<h3 className='font-semibold text-gray-800'>
											{edu.school}
										</h3>
										<p className='text-gray-600'>{edu.degree}</p>
										<p className='text-sm text-gray-500'>{edu.duration}</p>
										{edu.location && (
											<p className='text-sm text-gray-500'>{edu.location}</p>
										)}
									</div>
								))}
							</div>
						</div>
					)}
				</div>

				{/* Right Column - Experience & Posts */}
				<div className='lg:col-span-2 space-y-6'>
					{/* Experience */}
					{displayProfile.experience && (
						<div className='bg-white rounded-lg shadow-md p-6'>
							<h2 className='text-xl font-bold mb-4 text-gray-800'>
								Experience
							</h2>
							<div className='space-y-6'>
								{displayProfile.experience.map((exp, index) => (
									<div
										key={index}
										className='border-l-4 border-green-500 pl-4'>
										<h3 className='text-lg font-semibold text-gray-800'>
											{exp.title}
										</h3>
										<p className='text-gray-600 font-medium'>{exp.company}</p>
										<p className='text-sm text-gray-500'>
											{exp.duration} • {exp.location}
										</p>
										{exp.description && (
											<p className='text-gray-700 mt-2'>{exp.description}</p>
										)}
									</div>
								))}
							</div>
						</div>
					)}

					{/* Recent Posts */}
					<div className='bg-white rounded-lg shadow-md p-6'>
						<h2 className='text-xl font-bold mb-4 text-gray-800'>
							Recent Posts
						</h2>

						{displayPosts.length === 0 ? (
							<div className='text-center py-8 text-gray-500'>
								No posts found.
							</div>
						) : (
							<div className='space-y-4'>
								{displayPosts.map((post) => (
									<div
										key={post.id}
										className='border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow'>
										<div className='flex items-start space-x-3'>
											<img
												src={
													displayProfile.profilePicture ||
													"https://via.placeholder.com/40"
												}
												alt='Profile'
												className='w-10 h-10 rounded-full'
											/>
											<div className='flex-1'>
												<div className='flex items-center space-x-2'>
													<span className='font-semibold text-gray-800'>
														{displayProfile.localizedFirstName}{" "}
														{displayProfile.localizedLastName}
													</span>
													<span className='text-sm text-gray-500'>
														{formatDate(post.createdAt)}
													</span>
												</div>
												<p className='text-gray-700 mt-2'>{post.text}</p>

												<div className='flex items-center space-x-4 mt-3 text-sm text-gray-500'>
													<span className='flex items-center'>
														<span className='mr-1'>👍</span>
														{post.likes} likes
													</span>
													<span className='flex items-center'>
														<span className='mr-1'>💬</span>
														{post.comments} comments
													</span>
													<span className='flex items-center'>
														<span className='mr-1'>🔄</span>
														{post.shares} shares
													</span>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>

			{/* Instructions */}
			<div className='mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4'>
				<h3 className='font-semibold text-blue-800 mb-2'>
					Setup Instructions:
				</h3>
				<ol className='list-decimal list-inside text-sm text-blue-700 space-y-1'>
					<li>Create a LinkedIn Developer App at developer.linkedin.com</li>
					<li>Implement OAuth 2.0 authentication flow</li>
					<li>
						Request necessary permissions (r_liteprofile, r_emailaddress, etc.)
					</li>
					<li>Get an access token for your profile</li>
					<li>
						Note: LinkedIn API has strict rate limits and approval process
					</li>
				</ol>
			</div>
		</div>
	);
};

export default LinkedInProfile;
