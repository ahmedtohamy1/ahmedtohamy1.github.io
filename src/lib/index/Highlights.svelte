<script lang="ts">
	import { TG_URL, EMAIL } from "$lib/config";
	import { faTelegram } from "@fortawesome/free-brands-svg-icons";
	import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
	import Fa from "svelte-fa";

    export let active: boolean;
</script>

<svelte:head>
    {#if active}
        <title>Ahmed Tohamy | Highlights</title>
    {/if}
</svelte:head>

<section class="full" class:active>
    <h1>Highlights</h1>

<ul style="list-style-type:none;">
        <li>- Social Media Team at Xiaomi Egypt - 2019</li>
        <li>- Mi Home at Xiaomi Egypt - 2022 till now</li>
        <li>- Co-Founder & Core Developer at VoidUI Project - 2022 till now</li>
        <li>- Evolution X Project Maintainers Team - 2018 till now</li>
        <li>- PixelPlusUI Project Maintainers Team - 2021</li>
        <li>- Media Buyer & Marketer at Facebook - 2020</li>
        <li>- Campaign Manager at EDMark MENA - 2022 till now</li>
        <li>- Data Science Team Leader at GDSC BU - 2021</li>
        <li>- Social Media & Branding Team Leader at IEEE BUSB - 2021</li>
        <li>- Social Media & Branding Team at Enactus SFE - 2021</li>
        <li>- Social Media & Branding Team at Mikyal SFE - 2021</li>
    </ul>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-7 px-10;
    }

    section > h1 {
        @apply sm:text-4xl text-3xl translate-x-20;
    }

    section.active > ul {
        @apply duration-1000 font-inter flex items-center justify-center flex-col 
            border-white dark:border-white border-[1px] rounded-lg px-3 py-1.5
            bg-transparent dark:bg-transparent
            transition-[transform,opacity] opacity-0
            transform-gpu translate-y-10;
    }

    section.active > h1, section.active > ul {
        @apply delay-300 duration-1000 translate-x-0 opacity-100;
    }

    .links {
        @apply flex gap-x-2 flex-wrap;
    }

    .links ol {
        @apply flex items-center gap-x-2 font-inter tracking-wider justify-center flex-col flex-wrap justify-around m-8
            border-white dark:border-black/20 border-[1px] rounded-lg px-3 py-1.5 
            bg-white/30 dark:bg-sky-500/50
            transition-[transform,opacity] opacity-0 
            transform-gpu translate-y-10;
    }

    section.active .links ol {
        @apply duration-1000 opacity-100 translate-y-0;
    }

    section.active .links a:nth-child(1) { @apply delay-[400ms]; }
    section.active .links a:nth-child(2) { @apply delay-[500ms]; }
</style>
