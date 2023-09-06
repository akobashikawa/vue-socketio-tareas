const TareasLista = {
  template: `<div>
    
    <div class="input-group">
      <span class="input-group-text">GET</span>
      <input type="text" class="form-control font-monospace" v-model="url" placeholder="url" />
      <button class="btn btn-primary btn-sm" @click="getItems">Listar</button>
    </div>

    <table class="table table-sm table-striped table-hover table-responsive" v-if="items.length > 0">
      <tbody>
        <tr v-for="(item, index) of items" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>
            {{ item }}
          </td>
          <td>
            <button class="btn btn-secondary btn-sm" @click="detalleItem(item.id)">Detalle</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>`,

  data() {
    return {
      items: [],
      url: '',
    };
  },

  mounted() {
    this.updateUrl();
  },

  methods: {
    updateUrl() {
      const qs = new URLSearchParams(this.params).toString();
      console.log(qs);
      this.url = `/api/tareas`;
    },

    async getItems() {
      try {
        const response = await axios.get(this.url);
        this.items = response.data;
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
    },

    detalleItem(idTarea) {
      this.$emit('detallereq', idTarea);
    },

  }
};

export default TareasLista;