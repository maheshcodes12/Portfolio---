'use client';
import { useState } from 'react';
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {

	const [open, setOpen] = useState(false);
	return (
		<header className=' top-0 z-50 w-full border-b  bg-gray-800 text-white'>
			<div className='container mx-auto max-w-6xl flex h-16 items-center justify-between px-4 md:px-6 lg:px-8'>
				<div className='flex items-center gap-2'>
					<Link
						href='/'
						className='text-xl font-bold'>
						Jubi Taneja
					</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className='hidden md:flex items-center gap-6'>
					<Link
						href='/'
						className='text-sm font-medium hover:underline underline-offset-4'>
						About Me
					</Link>
					<Link
						href='/projects'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Research
					</Link>
					<Link
						href='/papers'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Papers
					</Link>
					<Link
						href='/talks'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Talks
					</Link>
					<Link
						href='/services'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Services
					</Link>
					<Link
						href='/mentoring'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Mentoring
					</Link>
					<Link
						href='/blog'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Blog
					</Link>
					<Link
						href='/resume.pdf'
						target='blanck'
						className='text-sm font-medium hover:underline underline-offset-4'>
						CV
					</Link>
					<Link
						href='/contact'
						className='text-sm font-medium hover:underline underline-offset-4'>
						Contact
					</Link>
				</nav>

				{/* Mobile Navigation */}
				<Sheet open={open} onOpenChange={setOpen}>
					<SheetTrigger asChild>
						<Button
							variant='outline'
							size='icon'
							className='md:hidden bg-transparent'>
							<Menu className='h-5 w-5' />
							<span className='sr-only'>Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side='right'>
						<nav className='flex flex-col gap-4 mt-8'>
							<Link
								href='/'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								About Me
							</Link>
							<Link
								href='/projects'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Research
							</Link>
							<Link
								href='/papers'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Papers
							</Link>
							<Link
								href='/talks'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Talks
							</Link>
							<Link
								href='/services'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Services
							</Link>
							<Link
								href='/mentoring'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Mentoring
							</Link>
							<Link
								href='/blog'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Blog
							</Link>
							<Link
								href='/resume.pdf'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								CV
							</Link>
							<Link
								href='/contact'
								onClick={() => setOpen(false)}
								className='text-base font-medium hover:underline'>
								Contact
							</Link>
						</nav>
					</SheetContent>
				</Sheet>
			</div>
		</header>
	);
}
