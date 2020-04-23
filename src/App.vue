<template>
  <div id="app">
    <el-container>
      <Aside></Aside>
      <el-container class="main-container">
        <Header></Header>
        <router-view class="router-view"></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Aside from './components/Aside'
import Header from './components/Header'


export default {
  name: 'App',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
  components: {
    Aside,Header, 
  },
  methods:{
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  }
  }
  

</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}


.main-container{
   background: #EEF1F4;
}

</style>
