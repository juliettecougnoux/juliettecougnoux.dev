<template>
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-32 right-20 w-80 h-80 bg-primary-peach/20 blob" />
            <div class="absolute bottom-40 left-10 w-96 h-96 bg-primary-purple/15 blob" style="animation-delay: 3s;" />
            <div class="absolute top-1/2 right-1/3 w-64 h-64 bg-primary-green/15 blob" style="animation-delay: 6s;" />
        </div>

        <div class="relative py-20 px-6">
            <div class="container mx-auto max-w-5xl">
                <div class="text-center mb-20">
                    <div class="relative inline-block">
                        <h1 class="text-5xl font-semibold text-primary-dark relative z-10 mb-2">
                            {{ $t('cv.title') }}
                        </h1>
                        <div class="absolute bottom-1 left-0 w-full h-4 bg-primary-peach/40 -rotate-2" />
                    </div>
                </div>

                <div class="space-y-24">
                    <section>
                        <div class="relative inline-block mb-12">
                            <h2 class="text-3xl font-semibold text-primary-dark relative z-10">
                                {{ $t('cv.experience') }}
                            </h2>
                            <div class="absolute bottom-1 left-0 w-full h-3 bg-primary-purple/30 rotate-2" />
                        </div>

                        <div class="relative">
                            <div
                                class="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-peach via-primary-purple to-primary-green" />

                            <div class="space-y-12">
                                <div v-for="(job, index) in experience" :key="job.id" class="relative pl-20 group">
                                    <div class="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110"
                                        :class="{
                                            'bg-primary-peach/20': index % 2 === 0,
                                            'bg-primary-purple/20': index % 2 === 1
                                        }">
                                        <div class="w-4 h-4 rounded-full" :class="{
                                            'bg-primary-peach': index % 2 === 0,
                                            'bg-primary-purple': index % 2 === 1
                                        }" />
                                    </div>

                                    <div class="bg-white rounded-3xl p-8 transition-all duration-300 group-hover:-translate-y-2"
                                        :class="{
                                            'shadow-[0_10px_40px_rgba(255,190,153,0.3)] hover:shadow-[0_15px_50px_rgba(255,190,153,0.5)]': index % 2 === 0,
                                            'shadow-[0_10px_40px_rgba(158,153,255,0.3)] hover:shadow-[0_15px_50px_rgba(158,153,255,0.5)]': index % 2 === 1
                                        }">
                                        <div class="flex flex-wrap justify-between items-start gap-4 mb-4">
                                            <h3 class="text-2xl font-semibold text-primary-dark">{{ job.title }}</h3>
                                            <span class="text-sm font-medium px-4 py-1.5 rounded-full" :class="{
                                                'bg-primary-peach/20 text-primary-peach': index % 2 === 0,
                                                'bg-primary-purple/20 text-primary-purple': index % 2 === 1
                                            }">
                                                {{ job.period }}
                                            </span>
                                        </div>
                                        <a v-if="job.website" :href="job.website" target="_blank" rel="noopener"
                                            class="inline-flex items-center gap-2 text-lg font-medium mb-4 hover:underline transition-all group/link"
                                            :class="{
                                                'text-primary-peach': index % 2 === 0,
                                                'text-primary-purple': index % 2 === 1
                                            }">
                                            {{ job.company }}
                                            <svg class="w-4 h-4 opacity-70 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                                                fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                        <p v-else class="text-lg font-medium mb-4" :class="{
                                            'text-primary-peach': index % 2 === 0,
                                            'text-primary-purple': index % 2 === 1
                                        }">
                                            {{ job.company }}
                                        </p>
                                        <ul class="space-y-2">
                                            <li v-for="(task, taskIndex) in job.tasks" :key="taskIndex"
                                                class="text-primary-dark/75 leading-relaxed font-light flex items-start gap-3">
                                                <span class="mt-1.5 text-lg flex-shrink-0" :class="{
                                                    'text-primary-peach': index % 2 === 0,
                                                    'text-primary-purple': index % 2 === 1
                                                }">•</span>
                                                <span>{{ task }}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="relative inline-block mb-12">
                            <h2 class="text-3xl font-semibold text-primary-dark relative z-10">
                                {{ $t('cv.education') }}
                            </h2>
                            <div class="absolute bottom-1 left-0 w-full h-3 bg-primary-green/30 -rotate-2" />
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div v-for="(edu, index) in education" :key="edu.id"
                                class="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2"
                                :class="{
                                    'shadow-[0_8px_30px_rgba(255,190,153,0.3)] hover:shadow-[0_12px_40px_rgba(255,190,153,0.5)]': index % 3 === 0,
                                    'shadow-[0_8px_30px_rgba(158,153,255,0.3)] hover:shadow-[0_12px_40px_rgba(158,153,255,0.5)]': index % 3 === 1,
                                    'shadow-[0_8px_30px_rgba(170,255,153,0.3)] hover:shadow-[0_12px_40px_rgba(170,255,153,0.5)]': index % 3 === 2
                                }">
                                <div class="absolute top-3 right-3 w-10 h-10 opacity-50">
                                    <svg viewBox="0 0 100 100">
                                        <circle v-if="index % 3 === 0" cx="50" cy="50" r="40" fill="#ffbe99" />
                                        <polygon v-else-if="index % 3 === 1" points="50,10 90,90 10,90"
                                            fill="#9e99ff" />
                                        <rect v-else x="10" y="10" width="80" height="80" fill="#aaff99" rx="15" />
                                    </svg>
                                </div>

                                <span class="inline-block text-xs font-medium px-3 py-1 rounded-full mb-3" :class="{
                                    'bg-primary-peach/20 text-primary-peach': index % 3 === 0,
                                    'bg-primary-purple/20 text-primary-purple': index % 3 === 1,
                                    'bg-primary-green/30 text-primary-dark': index % 3 === 2
                                }">
                                    {{ edu.year }}
                                </span>
                                <h3 class="text-lg font-semibold text-primary-dark mb-2 leading-snug">{{ edu.degree }}
                                </h3>
                                <p class="text-sm text-primary-dark/70 font-light">{{ edu.school }}</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div class="relative inline-block mb-12">
                            <h2 class="text-3xl font-semibold text-primary-dark relative z-10">
                                {{ $t('cv.skills') }}
                            </h2>
                            <div class="absolute bottom-1 left-0 w-full h-3 bg-primary-peach/30 rotate-2" />
                        </div>

                        <div class="bg-white rounded-3xl p-8 shadow-[0_10px_40px_rgba(255,190,153,0.2)]">
                            <div class="flex flex-wrap gap-3">
                                <span v-for="(skill, index) in skills" :key="skill"
                                    class="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md"
                                    :class="{
                                        'bg-primary-peach/15 text-primary-dark hover:bg-primary-peach/25': index % 3 === 0,
                                        'bg-primary-purple/15 text-primary-dark hover:bg-primary-purple/25': index % 3 === 1,
                                        'bg-primary-green/15 text-primary-dark hover:bg-primary-green/25': index % 3 === 2
                                    }">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { experience as experienceFr, education as educationFr } from '../../locales/cv.fr.js'
import { experience as experienceEn, education as educationEn } from '../../locales/cv.en.js'

const { locale } = useI18n()

const experience = computed(() => {
    return locale.value === 'fr' ? experienceFr : experienceEn
})

const education = computed(() => {
    return locale.value === 'fr' ? educationFr : educationEn
})

const skills = computed(() => {
    return [
        'Node.js',
        'NestJS',
        'Vue.js',
        'Nuxt.js',
        'React Native',
        'PostgreSQL',
        'MongoDB',
        'GRPC',
        'RabbitMQ',
        'TypeScript',
        'JavaScript',
        'PHP',
        'Symfony',
        'WordPress',
        'Divi',
        'Git',
        'Docker',
        'Tailwind CSS'
    ]
})
</script>
