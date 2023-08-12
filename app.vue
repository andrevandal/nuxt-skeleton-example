<template>
  <div class="mx-auto place-content-center max-w-fit py-4">
    <div v-if="pending" class="flex flex-col items-start gap-y-4">
      <SkeletonPokemonCard v-for="item in Array(9)" :key="`skeleton-${item}`" />
    </div>
    <div class="flex flex-col items-start gap-y-4" v-else>
      <TransitionGroup name="list">
        <LazyPokemonCard
          v-for="(pokemon, index) in pokemons"
          :key="`pokemon-${index}`"
          :pokemon="pokemon"
        />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
const { pending, data: pokemons } = await useLazyFetch('/api/pokemons', {
  server: false,
});
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.25s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
