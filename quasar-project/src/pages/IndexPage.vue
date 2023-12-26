<template>
<q-page style="background-color: #a3a3a3;">
  <div class="row bg-blue-grey-9" >
    <div class="col">
      <div style="max-width: 650px; text-align: center; margin-left: auto;margin-right: auto;">
      <div class="text-h4 text-bold  text-white q-mt-xl q-pt-xl q-pb-lg">Learn Fullstack Development from industries Experts</div>
      <div class="text-white text-h6 q-pl-lg  q-pr-lg q-pb-sm">Join Technokeens community today to get started</div>
      <q-input
      color="black"
      bg-color="white"
        debounce="500"
        filled
        placeholder="Your Email"
        hint="Debouncing 500ms"
         class="q-pl-lg q-pr-lg q-pb-lg"
      >
        <template v-slot:prepend>
          <q-icon name="email" />
        </template>
        <template v-slot:append>
          <q-btn color="blue-grey-6" label="start learning"></q-btn>
        </template>
      </q-input>
    </div>  
    </div>
    <div class="col gt-sm">
      <q-img src="/abc.png" style="height: 550px; margin-left: auto;"></q-img>
    </div>
  </div>
  <div class="row">
    <div class="text-h5 text-bold q-px-md q-pt-md">Latest Lessons</div>
  </div>
  <div class="row">
    <div class="col-12 col-md">
    <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</div>
<div class="col-12 col-md">
    <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</div>
<div class="col-12 col-md">
    <div class="q-pa-md">
    <q-card class="my-card">
      <q-video src="https://www.youtube.com/embed/k3_tw44QsZQ?rel=0" />

      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </q-card-section>
    </q-card>
  </div>
</div>
  </div>
  <div class="row">
<div class="text-h5 text-bold q-pl-md">Featured Lessons</div>
  </div>
  <div class="row">
    <div class="col-12 col-md">
      <div class="q-pa-md">
    <q-card class="my-card">
    <div class="row">
      <div class="col-12 col-md-4 q-pa-md" >
       <q-img src="/abc.png" style="width: 100px; "></q-img>
      </div>
      <div class="col-12 col-md-8">
       <div class="text-h5 text-bold q-pl-md q-pt-xs">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis 
       </div>
       <div class="q-pa-md">temporibus dignissimos dicta earum, sapiente mollitia iste. Tenetur incidunt totam similique quasi ducimus labore at qui! Eaque cupiditate ipsa nemo architecto!</div>
      </div>
    </div>
    </q-card>
  </div>
    </div>
  </div>
</q-page>

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>



