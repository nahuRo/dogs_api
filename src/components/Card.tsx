"use client";
import { useFavorites } from "@/context/context";
import Image from "next/image";
import React from "react";
import { BsStarFill } from "react-icons/bs";
import { BsStar } from "react-icons/bs";

interface Props {
	src: string;
}

export default function Card({ src }: Props) {
	const [favorites, toggleFavorite] = useFavorites();

	const isFavorite = favorites.includes(src);
	return (
		<div className="relative">
			<Image
				className={`w-full h-64 object-cover ${
					isFavorite ? "text-yellow-400" : "text-white"
				}`}
				src={src}
				alt=""
				width={256}
				height={256}
			/>
			<button
				onClick={() => toggleFavorite(src)}
				className="absolute bottom-1 right-1 bg-slate-800 p-2 rounded-full flex justify-center items-center"
			>
				{isFavorite ? (
					<BsStarFill color="#f2ff40" size={15} />
				) : (
					<BsStar color="#fff" size={15} />
				)}
			</button>
		</div>
	);
}
