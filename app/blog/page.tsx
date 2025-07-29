// app/blog/page.tsx (or wherever BlogPage is used)

import { Suspense } from "react";
import BlogPage from "@/components/blog/BlogPage"; // Adjust path if needed

export default function BlogPageWrapper() {
	return (
		<Suspense fallback={<div>Loading blog...</div>}>
			<BlogPage />
		</Suspense>
	);
}
