<template>
  <div class="min-h-screen flex flex-col bg-gray-50">
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-semibold text-gray-900">
              MaishaGala
            </NuxtLink>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden">
            <UButton 
              color="black" 
              variant="ghost" 
              icon="i-heroicons-bars-3" 
              class="text-gray-800 hover:bg-gray-200 active:bg-gray-300"
              @click="mobileMenuOpen = !mobileMenuOpen"
            />
          </div>
          
          <!-- Desktop navigation -->
          <div class="hidden md:flex gap-6">
            <NuxtLink 
              to="/" 
              class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-gray-900 bg-gray-100 font-semibold"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-gray-900 bg-gray-100 font-semibold"
            >
              Contact
            </NuxtLink>
          </div>
        </nav>
        
        <!-- Mobile menu -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4">
          <div class="flex flex-col space-y-2">
            <NuxtLink 
              to="/" 
              class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-gray-900 bg-gray-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-gray-600 hover:text-gray-900 hover:bg-gray-100 active:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-gray-900 bg-gray-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <slot />
      </div>
    </main>

    <footer class="bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-center text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} MaishaGala. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
