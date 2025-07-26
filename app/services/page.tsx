"use client";
import Link from "next/link";
import { UserCheck, Gavel, Star, Mic, Group, Users } from "lucide-react";

// Icon mapping on frontend only
const iconMap = {
	Mentor: <UserCheck className='w-5 h-5 text-gray-700' />,
	"Peer Reviewer": <Gavel className='w-5 h-5 text-gray-700' />,
	Chair: <Star className='w-5 h-5 text-gray-700' />,
	Host: <Mic className='w-5 h-5 text-gray-700' />,
	"Community Lead": <Group className='w-5 h-5 text-gray-700' />,
	"Other Roles": <Users className='w-5 h-5 text-gray-700' />,
};

// Helper to parse date
function parseDate(dateStr: string): Date {
	const end = dateStr?.split("–")[1]?.trim() || dateStr.trim();
	const date = new Date(
		`${end.split(" ")[0] || "January"} 1, ${end.split(" ").pop()}`
	);
	return isNaN(date.getTime()) ? new Date(0) : date;
}

export default function ProfessionalInvolvement() {
	// This would come from your backend API (no icons)
	const serviceRoles = [
		{
			title: "Mentor",
			items: [
				{
					label: "SIGPLAN-M long-term mentor",
					link: "/mentoring",
					date: "June 2020 – Present",
				},
			],
		},
		{
			title: "Peer Reviewer",
			items: [
				{ label: "PLDI 2025", date: "2025" },
				{ label: "LCTES 2025", date: "2025" },
			],
		},
		{
			title: "Chair",
			items: [
				{ label: "PLDI 2023 SRC", date: "2023" },
				{ label: "Etc.", date: "2022" },
			],
		},
		{
			title: "Host",
			items: [
				{
					label: "Women in Compilers & Tools Meetup Series",
					date: "April 2021 – September 2023",
				},
			],
		},
		{
			title: "Community Lead",
			items: [
				{
					label: "Moms at Microsoft Research community",
					date: "2022",
				},
			],
		},
		{
			title: "Other Roles",
			items: [
				{ label: "GradSAC Committee Member", date: "2016" },
				{ label: "Student Volunteer - PLDI 2015", date: "2015" },
			],
		},
	];

	return (
		<section className='px-6 py-12 max-w-5xl mx-auto'>
			<h2 className='text-3xl font-bold mb-10'>Services</h2>
			<div className='grid md:grid-cols-2 gap-6'>
				{serviceRoles.map((role, idx) => (
					<div
						key={idx}
						className={`border rounded-xl p-6 shadow-sm ${
							idx == 2 || idx == 3 ? "bg-white" : "bg-gray-50"
						}`}>
						<div className='flex items-center gap-2 mb-3'>
							<div className='bg-gray-100 p-2 rounded-md'>
								{iconMap[role.title as keyof typeof iconMap] || (
									<Users className='w-5 h-5 text-gray-700' />
								)}
							</div>

							<h3 className='text-lg font-semibold'>{role.title}</h3>
						</div>
						<ul className='text-sm text-gray-700 space-y-2'>
							{[...role.items]
								.sort(
									(a, b) =>
										parseDate(b.date).getTime() - parseDate(a.date).getTime()
								)
								.map((item, i) => (
									<li key={i}>
										<span className='mr-1 text-sm text-gray-600'>•</span>
										{"link" in item ? (
											<Link
												href={item.link}
												className='hover:underline'>
												{item.label}
											</Link>
										) : (
											item.label
										)}

										{item.date && (
											<span className='text-gray-500 text-xs block'>
												{item.date}
											</span>
										)}
									</li>
								))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
