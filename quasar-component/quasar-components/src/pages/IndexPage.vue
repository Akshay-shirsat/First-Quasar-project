<template>
  <q-page class="flex flex-center">
    <q-btn label="ajax-bar" @click="ajaxpage" class="q-mr-md" />
    <q-btn label="avatar" @click="avatarpage" class="q-mr-md" />
    <q-btn label="Form" @click="formqsr" class="q-mr-md" />
    <q-btn label="imagesq" @click="imagesqsr" class="q-mr-md"/>
    <q-btn label="Infinite Scroling" @click="infinateScrol" class="q-mr-md"/>
    <q-btn label="ListListitems" @click="ListListitems" class="q-mr-md"/>
    <q-btn label="TablesQuasar" @click="TablesQuasar" class="q-mr-md"/>
    <q-btn label="ClosePopup" @click="ClosePopup" class="q-mr-md"/>
    <q-btn label="InterSection" @click="InterSection" class="q-mr-md"/>
    <q-btn label="MutationsQuasar" @click="MutationsQuasar" class="q-mr-md"/>
    <q-btn label="BottomSheet" @click="BottomSheet" class="q-mr-md"/>
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
    },
    TablesQuasar(){
      this.$router.push("/TablesQuasar")
    },
    ClosePopup(){
      this.$router.push("/ClosePopup")
    },
    InterSection(){
      this.$router.push("/InterSection")
    },
    MutationsQuasar(){
      this.$router.push("/MutationsQuasar")
    },
    BottomSheet(){
      this.$router.push("/BottomSheet")
    }
  },


  // Your component options go here
});
</script>
