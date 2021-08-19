<template>
  <q-card class="bg-accent center">
    <div class="q-pa-sm">
      <q-form class="q-gutter-md q-mt-md">
        <q-input
          outlined
          v-model="title"
          label="Post Title *"
          square
          color="purple"
          class="col"
          bg-color="white"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'Post title is required',
          ]"
        />
        <!-- </div>
    <div class="row q-pa-sm"> -->
        <q-input
          outlined
          bg-color="white"
          v-model="body"
          label="Body"
          color="purple"
          class="col"
          square
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0) || 'Post Title and Body  is required',
          ]"
        />

        <q-card-actions>
          <q-btn
            square
            label="CreatePost"
            type="submit"
            @click="createPost"
            class="bg-secondary text-white q-pa-md q-mt-sm"
          >
          </q-btn>
        </q-card-actions>
      </q-form>
    </div>
  </q-card>
</template>

<script src="./createPost.js" />
