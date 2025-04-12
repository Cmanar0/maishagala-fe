<template>
  <div class="space-y-16">
    <!-- Hero Section -->
    <section class="relative py-16 md:py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-50 to-secondary-50 opacity-80"></div>
      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 heading-gradient">Inspiring Growth, Empowering Communities</h1>
          <p class="text-xl text-neutral-700 mb-8">
            MaishaGala is dedicated to enhancing regional development and personal growth by creating impactful events that address the everyday challenges faced by communities.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton color="primary" size="lg" to="/events" class="hover:opacity-90 active:opacity-100 transition-opacity">
              Explore Our Events
            </UButton>
            <UButton color="secondary" variant="soft" size="lg" to="/about" class="hover:opacity-90 active:opacity-100 transition-opacity">
              Learn More
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-primary-700">Our Mission</h2>
            <p class="text-lg text-neutral-700 mb-6">
              MaishaGala is dedicated to enhancing regional development and personal growth by creating impactful events that address the everyday challenges faced by communities.
            </p>
            <p class="text-lg text-neutral-700 mb-6">
              Our mission is to foster dialogue and solutions around key societal issues, promoting mental health, personal well-being, and community engagement.
            </p>
            <p class="text-lg text-neutral-700">
              Through collaboration with regional leaders, local politicians, and diverse stakeholders, we aim to inspire positive change and create platforms for meaningful interactions that drive progress and empower individuals.
            </p>
          </div>
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              <NuxtImg 
                src="/images/community.jpg" 
                alt="Community gathering" 
                class="object-cover w-full h-full"
                placeholder
              />
            </div>
            <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div class="flex items-center">
                <UIcon name="i-heroicons-user-group" class="w-8 h-8 text-primary-600 mr-3" />
                <div>
                  <p class="font-semibold text-neutral-900">Community Focused</p>
                  <p class="text-sm text-neutral-600">Empowering local communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Our Values</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            Our core values guide everything we do, from event planning to community engagement.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-users" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Community Empowerment</h3>
              </div>
            </template>
            <p class="text-neutral-700">
              We are committed to uplifting local communities by addressing relevant issues and fostering personal and collective growth.
            </p>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-building-office-2" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Regional Development</h3>
              </div>
            </template>
            <p class="text-neutral-700">
              Our events serve as a catalyst for regional progress, bringing attention to local challenges and opportunities for development.
            </p>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-hand-thumb-up" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Collaboration</h3>
              </div>
            </template>
            <p class="text-neutral-700">
              We actively engage with local leaders, politicians, and organizations to build partnerships that support and amplify our impact.
            </p>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-light-bulb" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Innovation</h3>
              </div>
            </template>
            <p class="text-neutral-700">
              We strive to offer fresh and creative solutions to societal problems, enhancing the quality of everyday life for our attendees.
            </p>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-fire" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Inspiration</h3>
              </div>
            </template>
            <p class="text-neutral-700">
              We aim to inspire change through our events, motivating individuals and communities to pursue personal and societal advancement.
            </p>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-globe-africa" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">National Impact</h3>
              </div>
            </template>
            <p class="text-neutral-700">
              We're expanding our footprint across Tanzania, building our reputation to influence positive societal changes on a national scale.
            </p>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Our Goals</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            MaishaGala aims to engage communities through impactful events focused on relevant local issues, attracting a network of influential stakeholders.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
            <div class="flex items-start">
              <div class="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="font-bold">01</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Strengthen Community Engagement</h3>
                <p class="text-neutral-700">
                  To significantly increase community participation by organizing inclusive events that cater to diverse groups within the community, fostering a stronger sense of belonging and engagement.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary-500">
            <div class="flex items-start">
              <div class="bg-secondary-100 text-secondary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="font-bold">02</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Cultivate Collaborative Networks</h3>
                <p class="text-neutral-700">
                  To build a robust network of partnerships with local leaders, businesses, and non-profits, enhancing our collective impact on regional development and community support.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary-500">
            <div class="flex items-start">
              <div class="bg-primary-100 text-primary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="font-bold">03</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Meaningful Dialogues</h3>
                <p class="text-neutral-700">
                  Organize events that foster active dialogue and collaboration between communities, local leaders, and businesses, ensuring environmental sustainability goes hand-in-hand with community empowerment and development.
                </p>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary-500">
            <div class="flex items-start">
              <div class="bg-secondary-100 text-secondary-700 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                <span class="font-bold">04</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">Scale Impact Nationally</h3>
                <p class="text-neutral-700">
                  Expand our footprint by hosting events in new cities each year, building our reputation to influence positive societal changes on a national scale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h2 class="text-3xl font-bold mb-4 text-primary-700">Ready to Make a Difference?</h2>
              <p class="text-lg text-neutral-700 mb-6">
                Join us in our mission to inspire growth and empower communities across Tanzania. Whether you're interested in attending our events, partnering with us, or supporting our cause, we'd love to hear from you.
              </p>
              <UButton color="primary" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                Get in Touch
              </UButton>
            </div>
            <div class="bg-primary-100 p-8 md:p-12 flex items-center justify-center">
              <UIcon name="i-heroicons-heart" class="w-24 h-24 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Home',
  description: 'Welcome to MaishaGala - Inspiring Growth, Empowering Communities',
})
</script>
