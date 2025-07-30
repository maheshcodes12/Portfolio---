import { Suspense } from "react";
import BlogPage from "@/components/blog/BlogPage"; 

export default function BlogPageWrapper() {
	return (
		<Suspense fallback={<div>Loading blog...</div>}>
			<BlogPage />
		</Suspense>
	);
}
