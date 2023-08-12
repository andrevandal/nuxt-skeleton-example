<template>
  <div class="flex flex-row items-center gap-4">
    <img
      :src="pokemon.image"
      class="w-16 h-16 rounded-full p-2 border-box object-center object-contain"
      :alt="pokemonName"
    />
    <h2 class="text-lg">{{ pokemonName }}</h2>
  </div>
</template>

<script setup>
import { capitalize } from 'radash';

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
});

const pokemonName = computed(() => capitalize(props.pokemon.name));
</script>
