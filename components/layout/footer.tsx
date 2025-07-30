import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white py-12 px-4 md:px-6 lg:px-8'>
			<div className='container mx-auto max-w-6xl'>

				<div className='border-t border-gray-800 mt-1 pt-8 text-center text-gray-400'>
					<p>© {new Date().getFullYear()} Jubi Taneja. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
