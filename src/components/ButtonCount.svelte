<script>
  import { count } from "../store/store";
  // Actualia el store
  function handleClick() {
    count.update((n) => n + 1);
  }
</script>

<!-- manejo reactivo $ -->
<button on:click={handleClick}>Click{$count === 0 ? `` : $count}</button>

<style>
  button {
    background-color: #f76027;
    color: #f7f7f7;
    border: none;
    border-radius: 4px;
    padding: 0.5rem;
    text-transform: uppercase;
    cursor: pointer;
  }
</style>
