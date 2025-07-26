import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>
				{/* <div className='grid grid-cols-1 md:grid-cols-3 gap-8'> */}
				{/* Column 1 */}
				{/* <div>
						<h3 className='text-xl font-bold mb-4'>Jubi Taneja</h3>
						<p className='text-gray-300 mb-4'>PhD in Computer Science</p>
						<div className='flex space-x-4'>
							<Link
								href='https://github.com/jubitaneja'
								className='text-gray-300 hover:text-white'>
								<Github className='h-5 w-5' />
								<span className='sr-only'>GitHub</span>
							</Link>
							<Link
								href='https://linkedin.com/in/jubitaneja'
								className='text-gray-300 hover:text-white'>
								<Linkedin className='h-5 w-5' />
								<span className='sr-only'>LinkedIn</span>
							</Link>
							<Link
								href='mailto:jubitaneja@google.com'
								className='text-gray-300 hover:text-white'>
								<Mail className='h-5 w-5' />
								<span className='sr-only'>Email</span>
							</Link>
						</div>
					</div> */}

				{/* Column 2 */}
				{/* <div>
						<h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
						<nav className='flex flex-col space-y-2'>
							<Link
								href='/research'
								className='text-gray-300 hover:text-white'>
								Research
							</Link>
							<Link
								href='/publications'
								className='text-gray-300 hover:text-white'>
								Publications
							</Link>
							<Link
								href='/blog'
								className='text-gray-300 hover:text-white'>
								Blog
							</Link>
							<Link
								href='/awards'
								className='text-gray-300 hover:text-white'>
								Awards
							</Link>
							<Link
								href='/services'
								className='text-gray-300 hover:text-white'>
								Services
							</Link>
							<Link
								href='/mentoring'
								className='text-gray-300 hover:text-white'>
								Mentoring
							</Link>
						</nav>
					</div> */}

				{/* Column 3 */}
				{/* <div>
						<h3 className='text-lg font-semibold mb-4'>Contact</h3>
						<address className='not-italic text-gray-300'>
							<p className='mt-2'>Email: jubitaneja@google.com</p>
						</address>
					</div> */}
				{/* </div> */}

				<div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
					<p>© {new Date().getFullYear()} Jubi Taneja. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
