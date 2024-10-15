<template>
    <div id="app">
      <ItemList />
    </div>
  </template>
  
  <script>
  import ItemList from './components/ItemList.vue'; // Importing the ItemList component
  
  export default {
    components: {
      ItemList // Registering ItemList as a component
    }
  };
  </script>
  
  <style>
  /* Optional: Add some global styles */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  