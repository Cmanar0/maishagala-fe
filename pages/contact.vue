<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div class="space-y-6">
      <h1 class="text-2xl font-bold text-gray-900">Contact Us</h1>
      <p class="text-gray-600">Have questions or feedback? We'd love to hear from you.</p>
      
      <UCard class="shadow-sm">
        <form class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <UInput v-model="name" placeholder="John Doe" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <UInput v-model="email" placeholder="john@example.com" type="email" />
          </div>
          
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
            <UTextarea v-model="message" placeholder="How can we help you?" :rows="4" />
          </div>
          
          <UButton 
            color="primary" 
            class="w-full md:w-auto"
            @click.prevent="submit" 
          >
            Send Message
          </UButton>
        </form>
      </UCard>
    </div>
    
    <div class="space-y-6">
      <h2 class="text-xl font-semibold text-gray-900">Our Location</h2>
      <div class="bg-gray-100 rounded-lg overflow-hidden h-64 md:h-80">
        <NuxtImg 
          src="/images/fely.jpg" 
          width="600" 
          height="300" 
          alt="Location Map" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="bg-gray-50 p-4 rounded-lg">
        <h3 class="font-medium text-gray-900 mb-2">Contact Information</h3>
        <ul class="space-y-2 text-gray-600">
          <li class="flex items-center">
            <UIcon name="i-heroicons-envelope" class="mr-2 text-gray-500" />
            <span>info@maishagala.com</span>
          </li>
          <li class="flex items-center">
            <UIcon name="i-heroicons-phone" class="mr-2 text-gray-500" />
            <span>+1 (555) 123-4567</span>
          </li>
          <li class="flex items-center">
            <UIcon name="i-heroicons-map-pin" class="mr-2 text-gray-500" />
            <span>123 Main Street, City, Country</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'Contact',
  description: 'Reach out to us using the form below',
})

const name = ref('')
const email = ref('')
const message = ref('')

const submit = () => {
  console.log({ name: name.value, email: email.value, message: message.value })
}
</script>
