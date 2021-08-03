<template>
  <div class="row">
    <div class="col-lg-6 col-md-6 col-sm-6">
      <img src="../../assets/study.jpg" style="width: 750px; height: 600px" />
    </div>
    <div class="col-lg-6 col-md-6 col-sm-6 q-pt-xl">
      <div class="">
        <div class="text-h5 text-center text-bold q-pt-xlq-mt-xl text-purple">
          Please Login!
        </div>
        <div class="q-pa-sm">
          <q-form @submit="login" class="q-gutter-md q-mt-md">
            <q-input
              outlined
              v-model="email"
              label="Email *"
              type="email"
              color="accent"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'Email is required']"
            />
            <q-input
              outlined
              class="q-mt-sm"
              type="password"
              v-model="password"
              label="Password *"
              color="accent"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Password is required',
              ]"
            />

            <div class="q-pa-sm text-purple">
              <q-checkbox v-model="check" label="Remember Me"></q-checkbox>
              <!-- <a href="" class="float-right" style="text-decoration: none"
                >Forgot Password?</a
              > -->
              <q-btn
                label="Login"
                type="submit"
                style="width: 100%"
                class="bg-accent text-white q-pa-md"
              ></q-btn>
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./auth.js" />
