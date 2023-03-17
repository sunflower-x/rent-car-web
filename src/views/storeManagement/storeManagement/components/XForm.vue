<template>
  <div class="XForm-container">
    <el-row :gutter="20">
      <el-col :span="5">
        <el-form-item label="门店内容">
          <el-input placeholder="请输入内容" />
        </el-form-item>
      </el-col>
      <el-col :span="5">
        <el-form-item label="门店状态">
          <el-select>
            <el-option>
              <option>全部</option>
            </el-option>
          </el-select>
        </el-form-item>
      </el-col>
    </el-row>
  </div>
</template>
<script setup></script>

<style scoped lang="scss">
.XForm-container{
  padding: 5px 20px;
}
</style>
