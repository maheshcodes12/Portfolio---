"use client";
import Link from "next/link";
import { UserCheck, Gavel, Star, Mic, Group, Users } from "lucide-react";

const iconMap = {
	Mentor: <UserCheck className='w-5 h-5 text-gray-700' />,
	"PC Member (Reviewer)": <Gavel className='w-5 h-5 text-gray-700' />,
	Chair: <Star className='w-5 h-5 text-gray-700' />,
	Host: <Mic className='w-5 h-5 text-gray-700' />,
	"Community Lead": <Group className='w-5 h-5 text-gray-700' />,
	"Other Roles": <Users className='w-5 h-5 text-gray-700' />,
};

function parseDate(dateStr: string): Date {
	const end = dateStr?.split("–")[1]?.trim() || dateStr.trim();
	const date = new Date(
		`${end.split(" ")[0] || "January"} 1, ${end.split(" ").pop()}`
	);
	return isNaN(date.getTime()) ? new Date(0) : date;
}

export default function ProfessionalInvolvement() {
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
			title: "PC Member (Reviewer)",
			items: [
				{ label: "PLDI 2025", date: "2025" },
				{ label: "LCTES 2025", date: "2025" },
				{ label: "CGO 2023", date: "2023" },
				{ label: "Euro LLVM 2023", date: "2023" },
				{ label: "ICCQ 2021", date: "2021" },
				{ label: "LLVM Developers' Meeting 2021", date: "2021" },
				{ label: "LLVM Dev Meeting 2020", date: "2020" },
			],
		},
		{
			title: "Chair",
			items: [
				// { label: "PLDI 2023 SRC", date: "2023" },
				{ label: "Student Research Competition (SRC) Chair at CGO 2026, PLDI 2023, PLDI 2022.", date: "2026, 2023, 2022" },
				{ label: "Artifact Evaluation Chair of CGO 2022, CGO 2021", date: "2022, 2021" },
				{ label: "SRC Judge at PLDI 2021.", date: "2021" },
				{ label: "Panel member for Women in Compiler & Tools (WiCT), CGO 2020..", date: "2020" },
				{ label: "Artifact Evaluation Reviewer, PLDI 2016.", date: "2016" },
			],
		},
		{
			title: "Host",
			items: [
				{
					label: "Co-host of Women in Compilers and Tools Meetup Series, SF Bay Area, 2021 - 2024.",
					date: "2021–24",
				},
			],
		},
		{
			title: "Community Lead",
			items: [
				{
					label: "Co-lead of Women in Research and Moms in Research community at Microsoft Research.",
					date: "",
				}
			],
		},
		{
			title: "Other Roles",
			items: [
				{ label: "Student Volunteer - PLDI 2015-2016", date: "2015-16" },
				{ label: "Graduate Student Advisory Committee (GradSAC) Member, School of Computing, University of Utah, 2014-2016.", date: "2016" },
			],
		},
	];

	return (
		<section className='px-6 py-12 max-w-5xl mx-auto'>
			<h2 className='text-4xl font-bold mb-10'>Services</h2>
			<div className='space-y-6'>
				{serviceRoles.map((role, idx) => (
					<div
						key={idx}
						className='border rounded-xl p-6 shadow-sm bg-white'>
						<div className='flex items-center gap-2 mb-3'>
							<div className='bg-gray-100 p-2 rounded-md'>
								{iconMap[role.title as keyof typeof iconMap] || (
									<Users className='w-5 h-5 text-gray-700' />
								)}
							</div>
							<h3 className='text-xl font-semibold text-gray-900'>
								{role.title}
							</h3>
						</div>
						<ul className='text-md text-gray-700 space-y-2 ml-2'>
							{[...role.items]
								.sort(
									(a, b) =>
										parseDate(b.date).getTime() - parseDate(a.date).getTime()
								)
								.map((item, i) => (
									<li key={i}>
										<span className='mr-1 text-gray-500'>•</span>
										{"link" in item ? (
											<Link href={item.link} className='hover:underline'>
												{item.label}
											</Link>
										) : (
											item.label
										)}
										{/* {item.date && (
											<span className='block text-xs text-gray-500'>
												{item.date}
											</span>
										)} */}
									</li>
								))}
						</ul>
					</div>
				))}
			</div>
		</section>
	);
}
