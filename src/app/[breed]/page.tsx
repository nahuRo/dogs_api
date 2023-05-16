import { Card, CardsContainer } from "@/components";

interface Props {
	params: {
		breed: string;
	};
}
// fetch
async function getData(breed: string): Promise<{ message: string[] }> {
	const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/9`);

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function page({ params: { breed } }: Props) {
	const { message } = await getData(breed);

	return (
		<section className="grid gap-2 grid-cols-container">
			<CardsContainer data={message} />
		</section>
	);
}
