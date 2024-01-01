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
  <div class="q-pa-md">
    <q-list class="bg-grey-9 text-white shadow-2 rounded-borders" style="max-width: 250px; width: 100%;">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar6.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Jane</q-item-section>
      </q-item>

      <q-separator color="orange" inset />

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar3.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Lily</q-item-section>
      </q-item>

      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </q-item-section>
        <q-item-section>Mary</q-item-section>
      </q-item>
    </q-list>
  </div>
  <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="menu" />

      <q-space />
      <q-spinner-radio
        color="red"
        size="2em"
      />

      <q-btn flat round dense icon="apps" class="q-mr-xs" />
      <q-btn flat round dense icon="more_vert" />
    </q-toolbar>

    <div class="row no-wrap items-center q-mt-md q-pa-sm bg-grey-9 text-white rounded-borders">
      <q-avatar>
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-dark.svg">
      </q-avatar>

      <q-space />

      <div>
        Quasar <q-badge>aki</q-badge>
      </div>
    </div>
  </div>
</q-page>
</template>
