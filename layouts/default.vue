<template>
  <div class="min-h-screen flex flex-col bg-neutral-50">
    <header class="sticky top-0 z-50 bg-white shadow-sm">
      <div class="container-custom">
        <nav class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-semibold text-primary-700 flex items-center">
              <UIcon name="i-heroicons-sparkles" class="mr-2 text-secondary-500" />
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
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/events" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
            >
              Events
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
            >
              Services
            </NuxtLink>
            <NuxtLink 
              to="/membership" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-24 text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
            >
              Membership
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-20 text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
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
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Home
            </NuxtLink>
            <NuxtLink 
              to="/about" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              About
            </NuxtLink>
            <NuxtLink 
              to="/events" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Events
            </NuxtLink>
            <NuxtLink 
              to="/services" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Services
            </NuxtLink>
            <NuxtLink 
              to="/membership" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Membership
            </NuxtLink>
            <NuxtLink 
              to="/contact" 
              class="text-neutral-600 hover:text-primary-700 hover:bg-neutral-100 active:bg-neutral-200 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 w-full text-center"
              active-class="text-primary-700 bg-neutral-100 font-semibold"
              @click="mobileMenuOpen = false"
            >
              Contact
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <div class="container-custom py-8">
        <slot />
      </div>
    </main>

    <footer class="bg-white border-t border-neutral-200">
      <div class="container-custom py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-lg font-semibold text-primary-700 mb-4">MaishaGala</h3>
            <p class="text-neutral-600 mb-4">Inspiring Growth, Empowering Communities</p>
            <div class="flex space-x-4">
              <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                <UIcon name="i-heroicons-facebook" class="w-5 h-5" />
              </a>
              <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                <UIcon name="i-heroicons-twitter" class="w-5 h-5" />
              </a>
              <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                <UIcon name="i-heroicons-instagram" class="w-5 h-5" />
              </a>
              <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                <UIcon name="i-heroicons-linkedin" class="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-primary-700 mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="text-neutral-600 hover:text-primary-700 transition-colors">About Us</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/events" class="text-neutral-600 hover:text-primary-700 transition-colors">Events</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/services" class="text-neutral-600 hover:text-primary-700 transition-colors">Services</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/membership" class="text-neutral-600 hover:text-primary-700 transition-colors">Membership</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="text-neutral-600 hover:text-primary-700 transition-colors">Contact</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold text-primary-700 mb-4">Contact Us</h3>
            <ul class="space-y-2">
              <li class="flex items-start">
                <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-primary-600 mr-2 mt-0.5" />
                <span class="text-neutral-600">Dar es Salaam, Tanzania</span>
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-phone" class="w-5 h-5 text-primary-600 mr-2" />
                <span class="text-neutral-600">+255 655 601 573</span>
              </li>
              <li class="flex items-center">
                <UIcon name="i-heroicons-envelope" class="w-5 h-5 text-primary-600 mr-2" />
                <span class="text-neutral-600">felicitypjm@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-neutral-200 mt-8 pt-8 text-center">
          <p class="text-sm text-neutral-500">
            &copy; {{ new Date().getFullYear() }} MaishaGala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
