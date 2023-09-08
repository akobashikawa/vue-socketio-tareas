import { socket } from "../socket.js";

import TareasCreador from './TareasCreador.js';
import TareasLista from './TareasLista.js';
import TareasItem from './TareasItem.js';

const Tareas = {
  components: {
    TareasCreador,
    TareasLista,
    TareasItem,
  },

  template: `<div>
    <h1>Tareas</h1>

    <div class="accordion" id="tareas">

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-tareasCreador" aria-expanded="false" aria-controls="flush-tareasCreador">
          Crear tarea
          </button>
        </h2>
        <div id="flush-tareasCreador" class="accordion-collapse collapse">
          <div class="accordion-body">
            <TareasCreador @detallereq="updateItem" />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-tareasLista" aria-expanded="false" aria-controls="flush-tareasLista">
          Lista de tareas
          </button>
        </h2>
        <div id="flush-tareasLista" class="accordion-collapse collapse">
          <div class="accordion-body">
            <TareasLista ref="tareaslista" @detallereq="updateItem" />
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-tareasItem" aria-expanded="false" aria-controls="flush-tareasItem">
          Detalle de tarea
          </button>
        </h2>
        <div id="flush-tareasItem" class="accordion-collapse collapse">
          <div class="accordion-body">
            <TareasItem :id="idTarea" @itemupdated="updateItem" @itemdeleted="updateItem"/>
          </div>
        </div>
      </div>
    </div>

  </div>`,

  data() {
    return {
      idTarea: '',
    };
  },

  mounted() {
    socket.on('tareaCreated', (created) => {
      console.log(created);
      this.updateItem(created.id);
    });

    socket.on('tareaUpdated', (updated) => {
      console.log(updated);
      this.updateItem(updated.id);
    });

    socket.on('tareaDeleted', (deleted) => {
      console.log(deleted);
      this.updateItem(deleted);
    });
  },

  methods: {
    updateItem(idTarea) {
      this.idTarea = idTarea;
      this.updateLista();
    },
    updateLista() {
      this.$refs.tareaslista.getItems();
    }
  },


};

export default Tareas;