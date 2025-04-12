<template>
  <div class="space-y-16">
    <!-- Event Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6 text-primary-700">Our Events</h1>
          <p class="text-lg text-neutral-700">
            Discover our upcoming and past events, designed to inspire, educate, and bring communities together.
          </p>
        </div>
      </div>
    </section>

    <!-- Event Filters -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-wrap justify-center gap-3">
            <UButton
              v-for="filter in filters"
              :key="filter.value"
              :color="selectedFilter === filter.value ? 'primary' : 'gray'"
              variant="soft"
              class="px-4 py-2"
              @click="selectedFilter = filter.value"
            >
              {{ filter.label }}
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Events List -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mb-8 text-primary-700">{{ sectionTitle }}</h2>
          <div v-if="filteredEvents.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <NuxtLink
              v-for="event in filteredEvents"
              :key="event.id"
              :to="`/events/${event.id}`"
              class="block"
            >
              <div class="bg-white rounded-lg shadow-md overflow-hidden h-full">
                <div class="h-64 bg-neutral-100">
                  <NuxtImg
                    :src="event.image"
                    :alt="event.title"
                    class="w-full h-full object-cover"
                    placeholder
                  />
                </div>
                <div class="p-6">
                  <div class="flex items-center mb-2">
                    <UIcon :name="event.icon" class="w-5 h-5 text-primary-600 mr-2" />
                    <span class="text-sm text-secondary-600 font-medium">{{ event.category }}</span>
                  </div>
                  <h3 class="text-xl font-semibold mb-1 text-primary-700">{{ event.title }}</h3>
                  <p class="text-neutral-700 mb-4 line-clamp-2">{{ event.description }}</p>
                  <div class="flex items-center justify-between text-sm text-neutral-600 mb-4">
                    <div class="flex items-center">
                      <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-1 text-primary-600" />
                      <span>{{ event.date }}</span>
                    </div>
                    <div class="flex items-center">
                      <UIcon name="i-heroicons-map-pin" class="w-4 h-4 mr-1 text-primary-600" />
                      <span>{{ event.location }}</span>
                    </div>
                  </div>
                  <UButton
                    color="primary"
                    variant="soft"
                    class="w-full hover:opacity-90 active:opacity-100 transition-opacity"
                  >
                    {{ selectedFilter === 'past' ? 'View Details' : 'Learn More' }}
                  </UButton>
                </div>
              </div>
            </NuxtLink>
          </div>
          <div v-else class="text-center py-12">
            <UIcon name="i-heroicons-calendar" class="w-12 h-12 text-neutral-400 mx-auto mb-4" />
            <p class="text-neutral-600">No events found. Check back soon!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <div class="grid grid-cols-1 md:grid-cols-2">
              <div class="p-8 md:p-12">
                <h2 class="text-3xl font-bold mb-4 text-primary-700">Want to Host Your Own Event?</h2>
                <p class="text-lg text-neutral-700 mb-6">
                  Whether you have a specific idea in mind or need guidance, our team is here to help you create an impactful event that aligns with your goals.
                </p>
                <UButton color="primary" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                  Contact Us
                </UButton>
              </div>
              <div class="bg-primary-100 p-8 md:p-12 flex items-center justify-center">
                <UIcon name="i-heroicons-presentation-chart-line" class="w-24 h-24 text-primary-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

definePageMeta({
  title: 'Events',
  description: 'Discover upcoming and past events organized by MaishaGala.',
})

