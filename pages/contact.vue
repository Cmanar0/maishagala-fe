<template>
  <div class="space-y-16">
    <!-- Contact Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6 text-primary-700">Contact Us</h1>
          <p class="text-xl text-neutral-700">
            Have questions or want to collaborate? We'd love to hear from you. Reach out to us using the form below or through our contact information.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form and Info -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold mb-6 text-primary-700">Send Us a Message</h2>
            <UCard class="shadow-md">
              <form class="space-y-6">
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-1">Your Name</label>
                  <UInput v-model="name" placeholder="John Doe" />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-1">Your Email</label>
                  <UInput v-model="email" placeholder="john@example.com" type="email" />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-1">Subject</label>
                  <UInput v-model="subject" placeholder="How can we help you?" />
                </div>
                
                <div>
                  <label class="block text-sm font-medium text-neutral-700 mb-1">Your Message</label>
                  <UTextarea v-model="message" placeholder="Please provide details about your inquiry..." :rows="4" />
                </div>
                
                <UButton 
                  color="primary" 
                  class="w-full md:w-auto hover:opacity-90 active:opacity-100 transition-opacity"
                  @click.prevent="submit" 
                >
                  Send Message
                </UButton>
              </form>
            </UCard>
          </div>
          
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl font-bold mb-6 text-primary-700">Get in Touch</h2>
            
            <div class="space-y-8">
              <!-- Office Location -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="h-64 bg-neutral-100">
                  <NuxtImg 
                    src="/images/fely.jpg" 
                    width="600" 
                    height="300" 
                    alt="Our Office Location" 
                    class="w-full h-full object-cover"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-lg font-semibold mb-2 text-primary-700">Our Office</h3>
                  <p class="text-neutral-700 mb-4">Visit us at our office in Dar es Salaam, Tanzania</p>
                  <div class="flex items-center text-neutral-600">
                    <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2 text-primary-600" />
                    <span>Dar es Salaam, Tanzania</span>
                  </div>
                </div>
              </div>
              
              <!-- Contact Details -->
              <UCard class="shadow-md">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-2 text-primary-600" />
                    <h3 class="text-lg font-semibold">Contact Information</h3>
                  </div>
                </template>
                <div class="space-y-4">
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-envelope" class="w-5 h-5 mr-3 text-primary-600" />
                    <div>
                      <p class="text-sm text-neutral-500">Email</p>
                      <p class="text-neutral-700">felicitypjm@gmail.com</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-3 text-primary-600" />
                    <div>
                      <p class="text-sm text-neutral-500">Phone</p>
                      <p class="text-neutral-700">+255 655 601 573</p>
                    </div>
                  </div>
                  
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-3 text-primary-600" />
                    <div>
                      <p class="text-sm text-neutral-500">Business Hours</p>
                      <p class="text-neutral-700">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </UCard>
              
              <!-- Social Media -->
              <UCard class="shadow-md">
                <template #header>
                  <div class="flex items-center">
                    <UIcon name="i-heroicons-globe-alt" class="w-5 h-5 mr-2 text-primary-600" />
                    <h3 class="text-lg font-semibold">Connect With Us</h3>
                  </div>
                </template>
                <div class="flex space-x-4">
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-facebook" class="w-5 h-5" />
                  </a>
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-twitter" class="w-5 h-5" />
                  </a>
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-instagram" class="w-5 h-5" />
                  </a>
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-linkedin" class="w-5 h-5" />
                  </a>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  title: 'Contact',
  description: 'Get in touch with MaishaGala - We\'d love to hear from you',
})

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const submit = () => {
  console.log({ name: name.value, email: email.value, subject: subject.value, message: message.value })
}
</script>
