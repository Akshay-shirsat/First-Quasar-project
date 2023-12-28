<template>
  <q-page>

  <div class="flex flex-center q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 350px">
      <q-input  label="Standard" />

      <q-input filled  label="Filled" />

      <q-input outlined  label="Outlined" />

      <q-input standout  label="Standout" />

      <q-input standout="bg-teal text-white"  label="Custom standout" />

      <q-input borderless  label="Borderless" />

      <q-input rounded filled  label="Rounded filled" />

      <q-input rounded outlined  label="Rounded outlined" />

      <q-input rounded standout  label="Rounded standout" />

      <q-input square filled  label="Square filled" />

      <q-input square outlined  label="Square outlined" />

      <q-input square standout  label="Square standout" />

       <q-input color="purple-12"  label="Label">
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>
    </div>
  </div>
  <div class="flex flex-center q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-toggle  label="Dense QInput" />

      <q-input   />

      <q-input  label="Label (stacked)" stack-label  />

      <q-input  label="Label"  />

      <q-input  label="Label" placeholder="Placeholder" hint="With placeholder"  />

      <q-input  placeholder="Placeholder" hint="With placeholder"  />

      <q-input  >
        <template v-slot:prepend>
          <q-icon name="event" />
        </template>
      </q-input>

      <q-input  >
        <template v-slot:append>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg">
          </q-avatar>
        </template>
      </q-input>

      <q-input bottom-slots  label="Label" counter >
        <template v-slot:prepend>
          <q-icon name="place" />
        </template>
        <template v-slot:append>
          <q-icon name="close"  class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>

      <q-input bottom-slots  label="Label" counter maxlength="12" >
        <template v-slot:before>
          <q-icon name="flight_takeoff" />
        </template>

        <template v-slot:append>
          <q-icon  name="close"  class="cursor-pointer" />
          <q-icon name="search" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-input>

      <q-input bottom-slots  label="Label" counter maxlength="12" >
        <template v-slot:before>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar5.jpg">
          </q-avatar>
        </template>

        <template v-slot:append>
          <q-icon  name="close"  class="cursor-pointer" />
          <q-icon name="schedule" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" />
        </template>
      </q-input>

      <q-input bottom-slots  label="Label" counter maxlength="12" >
        <template v-slot:before>
          <q-icon name="event" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>

        <template v-slot:append>
          <q-btn round dense flat icon="add" />
        </template>
      </q-input>

      <q-input  hint="Disable"  disable />

      <q-input  hint="Readonly"  readonly />

      <q-input  hint="Disable and readonly"  disable readonly />
    </div>
  </div>

  </q-page>
</template>
