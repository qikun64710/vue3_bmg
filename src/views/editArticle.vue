<template>
    <div class="editArticle">
        <el-form
            label-width="90px"
        >
        <el-row :gutter="14">
            <el-col :span="16">
                <el-card class="box-card">
                    <template #header>
                    <div class="card-header">
                        <span>文章属性</span>
                    </div>
                    </template>
                    <el-form-item label="文章标题">
                        <el-input v-model="article.title" />
                    </el-form-item>
                    <el-form-item label="预览图片">
                        <el-input v-model="article.banner"></el-input>
                        <el-upload
                            ref="upload"
                            class="upload-demo"
                            :action="action"
                            :limit="1"
                            :on-exceed="handleExceed"
                            :on-change="handleChange"
                            :auto-upload="true"
                        >
                            <template #trigger>
                                <el-button style="margin-top: 10px;" type="primary" >点击上传</el-button>
                            </template>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="文章摘要">
                        <el-input v-model="article.description"
                            :rows="4"
                            type="textarea"
                            placeholder="请输入摘要" 
                        />
                    </el-form-item>
                    <el-form-item label="">
                        <el-button type="success" @click="save">保存发布</el-button>
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
            <el-col :span="24">
                <md-editor 
                    v-model="article.content" 
                    @onChange="onChange" 
                    @onUploadImg="onUploadImg" 
                />
            </el-col>
        </el-row>
        </el-form>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { commonApi } from '../api/common'
export default defineComponent({
    computed: {
        action() {
            return `${process.env.VUE_APP_BASE_API}article/uploadImg`
        }
    },
    methods:{
        async onUploadImg(files: FileList, callback: (urls: string[]) => void) {
            const res = await Promise.all(
                Array.from(files).map((file) => {
                    return new Promise((rev, rej) => {
                        const form = new FormData();
                        form.append('file', file);
                        commonApi.uploadimg(form)
                        .then((res) => rev(res))
                        .catch((error) => rej(error));
                    });
                })
            );
            callback(res.map((item: any) => item.data));
        }
    }
}) 
</script>
<script lang="ts" setup>
import { reactive , ref, onBeforeMount} from "vue";
import { genFileId } from 'element-plus'
import "md-editor-v3/lib/style.css";
import MdEditor from "md-editor-v3";
import { articleApi } from '../api/article'
import { CategoryApi } from '../api/category'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
const article = reactive({
  title: '',
  status: 0,
  banner: '',
  description: '',
  content: '',
  content_html:''
});
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
  list: [],
  tagsSelected: []
});
onBeforeMount(() => {
    CategoryApi.selectCaAll().then( r => {
        if(r.code == 200){
            tag.list = r.result
        }
    })
})
const onChange = (value:string,render:string) => {
    article.content = value
};
const upload = ref<UploadInstance>()
const handleExceed: UploadProps['onExceed'] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
const handleChange:UploadProps['onChange'] = (file:any):void => {
    console.log('file:',file)
    if(file.status == 'success'){
        article.banner = file.response.data
    }
}
// 保存发布
const save = () => {
    let {title,banner,description,content} = article
    console.log(tag.tagsSelected)
    let params = {
        title,
        banner: banner,
        description,
        content:content,
        categoryList: tag.tagsSelected
    }
    articleApi.addArticle(params).then(res => {
        console.log(res)
    })
}
</script>
<style lang="scss" scoped>
    .editArticle{
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
    }
</style>