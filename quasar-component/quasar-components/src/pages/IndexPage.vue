<template>
  <q-page class="flex flex-center">
    <q-btn label="ajax-bar" @click="ajaxpage" class="q-mr-md" />
    <q-btn label="avatar" @click="avatarpage" class="q-mr-md" />
    <q-btn label="Form" @click="formqsr" class="q-mr-md" />
    <q-btn label="imagesq" @click="imagesqsr" class="q-mr-md"/>
    <q-btn label="Infinite Scroling" @click="infinateScrol" class="q-mr-md"/>
    <q-btn label="ListListitems" @click="ListListitems" class="q-mr-md"/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
  methods: {
    ajaxpage() {
      this.$router.push("/AjaxBar");
    },
    avatarpage() {
      this.$router.push("/Avatar");
    },
    formqsr() {
      console.log('in function')
      this.$router.push("/FormQuasar");
    },
    imagesqsr(){
      this.$router.push("/QuasarImg")
    },
    infinateScrol(){
      this.$router.push("/InfiniteScroling")
    },
    ListListitems(){
      this.$router.push("/ListListitems")
    }
  },

  // Your component options go here
});
</script>
