<script lang="ts">
	import { DISCORD_URL, GITHUB_URL, GITLAB_URL, TWITCH_URL, TWITTER_URL, YOUTUBE_URL, FB_URL, IG_URL, TG_URL, LI_URL, PAYPAL_URL, PATREON_URL } from "$lib/config";
    import { faDiscord, faGithub, faGitlab, faTwitch, faTwitter, faYoutube, faTelegram, faFacebook, faInstagram, faLinkedin, faPaypal, faPatreon, faViacoin } from "@fortawesome/free-brands-svg-icons";
    
    import FlyinText from "$lib/FlyinText.svelte";
	import Timesince from "$lib/Timesince.svelte";
    import Fa from "svelte-fa";
    export let active: boolean;
</script>

<svelte:head>
    {#if active}
        <title>Ahmed Tohamy | Donate</title>
    {/if}
</svelte:head>

<section class:active class="full">
    <h1>
        <FlyinText text="Donations" flyin={active} delay={300}/>
    </h1>
    <p>
	As a development professional, receiving a donation to help me with my work not only motivates me to work better, but also encourages me to put more effort into making things even better. With added support from donations, I can make sure that my efforts are worthwhile and can be seen in the success of the stuff I'm doing. It's invigorating for me to know that others believe in my skills and appreciate what I can achieve when I'm given extra support. From someone donating stationery supplies so that I have all the materials needed for coding and research, to someone investing in my talent and helping out with tuition costs - every donation helps lead towards an exciting future.
    </p>
    <div class="socials">
        <a href={PAYPAL_URL} target="_blank" rel="noreferrer" aria-label="Paypal">
            <Fa icon={faPaypal}/>
        </a>
        <a href={PATREON_URL} target="_blank" rel="noreferrer" aria-label="Github">
            <Fa icon={faPatreon}/>
        </a>
        <a href="tel:5554280940" target="_blank" rel="noreferrer" aria-label="Wallet">
            <Fa icon={faViacoin}/>
        </a>
    </div>
</section>

<style lang="postcss">
    section {
        @apply flex items-center justify-center flex-col gap-7 px-10 relative;
    }
    section > h1 {
        @apply sm:text-2xl text-2xl;
    }
    section > p {
        @apply font-inter max-w-2xl transition-[opacity,transform] 
            opacity-0 translate-y-10 scale-150 sm:text-lg text-base transform-gpu;
    }
    section.active > p {
        @apply delay-500 duration-1000 opacity-100 translate-y-0 scale-100;
    }
    .socials {
        --background: white;
        @apply flex sm:gap-5 gap-4 mt-2;
    }
    .socials a {
        @apply dark:text-white dark:hover:text-white/80 duration-300
              text-black hover:text-black/80 transition-colors 
              cursor-pointer text-3xl flex justify-center items-center;
    }
    .socials a {
        @apply transition-[transform,opacity] translate-y-5 opacity-0 transform-gpu;
    }
    
    section.active .socials a {
        @apply duration-1000 opacity-100 translate-y-0;
    }
    section.active .socials a:nth-child(0) { @apply delay-[800ms] }
    section.active .socials a:nth-child(1) { @apply delay-[850ms] }
    section.active .socials a:nth-child(2) { @apply delay-[900ms] }
    section.active .socials a:nth-child(3) { @apply delay-[950ms] }
</style>
