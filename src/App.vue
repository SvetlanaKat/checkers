<template>
  <div class="app">
    <div class="app__container">
       <UserInfo :user="userStore.userWhite" :isActive="currentPlayer === 1"/>
       <CheckersTable />
       <UserInfo :user="userStore.userBlack" :isActive="currentPlayer === 2"/>
    </div>
  </div>


</template>

<script setup>
import CheckersTable from "@/components/CheckersTable.vue";
import UserInfo from "@/components/UserInfo.vue";

import { useMainStore } from "@/store";

import { useUserStore } from "@/store/user";
import { computed } from "vue";

const userStore = useUserStore();

const store = useMainStore();
const currentPlayer = computed(() => store.currentPlayer);

</script>

<style lang="less">
.app {
    display: flex;
    flex-direction: column;
    align-items: center;
    &__container {
      display: flex;
    }
  }
</style>
