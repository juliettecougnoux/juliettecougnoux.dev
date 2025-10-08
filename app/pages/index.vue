<template>
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 right-10 w-72 h-72 bg-primary-peach/30 blob" />
            <div class="absolute bottom-40 left-10 w-96 h-96 bg-primary-purple/20 blob" style="animation-delay: 2s;" />
            <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-primary-green/70 blob" style="animation-delay: 4s;" />

            <svg class="absolute top-10 left-1/2 w-32 h-32 text-primary-peach opacity-40 spin-slow"
                viewBox="0 0 100 100">
                <polygon points="50,10 89,73 11,73" fill="none" stroke="currentColor" stroke-width="2" />
            </svg>

            <svg class="absolute bottom-32 right-1/3 w-40 h-40 text-primary-purple opacity-30 float"
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-dasharray="5,5" />
            </svg>
        </div>

        <section class="relative py-32 px-6 min-h-[90vh] flex items-center">
            <div class="container mx-auto max-w-6xl">
                <div class="grid md:grid-cols-2 gap-12 items-center">
                    <div class="relative flex flex-col items-center">
                        <div
                            class="absolute -top-8 -left-32 w-24 h-24 bg-primary-peach rounded-full opacity-70 blur-xl" />
                        <div
                            class="absolute -bottom-8 -right-12 w-32 h-32 bg-primary-purple rounded-full opacity-70 blur-2xl" />

                        <h1 class="text-6xl font-semibold text-primary-dark mb-6 relative leading-tight text-center">
                            {{ $t('home.title') }}
                            <svg class="absolute -top-56 w-60 h-60 text-primary-purple opacity-30"
                                viewBox="0 0 100 100">
                                <path d="M 20,50 Q 40,10 60,50 T 100,50" fill="none" stroke="currentColor"
                                    stroke-width="1" stroke-linecap="round" />
                            </svg>
                        </h1>

                        <div class="relative">
                            <div ref="subtitleBox"
                                class="relative draw-border h-70 w-70 rotate-45 flex items-center justify-center mt-20">
                                <p
                                    class="text-xl text-primary-dark/80 font-light px-6 py-4 rounded-lg relative z-10 font-sans -rotate-45 text-center">
                                    {{ $t('home.subtitle') }}
                                </p>
                                <svg class="absolute inset-0 w-full h-full pointer-events-none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" fill="none"
                                        stroke="#ffbe99" stroke-width="3" rx="24" pathLength="100" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div
                            class="w-full h-96 bg-gradient-to-br from-primary-peach via-primary-purple to-primary-green rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blob shadow-2xl" />

                        <div class="absolute inset-0 flex items-center justify-center">
                            <svg class="w-full h-full opacity-30" viewBox="0 0 400 400">
                                <polygon points="90,48 130,117 50,117" fill="none" stroke="white" stroke-width="2"
                                    opacity="0.4" />
                                <path d="M 150,280 Q 220,240 280,300 T 350,280" fill="none" stroke="white"
                                    stroke-width="2" stroke-dasharray="5,5" opacity="0.45" />
                                <circle cx="280" cy="150" r="60" fill="none" stroke="white" stroke-width="2"
                                    opacity="0.5" />
                                <rect x="30" y="200" width="150" height="150" fill="none" stroke="white"
                                    stroke-width="2" transform="rotate(25 125 275)" opacity="0.4" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="relative py-24 px-6 bg-gradient-to-br from-primary-peach/10 via-white to-primary-purple/10">
            <div
                class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-peach via-primary-purple to-primary-green" />

            <div class="container mx-auto max-w-6xl">
                <div class="text-center mb-12">
                    <div class="relative inline-block">
                        <h2 class="text-4xl font-semibold text-primary-dark relative z-10">
                            {{ $t('home.presentation.title') }}
                        </h2>
                        <div class="absolute bottom-1 left-0 w-full h-3 bg-primary-peach/40 rotate-2" />
                    </div>
                </div>

                <div class="grid md:grid-cols-3 gap-12 items-center mb-16">
                    <div class="relative">
                        <div class="w-72 h-72 rounded-full overflow-hidden border-2 border-primary-green shadow-2xl">
                            <img src="/juliette-cougnoux.jpeg" alt="Photo de profile de Juliette Cougnoux"
                                class="w-full h-full object-cover">
                        </div>
                        <div class="absolute -top-4 -right-4 w-20 h-20 bg-primary-purple/30 rounded-full blur-xl" />
                        <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-peach/30 rounded-full blur-xl" />
                    </div>

                    <div ref="aboutBox"
                        class="relative bg-white p-8 rounded-3xl shadow-xl border-2 border-primary-peach col-span-2">
                        <div class="absolute -top-4 -right-4 w-12 h-12 bg-primary-peach rounded-full opacity-70" />
                        <div class="absolute -bottom-3 -left-3 w-8 h-8 bg-primary-purple rounded-full opacity-60" />

                        <svg class="absolute top-4 left-4 w-10 h-10 text-primary-peach opacity-20 float"
                            viewBox="0 0 100 100">
                            <polygon points="50,10 89,73 11,73" fill="currentColor" />
                        </svg>

                        <p class="text-lg text-primary-dark/90 leading-relaxed relative z-10 font-sans font-light whitespace-pre-line text-justify"
                            v-html="$t('home.presentation.description')" />
                    </div>
                </div>

                <div
                    class="relative bg-gradient-to-br from-primary-purple/10 to-primary-peach/10 p-8 rounded-3xl border-2 border-primary-purple">
                    <h3 class="text-2xl font-semibold text-primary-purple mb-4">{{ $t('home.about.title') }}</h3>
                    <p class="text-lg text-primary-dark/90 leading-relaxed font-sans font-light whitespace-pre-line text-justify"
                        v-html="$t('home.about.description')" />
                </div>
            </div>
        </section>

        <section class="relative py-24 px-6 bg-gradient-to-br from-primary-purple/5 to-primary-green/5">

            <div class="container mx-auto max-w-7xl">
                <div class="text-center mb-16">
                    <div class="relative inline-block">
                        <h2 class="text-4xl font-semibold text-primary-dark relative z-10">
                            {{ $t('home.projects.title') }}
                        </h2>
                        <div class="absolute bottom-1 left-0 w-full h-3 bg-primary-purple/40 -rotate-2" />
                    </div>
                </div>

                <div class="flex flex-wrap gap-8 justify-center">
                    <div v-for="(project, index) in projects" :key="index"
                        class="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-4 w-full max-w-sm"
                        :class="{
                            'shadow-[0_10px_40px_rgba(255,190,153,0.5)] hover:shadow-[0_20px_60px_rgba(255,190,153,0.7)]': index % 3 === 0,
                            'shadow-[0_10px_40px_rgba(158,153,255,0.5)] hover:shadow-[0_20px_60px_rgba(158,153,255,0.7)]': index % 3 === 1,
                            'shadow-[0_10px_40px_rgba(170,255,153,0.5)] hover:shadow-[0_20px_60px_rgba(170,255,153,0.7)]': index % 3 === 2
                        }">
                        <div class="absolute top-3 right-3 w-12 h-12 z-10 opacity-80">
                            <svg viewBox="0 0 100 100" class="float drop-shadow-lg">
                                <polygon v-if="index % 3 === 0" points="50,10 90,90 10,90" fill="#ffbe99" />
                                <circle v-else-if="index % 3 === 1" cx="50" cy="50" r="40" fill="#9e99ff" />
                                <rect v-else x="10" y="10" width="80" height="80" fill="#aaff99" rx="15" />
                            </svg>
                        </div>

                        <div class="h-72 relative overflow-hidden border-b-4" :class="{
                            'border-primary-peach/30': index % 3 === 0,
                            'border-primary-purple/30': index % 3 === 1,
                            'border-primary-green/30': index % 3 === 2
                        }">
                            <div class="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                :class="{
                                    'bg-gradient-to-br from-primary-peach/20 to-transparent': index % 3 === 0,
                                    'bg-gradient-to-br from-primary-purple/20 to-transparent': index % 3 === 1,
                                    'bg-gradient-to-br from-primary-green/20 to-transparent': index % 3 === 2
                                }" />
                            <img v-if="project.image" :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div v-else class="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                                :class="{
                                    'bg-gradient-to-br from-primary-peach to-primary-purple': index % 3 === 0,
                                    'bg-gradient-to-br from-primary-purple to-primary-green': index % 3 === 1,
                                    'bg-gradient-to-br from-primary-green to-primary-peach': index % 3 === 2
                                }">
                                <svg class="w-full h-full" viewBox="0 0 200 200">
                                    <circle cx="50" cy="50" r="30" fill="white" opacity="0.5" />
                                    <rect x="120" y="30" width="50" height="50" fill="white" opacity="0.3"
                                        transform="rotate(45 145 55)" />
                                    <polygon points="100,120 140,180 60,180" fill="white" opacity="0.4" />
                                </svg>
                            </div>
                        </div>

                        <div class="p-6 relative">
                            <h3
                                class="text-xl font-semibold text-primary-dark mb-3 group-hover:text-primary-peach transition-colors">
                                {{ project.title }}
                            </h3>
                            <p
                                class="text-primary-dark/70 mb-4 leading-relaxed font-sans text-sm font-light text-justify">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span v-for="(tech, techIndex) in project.technologies" :key="tech"
                                    class="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md font-sans"
                                    :class="{
                                        'bg-primary-peach/15 text-primary-dark hover:bg-primary-peach/25': techIndex % 3 === 0,
                                        'bg-primary-purple/15 text-primary-dark hover:bg-primary-purple/25': techIndex % 3 === 1,
                                        'bg-primary-green/15 text-primary-dark hover:bg-primary-green/25': techIndex % 3 === 2
                                    }">
                                    {{ tech }}
                                </span>
                            </div>
                            <a v-if="project.link" :href="project.link" target="_blank" rel="noopener"
                                class="inline-flex items-center text-primary-purple hover:text-primary-peach font-medium transition-colors group/link font-sans text-sm">
                                {{ $t('home.projects.view') }}
                                <svg class="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform"
                                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Projets en cours -->
                <div v-if="ongoingProjects && ongoingProjects.length > 0" class="mt-20">
                    <div class="text-center mb-12">
                        <div class="relative inline-block">
                            <h3 class="text-3xl font-semibold text-primary-dark relative z-10">
                                {{ $t('home.projects.ongoing') }}
                            </h3>
                            <div class="absolute bottom-1 left-0 w-full h-3 bg-primary-green/40 rotate-2" />
                        </div>
                    </div>

                    <div class="flex flex-wrap gap-8 justify-center">
                        <div v-for="(project, index) in ongoingProjects" :key="index"
                            class="group relative bg-white rounded-3xl p-6 transition-all duration-300 hover:-translate-y-2 w-full max-w-sm shadow-[0_8px_30px_rgba(170,255,153,0.3)] hover:shadow-[0_12px_40px_rgba(170,255,153,0.5)]">
                            <div class="absolute top-3 right-3 w-10 h-10 opacity-60">
                                <svg viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="40" fill="#aaff99" />
                                </svg>
                            </div>

                            <div class="mb-3">
                                <span
                                    class="inline-block px-3 py-1 bg-primary-green/30 text-primary-dark text-xs font-medium rounded-full">
                                    {{ project.status }}
                                </span>
                            </div>

                            <h4
                                class="text-xl font-semibold text-primary-dark mb-3 group-hover:text-primary-peach transition-colors">
                                {{ project.title }}
                            </h4>
                            <p class="text-primary-dark/70 mb-4 leading-relaxed font-sans text-sm font-light">
                                {{ project.description }}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="(tech, techIndex) in project.technologies" :key="tech"
                                    class="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md font-sans"
                                    :class="{
                                        'bg-primary-peach/15 text-primary-dark hover:bg-primary-peach/25': techIndex % 3 === 0,
                                        'bg-primary-purple/15 text-primary-dark hover:bg-primary-purple/25': techIndex % 3 === 1,
                                        'bg-primary-green/15 text-primary-dark hover:bg-primary-green/25': techIndex % 3 === 2
                                    }">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <svg class="absolute bottom-0 left-0 w-full h-32 opacity-20" viewBox="0 0 1200 100"
                preserveAspectRatio="none">
                <path d="M 0,50 Q 300,0 600,50 T 1200,50 L 1200,100 L 0,100 Z" fill="#ffbe99" />
            </svg>
        </section>
    </div>
</template>

<script setup lang="ts">
import { projects as projectsFr, ongoingProjects as ongoingProjectsFr } from '../../locales/projects.fr.js'
import { projects as projectsEn, ongoingProjects as ongoingProjectsEn } from '../../locales/projects.en.js'

const { locale } = useI18n()

const subtitleBox = ref<HTMLElement | null>(null)
const aboutBox = ref<HTMLElement | null>(null)

onMounted(() => {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
            }
        })
    }, observerOptions)

    if (subtitleBox.value) {
        observer.observe(subtitleBox.value)
    }
    if (aboutBox.value) {
        observer.observe(aboutBox.value)
    }
})

const projects = computed(() => {
    return locale.value === 'fr' ? projectsFr : projectsEn
})

const ongoingProjects = computed(() => {
    return locale.value === 'fr' ? ongoingProjectsFr : ongoingProjectsEn
})
</script>