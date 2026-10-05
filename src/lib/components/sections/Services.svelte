<script>
    import ServiceCard from '$lib/components/ui/ServiceCard.svelte';
    import { translations } from '$lib/i18n/translations.js';
    import { language } from '$lib/stores/language.js';
    
    $: t = translations[$language].services;
    $: services = [
        { title: t.service1.title, description: t.service1.description },
        { title: t.service2.title, description: t.service2.description },
        { title: t.service3.title, description: t.service3.description },
        { title: t.service4.title, description: t.service4.description },
        { title: t.service5.title, description: t.service5.description },
        { title: t.service6.title, description: t.service6.description }
    ];
</script>

<section id="services" class="bg-theme-light section-pad">
    <div class="container">
        <h2 class="text-center">
            {t.title}
        </h2>
        <p class="text-theme-secondary mt-4 text-center text-lg w-full lg:w-[920px] mx-auto">
            {t.subtitle}
        </p>
        <div class="mx-auto my-8 h-1 w-24 bg-theme-accent"></div>
        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {#each services as service}
                <ServiceCard title={service.title} description={service.description}/>
            {/each}
        </div>
        <p class="mt-12 text-center text-lg ">
            {t.footer}
        </p>
    </div>
</section>
