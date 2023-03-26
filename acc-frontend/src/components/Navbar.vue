<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0A1A5C">
    <a class="navbar-brand" href="#">
      <img
        src="../assets/sedan-car-side-black-silhouette.svg"
        width="30"
        height="30"
        class="d-inline-block align-top"
        alt=""
      />
      EMBRACAR
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#textoNavbar"
      aria-controls="textoNavbar"
      aria-expanded="false"
      aria-label="Alterna navegação"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="textoNavbar">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#"
            >Profiles<!--span class="sr-only">(Página atual)</span--></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"
            ><router-link to="/vehicle">Vehicle</router-link></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Rules</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Service Bulletins</a>
        </li>
      </ul>
      <span class="navbar-text">
        <button type="button" class="btn btn-outline-secondary btn-sm">
          Sign out
        </button>
      </span>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style>
</style>