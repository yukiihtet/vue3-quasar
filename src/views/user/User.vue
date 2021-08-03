<template>
  <!-- For user roll -->

  <div v-if="authUser.role === 'user'">
    <div
      v-for="user in users"
      :key="user.id"
      class="row justify-center rounded my-card text-white q-pa-md"
      style="background: #014a55"
    >
      <div class="col-6 text-left">
        <div class="text-h6">Name: {{ user.name }}</div>
      </div>
      <div class="col-6 text-left">
        <div class="text-h6">Email: {{ user.email }}</div>
      </div>
    </div>
  </div>

  <!-- for admin   roll -->
  <q-page
    v-else
    class="column"
    style="background: linear-gradient(to bottom,  #669299,purple,#014a55"
  >
    <div class="row q-pa-sm">
      <q-input
        filled
        bg-color="white"
        v-model="name"
        label="Name"
        dense
        color="purple"
        class="col"
        square
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'User Name is required']"
      />
    </div>
    <div class="row q-pa-sm">
      <q-input
        filled
        bg-color="white"
        v-model="email"
        label="Email"
        dense
        color="purple"
        class="col"
        square
        lazy-rules
        :rules="[(val) => (val && val.length > 0) || 'User Email is required']"
      />
    </div>

    <div class="row q-pa-sm">
      <q-btn
        dense
        flat
        icon="add"
        @click="createUser"
        class="bg-white"
        label="Add"
      />
      <q-btn
        label="Clear"
        @click="clear"
        class="cursor-pointer bg-white q-ml-sm"
        icon="clear"
      />
    </div>

    <q-list class="text-white">
      <q-item
        v-for="user in users"
        :key="user.id"
        @click="user.done = !user.done"
        :class="{ 'done bg-white': user.done }"
        clickable
      >
        <q-item-section avatar class="col-md-1">
          <q-checkbox
            class="no-pointer-events"
            v-model="user.done"
            label=""
            color="teal"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="col-md-3 text-left">
            {{ user.id }}-Name: {{ user.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="col-md-3 text-left">
            Email: {{ user.email }}
          </q-item-label>
        </q-item-section>

        <q-item-section v-if="user.done" side>
          <q-btn
            @click.stop="deleteUser(user.id)"
            flat
            round
            dense
            color="negative"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script src="./user.js" />

<style lang="scss" scoped>
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #000;
  }
}
</style>