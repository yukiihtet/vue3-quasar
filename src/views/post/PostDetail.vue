<template>
  <q-page>
    <div class="row q-pa-sm col square">
      <q-card class="my-card">
        <q-card-section class="bg-teal text-white">
          <div class="text-h6">Id: {{ $store.state.postModule.post.id }}</div>
          <div class="text-h6">
            userId: {{ $store.state.postModule.post.id }}
          </div>
          <div class="text-h6">
            postTitle: {{ $store.state.postModule.post.title }}
          </div>
          <div class="text-subtitle2">
            postBody :{{ $store.state.postModule.post.body }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-item clickable :to="{ name: 'Post' }" exact>
            <q-item-section>
              <q-btn
                flat
                square
                dense
                color="red"
                label="Back"
                icon="backspace"
              />
            </q-item-section>
          </q-item>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script src="./postDetail.js" />

