<template>
  <div>
    <q-banner v-if="commonState.error" class="text-white bg-red q-mx-md">
      {{ searchKeyword }} capital is not found.
    </q-banner>
  </div>
  <div v-show="authUser.role != 'user'" class="q-mt-lg q-mx-md">
    <q-input
      outlined
      v-model="searchKeyword"
      label="Search Capital"
      color="accent"
    >
      <template v-slot:append>
        <q-icon
          v-if="searchKeyword.length > 0"
          name="close"
          @click="clearSearch"
          class="cursor-pointer"
          color="accent"
        />
        <q-icon name="search" @click="searchCapital" color="accent" />
      </template>
    </q-input>
  </div>
  <div v-for="(country, index) in countries" :key="index" class="q-pa-md">
    <div
      class="row justify-center rounded my-card text-white"
      style="background: radial-gradient(circle, #014a55 0%, purple 100%)"
    >
      <div class="col-2 text-center">
        <div class="text-h6">Name: {{ country.name }}</div>
      </div>
      <div class="col-2 text-center">
        <div class="text-h6">Capital: {{ country.capital }}</div>
      </div>
      <div class="col-2 text-center">
        <div class="text-h6">Region: {{ country.region }}</div>
      </div>

      <div class="col-2 text-center">
        <div class="text-h6">Population: {{ country.population }}</div>
      </div>
      <div class="col-4 text-center">
        <img :src="country.flag" style="height: 100px" />
      </div>
    </div>
  </div>
</template>


<script src="./country.js"/>

<style></style>
