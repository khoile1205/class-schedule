import Link from "next/link";

export default function NotFound() {
	return (
		<div className="my-52 container">
			<h2>Page not found</h2>
			{/* <p>Could not find requested resource</p> */}
			<p>
				<Link prefetch href="/login">
					Login
				</Link>
			</p>
		</div>
	);
}
