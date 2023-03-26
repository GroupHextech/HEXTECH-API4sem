<template>
  <div class="vehicle">
    <h1>Vehicle</h1>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Owner</a></li>
        <li class="breadcrumb-item"><a href="#">Vehicle</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          Chassis 10000076
        </li>
      </ol>
    </nav>
    <div class="table-responsive">
      <table class="table table-borderless table-hover">
        <thead class="thead-dark">
          <tr>
            <th>Service Bulletins</th>
            <th>Incorporeted</th>
            <th>Not Applicable</th>
            <th>Applicable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>SB FAT-00-CG10</th>
            <td>
              <i class="pi pi-check" style="color: green"></i>
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>SB FAT-00-CG11</th>
            <td></td>
            <td>
              <i class="pi pi-check" style="color: green"></i>
            </td>
            <td></td>
          </tr>
          <tr>
            <th>SB FAT-00-CG12</th>
            <td></td>
            <td>
              <i class="pi pi-check" style="color: green"></i>
            </td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script setup lang="ts">
</script>

<style>
</style>