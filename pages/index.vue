<script setup lang="ts">
import { getPokeApi } from "~/servies/pokeApi";
import { getPokeV2 } from "~/servies/pokeApi_V2";

const res = await getPokeApi("list", {});
const resV2 = await getPokeV2("pokemon", {});

console.log("res", res);
console.log("resV2", resV2);
</script>

<template>
  <div>Page: index</div>
</template>

<style scoped></style>
