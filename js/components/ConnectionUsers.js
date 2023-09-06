import { socket } from "../socket.js";

const ConnectionUsers = {
  template: `<div>
    <pre>{{ items }}</pre>
  </div>
  `,

  data() {
    return {
      items: [],
    };
  },

  mounted() {
    console.log('ConnectionUsers mounted...');
    this.getItems();
    socket.on('updatedUserList', (msg) => {
      this.getItems();
    });
  },

  methods: {
    async getItems() {
      try {
        const response = await axios.get(`/api/sockets/connection-users`);
        this.items = response.data;
      } catch (error) {
        console.log(error);
        this.error = error.message;
      }
    },
  }

};

export default ConnectionUsers;