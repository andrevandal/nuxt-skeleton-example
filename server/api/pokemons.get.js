import { sleep } from 'radash';

const SLEEPING_TIME = 2000;

export default defineEventHandler(async (event) => {
  console.log(`New server request: ${event.node.req.url}`);
  await sleep(SLEEPING_TIME);

  const { results } = await $fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=9'
  );

  return results.map((el) => {
    const id = el?.url?.split('/')[6];
    return {
      id,
      name: el.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`,
    };
  });
});
