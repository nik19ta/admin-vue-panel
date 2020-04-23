<template>
<div class="addDotmap">
    <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>Управление точками</el-breadcrumb-item>
          <el-breadcrumb-item>Добавление</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="addForm">
     <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
  <el-form-item label="Название точки">
    <el-input v-model="sizeForm.name" placeholder="Name"></el-input>
  </el-form-item>
  <el-form-item label="Адресс точки">
    <el-input v-model="sizeForm.adress" placeholder="Adress"></el-input>
  </el-form-item>
  <el-form-item label="Время работы">
      <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="sizeForm.date1" style="width: 100%;"></el-time-picker>
    </el-col>
    <el-col class="line"  :span="1" offset="1">-</el-col>
    <el-col :span="11">
      <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
    </el-col>
  </el-form-item>
  <el-form-item label="Activity type">
      <el-col :span="11">
          <el-input v-model="sizeForm.axisX" placeholder="axisX" ></el-input>
      </el-col>
     <el-col :span="1" offset="1" class="line">-</el-col>
      <el-col :span="11">
          <el-input v-model="sizeForm.axisY" placeholder="axisY"></el-input>
      </el-col>
  </el-form-item>
  <el-form-item>
     <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList">
  <el-button size="small" type="primary">Click to upload</el-button>
  <div slot="tip" class="el-upload__tip">jpg/png files with a size less than 500kb</div>
</el-upload>
  </el-form-item>

  <el-form-item size="large">
    <el-button type="primary" @click="onSubmit">Create</el-button>
    <el-button @click="onCancel">Cancel</el-button>
  </el-form-item>
 
</el-form>
    </div>
    
</div>
</template>
<style  >
.addDotmap{
  padding: 20px;
}
.addForm{
    margin-top: 50px;
}    
</style>
<script>
  export default {
    data() {
      return {
        sizeForm: {
          name: '',
          adress:'',
          date1:'',
          date2: '',
          axisX:'',
          axisY:''
        },
        fileList: []
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + fileList.length} totally`);
      },
      beforeRemove(file, fileList) {
        console.log(file, fileList);
        return this.$confirm(`Cancel the transfert of ${ file.name } ?`);
        
      },
      onCancel(){
        this.sizeForm.name = null
        this.sizeForm.adress = null
        this.sizeForm.date1 = null
        this.sizeForm.date2 = null
        this.sizeForm.type = null
        this.sizeForm.axisX = null
        this.sizeForm.axisY = null
      }
    }
  };
</script>