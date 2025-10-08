<template>
    <div class="relative overflow-hidden">
        <div class="absolute inset-0 pointer-events-none">
            <div class="absolute top-20 right-20 w-80 h-80 bg-primary-peach/20 blob" />
            <div class="absolute bottom-20 left-10 w-96 h-96 bg-primary-purple/15 blob" style="animation-delay: 2s;" />
            <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-primary-green/15 blob" style="animation-delay: 4s;" />
        </div>

        <div class="relative py-20 px-6">
            <div class="container mx-auto max-w-3xl">
                <div class="text-center mb-16">
                    <div class="relative inline-block mb-4">
                        <h1 class="text-5xl font-semibold text-primary-dark relative z-10">
                            {{ $t('contact.title') }}
                        </h1>
                        <div class="absolute bottom-1 left-0 w-full h-4 bg-primary-peach/40 rotate-2" />
                    </div>
                    <p class="text-xl text-primary-purple font-light">
                        {{ $t('contact.subtitle') }}
                    </p>
                </div>

                <div class="grid gap-6">
                    <a :href="emailHref" @click.prevent="handleEmailClick"
                        class="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgba(158,153,255,0.3)] hover:shadow-[0_12px_40px_rgba(158,153,255,0.5)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                        <div
                            class="w-14 h-14 rounded-full bg-primary-purple/10 flex items-center justify-center group-hover:bg-primary-purple group-hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-primary-dark text-lg">{{ $t('contact.email') }}</h3>
                            <p class="text-primary-dark/70 font-light">{{ displayEmail }}</p>
                        </div>
                    </a>

                    <a :href="phoneHref" @click.prevent="handlePhoneClick"
                        class="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgba(170,255,153,0.3)] hover:shadow-[0_12px_40px_rgba(170,255,153,0.5)] transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                        <div
                            class="w-14 h-14 rounded-full bg-primary-green/10 flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-primary-dark text-lg">{{ $t('contact.phone') }}</h3>
                            <p class="text-primary-dark/70 font-light">{{ displayPhone }}</p>
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/juliette-cougnoux/" target="_blank" rel="noopener"
                        class="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgba(255,190,153,0.3)] hover:shadow-[0_12px_40px_rgba(255,190,153,0.5)] transition-all duration-300 hover:-translate-y-2 group">
                        <div
                            class="w-14 h-14 rounded-full bg-primary-peach/10 flex items-center justify-center group-hover:bg-primary-peach group-hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-primary-dark text-lg">{{ $t('contact.linkedin') }}</h3>
                            <p class="text-primary-dark/70 font-light">linkedin.com/in/juliette-cougnoux</p>
                        </div>
                    </a>

                    <a href="https://github.com/juliettecougnoux" target="_blank" rel="noopener"
                        class="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgba(158,153,255,0.3)] hover:shadow-[0_12px_40px_rgba(158,153,255,0.5)] transition-all duration-300 hover:-translate-y-2 group">
                        <div
                            class="w-14 h-14 rounded-full bg-primary-dark/10 flex items-center justify-center group-hover:bg-primary-dark group-hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-primary-dark text-lg">{{ $t('contact.github') }}</h3>
                            <p class="text-primary-dark/70 font-light">github.com/juliettecougnoux</p>
                        </div>
                    </a>

                    <a href="https://gitlab.com/jcougnoux" target="_blank" rel="noopener"
                        class="flex items-center gap-4 p-6 bg-white rounded-3xl shadow-[0_8px_30px_rgba(255,190,153,0.3)] hover:shadow-[0_12px_40px_rgba(255,190,153,0.5)] transition-all duration-300 hover:-translate-y-2 group">
                        <div
                            class="w-14 h-14 rounded-full bg-primary-brown/10 flex items-center justify-center group-hover:bg-primary-brown group-hover:text-white transition-colors">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path
                                    d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="font-semibold text-primary-dark text-lg">{{ $t('contact.gitlab') }}</h3>
                            <p class="text-primary-dark/70 font-light">gitlab.com/jcougnoux</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const { t: $t } = useI18n()

const decodeContact = (encoded: string): string => {
    return atob(encoded)
}

const emailEncoded = 'amNvdWdub3V4QGdtYWlsLmNvbQ=='
const phoneEncoded = 'KzMzNjEwMTA2MzU4'
const phoneDisplayEncoded = 'MDYgMTAgMTAgNjMgNTg='

const displayEmail = computed(() => decodeContact(emailEncoded))
const displayPhone = computed(() => decodeContact(phoneDisplayEncoded))

const emailHref = computed(() => `mailto:${decodeContact(emailEncoded)}`)
const phoneHref = computed(() => `tel:${decodeContact(phoneEncoded)}`)

const handleEmailClick = () => {
    window.location.href = emailHref.value
}

const handlePhoneClick = () => {
    window.location.href = phoneHref.value
}
</script>
