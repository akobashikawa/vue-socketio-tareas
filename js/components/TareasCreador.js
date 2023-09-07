import config from '../config.js';
const apiBaseUrl = config.apiBaseUrl;

const TareasCreador = {
  props: { id: { type: String } },

  template: `<div>
    <div class="row">
      <textarea class="form-control font-monospace" v-model="itemDtoJson" placeholder="itemDtoJson"></textarea>
    </div>

    <div class="input-group">
      <span class="input-group-text">POST</span>
      <input type="text" class="form-control font-monospace" v-model="createUrl" placeholder="url">
      <button class="btn btn-primary btn-sm" @click="createItem">Create</button>
    </div>

    <div v-if="errorCreate">
      <pre class="text-danger">{{errorCreate}}</pre>
    </div>

  </div>`,

  data() {
    return {
      item: { texto: "Ejemplo" },
      itemDtoJson: '',
      created: {},
      idTarea: null,
      createUrl: `${apiBaseUrl}/api/tareas`,

      errorGet: null,
      errorCreate: null,
    };
  },

  mounted() {
    this.itemDtoJson = JSON.stringify(this.item);
  },

  watch: {
  },

  methods: {
    isObjectEmpty(obj) {
      return JSON.stringify(obj) === "{}";
    },

    async getItem() {
      this.errorGet = null;

      try {
        const response = await axios.get(this.getUrl);
        this.item = response.data;
      } catch (error) {
        console.log(error);
        this.errorGet = `${error.message}\n${JSON.stringify(error.response.data)}`;
      }
    },

    async createItem() {
      this.errorCreate = null;
      
      try {
        const body = JSON.parse(this.itemDtoJson);
        const response = await axios.post(this.createUrl, body);
        const created = response.data;
        if (created) {
          this.created = created;
          const idTarea = created.id;
          this.$emit('detallereq', idTarea);
        }
      } catch (error) {
        console.log(error);
        this.errorCreate = `${error.message}`;
      }
    },

  }
};

export default TareasCreador;