<template>
  <!-- For user roll -->

  <q-card v-if="authUser.role === 'user'">
    <q-card-section
      v-for="user in users"
      :key="user.id"
      class="row justify-center rounded my-card text-white q-pa-md q-mb-sm"
      style="background: #9c27b0"
    >
      <q-item class="col-6 text-left">
        <q-item-section avatar>
          <q-icon name="person" color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-bold q-pt-xlq-mt-sm text-white">{{
            user.name
          }}</q-item-label>
        </q-item-section>
      </q-item>
      <q-item class="col-6 text-left">
        <q-item-section avatar>
          <q-icon name="email" color="white" />
        </q-item-section>
        <q-item-section>
          <q-item-label class="text-h6 text-bold q-pt-xlq-mt-sm text-white">{{
            user.email
          }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-card-section>
  </q-card>

  <!-- for admin   roll -->
  <div v-else class="column bg-accent">
    <div class="q-pa-sm">
      <q-form class="q-gutter-sm">
        <q-item-label style="color: white" class="text-bold">NAME</q-item-label>
        <q-input
          outlined
          bg-color="white"
          v-model="name"
          color="purple"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'User Name is required']"
        />

        <q-item-label style="color: white" class="text-bold"
          >EMAIL</q-item-label
        >
        <q-input
          outlined
          bg-color="white"
          v-model="email"
          color="purple"
          lazy-rules
          :rules="[
            (val) => (val && val.length > 0) || 'User Email is required',
          ]"
        />

        <div class="row q-pa-sm">
          <q-btn
            outlined
            dense
            flat
            icon="add"
            @click="createUser"
            class="bg-secondary cursor-pointer text-white text-bold"
            label="Add"
            type="submit"
          />

          <!-- <q-btn
            label="Clear"
            @click="clear"
            class="cursor-pointer bg-white q-ml-sm"
            icon="clear"
          /> -->
        </div>
      </q-form>
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
            color="grey"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label class="col-md-3 text-left text-bold">
            {{ user.id }}-Name: {{ user.name }}
          </q-item-label>
        </q-item-section>
        <q-item-section>
          <q-item-label class="col-md-3 text-left text-bold">
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
  </div>
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