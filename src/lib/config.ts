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
	"gpl-3.0": {
		name: "GNU General Public License v3",
		short: "GNU GPLv3"
	}
} as { [key: string]: License };

export const EXTERNAL_LICENSE_URL = "https://oss.kotw.dev/licenses/?id=";

export const PROJECTS = [
	{
		title: "VoidUI",
		description: "Minimal preformance efficient Custom rom entirely opensource.",
		license: "mit",
		repo: "VoidUI-Tiramisu/manifest",
	},
	{
		title: "UnicodeExplorer",
		description: "A tool, with which you can explore the unicode landscape.",
		license: "mit",
		repo: "KekOnTheWorld/UnicodeExplorer",
		demo: "https://kotw.dev/UnicodeExplorer"
	},
	{
		title: "VoxelGeometry",
		description: "Voxel shape Demos written with plain JS and HTML.",
		license: "mit",
		repo: "KekOnTheWorld/VoxelGeometry",
		demo: "https://kotw.dev/VoxelGeometry"
	},
	{
		title: "svelte-ogl",
		description: "A typed port of OGL (Open graphics library) to svelte using components. ",
		license: "mit",
		repo: "KotwOSS/svelte-ogl",
		demo: "https://oss.kotw.dev/svelte-ogl"
	},
	{
		title: "kekupload-server",
		description:
			"A backend providing a HTTP REST like interface for uploading files written in rust.",
		license: "mit",
		fork: "KotwOSS/kekupload-server",
		repo: "KekOnTheWorld/kekupload-server",
		demo: "https://upload.gamepowerx.com"
	},
	{
		title: "kekupload-client",
		description: "Frontend made for KekUpload written using SvelteKit.",
		license: "mit",
		fork: "KotwOSS/kekupload-client",
		repo: "KekOnTheWorld/kekupload-client",
		demo: "https://upload.gamepowerx.com"
	},
	{
		title: "kekupload-lib-ts",
		description: "A library for KekUpload written in typescript.",
		license: "mit",
		fork: "KotwOSS/kekupload-lib-ts",
		repo: "KekOnTheWorld/kekupload-lib-ts",
		demo: "https://upload.gamepowerx.com"
	},
	{
		title: "kekupload-cli",
		description: "A CLI client made for KekUpload.",
		license: "mit",
		fork: "CraftingDragon007/KekUploadCLIClient",
		repo: "KekOnTheWorld/kekupload-cli"
	},
	{
		title: "ReSVG",
		description: "ReSVG is a advanced SVG compiler which includes many features.",
		license: "mit",
		fork: "KotwOSS/resvg",
		repo: "KekOnTheWorld/resvg"
	},
	{
		title: "Kock Themes",
		description: "Kock themes are made for real KEKs just like you and me.",
		license: "mit",
		fork: "KotwOSS/kock-themes",
		repo: "KekOnTheWorld/kock-themes",
		demo: "https://marketplace.visualstudio.com/items?itemName=kotwoss.kock-themes"
	},
	{
		title: "Keks Helper",
		description: "A moderation and utility Discord Bot.",
		license: "mit",
		repo: "KekOnTheWorld/keks-helper",
		demo: DISCORD_URL
	},
	{
		title: "Port control",
		description: "Webinterface made for the ESP32 Development board to test circuits.",
		license: "mit",
		repo: "KekOnTheWorld/portcontrol"
	},
	{
		title: "Local account",
		description: "Create accounts using localStorage.",
		license: "mit",
		repo: "KekOnTheWorld/localaccount",
		demo: "https://kotw.dev/localaccount"
	},
	{
		title: "Sample page",
		description: "Sample html page to put on an otherwise empty file server.",
		license: "mit",
		repo: "KekOnTheWorld/sample-page",
		demo: "https://kotw.dev/sample-page"
	},
	{
		title: "MINHttp",
		description: "Minimize bandwith by transcoding the HTML in a more efficient standart.",
		license: "mit",
		repo: "KekOnTheWorld/MINHttp",
		archive: true
	},
	{
		title: "Kekson",
		description: "What happens if you order Gson on wish?",
		license: "gpl-3.0",
		repo: "KekOnTheWorld/Kekson",
		archive: true
	},
	{
		title: "TVideo",
		description: "A videoplayer for your terminal. (Embedded)",
		license: "mit",
		repo: "KekOnTheWorld/TVideo",
		archive: true
	},
	{
		title: "Essentials",
		description: "Opensource essentials plugin made for learning purposes.",
		license: "mit",
		repo: "KekOnTheWorld/Essentials",
		archive: true
	}
] as Project[];
