<template>
  <div class="space-y-16">
    <!-- About Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6 text-primary-700">About MaishaGala</h1>
          <p class="text-xl text-neutral-700">
            We're on a mission to inspire growth and empower communities through impactful events and meaningful connections.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              <NuxtImg 
                src="/images/about-story.jpg" 
                alt="MaishaGala team" 
                class="object-cover w-full h-full"
                placeholder
              />
            </div>
            <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div class="flex items-center">
                <UIcon name="i-heroicons-sparkles" class="w-8 h-8 text-secondary-500 mr-3" />
                <div>
                  <p class="font-semibold text-neutral-900">Founded in 2023</p>
                  <p class="text-sm text-neutral-600">In Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-6 text-primary-700">Our Story</h2>
            <p class="text-lg text-neutral-700 mb-6">
              MaishaGala was born from a simple yet powerful idea: that communities thrive when people come together to share experiences, learn from one another, and work toward common goals.
            </p>
            <p class="text-lg text-neutral-700 mb-6">
              Founded in 2023 in Dar es Salaam, Tanzania, our organization has grown from a small team of passionate individuals to a dynamic force for positive change in the region.
            </p>
            <p class="text-lg text-neutral-700">
              We believe that by creating spaces for meaningful dialogue and connection, we can address the everyday challenges faced by communities and inspire personal and collective growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Mission & Vision -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="bg-white rounded-lg shadow-md p-8">
            <div class="flex items-center mb-6">
              <div class="bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-flag" class="w-6 h-6" />
              </div>
              <h2 class="text-2xl font-bold text-primary-700">Our Mission</h2>
            </div>
            <p class="text-lg text-neutral-700 mb-4">
              To enhance regional development and personal growth by creating impactful events that address the everyday challenges faced by communities.
            </p>
            <p class="text-lg text-neutral-700">
              We aim to foster dialogue and solutions around key societal issues, promoting mental health, personal well-being, and community engagement.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-8">
            <div class="flex items-center mb-6">
              <div class="bg-secondary-100 text-secondary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-eye" class="w-6 h-6" />
              </div>
              <h2 class="text-2xl font-bold text-primary-700">Our Vision</h2>
            </div>
            <p class="text-lg text-neutral-700 mb-4">
              To be the leading platform for community engagement and development in Tanzania, creating lasting positive change through meaningful events and connections.
            </p>
            <p class="text-lg text-neutral-700">
              We envision a future where communities are empowered to address their challenges, where individuals have the support and resources they need to thrive, and where collaboration drives regional progress.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Our Team</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            Meet the passionate individuals behind MaishaGala who are dedicated to making a difference in our communities.
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-neutral-100">
              <NuxtImg 
                src="/images/team-1.jpg" 
                alt="Team member" 
                class="w-full h-full object-cover"
                placeholder
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-1 text-primary-700">Felicity Mwambene</h3>
              <p class="text-secondary-600 mb-4">Founder & CEO</p>
              <p class="text-neutral-700 mb-4">
                With over 10 years of experience in community development, Felicity founded MaishaGala to create spaces for meaningful dialogue and connection.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                  <UIcon name="i-heroicons-linkedin" class="w-5 h-5" />
                </a>
                <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                  <UIcon name="i-heroicons-twitter" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-neutral-100">
              <NuxtImg 
                src="/images/team-2.jpg" 
                alt="Team member" 
                class="w-full h-full object-cover"
                placeholder
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-1 text-primary-700">John Mwambene</h3>
              <p class="text-secondary-600 mb-4">Events Director</p>
              <p class="text-neutral-700 mb-4">
                John brings his expertise in event planning and community engagement to ensure our events are impactful and memorable.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                  <UIcon name="i-heroicons-linkedin" class="w-5 h-5" />
                </a>
                <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                  <UIcon name="i-heroicons-twitter" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <div class="h-64 bg-neutral-100">
              <NuxtImg 
                src="/images/team-3.jpg" 
                alt="Team member" 
                class="w-full h-full object-cover"
                placeholder
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-1 text-primary-700">Sarah Mwambene</h3>
              <p class="text-secondary-600 mb-4">Community Relations</p>
              <p class="text-neutral-700 mb-4">
                Sarah works closely with local communities to understand their needs and ensure our events address relevant issues.
              </p>
              <div class="flex space-x-3">
                <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                  <UIcon name="i-heroicons-linkedin" class="w-5 h-5" />
                </a>
                <a href="#" class="text-neutral-500 hover:text-primary-600 transition-colors">
                  <UIcon name="i-heroicons-twitter" class="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partners -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Our Partners</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            We collaborate with organizations and individuals who share our vision for community development and positive change.
          </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center">
            <NuxtImg 
              src="/images/partner-1.png" 
              alt="Partner logo" 
              class="max-h-16"
              placeholder
            />
          </div>
          <div class="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center">
            <NuxtImg 
              src="/images/partner-2.png" 
              alt="Partner logo" 
              class="max-h-16"
              placeholder
            />
          </div>
          <div class="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center">
            <NuxtImg 
              src="/images/partner-3.png" 
              alt="Partner logo" 
              class="max-h-16"
              placeholder
            />
          </div>
          <div class="bg-white rounded-lg shadow-sm p-6 flex items-center justify-center">
            <NuxtImg 
              src="/images/partner-4.png" 
              alt="Partner logo" 
              class="max-h-16"
              placeholder
            />
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
              <h2 class="text-3xl font-bold mb-4 text-primary-700">Join Our Mission</h2>
              <p class="text-lg text-neutral-700 mb-6">
                Whether you're interested in attending our events, partnering with us, or supporting our cause, we'd love to hear from you.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <UButton color="primary" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                  Get in Touch
                </UButton>
                <UButton color="secondary" variant="soft" size="lg" to="/membership" class="hover:opacity-90 active:opacity-100 transition-opacity">
                  Become a Member
                </UButton>
              </div>
            </div>
            <div class="bg-primary-100 p-8 md:p-12 flex items-center justify-center">
              <UIcon name="i-heroicons-user-group" class="w-24 h-24 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About Us',
  description: 'Learn about MaishaGala\'s mission, vision, and the team behind our community-focused events.',
})
</script> 