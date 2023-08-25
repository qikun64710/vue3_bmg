<template>
    <div class="app-container ArticleAdd">
      <div class="ArticleAdd-head">
        <el-button type="primary">发布</el-button>
        <el-button type="primary">暂存</el-button>
      </div>
      <el-form ref="ruleFormRef" label-position="right" label-width="60px" :model="ruleForm" :rules="rules">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>文章属性</span>
                    </div>
                </template>
              <el-form-item label="标题" prop="name">
                <el-input v-model="ruleForm.title" />
              </el-form-item>
              <el-form-item label="总结" prop="summary">
                <el-input v-model="ruleForm.summary" />
              </el-form-item>
              <el-form-item label="封面" prop="posterUrl">
                <el-upload style="width: 100%" list-type="picture" class="upload-demo" drag action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15">
                  <el-icon class="el-icon--upload"><upload-filled /></el-icon>
                  <div class="el-upload__text">
                    Drop file here or
                    <em>click to upload</em>
                  </div>
                </el-upload>
              </el-form-item>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card class="box-card">
                <template #header>
                    <div class="card-header">
                        <span>文章标签</span>
                    </div>
                </template>
                <el-checkbox-group v-model="tag.tagsSelected">
                    <el-checkbox
                        :class="tag.colors[Math.floor(Math.random() * tag.colors.length)]"
                        v-for="item of tag.list"
                        :key="item.id"
                        :label="item.id" >
                        {{ item.name}}
                    </el-checkbox>
                </el-checkbox-group>
            </el-card>
          </el-col>
        </el-row>
        <el-row>
          <el-col>
            <el-card class="box-card" style="margin-top: 20px">
                <template #header>
                    <div class="card-header">
                        <span>正文</span>
                    </div>
                </template>
              <MdEditor v-model="ruleForm.text" :toolbars="(toolbars as any)" />
            </el-card>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </template>
<script lang="ts" setup>
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { reactive } from 'vue'
const tag = reactive<{
  colors: string[];
  list: Array<{
    id: number;
    name: string;
  }>;
  tagsSelected: Array<{
    id: number;
    name: string;
  }>;
}>({
  colors: [
    'color-orange',
    'color-gray',
    'color-green',
    'color-blue',
    'color-red',
    'color-purple',
    'color-white'
  ],
  list: [{ id: 1, name: 'VUE' }, { id: 2, name: 'React' }],
  tagsSelected: []
})
const ruleForm = reactive({
  title: '',
  summary: '',
  posterUrl: '',
  text: 'Hello Editor!'
})
const rules = reactive({
  name: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  summary: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ],
  posterUrl: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change'
    }
  ]
})
const toolbars = reactive([
  'bold',
  'underline',
  'italic',
  '-',
  'title',
  'strikeThrough',
  'sub',
  'sup',
  'quote',
  'unorderedList',
  'orderedList',
  'task',
  '-',
  'codeRow',
  'code',
  'link',
  'image',
  'table',
  'mermaid',
  'katex',
  '-',
  'revoke',
  'next',
  'save',
  '=',
  'pageFullscreen',
  'fullscreen',
  'preview',
  'htmlPreview',
  'catalog'
])
</script>
  <style lang="scss">
  .ArticleAdd {
    &-head {
      margin-bottom: 10px;
      display: flex;
      justify-content: end;
    }
  }
  .el-checkbox {
        height: 24px;
    }
    .el-row {
        margin-bottom: 20px;
    }

    .color-orange {
        color: #e6a23c;
    }
    .color-gray {
        color: #909399 !important;
    }
    .color-green {
        color: #67c23a !important;
    }
    .color-blue {
        color: #63a7fd !important;
    }
    .color-red {
        color: #ff6169 !important;
    }
    .color-purple {
        color: #ab8adc !important;
    }
    .color-white {
        color: #988c8c !important;
    }
  </style>
