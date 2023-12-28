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
  </q-page>
</template>

<script>

export default{
data(){
  return{
    url:'https://picsum.photos/500/300'
  }
},

methods:{
refresh(){
 this.url = 'https://picsum.photos/500/300?t=' + Math.random()
}
}
}

</script>
