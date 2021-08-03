<template>
  <q-page class="bg-accent">
    <div class="row q-pa-sm">
      <q-input
        outlined
        v-model="title"
        label="Post Title *"
        lazy-rules
        square
        color="purple"
        class="col"
        bg-color="white"
        :rules="[(val) => (val && val.length > 0) || 'Post title is required']"
      />
    </div>
    <div class="row q-pa-sm">
      <q-input
        outlined
        bg-color="white"
        v-model="body"
        label="Body"
        color="purple"
        class="col"
        square
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'Post Body is required']"
      />
    </div>

   
    <q-card-actions >
      <q-btn
        square
        @click="createPost"
        class="q-ml-sm"
        color="teal"
        label="Create"
      />
    </q-card-actions>
  </q-page>
</template>

<script src="./createPost.js" />
