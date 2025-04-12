<template>
  <div class="space-y-16">
    <!-- Event Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <div class="flex items-center justify-center mb-4">
            <UIcon :name="event.icon" class="w-6 h-6 text-primary-600 mr-2" />
            <span class="text-sm text-neutral-500">{{ event.category }}</span>
          </div>
          <h1 class="text-4xl font-bold mb-6 text-primary-700">{{ event.title }}</h1>
          <div class="flex items-center justify-center space-x-4 text-neutral-700">
            <div class="flex items-center">
              <UIcon name="i-heroicons-calendar" class="w-5 h-5 mr-2 text-primary-600" />
              <span>{{ event.date }}</span>
            </div>
            <div class="flex items-center">
              <UIcon name="i-heroicons-map-pin" class="w-5 h-5 mr-2 text-primary-600" />
              <span>{{ event.location }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Event Image -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="max-w-4xl mx-auto">
          <div class="bg-neutral-100 rounded-lg overflow-hidden h-96">
            <NuxtImg 
              :src="event.image" 
              :alt="event.title" 
              class="w-full h-full object-cover"
              placeholder
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Event Details -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-md p-8">
              <h2 class="text-2xl font-bold mb-4 text-primary-700">About This Event</h2>
              <p class="text-neutral-700 mb-6">{{ event.description }}</p>
              
              <h3 class="text-xl font-semibold mb-3 text-primary-700">Event Details</h3>
              <div class="space-y-4 mb-8">
                <div class="flex items-start">
                  <UIcon name="i-heroicons-calendar" class="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p class="font-medium text-neutral-800">Date & Time</p>
                    <p class="text-neutral-700">{{ event.date }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-map-pin" class="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p class="font-medium text-neutral-800">Location</p>
                    <p class="text-neutral-700">{{ event.location }}</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <UIcon name="i-heroicons-user-group" class="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <p class="font-medium text-neutral-800">Category</p>
                    <p class="text-neutral-700">{{ event.category }}</p>
                  </div>
                </div>
              </div>
              
              <h3 class="text-xl font-semibold mb-3 text-primary-700">What to Expect</h3>
              <p class="text-neutral-700 mb-6">
                This event is designed to bring together individuals and organizations passionate about making a difference in our community. You'll have the opportunity to connect with like-minded people, learn from experts, and contribute to meaningful discussions.
              </p>
              
              <div class="bg-primary-50 p-6 rounded-lg mb-8">
                <h4 class="text-lg font-semibold mb-3 text-primary-700">Key Highlights</h4>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-neutral-700">Expert-led sessions and workshops</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-neutral-700">Networking opportunities with community leaders</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-neutral-700">Interactive discussions and Q&A sessions</span>
                  </li>
                  <li class="flex items-start">
                    <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span class="text-neutral-700">Resources and materials to take home</span>
                  </li>
                </ul>
              </div>
              
              <h3 class="text-xl font-semibold mb-3 text-primary-700">Who Should Attend</h3>
              <p class="text-neutral-700 mb-6">
                This event is open to anyone interested in community development, social impact, and creating positive change. Whether you're a community leader, professional, student, or concerned citizen, you'll find value in participating.
              </p>
            </div>
          </div>
          
          <!-- Sidebar -->
          <div>
            <div class="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 class="text-xl font-semibold mb-4 text-primary-700">Register for This Event</h3>
              <p class="text-neutral-700 mb-6">
                Secure your spot at this event by registering now. Early bird discounts may be available.
              </p>
              <UButton 
                color="primary" 
                class="w-full mb-4 hover:opacity-90 active:opacity-100 transition-opacity"
                to="/contact"
              >
                Register Now
              </UButton>
              <p class="text-sm text-neutral-500 text-center">
                Already registered? <a href="#" class="text-primary-600 hover:underline">View your registration</a>
              </p>
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6 mb-8">
              <h3 class="text-xl font-semibold mb-4 text-primary-700">Share This Event</h3>
              <div class="flex space-x-4 justify-center">
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
            </div>
            
            <div class="bg-white rounded-lg shadow-md p-6">
              <h3 class="text-xl font-semibold mb-4 text-primary-700">Similar Events</h3>
              <div class="space-y-4">
                <div v-for="similarEvent in similarEvents" :key="similarEvent.id" class="flex items-start">
                  <div class="w-20 h-20 bg-neutral-100 rounded-md overflow-hidden flex-shrink-0 mr-4">
                    <NuxtImg 
                      :src="similarEvent.image" 
                      :alt="similarEvent.title" 
                      class="w-full h-full object-cover"
                      placeholder
                    />
                  </div>
                  <div>
                    <h4 class="font-medium text-primary-700 mb-1">{{ similarEvent.title }}</h4>
                    <p class="text-sm text-neutral-600 mb-1">{{ similarEvent.date }}</p>
                    <NuxtLink 
                      :to="`/events/${similarEvent.id}`" 
                      class="text-sm text-primary-600 hover:underline"
                    >
                      View Details
                    </NuxtLink>
                  </div>
                </div>
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
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({
  title: 'Event Details',
  description: 'View detailed information about this event.',
})

const route = useRoute()
const eventId = computed(() => route.params.id)

// Log the event ID to console (will be used to fetch real data later)
onMounted(() => {
  console.log('Event ID:', eventId.value)
})

// Sample event data (in a real app, this would be fetched based on the ID)
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

// Find the current event based on the ID
const event = computed(() => {
  const foundEvent = events.find(e => e.id === Number(eventId.value))
  return foundEvent || events[0] // Fallback to first event if not found
})

// Find similar events (same category, excluding current event)
const similarEvents = computed(() => {
  return events
    .filter(e => e.category === event.value.category && e.id !== event.value.id)
    .slice(0, 3) // Limit to 3 similar events
})
</script> 