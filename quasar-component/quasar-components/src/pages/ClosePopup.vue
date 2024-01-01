<template>
  <div class="q-pa-md">
    <q-btn label="Open Menu" color="primary">
      <q-menu>
        <q-list>
          <q-item tag="label">
            <q-item-section avatar>
              <q-checkbox v-model="firstItemEnabled" />
            </q-item-section>
            <q-item-section>
              <q-item-label>First Item Enabled</q-item-label>
            </q-item-section>
          </q-item>
          <q-item
            v-for="n in 5"
            :key="n"
            v-close-popup="n > 1 || firstItemEnabled"
            :clickable="n > 1 || firstItemEnabled"
            @click="onClick(n)"
          >
            <q-item-section>Menu Item {{n}}</q-item-section>
          </q-item>
        </q-list>
      </q-menu>
    </q-btn>
  </div>
  <div class="q-pa-md">
    <q-btn label="Open Dialog" color="primary" @click="dialog = true" />

    <q-dialog v-model="dialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-section class="row items-center">
          <q-toggle v-model="cancelEnabled" label="Cancel button enabled" />
        </q-card-section>

        <!-- Notice v-close-popup -->
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup="cancelEnabled" :disable="!cancelEnabled" />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'

export default {
  setup () {
    const $q = useQuasar()
    const firstItemEnabled = ref(false)


    return {
      dialog: ref(false),
      cancelEnabled: ref(false),
      firstItemEnabled,
      onClick (index) {
        if (index > 1 || firstItemEnabled.value) {
          $q.notify({
            message: `Clicked on menu item #${index} and closed QMenu`,
            color: 'primary'
          })
        }
      }
    }
  }
}
</script>
