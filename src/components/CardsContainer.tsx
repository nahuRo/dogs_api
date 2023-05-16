import React from "react";
import { Card } from "./";

interface Props {
	data: string[];
}

export default function CardsContainer({ data }: Props) {
	return (
		<>
			{data.map((img) => (
				<Card src={img} key={img} />
			))}
		</>
	);
}
