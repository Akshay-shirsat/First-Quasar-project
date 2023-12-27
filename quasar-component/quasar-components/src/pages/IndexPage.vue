<template>
  <q-page class="flex flex-center">
 <q-btn label="ajax-bar" @click="ajaxpage" class="q-mr-md"/>
 <q-btn label="avatar" @click="avatarpage" class="q-mr-md"/>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  methods:{
    ajaxpage(){
      this.$router.push('/AjaxBar')
    },
    avatarpage(){
      this.$router.push('/Avatar')
    }

  }

  // Your component options go here
});
</script>
