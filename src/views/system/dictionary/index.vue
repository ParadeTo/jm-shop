<template>
  <div class="app-container">
    <el-form :inline="true" :model="query" class="demo-form-inline">
      <el-form-item label="编码">
        <el-input v-model="query.code" placeholder="" />
      </el-form-item>
      <el-form-item label="字典中文">
        <el-input v-model="query.code" placeholder="" />
      </el-form-item>
      <el-button type="primary" v-waves icon="el-icon-search" @click="handleFilter">查询</el-button>
    </el-form>

    <el-row>
      <el-button type="primary" v-waves icon="el-icon-plus" @click="dialogVisible=true">新增</el-button>
    </el-row>

    <el-dialog title="新增词条" :visible.sync="dialogVisible">
      <el-form :rules="rules" ref="dataForm" :model="formModel" label-position="right" label-width="100px" style='width: 400px; margin-left:50px;'>
        <el-form-item :key="index" v-for="(field, index) in formFields" :label="field.label" :prop="field.key">
          <el-input style="width: 160px;" v-model="formModel[field.key]" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add">确认</el-button>
        <el-button @click="dialogVisible = false">取消</el-button>
      </div>
    </el-dialog>

    <my-table
      :cols="cols"
      :updateListFunc="updateTableFunc"
      style="margin-top: 20px;"
    >
      <el-table-column slot="action" align="center" label="动作" min-width="100" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button type="text" size="mini" @click="view(scope.row)">查看</el-button>
          <el-button type="text" size="mini" @click="edit(scope.row)">修改</el-button>
          <el-button type="text" size="mini" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </my-table>
  </div>
</template>

<script>


export default {
  data () {
    return {
      dialogVisible: false,
      query: {
        name: '',
      },
      cols: [{
        key: 'code',
        label: '编码'
      }, {
        key: 'value',
        label: '字典值'
      }, {
        key: 'label',
        label: '字典中文（显示值）'
      }, {
        key: 'number',
        label: '序号'
      }, {
        key: 'createTime',
        label: '创建时间'
      }],
      formFields: [{
        label: '编码',
        key: 'code'
      }, {
        label: '字典值',
        key: 'value'
      }, {
        key: 'label',
        label: '字典中文（显示值）'
      }, {
        key: 'number',
        label: '序号'
      }],
      formModel: {
        code: '',
        value: '',
        label: '',
        number: ''
      }
    }
  },

  methods: {
    handleFilter () {

    },
    edit () {

    },
    view () {
      this.dialogVisible = true
    },
    del () {},
    async updateTableFunc ({page, limit}) {
      
    },
  }
}
</script>

