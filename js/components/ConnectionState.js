import { state } from "../socket.js";

const ConnectionState = {
  template: `<div>
    <p>State: {{ connected }}</p>
  </div>
  `,

  data() {
    return {

    };
  },

  computed: {
    connected() {
      return state.connected;
    }
  }

};

export default ConnectionState;