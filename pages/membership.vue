<template>
  <div class="space-y-16">
    <!-- Membership Header -->
    <section class="section-padding bg-primary-50">
      <div class="container-custom">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-6 text-primary-700">Join Our Community</h1>
          <p class="text-xl text-neutral-700">
            Become a member of MaishaGala and be part of a network dedicated to creating positive change through impactful events and meaningful connections.
          </p>
        </div>
      </div>
    </section>

    <!-- Membership Benefits -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Member Benefits</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            As a MaishaGala member, you'll enjoy exclusive access to resources, events, and networking opportunities that help you make a difference in your community.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <UCard class="card-hover">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-ticket" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Priority Event Access</h3>
            <p class="text-neutral-700 mb-4">
              Get early access to event registrations and exclusive invitations to member-only gatherings and workshops.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Early bird registration for all events</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Member-only networking sessions</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Discounted rates for premium events</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-light-bulb" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Resources & Support</h3>
            <p class="text-neutral-700 mb-4">
              Access valuable resources, tools, and guidance to help you create and implement community initiatives.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Event planning templates and guides</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monthly newsletters with insights</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Consultation with our experts</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-user-group" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Networking Opportunities</h3>
            <p class="text-neutral-700 mb-4">
              Connect with like-minded individuals and organizations who share your passion for community development.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Access to our member directory</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Quarterly networking events</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Collaboration opportunities</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-academic-cap" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Learning & Development</h3>
            <p class="text-neutral-700 mb-4">
              Enhance your skills and knowledge through workshops, webinars, and training sessions designed for community leaders.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Monthly skill-building webinars</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Leadership development programs</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Access to online learning resources</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-presentation-chart-line" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Recognition & Visibility</h3>
            <p class="text-neutral-700 mb-4">
              Gain recognition for your contributions and increase your visibility within the community development sector.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Featured member spotlights</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Opportunities to speak at events</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Member badge for your website</span>
              </li>
            </ul>
          </UCard>
          
          <UCard class="card-hover">
            <div class="bg-primary-100 text-primary-700 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <UIcon name="i-heroicons-heart" class="w-8 h-8" />
            </div>
            <h3 class="text-xl font-semibold mb-3 text-primary-700">Community Impact</h3>
            <p class="text-neutral-700 mb-4">
              Make a real difference in your community by participating in collaborative initiatives and projects.
            </p>
            <ul class="space-y-2 text-neutral-700">
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Voting rights on community projects</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Opportunities to lead initiatives</span>
              </li>
              <li class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Impact reports and success stories</span>
              </li>
            </ul>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Membership Tiers -->
    <section class="section-padding bg-neutral-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">Membership Tiers</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            Choose the membership tier that best fits your needs and goals. All tiers include our core benefits, with additional perks at higher levels.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UCard class="card-hover">
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-primary-700 mb-2">Basic</h3>
              <div class="text-3xl font-bold text-neutral-900 mb-4">$50<span class="text-lg text-neutral-600">/year</span></div>
              <p class="text-neutral-700">Perfect for individuals interested in community development</p>
            </div>
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Access to member events</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Monthly newsletter</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Basic resources library</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Member directory access</span>
              </div>
            </div>
            <UButton 
              color="primary" 
              variant="outline" 
              class="w-full hover:opacity-90 active:opacity-100 transition-opacity"
              to="/contact"
            >
              Join Now
            </UButton>
          </UCard>
          
          <UCard class="card-hover border-2 border-primary-500 relative">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-primary-700 mb-2">Professional</h3>
              <div class="text-3xl font-bold text-neutral-900 mb-4">$150<span class="text-lg text-neutral-600">/year</span></div>
              <p class="text-neutral-700">Ideal for community leaders and organizations</p>
            </div>
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">All Basic benefits</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Priority event registration</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Quarterly networking events</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Access to premium resources</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">2 hours of consultation per year</span>
              </div>
            </div>
            <UButton 
              color="primary" 
              class="w-full hover:opacity-90 active:opacity-100 transition-opacity"
              to="/contact"
            >
              Join Now
            </UButton>
          </UCard>
          
          <UCard class="card-hover">
            <div class="text-center mb-6">
              <h3 class="text-2xl font-bold text-primary-700 mb-2">Premium</h3>
              <div class="text-3xl font-bold text-neutral-900 mb-4">$300<span class="text-lg text-neutral-600">/year</span></div>
              <p class="text-neutral-700">For organizations committed to community impact</p>
            </div>
            <div class="space-y-4 mb-8">
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">All Professional benefits</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Unlimited event access</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Featured member spotlight</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">10 hours of consultation per year</span>
              </div>
              <div class="flex items-start">
                <UIcon name="i-heroicons-check-circle" class="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                <span class="text-neutral-700">Opportunity to host events</span>
              </div>
            </div>
            <UButton 
              color="primary" 
              variant="outline" 
              class="w-full hover:opacity-90 active:opacity-100 transition-opacity"
              to="/contact"
            >
              Join Now
            </UButton>
          </UCard>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4 text-primary-700">What Our Members Say</h2>
          <p class="text-lg text-neutral-700 max-w-3xl mx-auto">
            Hear from our members about their experience with MaishaGala and the impact it has had on their work.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <UCard class="card-hover">
            <div class="flex items-center mb-4">
              <div class="bg-primary-100 text-primary-700 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                <UIcon name="i-heroicons-user" class="w-6 h-6" />
              </div>
              <div>
                <h3 class="text-lg font-semibold text-primary-700">Amina Hassan</h3>
                <p class="text-neutral-600">Community Organizer</p>
              </div>
            </div>
            <p class="text-neutral-700 italic mb-4">
              "Being a member of MaishaGala has transformed my approach to community organizing. The resources and networking opportunities have been invaluable, and I've been able to implement several successful initiatives in my neighborhood."
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
                <h3 class="text-lg font-semibold text-primary-700">Tanzania Youth Foundation</h3>
                <p class="text-neutral-600">Non-Profit Organization</p>
              </div>
            </div>
            <p class="text-neutral-700 italic mb-4">
              "As an organization dedicated to youth empowerment, MaishaGala has provided us with the platform and resources to reach more young people and create meaningful programs. The collaboration opportunities have been game-changing for our impact."
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
              <h2 class="text-3xl font-bold mb-4 text-primary-700">Ready to Join Our Community?</h2>
              <p class="text-lg text-neutral-700 mb-6">
                Become a member today and take the first step toward creating positive change in your community. Our team is here to support your journey.
              </p>
              <div class="flex flex-col sm:flex-row gap-4">
                <UButton color="primary" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                  Join Now
                </UButton>
                <UButton color="secondary" variant="soft" size="lg" to="/contact" class="hover:opacity-90 active:opacity-100 transition-opacity">
                  Contact Us
                </UButton>
              </div>
            </div>
            <div class="bg-primary-100 p-8 md:p-12 flex items-center justify-center">
              <UIcon name="i-heroicons-user-plus" class="w-24 h-24 text-primary-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Membership',
  description: 'Join MaishaGala\'s community of changemakers and gain access to exclusive benefits, resources, and networking opportunities.',
})
</script> 