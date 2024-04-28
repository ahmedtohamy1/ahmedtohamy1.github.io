<script lang="ts"> 
    import type { Writable } from "svelte/store";

    import Footer from "$lib/Footer.svelte";
    import About from "$lib/index/About.svelte";
    import Donate from "$lib/index/Donate.svelte";
    import Highlights from "$lib/index/Highlights.svelte";
    import Experience from "$lib/index/Experience.svelte";
    import Projects from "$lib/index/Projects.svelte";
    import Navbar from "$lib/Navbar.svelte";
    import SnapScroll from "$lib/SnapScroll.svelte";
	import { browser } from "$app/environment";

    let mount = browser;

    const sections = [
        "about", "experience",
        "projects", "highlights", "donate"
    ];

    let innerHeight: number;
    let position: Writable<number>;
    let active: { [key: number]: boolean } = {};
</script>

<svelte:window bind:innerHeight></svelte:window>

<svelte:head>
    <title>Ahmed Tohamy</title>
</svelte:head>

{#each sections as section}<div id={section}/>{/each}

<div class="wrapper" class:mount>
    <Navbar bind:position={$position}/>
    <main class="h-screen">
        <SnapScroll {sections} height={innerHeight} bind:position bind:active>
            <About active={mount && active[0]}/>
            <Experience active={mount && active[1]}/>
            <Projects active={mount && active[2]}/>
            <Highlights active={mount && active[3]}/>
            <Donate active={mount && active[4]}/>
        </SnapScroll>
    </main>
    <Footer/>
</div>

<style lang="postcss">
    .wrapper {
        @apply transition-opacity duration-1000 opacity-0;
    }

    .wrapper.mount {
        opacity: 1;
    }
</style>

