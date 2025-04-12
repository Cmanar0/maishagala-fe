<template>
  <div class="space-y-16">
    <!-- Services Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6 text-primary-700">Our Services</h1>
          <p class="text-xl text-neutral-700">
            We specialize in creating impactful events that bring communities together, foster meaningful connections, and drive positive change.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Services -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-primary-700">Event Planning & Organization</h2>
            <p class="text-lg text-neutral-700 mb-6">
              At MaishaGala, we understand that every event is unique and requires a tailored approach. Our experienced team works closely with you to create events that align with your vision and objectives.
            </p>
            <p class="text-lg text-neutral-700 mb-6">
              Whether you're planning a corporate event, community gathering, or private celebration, we handle every detail to ensure a seamless and memorable experience for all attendees.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 mt-8">
              <UButton color="primary" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                Request a Quote
              </UButton>
              <UButton color="secondary" variant="soft" size="lg" to="/events" class="hover:opacity-90 active:opacity-100 transition-opacity">
                View Our Events
              </UButton>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-lg">
              <NuxtImg 
                src="/images/services-main.jpg" 
                alt="Event planning" 
                class="object-cover w-full h-full"
                placeholder
              />
            </div>
            <div class="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div class="flex items-center">
                <UIcon name="i-heroicons-calendar" class="w-8 h-8 text-primary-600 mr-3" />
                <div>
                  <p class="font-semibold text-neutral-900">Customized Events</p>
                  <p class="text-sm text-neutral-600">Tailored to your needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Categories -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">What We Offer</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            From concept to execution, we provide comprehensive event planning and organization services for various occasions.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-building-office" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Corporate Events</h3>
              </div>
            </template>
            <p class="text-neutral-700 mb-4">
              Professional events designed to strengthen team bonds, celebrate achievements, and foster company culture.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Team building workshops</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Corporate retreats</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Product launches</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Annual meetings</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-user-group" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Community Events</h3>
              </div>
            </template>
            <p class="text-neutral-700 mb-4">
              Meaningful gatherings that bring communities together, address local issues, and foster connections.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Community forums</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Wellness workshops</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Youth engagement programs</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Local development initiatives</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <template #header>
              <div class="flex items-center">
                <UIcon name="i-heroicons-heart" class="w-6 h-6 text-primary-600 mr-2" />
                <h3 class="text-xl font-semibold">Private Celebrations</h3>
              </div>
            </template>
            <p class="text-neutral-700 mb-4">
              Personalized events that create unforgettable moments for your special occasions.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Weddings</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Birthday celebrations</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Anniversary parties</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Family reunions</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Our Process -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Our Process</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            We follow a comprehensive approach to ensure your event is executed flawlessly.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">1</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Discovery</h3>
            <p class="text-neutral-700">
              We begin by understanding your vision, objectives, and requirements to create a tailored event plan.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">2</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Planning</h3>
            <p class="text-neutral-700">
              Our team develops a detailed plan, including venue selection, timeline, budget, and vendor coordination.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">3</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Execution</h3>
            <p class="text-neutral-700">
              We handle all aspects of the event, ensuring everything runs smoothly and according to plan.
            </p>
          </div>
          
          <div class="bg-white rounded-lg shadow-md p-6 text-center">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <span class="text-2xl font-bold">4</span>
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Follow-up</h3>
            <p class="text-neutral-700">
              After the event, we gather feedback and provide a comprehensive report to ensure continuous improvement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">What Our Clients Say</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            Hear from organizations and individuals who have experienced our event planning services.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="card-hover">
            <div class="flex items-center mb-4">
              <div class="bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-user" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary-700">Tanzania Development Trust</h3>
                <p class="text-neutral-600">Community Organization</p>
              </div>
            </div>
            <p class="text-neutral-700 italic mb-4">
              "MaishaGala organized our annual community forum with exceptional attention to detail. Their understanding of local issues and ability to bring diverse stakeholders together was impressive."
            </p>
            <div class="flex text-secondary-500">
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
            </div>
          </UCard>
          
          <UCard class="card-hover">
            <div class="flex items-center mb-4">
              <div class="bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-building-office-2" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary-700">Dar es Salaam Chamber of Commerce</h3>
                <p class="text-neutral-600">Business Association</p>
              </div>
            </div>
            <p class="text-neutral-700 italic mb-4">
              "The team at MaishaGala delivered an outstanding corporate retreat for our members. Their professionalism, creativity, and attention to detail made the event a resounding success."
            </p>
            <div class="flex text-secondary-500">
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
            </div>
          </UCard>
          
          <UCard class="card-hover">
            <div class="flex items-center mb-4">
              <div class="bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-heart" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary-700">Sarah & John Mwambene</h3>
                <p class="text-neutral-600">Wedding Clients</p>
              </div>
            </div>
            <p class="text-neutral-700 italic mb-4">
              "MaishaGala created the wedding of our dreams. They understood our vision perfectly and executed every detail flawlessly. Our guests still talk about how beautiful and meaningful the celebration was."
            </p>
            <div class="flex text-secondary-500">
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
              <UIcon name="i-heroicons-star" class="w-5 h-5" />
            </div>
          </UCard>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-8 md:p-12">
              <h2 class="text-3xl font-bold mb-4 text-primary-700">Ready to Plan Your Event?</h2>
              <p class="text-lg text-neutral-700 mb-6">
                Let us help you create an unforgettable experience. Contact us today to discuss your event requirements and get a customized quote.
              </p>
              <UButton color="primary" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                Get in Touch
              </UButton>
            </div>
            <div class="bg-primary-100 p-8 md:p-12 flex items-center justify-center">
              <UIcon name="i-heroicons-calendar-days" class="w-24 h-24 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Our Services',
  description: 'Discover MaishaGala\'s comprehensive event planning and organization services for corporate, community, and private events.',
})
</script> 