<template>
    <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item></el-breadcrumb-item>
          
          </el-breadcrumb>
    </el-main>
</template>
<script>
export default {
    name: 'Main',
    props: {
    msg: String
  }
}

</script>
<style >
.main-container{
  display: flex;
  flex-direction: column;
}
</style>