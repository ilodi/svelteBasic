<script>
  //conectar el input y que este escuchando el valor
  export let name = ``;
</script>

<div class="Input">
  <input type="text" bind:value={name} />
  <p>Hello {name}!</p>
</div>
