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
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="email" />
              </template>
            </q-input>
            <q-input
              outlined
              class="q-mt-sm"
              v-model="password"
              label="Password *"
              color="accent"
              :type="isPassword ? 'password' : 'text'"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Password is required',
              ]"
            >
              <template v-slot:prepend>
                <q-icon color="accent" name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  color="accent"
                  :name="isPassword ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPassword = !isPassword"
                />
              </template>
            </q-input>
            <!-- <q-checkbox
              class="q-mt-sm text-purple"
              v-model="check"
              label="Remember Me"
            ></q-checkbox> -->
            <!-- <a href="" class="float-right" style="text-decoration: none"
                >Forgot Password?</a>
              > -->
            <q-btn
              outlined
              label="Login"
              type="submit"
              style="width: 97.99%"
              @click="icon = true"
              class="bg-accent text-white q-pa-md q-mt-sm"
            >
            </q-btn>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./auth.js" />
