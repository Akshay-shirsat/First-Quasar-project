<template>
  <q-page>
    <div class='flex flex-center q-pa-xl'>
      <div class="col-6">
        <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="width: 300px;" draggable>
          <div class="absolute-full text-subtitle2 flex flex-center">
            Hello world
          </div>
        </q-img>
      </div>

      <div class="row">
        <div class="q-pa-xl" >
          <q-icon name="ring_volume" size="3em" class="q-pr-md"></q-icon>
        <q-icon  name="fa-solid fa-house" size="2em"></q-icon>
        </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
    <q-btn push color="teal" label="Change image" @click="refresh" />

    <q-img
    :src="url"
      spinner-color="white"
      style="height: 140px; max-width: 300px"
    />
  </div>
    </div>
    <div class="q-pa-md q-gutter-md">
    <div class="row justify-between">

    <q-parallax
      src="https://cdn.quasar.dev/img/parallax2.jpg"
    >
      <h1 class="text-white">Basic</h1>
    </q-parallax>

    </div>
  </div>

  <div class="q-pa-md">
    <q-parallax :height="100">
      <template v-slot:media>
        <video width="854" height="480" poster="https://cdn.quasar.dev/img/polina.jpg" autoplay loop muted>
          <source type="video/webm" src="https://cdn.quasar.dev/img/polina.webm">
          <source type="video/mp4" src="https://cdn.quasar.dev/img/polina.mp4">
        </video>
      </template>

      <h3 class="text-gray">Technokeens</h3>
    </q-parallax>
  </div>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column">
      <q-rating
        v-model="ratingModel"
        size="1.5em"
        icon="thumb_up"
      />
      <q-rating
        v-model="ratingModel"
        size="2em"
        color="red-7"
        icon="favorite_border"
      />
      <q-rating
        v-model="ratingModel"
        size="2.5em"
        color="purple-4"
        icon="create"
      />
      <q-rating
        v-model="ratingModel"
        size="3em"
        color="brown-5"
        icon="pets"
      />
      <q-rating
        v-model="ratingModel"
        size="3.5em"
        color="green-5"
        icon="star_border"
      />
    </div>
  </div>
  <div class="q-pa-md">
    <q-rating
      v-model="ratingModel"
      size="2em"
      :max="5"
      color="yellow"
    />
  </div>
  </q-page>
</template>

<script>

export default{
data(){
  return{
    url:'https://picsum.photos/500/300',
    ratingModel:''
  }
},

methods:{
refresh(){
 this.url = 'https://picsum.photos/500/300?t=' + Math.random()
}
}
}

</script>
