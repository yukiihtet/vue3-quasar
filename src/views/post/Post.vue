<template>
  <q-page>
    <div
      v-if="authUser.role != 'user'"
      class="row q-pa-sm col square bg-accent"
    >
      <q-item clickable :to="{ name: 'CreatePost' }" exact>
        <q-item-section>
          <q-btn flat dense color="white" label="Create Post" icon="add" />
        </q-item-section>
      </q-item>
    </div>

    <div class="q-pa-md row items-start q-gutter-md square">
      <q-card v-for="post in posts" :key="post.id" class="my-card">
        <q-card-section class="bg-accent text-white">
          <div class="text-h6">{{ post.id }}-{{ post.title }}</div>
          <div class="text-subtitle2">{{ post.body }}</div>
        </q-card-section>

        <q-separator />
        <q-card-actions align="right" v-if="authUser.role != 'user'">
          <q-item
            clickable
            :to="{ name: 'PostDetail', params: { id: post.id } }"
            exact
          >
            <q-item-section>
              <q-btn flat round dense color="accent" icon="visibility" />
            </q-item-section>
          </q-item>

          <!-- <q-item clickable :to="{ name: 'CreatePost' }" exact>
            <q-item-section> -->
          <q-btn
            flat
            dense
            color="teal"
            @click="editPost(post)"
            icon="edit"
          />
          <!-- </q-item-section>
          </q-item> -->

          <q-btn
            @click="deletePost(post.id)"
            flat
            round
            dense
            color="negative"
            icon="delete"
          />
        </q-card-actions>
      </q-card>
      <!-- for dialog -->
      <q-dialog v-model="show">
        <q-card style="min-width: 300px; min-height: 350px">
          <q-card-section class="bg-purple">
            <div class="text-h6 text-center text-white">
             "Update Post"
            </div>
          </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md q-mt-md">
              <q-input
                color="deep-purple-11"
                outlined
                v-model="title"
                label="Title"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Title is required',
                ]"
              />

              <q-input
                color="deep-purple-11"
                outlined
                v-model="body"
                type="email"
                label="Body"
                lazy-rules
                :rules="[
                  (val) => (val && val.length > 0) || 'Body is required',
                ]"
              />
            </q-form>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn v-close-popup square label="Close" color="purple" />
            <!-- <q-btn
             square
              v-if="!isEdit"
              @click="createPost"
              color="deep-purple-10"
              label="Create"
            /> -->

            <q-btn
             square
              v-if="isEdit"
              @click="updatePost"
              color="deep-purple-10"
              label="Update"
            />
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script src="./post.js" />
