<template>
  <div>
    <q-banner v-if="commonState.error" class="text-white bg-red q-mx-md">
      {{ searchKeyword }} capital is not found.
    </q-banner>
  </div>
  <div v-show="authUser.role != 'user'" class="q-mt-lg q-mx-md ">
    <q-input
      outlined
      v-model="searchKeyword"
      label="Search Capital"
      label-color="purple"
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
      class="row justify-center rounded my-card text-white bg-accent"
      
    >
      <div class="col-4 text-left q-pa-sm">
        <img :src="country.flag" style="width:50%" />
      </div>
      <div class="col-2 text-left q-pt-md">
        <div class="text-h6 q-pa-sm">
          Name<br />
          {{ country.name }}
        </div>
      </div>
      <div class="col-2 text-left q-pt-md">
        <div class="text-h6 q-pa-sm">
          Capital<br />
          {{ country.capital }}
        </div>
      </div>
      <div class="col-2 text-left q-pt-md">
        <div class="text-h6 q-pa-sm">
          Region<br />
          {{ country.region }}
        </div>
      </div>

      <div class="col-2 text-left q-pt-md">
        <div class="text-h6 q-pa-sm">
          Population<br />
          {{ country.population }}
        </div>
      </div>
    </div>
  </div>
</template>


<script src="./country.js"/>

<style></style>