// Sample event data (in a real app, this would be fetched from an API)
const events = [
  {
    id: 1,
    title: 'Community Wellness Workshop',
    description: 'Join us for a day of wellness activities, including yoga, meditation, and mental health discussions led by experts in the field. This workshop is designed to promote physical and mental well-being within our community, providing practical tools and strategies that participants can incorporate into their daily lives. Through interactive sessions, participants will learn about stress management, mindfulness practices, and the importance of self-care.',
    date: 'June 15, 2024',
    location: 'Dar es Salaam Community Center',
    category: 'Community',
    status: 'upcoming',
    image: '/images/event-1.jpg',
    icon: 'i-heroicons-user-group'
  },
  {
    id: 2,
    title: 'Youth Leadership Summit',
    description: 'A two-day summit bringing together young leaders from across Tanzania to discuss challenges and opportunities in their communities. This event provides a platform for youth to share their experiences, learn from each other, and develop strategies for creating positive change. Through workshops, panel discussions, and networking opportunities, participants will gain valuable skills and insights to help them become effective leaders.',
    date: 'July 22-23, 2024',
    location: 'Tanzania Youth Center',
    category: 'Youth',
    status: 'upcoming',
    image: '/images/event-2.jpg',
    icon: 'i-heroicons-academic-cap'
  },
  {
    id: 3,
    title: 'Business Networking Breakfast',
    description: 'Connect with local business leaders, entrepreneurs, and professionals in a relaxed setting over breakfast and meaningful conversations. This event provides an opportunity to expand your professional network, share ideas, and explore potential collaborations. Whether you\'re looking for new clients, partners, or simply want to stay connected with the local business community, this networking breakfast is not to be missed.',
    date: 'August 5, 2024',
    location: 'Dar es Salaam Business Hub',
    category: 'Business',
    status: 'upcoming',
    image: '/images/event-3.jpg',
    icon: 'i-heroicons-building-office'
  },
  {
    id: 4,
    title: 'Women Empowerment Forum',
    description: 'A forum dedicated to discussing challenges faced by women in Tanzania and exploring solutions for greater gender equality and opportunity. This event brings together women from diverse backgrounds to share their experiences, challenges, and successes. Through panel discussions, workshops, and networking opportunities, participants will gain insights and strategies for overcoming barriers and achieving their goals.',
    date: 'March 8, 2024',
    location: 'Dar es Salaam Women\'s Center',
    category: 'Women',
    status: 'past',
    image: '/images/event-4.jpg',
    icon: 'i-heroicons-heart'
  },
  {
    id: 5,
    title: 'Environmental Sustainability Workshop',
    description: 'Learn about sustainable practices and how communities can work together to protect the environment for future generations. This workshop provides practical information and tools for implementing sustainable practices in your home, community, or organization. Through hands-on activities and expert presentations, participants will gain a deeper understanding of environmental issues and how to address them.',
    date: 'February 15, 2024',
    location: 'Tanzania Environmental Center',
    category: 'Environment',
    status: 'past',
    image: '/images/event-5.jpg',
    icon: 'i-heroicons-leaf'
  },
  {
    id: 6,
    title: 'Mental Health Awareness Day',
    description: 'A day dedicated to raising awareness about mental health issues, reducing stigma, and providing resources for those in need. This event aims to promote understanding and acceptance of mental health challenges, while providing information about available resources and support services. Through presentations, workshops, and personal stories, participants will gain insights into mental health and how to support themselves and others.',
    date: 'January 20, 2024',
    location: 'Dar es Salaam Health Center',
    category: 'Health',
    status: 'past',
    image: '/images/event-6.jpg',
    icon: 'i-heroicons-heart'
  }
]

// Filter options
const filters = [
  { label: 'All Events', value: 'all' },
  { label: 'Upcoming Events', value: 'upcoming' },
  { label: 'Past Events', value: 'past' }
]

const selectedFilter = ref('all')

// Section title based on selected filter
const sectionTitle = computed(() => {
  switch (selectedFilter.value) {
    case 'upcoming':
      return 'Upcoming Events'
    case 'past':
      return 'Past Events'
    default:
      return 'All Events'
  }
})

// Filtered events
const filteredEvents = computed(() => {
  if (selectedFilter.value === 'all') {
    return events
  }
  return events.filter(event => event.status === selectedFilter.value)
})
</script> 