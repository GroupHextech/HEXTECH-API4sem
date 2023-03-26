<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a class="nav-link">Profiles</a></li>
        <li class="nav-item">
          <a class="nav-link"
            ><router-link to="/vehicle">Vehicle</router-link></a
          >
        </li>
        <li class="nav-item"><a class="nav-link disabled">Rules</a></li>
        <li class="nav-item"><a class="nav-link">Service Bulletins</a></li>
      </ul>
      <div>
        <a class="navbar-brand" href="#">
          <img
            src="/docs/4.1/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            alt=""
          />
        </a>
      </div>

      <div>
        <button type="button" class="btn btn-outline-secondary btn-sm">
          Sign out
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style>
</style>