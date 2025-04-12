<template>
  <div class="space-y-8">
    <div class="text-center">
      <h1 class="text-3xl font-bold text-gray-900 mb-4">Welcome to MaishaGala</h1>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Your one-stop destination for all your needs. We provide quality services and products.
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <UCard class="shadow-sm">
        <template #header>
          <div class="flex items-center">
            <UIcon name="i-heroicons-home" class="mr-2 text-primary-500" />
            <h2 class="text-xl font-semibold">Our Services</h2>
          </div>
        </template>
        <p class="text-gray-600">We offer a wide range of services to meet your needs. Our team of experts is dedicated to providing the best solutions.</p>
        <div class="mt-4">
          <UButton color="primary" variant="soft">Learn More</UButton>
        </div>
      </UCard>
      
      <UCard class="shadow-sm">
        <template #header>
          <div class="flex items-center">
            <UIcon name="i-heroicons-user-group" class="mr-2 text-primary-500" />
            <h2 class="text-xl font-semibold">Our Team</h2>
          </div>
        </template>
        <p class="text-gray-600">Our team consists of experienced professionals who are passionate about delivering excellence in everything we do.</p>
        <div class="mt-4">
          <UButton color="primary" variant="soft">Meet the Team</UButton>
        </div>
      </UCard>
    </div>
    
    <div class="bg-primary-50 p-6 rounded-lg">
      <div class="flex flex-col md:flex-row items-center justify-between">
        <div class="mb-4 md:mb-0">
          <h3 class="text-xl font-semibold text-primary-900">Ready to get started?</h3>
          <p class="text-primary-700">Contact us today to learn more about our services.</p>
        </div>
        <UButton color="primary" to="/contact">Contact Us</UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description: 'Welcome to our homepage',
})
</script>
