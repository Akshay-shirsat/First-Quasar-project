<template>
<q-page>
  <div class="flex flex-center">
  <h5 class="q-mr-sm">Avatar</h5>
  <q-avatar
  color="blue"
  text-color="white"
  size="xl"
  >
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnWChxlwoVbREaoSSALKWPvTUuob1RwJ7ySA&usqp=CAU"/>
</q-avatar>
<q-avatar color="red" text-color="white" icon="directions" />
    <q-avatar color="primary" text-color="white">J</q-avatar>
    <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="directions" />
    <q-avatar size="24px" color="orange">J</q-avatar>
    <q-avatar>
      <img src="https://cdn.quasar.dev/img/avatar.png">
    </q-avatar>
</div>
<div class="q-pa-md q-gutter-sm flex flex-center" style="height: 80px">
    <q-avatar
      v-for="n in 5"
      :key="n"
      size="40px"
      class="overlapping"
      :style="`left: ${n * 25}px`"
    >
      <img :src="`https://cdn.quasar.dev/img/avatar${n + 1}.jpg`">
    </q-avatar>
  </div>
</q-page>
</template>
