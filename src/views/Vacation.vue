<template>
  <div class="home">

    <v-dialog v-model="dialog" persistent 
      overlay-opacity="0.8"
    >
      
      <v-btn icon color="white"
      x-large
        @click="dialog=false"
        style="margin-right: -800px"
      >
          <v-icon x-large>mdi-close</v-icon>
      </v-btn>        
      <modal :id="modalid" :images="images"/>      

    </v-dialog>

    <div class="container">
      <stack
              :column-min-width="200"
              :gutter-width="15"
              :gutter-height="15"
              monitor-images-loaded
              
      >
        <stack-item
                v-for="image in images"
                :key="image.id"
                style="transition: transform 300ms"
        >
          <v-hover >
            <img :src="getImgUrl(image.src)" alt="" @click="dialog=true, modalid = image.id"
              class="image"
            >

          </v-hover>
          

      </stack-item>
      </stack>
   
    </div>

  </div>
</template>

<style >
  img:hover {
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0.6;
    cursor: zoom-in;
    transition: 0.1s;
  }
  .v-dialog{
    max-height: 100% !important;
    max-width: 100% !important;
    height: 100% !important;
    width: 100% !important;
    margin: -10px 0 0 0 !important;
    /* padding-top: 10px; */
    
  }
</style>

<script>
// @ is an alias to /src
import json from '../data.json'
import Modal from '../components/Modal.vue'

import { Stack, StackItem } from "vue-stack-grid";

export default {
  
  components: { 
      Stack, 
      StackItem ,
      Modal
  },
  
  name: 'Vacation',
  
  methods:{
      getImgUrl(pic) {
        return require('../assets/UwU/'+pic);
      },
      loadnext(){
        const newData = this.data.slice(this.startarray ,this.startarray + this.multiplier)
        this.count++;
        this.images = [...this.images, ...newData];
        console.log(this.images)
      },
      scroll(){
        window.onscroll = () => {
          let bottom = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
          if(bottom){
            this.loadnext()
          }
        }
      }
  },
  
  computed:{
    startarray(){
      return this.multiplier * this.count
    },

  },
  
  data () {
      return {
        dialog: false,
        modalid: 0,
        data: json,
        count: 0,
        multiplier: 50,
        images : []
      }
    },
  
  mounted(){
    this.loadnext()
    this.scroll()
  }
}
</script>
