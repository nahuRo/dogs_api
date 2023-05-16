import Link from "next/link";
import React from "react";

export default function Navbar() {
	return (
		<nav>
			<Link className="text-2xl font-bold" href={"/"}>
				Dogs Breed
			</Link>
			<ul className="flex flex-row gap-x-4">
				<li>
					<Link href={"/papillon"}>papillon</Link>
				</li>
				<li>
					<Link href={"/vizsla"}>vizsla</Link>
				</li>
				<li>
					<Link href={"/boxer"}>boxer</Link>
				</li>
			</ul>
		</nav>
	);
}
