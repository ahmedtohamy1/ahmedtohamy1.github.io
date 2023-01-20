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
    Some of my previous experinces including titles and time periods passed in it: <br>
    </p>

    <div class="links">
	<ol>
	<li>one</li>
	<li>two</li>
	<li>three</li>
	<li>four</li>
	<li>five</li>
	<li>six</li>
	<li>seven</li>
	<li>eight</li>
	<li>nine</li>
	<li>ten</li>
	<li>eleven</li>
	<li>twelve</li>
	</ol>
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

ol {
	list-style-type: none;
	counter-reset: li;
}
li {
	font-size: 2rem;
}

li:before {
  counter-increment: li;
  content: counter(li, decimal-leading-zero);
	color: red;
	margin-right: 0.3em;
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

    .links ol {
        @apply flex items-center gap-x-2 font-inter tracking-wider justify-center flex-col
            border-white dark:border-black/20 border-[1px] rounded-lg px-3 py-1.5 
            bg-white/30 dark:bg-black/30
            transition-[transform,opacity] opacity-0 
            transform-gpu translate-y-10;
    }

    section.active .links ol {
        @apply duration-1000 opacity-100 translate-y-0;
    }

    section.active .links a:nth-child(1) { @apply delay-[400ms]; }
    section.active .links a:nth-child(2) { @apply delay-[500ms]; }
</style>
