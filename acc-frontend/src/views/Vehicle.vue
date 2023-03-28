<template>
  <div class="container">
    <h2 class="page-title">Vehicle</h2>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Owner</a></li>
        <li class="breadcrumb-item"><a href="#">Vehicles</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          Chassis {{ chassis }}
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
          <tr v-for="sb in serviceBulletins" :key="sb.id">
            <th>{{ sb.id }}</th>
            <!-- Incorporated -->
            <td v-if="sb.incorporated === true">
              <i class="pi pi-check" style="color: green"></i>
            </td>
            <td v-else-if="sb.applicable === true">
              <a href="#" @click="changeCheck"
                ><i class="pi pi-circle check"></i
              ></a>
            </td>
            <td v-else></td>
            <!-- Not Applicable -->
            <td v-if="sb.notApplicable === true">
              <i class="pi pi-check" style="color: green"></i>
            </td>
            <td v-else></td>
            <!-- Applicable -->
            <td v-if="sb.applicable === true">
              <i class="pi pi-check" style="color: green"></i>
            </td>
            <td v-else></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";

const chassis = ref("10000076");

// ref (primitive types) or reactive (objects)
const serviceBulletins = reactive([
  {
    id: "SB FAT-00-CG10",
    incorporated: true,
    notApplicable: false,
    applicable: false,
  },
  {
    id: "SB FAT-00-CG11",
    incorporated: false,
    notApplicable: true,
    applicable: false,
  },
  {
    id: "SB FAT-00-CG12",
    incorporated: true,
    notApplicable: false,
    applicable: false,
  },
  {
    id: "SB FAT-00-CG13",
    incorporated: false,
    notApplicable: false,
    applicable: true,
  },
]);

function changeCheck() {
  //
}
</script>

<style>
.pi-circle {
  color: #bbb;
}
.pi-circle:hover {
  color: #444;
}
</style>