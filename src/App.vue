<template>
  <v-app>
    <v-app-bar
      app
      color="white"
      light
    >
      <div class="d-flex align-center"
        style="padding-left: 80px"
      >
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/Logo G.png"
          transition="scale-transition"
          width="40"
        />

        <v-btn depressed v-for="link in links" :key="link.link"
          route :to="link.link"
          class="mx-4 my-4"
          active-class="no-active"
        >
          <div 
          
          >{{link.text}}</div>
        </v-btn>

        <v-overflow-btn
          class="mt-4"
          :items="us"
          label="Us"
          
        ></v-overflow-btn>
      </div>

      <v-spacer></v-spacer>

    <v-col cols="3"
      style="padding-right: 80px"
    >
      <v-text-field
      dense
        clearable
        rounded
        outlined
        label="Search"
        prepend-inner-icon="mdi-magnify"
        style="margin-top: 30px"
      ></v-text-field>

    </v-col>

    </v-app-bar>

    <v-main>

        <router-view/>
      
    </v-main>
    <v-footer
      dark 
      class="font-weight-medium"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>UwU</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style >
.v-btn--active.no-active::before {                                                                             
  opacity: 0 !important;
}
  .v-btn--active, .v-btn--active:hover{
    background-color: white !important; 
  }
  .v-btn--active div{
    border-bottom : 2px solid #000;
  }

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}
.container {
  width: 80vw;
  margin: 0 auto;
}
img {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

</style>

<script>
var count  = 0;
export default {
  name: 'App',

  data: () => ({
    links : [
      {
        text : "Home",
        link : "/home"
      },
      {
        text : "Vacation",
        link : "/vacation"
      },
      {
        text : "Anything",
        link : "/anything"
      }
    ],
    us : ['Utu','Bayu','Roi','RaV'],
  }),
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    }
  }
};
</script>
