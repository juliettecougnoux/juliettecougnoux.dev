<template>
    <header class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-primary-purple/20">
        <div class="container mx-auto px-6 py-4">
            <div class="flex items-center justify-between">
                <NuxtLink to="/"
                    class="text-xl md:text-2xl font-serif font-semibold text-primary-dark hover:text-primary-purple transition-colors">
                    {{ $t('websiteName') }}
                </NuxtLink>

                <nav class="hidden md:flex items-center gap-8">
                    <NuxtLink :to="localePath('/')"
                        class="text-primary-dark hover:text-primary-purple transition-colors font-light text-sm"
                        active-class="!text-primary-purple font-medium">
                        {{ $t('nav.home') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/cv')"
                        class="text-primary-dark hover:text-primary-purple transition-colors font-light text-sm"
                        active-class="!text-primary-purple font-medium">
                        {{ $t('nav.cv') }}
                    </NuxtLink>
                    <NuxtLink :to="localePath('/contact')"
                        class="text-primary-dark hover:text-primary-purple transition-colors font-light text-sm"
                        active-class="!text-primary-purple font-medium">
                        {{ $t('nav.contact') }}
                    </NuxtLink>

                    <div class="flex gap-2 ml-4">
                        <button
                            :class="['px-3 py-1 rounded-md text-xs font-light transition-all',
                                locale === 'fr' ? 'bg-primary-purple text-white' : 'text-primary-dark hover:bg-primary-purple/10']"
                            @click="setLocale('fr')">
                            FR
                        </button>
                        <button
                            :class="['px-3 py-1 rounded-md text-xs font-light transition-all',
                                locale === 'en' ? 'bg-primary-purple text-white' : 'text-primary-dark hover:bg-primary-purple/10']"
                            @click="setLocale('en')">
                            EN
                        </button>
                    </div>
                </nav>

                <button @click="mobileMenuOpen = !mobileMenuOpen"
                    class="md:hidden p-2 text-primary-dark hover:text-primary-purple transition-colors">
                    <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <div v-if="mobileMenuOpen"
                class="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-primary-purple/20 pt-4">
                <NuxtLink :to="localePath('/')" @click="mobileMenuOpen = false"
                    class="text-primary-dark hover:text-primary-purple transition-colors font-light"
                    active-class="!text-primary-purple font-medium">
                    {{ $t('nav.home') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/cv')" @click="mobileMenuOpen = false"
                    class="text-primary-dark hover:text-primary-purple transition-colors font-light"
                    active-class="!text-primary-purple font-medium">
                    {{ $t('nav.cv') }}
                </NuxtLink>
                <NuxtLink :to="localePath('/contact')" @click="mobileMenuOpen = false"
                    class="text-primary-dark hover:text-primary-purple transition-colors font-light"
                    active-class="!text-primary-purple font-medium">
                    {{ $t('nav.contact') }}
                </NuxtLink>

                <div class="flex gap-2 pt-2 border-t border-primary-purple/20">
                    <button
                        :class="['px-3 py-1 rounded-md text-xs font-light transition-all',
                            locale === 'fr' ? 'bg-primary-purple text-white' : 'text-primary-dark hover:bg-primary-purple/10']"
                        @click="setLocale('fr')">
                        FR
                    </button>
                    <button
                        :class="['px-3 py-1 rounded-md text-xs font-light transition-all',
                            locale === 'en' ? 'bg-primary-purple text-white' : 'text-primary-dark hover:bg-primary-purple/10']"
                        @click="setLocale('en')">
                        EN
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const localePath = useLocalePath()
const mobileMenuOpen = ref(false)
</script>