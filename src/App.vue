<template>
  <div v-if="!loginState">
    <Login />
  </div>
  <q-layout v-else view="lHh Lpr lFf">
    <q-header
      elevated
      class="q-px-lg q-pt-lg q-pb-lg q-mb-md"
      style="background: linear-gradient(to bottom, purple, #014a55)"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title> {{ title }} </q-toolbar-title>
        <div class="text-subtitle1">{{ todayDate }}</div>
      </q-toolbar>

      <q-img src="./assets/mountain.jpg" class="header-image absolute-top" />
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered class="bg-grey-2">
      <q-list>
        <div style="background: linear-gradient(to bottom, #014a55, purple)">
          <q-item>
            <q-item-section avatar>
              <q-icon name="person" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label
                class="text-h6 text-bold q-pt-xlq-mt-sm text-white"
                >{{ auth.name }}</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="email" color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-h6 text-bold q-pt-xlq-mt-sm text-white">
                {{ auth.email }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div class="text-h6 text-bold q-pt-lg">
          <q-item clickable :to="{ name: 'Country' }" exact>
            <q-item-section avatar>
              <q-icon name="public" color="accent" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-purple">Country</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'Weather' }" exact>
            <q-item-section avatar>
              <q-icon name="cloud" color="accent" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-purple">Weather</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'User' }" exact>
            <q-item-section avatar>
              <q-icon name="people" color="accent" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-purple">User</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable :to="{ name: 'Post' }" exact>
            <q-item-section avatar>
              <q-icon name="assignment" color="accent" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-purple">Post</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon name="logout" color="accent" />
            </q-item-section>
            <q-item-section @click="logout">
              <q-item-label class="text-purple">Logout</q-item-label>
            </q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <div>
      <MainContent />
      <div class="text-center" v-show="commonState.loading">
        <q-spinner-dots color="purple" size="5.5em" />
      </div>
    </div>
  </q-layout>
</template>

<script src="./app.js" />
<style lang="scss" scoped>
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.2;
  filter: grayscale(100%);
}
</style>