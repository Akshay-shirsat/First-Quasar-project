<template>
  <q-page class="flex flex-center">
    <div class="q-pt-lg" style="width: 400px">
      <q-form class="q-gutter-md">
        <q-input
          filled
          label="Your name *"
          hint="Name and surname"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Please type something']"
        />
        <q-input
          filled
          type="number"
          label="Your age *"
          lazy-rules
          :rules="[
            (val) => (val !== null && val !== '') || 'Please type your age',
            (val) => (val > 0 && val < 100) || 'Please type a real age',
          ]"

        />

        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
        </div>

      </q-form>

    </div>
    <div class="q-pa-md">
    <q-btn push color="primary" label="Handles click">
      <q-popup-proxy>
        <q-banner>
          <template v-slot:avatar>
            <q-icon name="signal_wifi_off" color="primary" />
          </template>
          You have lost connection to the internet. This app is offline.
        </q-banner>
      </q-popup-proxy>
    </q-btn>
  </div>
  
  </q-page>
</template>

<script></script>
