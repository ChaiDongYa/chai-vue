<!--
 * @Description: 
 * @Author: ChaiDong
 * @Date: 2022-08-05 15:17:10
 * @LastEditTime: 2022-08-05 15:17:20
 * @LastEditors: ChaiDong
 * @Reference: 
-->
<template>
  <button class="nd-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "nd-button",
});
</script>
<style scoped></style>
