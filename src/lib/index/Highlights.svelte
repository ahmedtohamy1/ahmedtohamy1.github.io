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
    <p>
    You can contact me at following providers. I will try to respond as fast as i can. I promise
    </p>

<ul>
<li>app</li>
<li>oranges</li>
<li>bananas</li>
</ul>

    <div class="links">
	<ul>
	<li>app</li>
	<li>oranges</li>
	<li>bananas</li>
	</ul>
    </div>
<p>  
 
 

	
</p>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-10 px-10;
    }

    section > h1, section > p {
        @apply transition-[transform,opacity] transform-gpu opacity-0;
    }

    section > h1 {
        @apply sm:text-4xl text-3xl translate-x-20;
    }

    section > p {
        @apply font-inter max-w-md sm:text-lg text-base -translate-x-20;
    }

    section.active > h1, section.active > p {
        @apply delay-300 duration-1000 translate-x-0 opacity-100;
    }

    .links {
        @apply flex gap-x-2 flex-wrap;
    }

    .links ul {
        @apply flex items-center gap-x-2 font-inter tracking-wider font-semibold
            border-white dark:border-black/20 border-[1px] rounded-lg px-3 py-1.5 
            bg-white/30 dark:bg-black/30
            transition-[transform,opacity] opacity-0 
            transform-gpu translate-y-10;
    }

    section.active .links ul {
        @apply duration-1000 opacity-100 translate-y-0;
    }

    section.active .links a:nth-child(1) { @apply delay-[400ms]; }
    section.active .links a:nth-child(2) { @apply delay-[500ms]; }
</style>
