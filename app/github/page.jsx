"use client";
import React, { useEffect, useState } from "react";

const GitHubProfile = () => {
	const [profile, setProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	const username = "maheshcodes12";
	const token =
		"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"; // Replace with your actual token

	const headers = {
		Authorization: `Bearer ${token}`,
		Accept: "application/vnd.github.v3+json",
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);
				setError(null);

				// Fetch profile data
				const profileRes = await fetch(
					`https://api.github.com/users/${username}`,
					{ headers }
				);

				if (!profileRes.ok) {
					throw new Error(`Profile fetch failed: ${profileRes.status}`);
				}

				const profileData = await profileRes.json();
				console.log("Profile data:", profileData);

				// Fetch repositories
				const reposRes = await fetch(
					`https://api.github.com/users/${username}/repos?per_page=5&sort=updated&direction=desc`,
					{ headers }
				);

				if (!reposRes.ok) {
					throw new Error(`Repos fetch failed: ${reposRes.status}`);
				}

				const reposData = await reposRes.json();
				console.log("Repos data:", reposData);

				// Fetch additional data for each repository
				const reposWithDetails = await Promise.all(
					reposData.map(async (repo) => {
						try {
							// Fetch contributors (using the correct endpoint)
							const contributorsRes = await fetch(
								`https://api.github.com/repos/${username}/${repo.name}/contributors?per_page=5`,
								{ headers }
							);

							let contributors = [];
							if (contributorsRes.ok) {
								contributors = await contributorsRes.json();
							}

							// Fetch languages
							const languagesRes = await fetch(
								`https://api.github.com/repos/${username}/${repo.name}/languages`,
								{ headers }
							);

							let languages = {};
							if (languagesRes.ok) {
								languages = await languagesRes.json();
							}

							return {
								...repo,
								contributors: contributors.slice(0, 5),
								languages: Object.keys(languages).slice(0, 3),
								readmeUrl: `https://github.com/${username}/${repo.name}/blob/main/README.md`,
							};
						} catch (err) {
							console.error(`Error fetching details for ${repo.name}:`, err);
							return {
								...repo,
								contributors: [],
								languages: [],
								readmeUrl: `https://github.com/${username}/${repo.name}/blob/main/README.md`,
							};
						}
					})
				);

				setProfile(profileData);
				setRepos(reposWithDetails);
			} catch (err) {
				console.error("Error fetching GitHub data:", err);
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) {
		return (
			<div className='p-4 max-w-4xl mx-auto'>
				<div className='flex items-center justify-center'>
					<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
					<span className='ml-2'>Loading GitHub data...</span>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className='p-4 max-w-4xl mx-auto'>
				<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded'>
					<strong>Error: </strong>
					{error}
				</div>
			</div>
		);
	}

	const formatDate = (dateString) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short",
			day: "numeric",
		});
	};

	return (
		<div className='p-4 max-w-4xl mx-auto font-sans bg-gray-50 min-h-screen'>
			{profile && (
				<div className='bg-white rounded-lg shadow-md p-6 mb-6'>
					<div className='flex items-center space-x-4 mb-4'>
						<img
							src={profile.avatar_url}
							alt='avatar'
							className='w-20 h-20 rounded-full border-2 border-gray-200'
						/>
						<div>
							<h1 className='text-3xl font-bold text-gray-800'>
								{profile.name}
							</h1>
							<p className='text-gray-600 text-lg'>@{profile.login}</p>
							{profile.bio && (
								<p className='text-gray-700 mt-2'>{profile.bio}</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-2 md:grid-cols-4 gap-4 text-sm'>
						<div className='text-center'>
							<div className='text-2xl font-bold text-blue-600'>
								{profile.followers}
							</div>
							<div className='text-gray-600'>Followers</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-green-600'>
								{profile.following}
							</div>
							<div className='text-gray-600'>Following</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-purple-600'>
								{profile.public_repos}
							</div>
							<div className='text-gray-600'>Repositories</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-orange-600'>
								{profile.public_gists}
							</div>
							<div className='text-gray-600'>Gists</div>
						</div>
					</div>

					{profile.company && (
						<div className='mt-4 text-sm text-gray-600'>
							🏢 {profile.company}
						</div>
					)}
					{profile.location && (
						<div className='mt-2 text-sm text-gray-600'>
							📍 {profile.location}
						</div>
					)}
				</div>
			)}

			<div className='bg-white rounded-lg shadow-md p-6'>
				<h2 className='text-2xl font-bold mb-6 text-gray-800'>
					Recent Repositories ({repos.length})
				</h2>

				{repos.length === 0 ? (
					<div className='text-center py-8 text-gray-500'>
						No repositories found or unable to fetch repository data.
					</div>
				) : (
					<div className='space-y-6'>
						{repos.map((repo) => (
							<div
								key={repo.id}
								className='border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow'>
								<div className='flex justify-between items-start mb-3'>
									<div>
										<a
											href={repo.html_url}
											className='text-xl font-bold text-blue-600 hover:text-blue-800 transition-colors'
											target='_blank'
											rel='noopener noreferrer'>
											{repo.name}
										</a>
										{repo.private && (
											<span className='ml-2 px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded'>
												Private
											</span>
										)}
									</div>
									<div className='flex space-x-4 text-sm text-gray-600'>
										<div className='flex items-center'>
											<span className='mr-1'>⭐</span>
											{repo.stargazers_count}
										</div>
										<div className='flex items-center'>
											<span className='mr-1'>🍴</span>
											{repo.forks_count}
										</div>
										<div className='flex items-center'>
											<span className='mr-1'>👁️</span>
											{repo.watchers_count}
										</div>
									</div>
								</div>

								<p className='text-gray-700 mb-3'>
									{repo.description || "No description provided"}
								</p>

								<div className='flex flex-wrap gap-4 text-sm text-gray-600 mb-3'>
									{repo.language && (
										<div className='flex items-center'>
											<span className='w-3 h-3 rounded-full bg-blue-500 mr-2'></span>
											{repo.language}
										</div>
									)}
									{repo.languages && repo.languages.length > 0 && (
										<div className='flex items-center'>
											<span className='mr-1'>💻</span>
											{repo.languages.join(", ")}
										</div>
									)}
									<div className='flex items-center'>
										<span className='mr-1'>📅</span>
										Updated {formatDate(repo.updated_at)}
									</div>
								</div>

								{repo.contributors && repo.contributors.length > 0 && (
									<div className='text-sm text-gray-700 mb-3'>
										<span className='font-semibold'>Contributors: </span>
										{repo.contributors.map((contributor, index) => (
											<span key={contributor.id}>
												<a
													href={contributor.html_url}
													className='text-blue-600 hover:text-blue-800'
													target='_blank'
													rel='noopener noreferrer'>
													{contributor.login}
												</a>
												{index < repo.contributors.length - 1 && ", "}
											</span>
										))}
									</div>
								)}

								<div className='flex space-x-3'>
									<a
										href={repo.html_url}
										className='px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm'
										target='_blank'
										rel='noopener noreferrer'>
										View Repository
									</a>
									<a
										href={repo.readmeUrl}
										className='px-3 py-1 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-sm'
										target='_blank'
										rel='noopener noreferrer'>
										View README
									</a>
									{repo.clone_url && (
										<button
											onClick={() =>
												navigator.clipboard.writeText(repo.clone_url)
											}
											className='px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm'>
											Copy Clone URL
										</button>
									)}
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default GitHubProfile;
