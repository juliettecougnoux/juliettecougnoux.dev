<template>
    <footer class="bg-primary-dark text-white/80 py-8 mt-auto">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4">
                <div class="flex flex-col md:flex-row items-center gap-4 text-sm">
                    <span>© {{ currentYear }} Juliette Cougnoux</span>
                    <span class="hidden md:inline text-white/40">•</span>
                    <NuxtLink 
                        to="/legal" 
                        class="hover:text-primary-peach transition-colors underline"
                    >
                        {{ $t('nav.legal') }}
                    </NuxtLink>
                </div>
                <div class="flex gap-6">
                    <a href="https://github.com/juliettecougnoux" target="_blank" rel="noopener"
                        class="hover:text-primary-purple transition-colors">
                        GitHub
                    </a>
                    <a href="https://gitlab.com/jcougnoux" target="_blank" rel="noopener"
                        class="hover:text-primary-purple transition-colors">
                        GitLab
                    </a>
                    <a href="https://www.linkedin.com/in/juliette-cougnoux/" target="_blank" rel="noopener"
                        class="hover:text-primary-purple transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>