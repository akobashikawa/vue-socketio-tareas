const AppComponent = {
  components: {  },

  template: `
<div>
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">Express</a>
        </div>
    </nav>
    <div class="container-fluid">

      <router-view></router-view>
      
    </div>

</div>`,

  data() {
    return {
    };
  },

  mounted() {
  }

};

export default AppComponent;