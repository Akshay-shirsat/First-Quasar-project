<template>
  <q-page class="flex flex-center" padding>

    <div class="full-width" style="max-width: 350px;">
      <h5 class="q-my-md text-center">Login</h5>
   <q-card>
    <q-card-section>
      <q-form>
      <q-input filled label="email" placeholder="email@example.com" class="q-mb-sm"></q-input>
      <q-input filled label="password" placeholder="6 digit password" type="password" class="q-mb-sm"></q-input>
      <q-checkbox label="remamber me" :model-value="true"/>
    </q-form>
    </q-card-section>
    <q-btn label="login" class="full-width q-ml-sm" color="grey" ></q-btn>
   </q-card>
  </div>
  </q-page>
</template>
