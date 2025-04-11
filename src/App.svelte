<script>
  import About from "./components/About.svelte";
  import ButtonCount from "./components/ButtonCount.svelte";
  import Input from "./components/Input.svelte";
  import Person from "./components/Person.svelte";
  import Photos from "./components/Photos.svelte";
  import Skills from "./components/Skills.svelte";
  import Text from "./components/Text.svelte";

  //export lo pasa como propiedad PROMP
  export let name;
  export let lastName;

  let svelteLogo =
    "https://www.inspireuplift.com/resizer/?image=https://cdn.inspireuplift.com/uploads/images/seller_products/1687192534_Alelliott-pokemon-umbreon.jpeg&width=600&height=600&quality=90&format=auto&fit=pad";

  const data = {
    name: `David`,
    lastName: `lodi`,
    age: 32,
  };
</script>

<main>
  <ButtonCount />
  <h1>Hello {name} {lastName}!</h1>
  <About />
  <Photos />
  <Text anotherText="Hola!!!" />
  <Input />
  <Text />
  <Skills />
  <Person {...data} />
  <img src={svelteLogo} alt="Umbreon" />
</main>

<style>
  /* Golbales */
  :global(body) {
    background-color: #f2eee2;
    color: #0084f6;
  }
  :global(:root) {
    --theme-color: purple;
  }

  :global(body.dark-mode) {
    background-color: #1d3040;
    color: #bfc2c7;
  }

  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  main img {
    width: 30%;
  }
  @media screen and (min-width: 600px) {
    main {
      max-width: none;
    }
  }
</style>
