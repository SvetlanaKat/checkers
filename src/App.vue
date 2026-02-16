<template>
<div class="app">
<CheckersTable />
</div>

</template>

<script>
import CheckersTable from "@/components/CheckersTable.vue";

export default {
  components: {
    CheckersTable
  }
}
</script>

<style lang="less">
.app {
  margin: 0 auto;
  width: 1400px;
}
</style>
