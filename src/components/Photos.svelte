<script>
  //llamado despues que el componente fue montado
  import { onMount } from "svelte";
  import { each } from "svelte/internal";
  //1 Init
  let photo = [];
  //2
  onMount(async () => {
    console.log(`onMount`);
    const response = await fetch(
      "https://picsum.photos/v2/list?page=1&limit=20"
    );
    photo = await response.json();
  });
</script>

<div class="Photos">
  {#if photo.length === 0}
    <p>Loading...</p>
  {:else}
    {#each photo as photo}
      <figure>
        <img
          src={`https://picsum.photos/id/${photo.id}/200/200`}
          alt={photo.author}
        />
        <figcaption>{photo.author}</figcaption>
      </figure>
    {/each}
  {/if}
</div>

<style>
  .Photos {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }
</style>
