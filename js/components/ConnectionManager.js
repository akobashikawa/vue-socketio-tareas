import { socket } from "../socket.js";

const ConnectionManager = {
  template: `<div>
    <button class="btn btn-primary" @click="connect()">Connect</button>
    <button class="btn btn-warning" @click="disconnect()">Disconnect</button>
  </div>
  `,

  data() {
    return {

    };
  },

  methods: {
    connect() {
      socket.connect();
      console.log('socket connect...');
      socket.timeout(1000).emit("updatedUserList", null, () => {
        console.log('emitted...');
      });
    },
    disconnect() {
      socket.disconnect();
      console.log('socket disconnect...');
      socket.timeout(1000).emit("updatedUserList", null, () => {
        console.log('emitted...');
      });
    }
  }

};

export default ConnectionManager;