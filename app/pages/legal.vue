<template>
    <div class="min-h-screen bg-gradient-to-br from-primary-peach/10 via-primary-purple/10 to-primary-green/10 py-20">
        <div class="container mx-auto px-4 max-w-4xl">
            <!-- Titre -->
            <div class="text-center mb-16">
                <h1 class="text-5xl font-serif font-bold text-primary-dark mb-4">
                    {{ $t('legal.title') }}
                </h1>
                <p class="text-lg text-primary-dark/70">
                    {{ $t('legal.lastUpdated') }}
                </p>
            </div>

            <!-- Contenu -->
            <div class="bg-white rounded-3xl shadow-[0_8px_30px_rgba(94,89,128,0.15)] p-8 md:p-12 space-y-8">
                <!-- Section 1: Éditeur -->
                <section>
                    <h2 class="text-2xl font-serif font-semibold text-primary-dark mb-4 flex items-center gap-3">
                        <span class="text-3xl">📝</span>
                        {{ $t('legal.publisher') }}
                    </h2>
                    <div class="text-primary-dark/80 space-y-2 leading-relaxed">
                        <p><strong>{{ legalData.publisher.name }}</strong></p>
                        <p>{{ legalData.publisher.role }}</p>
                        <p>
                            Email :
                            <a :href="`mailto:${legalData.publisher.email}`"
                                class="text-primary-purple hover:text-primary-peach transition-colors">
                                {{ legalData.publisher.email }}
                            </a>
                        </p>
                        <p>Téléphone : {{ legalData.publisher.phone }}</p>
                    </div>
                </section>

                <!-- Section 2: Hébergement -->
                <section>
                    <h2 class="text-2xl font-serif font-semibold text-primary-dark mb-4 flex items-center gap-3">
                        <span class="text-3xl">🌐</span>
                        {{ $t('legal.hosting') }}
                    </h2>
                    <div class="text-primary-dark/80 space-y-2 leading-relaxed">
                        <p>{{ $t('legal.hostingIntro') }}</p>
                        <p>
                            <strong>{{ legalData.hosting.company }}</strong><br>
                            {{ legalData.hosting.address }}<br>
                            {{ legalData.hosting.city }}<br>
                            {{ legalData.hosting.country }}
                        </p>
                        <p>
                            Site web :
                            <a :href="legalData.hosting.website" target="_blank" rel="noopener noreferrer"
                                class="text-primary-purple hover:text-primary-peach transition-colors">
                                {{ legalData.hosting.website.replace('https://www.', '').replace('https://', '') }}
                            </a>
                        </p>
                    </div>
                </section>

                <!-- Section 3: Propriété intellectuelle -->
                <section>
                    <h2 class="text-2xl font-serif font-semibold text-primary-dark mb-4 flex items-center gap-3">
                        <span class="text-3xl">©</span>
                        {{ $t('legal.intellectual') }}
                    </h2>
                    <div class="text-primary-dark/80 space-y-2 leading-relaxed">
                        <p v-for="(paragraph, index) in legalData.intellectual.paragraphs" :key="index">
                            {{ paragraph }}
                        </p>
                    </div>
                </section>

                <!-- Section 4: Données personnelles -->
                <section>
                    <h2 class="text-2xl font-serif font-semibold text-primary-dark mb-4 flex items-center gap-3">
                        <span class="text-3xl">🔒</span>
                        {{ $t('legal.privacy') }}
                    </h2>
                    <div class="text-primary-dark/80 space-y-2 leading-relaxed">
                        <p>{{ legalData.privacy.intro }}</p>
                        <p><strong>{{ $t('legal.dataCollectedTitle') }}</strong></p>
                        <ul class="list-disc list-inside space-y-1 ml-4">
                            <li v-for="(item, index) in legalData.privacy.dataCollected" :key="index">
                                {{ item }}
                            </li>
                        </ul>
                        <p>
                            {{ legalData.privacy.contact }}
                            <a :href="`mailto:${legalData.publisher.email}`"
                                class="text-primary-purple hover:text-primary-peach transition-colors">
                                {{ legalData.publisher.email }}
                            </a>
                        </p>
                    </div>
                </section>

                <!-- Section 5: Cookies -->
                <section>
                    <h2 class="text-2xl font-serif font-semibold text-primary-dark mb-4 flex items-center gap-3">
                        <span class="text-3xl">🍪</span>
                        {{ $t('legal.cookies') }}
                    </h2>
                    <div class="text-primary-dark/80 space-y-2 leading-relaxed">
                        <p>{{ legalData.cookies.intro }}</p>
                        <ul class="list-disc list-inside space-y-1 ml-4">
                            <li v-for="(cookie, index) in legalData.cookies.types" :key="index">
                                <strong v-if="cookie.description">{{ cookie.name }}</strong>
                                <span v-if="!cookie.description">{{ cookie.name }}</span>
                                <span v-if="cookie.description"> : {{ cookie.description }}</span>
                            </li>
                        </ul>
                        <p>{{ legalData.cookies.deletion }}</p>
                    </div>
                </section>

                <!-- Section 6: Contact -->
                <section class="pt-4 border-t border-primary-purple/20">
                    <h2 class="text-2xl font-serif font-semibold text-primary-dark mb-4 flex items-center gap-3">
                        <span class="text-3xl">📧</span>
                        {{ $t('legal.contact') }}
                    </h2>
                    <div class="text-primary-dark/80 space-y-2 leading-relaxed">
                        <p>{{ legalData.contactLegal.intro }}</p>
                        <p>
                            Email :
                            <a :href="`mailto:${legalData.contactLegal.email}`"
                                class="text-primary-purple hover:text-primary-peach transition-colors">
                                {{ legalData.contactLegal.email }}
                            </a>
                        </p>
                    </div>
                </section>
            </div>

            <!-- Retour -->
            <div class="text-center mt-12">
                <NuxtLink to="/"
                    class="inline-flex items-center gap-2 text-primary-purple hover:text-primary-peach transition-colors duration-300 font-medium">
                    <span>←</span>
                    {{ $t('legal.backHome') }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { legalContent as legalContentFr } from '../../locales/legal.fr.js'
import { legalContent as legalContentEn } from '../../locales/legal.en.js'

const { locale } = useI18n()

const legalData = computed(() => {
    return locale.value === 'fr' ? legalContentFr : legalContentEn
})

useHead({
    title: 'Mentions Légales - Juliette Cougnoux',
    meta: [
        {
            name: 'description',
            content: 'Mentions légales du site juliettecougnoux.dev - Informations sur l\'éditeur, l\'hébergement et la protection des données personnelles.'
        }
    ]
})
</script>
