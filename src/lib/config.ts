import {
	faCss3,
	faCuttlefish,
	faHtml5,
	faJava,
	faJs,
	faPhp,
	faAndroid,
	faGithub,
	faPython
} from "@fortawesome/free-brands-svg-icons";
import type { License, Project } from "./types";

export const EMAIL = "1ahmed.tohamy@gmail.com";

export const DISCORD_URL = "https://discordapp.com/users/1060279523511369729";
export const GITHUB_URL = "https://github.com/ahmedtohamy1";
export const GITLAB_URL = "https://gitlab.com/ahmedtohamy";
export const TWITTER_URL = "https://twitter.com/_ahmedtohamy";
export const TWITCH_URL = "https://en.wikipedia.org/wiki/HTTP_404";
export const YOUTUBE_URL = "https://en.wikipedia.org/wiki/HTTP_404";
export const FB_URL = "https://www.facebook.com/ahmed.tohamy.0";
export const IG_URL = "https://www.instagram.com/ahmed.tuhamy";
export const TG_URL = "https://www.t.me/ahmed_tohamy";
export const LI_URL = "https://www.linkedin.com/in/ahmedtohamy";

export const EXPERIENCE_LANGS = [
	{
		name: "Git",
		perc: "98%",
		icon: faGithub
	},
        {
                name: "Python",
                perc: "90%",
                icon: faPython
        },
        {
                name: "Java",
                perc: "75%",
                icon: faJava
        },
        {
                name: "C, C++, C#",
                perc: "65%",
                icon: faCuttlefish
        },
        {
                name: "HTML",
                perc: "60%",
                icon: faHtml5
        },
        {
                name: "JavaScript, TypeScript",
                perc: "30%",
                icon: faJs
        },
        {
                name: "Kotlin (Currently Learning)",
                perc: "15%",
                icon: faAndroid
        },
];

export const LICENSES = {
	mit: {
		name: "MIT License",
		short: "MIT"
	},
        "LICENSE-2.0": {
                name: "LICENSE-2.0 apache",
                short: "LICENSE-2.0"
        },
	"gpl-3.0": {
		name: "GNU General Public License v3",
		short: "GNU GPLv3"
	}
} as { [key: string]: License };

export const EXTERNAL_LICENSE_URL = "https://www.apache.org/licenses/";

export const PROJECTS = [
	{
		title: "VoidUI",
		description: "Minimal preformance efficient Custom rom entirely opensource.",
		license: "LICENSE-2.0",
		repo: "VoidUI-Tiramisu"
	},
        {
                title: "MI 10T Sources",
                description: "Android 13 ready trees for my nowadays used device entirely opensource.",
                license: "LICENSE-2.0",
                repo: "ApolloTrees"
        }
] as Project[];
