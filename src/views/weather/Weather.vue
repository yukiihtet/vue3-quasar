<template>
  <!-- <q-page
    class="flex column q-page"
    style="background: linear-gradient(to bottom,  #669299,purple,#014a55"
  > -->
  <q-banner v-if="commonState.error" class="text-white bg-red q-mx-md">
    {{ searchKeyword }} city is not found.
  </q-banner>
  <div v-if="Object.entries(weather).length > 0" class="col q-pt-lg q-px-md">
    <q-input
      outlined
      v-model="searchKeyword"
      label="Search City"
      label-color="purple"
      color="purple"
    >
      <template v-slot:append>
        <q-icon
          v-if="searchKeyword.length > 0"
          name="close"
          @click="clearSearch"
          class="cursor-pointer"
          color="purple"
        />
        <q-icon name="search" @click="searchCity" color="purple" />
      </template>
    </q-input>
  </div>
  <div
    v-if="Object.entries(weather).length > 0"
    class="col text-white text-center q-pa-md"
  >
    <q-card
      class="flex column"
      style="background: linear-gradient(to bottom,  #669299,purple,#014a55"
    >
      <div class="col text-center">
        <img :src="weatherICON" style="height: 150px" />
      </div>
      <div class="text-h1 text-weight-thin q-my-lg relative-position">
        {{ weather.main.temp }}&#8451;
      </div>
      <div class="text-h4 text-weight-light">
        {{ weather.name }}
      </div>
      <div class="text-h6 text-weight-light q-pt-md q-pb-xl">
        <p>{{ weather.weather[0].main }}</p>
      </div>
    </q-card>
  </div>
  <!-- </q-page> -->
</template>

<script src="./weather.js"   />


