<template>
  <div class="modal">
      <v-row
        align="center"
        justify="center"
      >
          <v-col cols="1">
            <v-btn icon color="white" @click="loadPrevious()" x-large>
                <v-icon x-large style="font-size: 60">mdi-chevron-left</v-icon>
            </v-btn>        
          </v-col>

        <v-col cols="6">
            <!-- <div 
                class="white "
            > -->
                <v-img :src="getImgUrl(id)" contain aspect-ratio="1.3" class="rounded"></v-img>    
                <v-btn class="blue mt-4"
                    :href="getImgUrl(id)"
                    download
                >
                    Donwload
                </v-btn>

            <!-- </div> -->
            
          </v-col>

          

          <v-col cols="1">
            <v-btn icon color="white" @click="loadNext()" x-large>
                <v-icon x-large>mdi-chevron-right</v-icon>
            </v-btn>        
          </v-col>

          
      </v-row>
      
  </div>
</template>

<script>
export default {
    props: ['id','images'],
    data(){
        
    },
    methods:{
        getImgUrl(id) {
            return require('../assets/UwU/'+ this.images[id].src)
        },
        loadNext(){
            this.id = (this.id >= this.$store.getters.maxLength) ? this.id : this.id + 1
        },
        loadPrevious(){
            this.id = (this.id <= 0) ? this.id : this.id - 1
        }
    }
}
</script>

<style>
    .modal{
        overflow: hidden;
        box-shadow: none;
    }
</style>