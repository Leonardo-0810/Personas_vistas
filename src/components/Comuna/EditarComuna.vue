<template>
  <div class="container text-start">
    <h1 class="text-primary fw-bold">Editar:</h1>
    <div class="card">
      <div class="card-header fw-bold">
        Comuna
      </div>

      <div class="card-body">
        <!-- SOLO RENDERIZAR CUANDO comuna YA CARGÓ -->
        <form v-if="comuna" @submit.prevent="updateComuna">
          <div class="row mb-3">
            <label for="comu_codi" class="form-label">Código:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="id" />
              </div>
              <input type="text" class="form-control" id="comu_codi" placeholder="Código comuna" disabled
                v-model="comuna.comu_codi">
            </div>
          </div>

          <div class="row mb-3">
            <label for="comu_nomb" class="form-label">Nombre:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="building" />
              </div>
              <input type="text" class="form-control" id="comu_nomb" placeholder="Nombre comuna"
                v-model="comuna.comu_nomb">
            </div>
          </div>

          <div class="row mb-3">
            <label for="muni_codi" class="form-label">Municipio:</label>
            <div class="input-group">
              <div class="input-group-text">
                <font-awesome-icon icon="bank" />
              </div>
              <select class="form-control" id="muni_codi" v-model="comuna.muni_codi">
                <option v-for="municipio in municipios" :value="municipio.muni_codi">
                  {{ municipio.muni_nomb }}
                </option>
              </select>
            </div>
          </div>

          <button class="btn btn-primary" type="submit">Actualizar</button>
          <button class="btn btn-secondary mx-2" @click="$router.push({ name: 'Comunas' })">Cancelar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
  name: 'EditarComuna',
  data() {
    return {
      comuna: null, // Se inicializa como null para usar v-if
      municipios: []
    }
  },
  methods: {
    async updateComuna() {
      const res = await axios.put(`http://127.0.0.1:8000/api/comunas/${this.comuna.comu_codi}`, this.comuna);
      if (res.status === 200) {
        this.$router.push({ name: 'Comunas' });
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Comuna actualizada correctamente',
          showConfirmButton: false,
          timer: 2000
        });
      }
    }
  },
  mounted() {
    const id = this.$route.params.id;
    axios.get(`http://127.0.0.1:8000/api/comunas/${id}`)
      .then(response => {
        this.comuna = response.data.comuna;
        this.municipios = response.data.municipios;
      });
  }
}
</script>
