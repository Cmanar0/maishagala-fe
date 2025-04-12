<template>
  <div class="space-y-16">
    <!-- Event Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div v-if="event" class="flex items-center mb-4">
            <UIcon :name="event.icon || 'i-heroicons-calendar'" class="w-6 h-6 text-primary-600 mr-2" />
            <span class="text-secondary-600 font-medium">{{ event.category }}</span>
          </div>
          <h1 v-if="event" class="text-4xl font-bold mb-4 text-primary-700">{{ event.title }}</h1>
          <div v-if="event" class="flex flex-wrap gap-4 text-neutral-700 mb-6">
            <div class="flex items-center">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5 mr-2 text-primary-600" />
              <span>{{ event.date }}</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2 text-primary-600" />
              <span>{{ event.location }}</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-clock" class="w-5 h-5 mr-2 text-primary-600" />
              <span>{{ event.status === 'upcoming' ? 'Upcoming Event' : 'Past Event' }}</span>
            </div>
          </div>
          
          <!-- Event Not Found Message -->
          <div v-else class="text-center py-12">
            <UIcon name="i-heroicons-exclamation-circle" class="w-16 h-16 text-neutral-400 mx-auto mb-4" />
            <h1 class="text-3xl font-bold mb-4 text-primary-700">Event Not Found</h1>
            <p class="text-lg text-neutral-700 mb-6">The event you're looking for doesn't exist or has been removed.</p>
            <UButton color="primary" to="/events" class="hover:opacity-90 active:opacity-100 transition-opacity">
              Back to Events
            </UButton>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Content -->
    <section v-if="event" class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Main Content -->
            <div class="md:col-span-2 space-y-8">
              <!-- Event Image -->
              <div class="bg-white rounded-lg shadow-md overflow-hidden">
                <div class="h-80 bg-neutral-100">
                  <NuxtImg
                    :src="event?.image"
                    :alt="event?.title"
                    class="w-full h-full object-cover"
                    placeholder
                  />
                </div>
              </div>

              <!-- Event Description -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold mb-4 text-primary-700">About This Event</h2>
                <p class="text-neutral-700 mb-4">{{ event?.description }}</p>
                <p class="text-neutral-700">Join us for this impactful event that brings together community members, experts, and leaders to discuss important topics and create positive change in our region.</p>
              </div>

              <!-- Event Schedule -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold mb-4 text-primary-700">Event Schedule</h2>
                <div class="space-y-4">
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">9:00 AM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Registration & Welcome Coffee</h3>
                      <p class="text-neutral-600">Check-in and receive your event materials</p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">10:00 AM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Opening Ceremony</h3>
                      <p class="text-neutral-600">Welcome remarks and introduction to the day's agenda</p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">11:00 AM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Keynote Speech</h3>
                      <p class="text-neutral-600">Featured speaker presentation</p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">12:30 PM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Lunch Break</h3>
                      <p class="text-neutral-600">Networking opportunity with fellow attendees</p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">2:00 PM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Workshop Sessions</h3>
                      <p class="text-neutral-600">Interactive workshops and breakout sessions</p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">4:00 PM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Panel Discussion</h3>
                      <p class="text-neutral-600">Expert panel on key topics</p>
                    </div>
                  </div>
                  <div class="flex">
                    <div class="w-24 text-primary-600 font-medium">5:30 PM</div>
                    <div class="flex-1">
                      <h3 class="font-semibold">Closing Ceremony</h3>
                      <p class="text-neutral-600">Summary and next steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Sidebar -->
            <div class="space-y-6">
              <!-- Registration Card -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4 text-primary-700">Register for This Event</h2>
                <p class="text-neutral-700 mb-4">Secure your spot at this impactful event. Limited spaces available.</p>
                <UButton color="primary" class="w-full mb-4">Register Now</UButton>
                <p class="text-sm text-neutral-600">Already registered? <a href="#" class="text-primary-600 hover:underline">View your registration</a></p>
              </div>

              <!-- Event Details Card -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4 text-primary-700">Event Details</h2>
                <div class="space-y-4">
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-calendar" class="w-5 h-5 mr-3 text-primary-600 mt-1" />
                    <div>
                      <h3 class="font-medium">Date & Time</h3>
                      <p class="text-neutral-700">{{ event?.date }}</p>
                      <p class="text-sm text-neutral-600">9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-3 text-primary-600 mt-1" />
                    <div>
                      <h3 class="font-medium">Location</h3>
                      <p class="text-neutral-700">{{ event?.location }}</p>
                      <a href="#" class="text-sm text-primary-600 hover:underline">View on map</a>
                    </div>
                  </div>
                  <div class="flex items-start">
                    <UIcon name="i-heroicons-user-group" class="w-5 h-5 mr-3 text-primary-600 mt-1" />
                    <div>
                      <h3 class="font-medium">Organizer</h3>
                      <p class="text-neutral-700">MaishaGala</p>
                      <a href="/contact" class="text-sm text-primary-600 hover:underline">Contact organizer</a>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Share Event Card -->
              <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-bold mb-4 text-primary-700">Share This Event</h2>
                <div class="flex space-x-3">
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-facebook" class="w-5 h-5" />
                  </a>
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-twitter" class="w-5 h-5" />
                  </a>
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-envelope" class="w-5 h-5" />
                  </a>
                  <a href="#" class="bg-neutral-100 hover:bg-primary-100 text-primary-600 p-3 rounded-full transition-colors">
                    <UIcon name="i-heroicons-link" class="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Events -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mb-8 text-primary-700">Related Events</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <NuxtLink
              v-for="relatedEvent in relatedEvents"
              :key="relatedEvent.id"
              :to="`/events/${relatedEvent.slug}`"
              class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div class="h-48 bg-neutral-100">
                <NuxtImg
                  :src="relatedEvent.image"
                  :alt="relatedEvent.title"
                  class="w-full h-full object-cover"
                  placeholder
                />
              </div>
              <div class="p-4">
                <div class="flex items-center mb-2">
                  <UIcon :name="relatedEvent.icon" class="w-4 h-4 text-primary-600 mr-2" />
                  <span class="text-xs text-secondary-600 font-medium">{{ relatedEvent.category }}</span>
                </div>
                <h3 class="text-lg font-semibold mb-1 text-primary-700">{{ relatedEvent.title }}</h3>
                <div class="flex items-center text-xs text-neutral-600">
                  <UIcon name="i-heroicons-calendar" class="w-4 h-4 mr-1 text-primary-600" />
                  <span>{{ relatedEvent.date }}</span>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// Set page metadata
definePageMeta({
  title: 'Event Details',
  description: 'Event details page',
})

const route = useRoute()

// Sample event data (in a real app, this would be fetched from an API)
const events = [
  {
    id: 1,
    slug: 'community-wellness-workshop',
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
    slug: 'youth-leadership-summit',
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
    slug: 'business-networking-breakfast',
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
    slug: 'women-empowerment-forum',
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
    slug: 'environmental-sustainability-workshop',
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
    slug: 'mental-health-awareness-day',
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

// Get the current event slug from the route
const eventSlug = computed(() => route.params.slug as string)

// Find the current event
const event = computed(() => {
  return events.find(e => e.slug === eventSlug.value)
})

// Get related events (same category, excluding current event)
const relatedEvents = computed(() => {
  if (!event.value) return []
  
  return events
    .filter(e => e.category === event.value?.category && e.id !== event.value?.id)
    .slice(0, 3)
})
</script> 