import { socket } from "../socket.js";

const ConnectionMyForm = {
  template: `<div>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <input class="form-control" v-model="value" />
  
        <button class="btn btn-primary" type="submit" :disabled="isLoading">Submit</button>

      </div>
    </form>

    <p>
      {{ message }}
    </p>
  </div>
  `,

  data() {
    return {
      isLoading: false,
      value: '',
      message: '',
    };
  },

  mounted() {
    console.log('mounted...');
    socket.on('create-something', (msg) => {
      console.log(msg);
      this.message = msg;
    });
  },

  methods: {
    onSubmit() {
      this.isLoading = true;

      socket.timeout(1000).emit("create-something", this.value, () => {
        console.log('emitted...');
        this.isLoading = false;
      });
    },
  }

};

export default ConnectionMyForm;