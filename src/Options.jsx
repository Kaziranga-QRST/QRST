import React from "react";
import { BlurVignette, BlurVignetteArticle } from "./blur-vignette";

const games = [
	{
		name: "Mobile Legends: Bang Bang",
		i_name: "ml",
		desc: "A fast-paced 5v5 multiplayer online battle arena (MOBA) game where players choose unique heroes with special abilities and battle in strategic team fights to destroy the enemy base.",
	},
	{
		name: "Battlegrounds Mobile India",
		i_name: "bgmi",
		desc: "A battle royale shooter where players parachute onto an island, scavenge for weapons, and fight to be the last one standing in intense survival-based gameplay.",
	},
	{
		name: "VALORANT",
		i_name: "valorant",
		desc: "A tactical 5v5 first-person shooter (FPS) with a mix of precise gunplay and unique agent abilities, requiring strategic teamwork to plant or defuse the spike in high-stakes rounds.",
	},
	{
		name: "FIFA (EA Sports FC 25)",
		i_name: "fifa",
		desc: "A football simulation game that lets players experience realistic matches, manage teams, and compete in online and offline modes with licensed clubs, leagues, and players.",
	},
];

const googleFormLinks = {
	ml: "https://forms.gle/3z7ssdgvzgjG1ABdrQ8",
	bgmi: "https://forms.gle/asgesrgsdwagewag89",
	valorant: "https://forms.gle/agds8g79ea8zgadg7ga",
	fifa: "https://forms.gle/argw7egw4edgawg6",
};

function Options() {
	return (
		<>
			<div className="flex flex-col md:grid md:grid-cols-2 md:w-[80%] xl:w-[56%] md:mx-auto gap-3">
				{games.map((game, idx) => (
					<a
						key={idx}
						href={googleFormLinks[game.i_name]}
						target="_blank"
						rel="noopener noreferrer"
						className="no-underline"
					>
						<BlurVignette
							key={idx}
							radius="15px"
							inset="100px"
							transitionLength="200px"
							blur="15px"
							classname="mx-3 md:mx-0"
						>
							<img
								src={`/assets/images/${game.i_name}.jpg`}
								alt="grid"
								className="mx-auto w-full relative aspect-square h-full object-cover"
							/>
							<BlurVignetteArticle classname="h-[35%] w-[96%] ml-2 mt-auto mb-1 border border-gray-900/20 rounded-xl text-white ">
								<article className="max-w-full max-h-full py-5 px-3">
									<h1 className="2xl:text-3xl text-2xl max-w-full max-h-full box-content text-ellipsis">
										{game.name}
									</h1>
									<p className="2xl:text-sm text-xs max-w-full max-h-full box-content text-ellipsis">
										{game.desc}
									</p>
								</article>
							</BlurVignetteArticle>
						</BlurVignette>
					</a>
				))}
			</div>
		</>
	);
}
export default Options;
