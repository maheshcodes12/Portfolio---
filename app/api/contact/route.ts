// import { Resend } from "resend";

// // Initialize Resend with your API key from environment variables
// // const resend = new Resend(process.env.RESEND_API_KEY);
// const resend = new Resend("re_DpSG63o3_3vGaNwSvX7JmeFqFYhdvp54Y");

// // Named export for the POST method
// export async function POST(req: Request) {
// 	// Extract data from the request body
// 	// In App Router, req.json() is used to parse the body of a Request object
// 	const { name, email, subject, message } = await req.json();

// 	// Basic validation (you can add more robust validation here)
// 	if (!name || !email || !subject || !message) {
// 		// Use `Response` object for sending JSON responses in App Router
// 		return new Response(
// 			JSON.stringify({ message: "All fields are required." }),
// 			{
// 				status: 400,
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);
// 	}

// 	try {
// 		// Send the email using Resend
// 		const { data, error } = await resend.emails.send({
// 			from: "Acme <onboarding@resend.dev>", // REMEMBER TO CHANGE THIS TO YOUR VERIFIED DOMAIN EMAIL LATER
// 			to: "maheshascoder@gmail.com", // Replace with YOUR email address where you want to receive notifications
// 			subject: `New Contact Form Submission: ${subject}`,
// 			html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
// 		});

// 		if (error) {
// 			console.error("Error sending email:", error);
// 			return new Response(
// 				JSON.stringify({
// 					message: "Failed to send email.",
// 					error: error.message,
// 				}),
// 				{
// 					status: 500,
// 					headers: {
// 						"Content-Type": "application/json",
// 					},
// 				}
// 			);
// 		}

// 		// Success response
// 		return new Response(
// 			JSON.stringify({ message: "Email sent successfully!", data }),
// 			{
// 				status: 200,
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);
// 	} catch (err: any) {
// 		console.error("Unexpected error:", err);
// 		return new Response(
// 			JSON.stringify({
// 				message: "An unexpected error occurred.",
// 				error: err.message,
// 			}),
// 			{
// 				status: 500,
// 				headers: {
// 					"Content-Type": "application/json",
// 				},
// 			}
// 		);
// 	}
// }

// // If you only support POST, you don't need to export a GET function,
// // but if you did, it would look like this:
// /*
// export async function GET(req: Request) {
//   return new Response(JSON.stringify({ message: 'GET method not supported for contact form.' }), {
//     status: 405,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// }
// */
