<template>
  <content-area class="gateway-edit-index">
    <template slot="content">
      <page-header :title="action === 'create' ? '创建网关' : '编辑网关'" :showIcon="true" @back="() => this.$router.go(-1)" />
      <div class="page-content">
        <a-form-model ref="gatewayRef" class="gateway-form" :rules="rules" :layout="'horizontal'" labelAlign="left" :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 15 }">
          <p class="form-title">基本信息</p>
          <a-form-model-item prop="name" label="名称"><a-input v-model="form.name" placeholder="请输入名称" /></a-form-model-item>
          <a-form-model-item prop="ip" label="IP">
            <a-select v-model="form.ip">
              <a-select-option key="1">127.0.0.0</a-select-option>
              <a-select-option key="2">127.0.0.1</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item prop="port" label="端口">
            <a-select v-model="form.port">
              <a-select-option key="1">20000</a-select-option>
              <a-select-option key="2">20001</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item prop="protocol" label="协议" extra="SSH网关，支持代理SSH,RDP和VNC"><span>ssh</span></a-form-model-item>
          <a-form-model-item prop="domain" label="网域"><span>Aliyun-ap-northeast-1(vpc-6wedrdsu7zk0gke58q7kq)</span></a-form-model-item>
          <p class="form-title">认证</p>
          <a-form-model-item prop="username" label="用户名"><a-input v-model="form.username" placeholder="请输入用户名" /></a-form-model-item>
          <a-form-model-item prop="password" label="密码" extra="不能包含特殊字符"><a-input v-model="form.password" placeholder="请输入密码" /></a-form-model-item>
          <a-form-model-item prop="sshkey" label="SSH密钥">
            <a-upload name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :headers="headers" @change="handleUploadChange">
              <a-button>
                <a-icon type="upload" />
                选择文件导入
              </a-button>
            </a-upload>
          </a-form-model-item>
          <p class="form-title">其他</p>
          <a-form-model-item prop="isActive" label="激活">
            <a-switch v-model="form.isActive" />
          </a-form-model-item>
          <a-form-model-item prop="remark" label="备注"><a-input v-model="form.remark" type="textarea" /></a-form-model-item>
          <a-form-model-item>
            <div style="width: 100%; text-align: center">
              <a-space size="large">
                <a-button @click="submit" type="primary">提交</a-button>
                <a-button @click="() => this.$router.go(-1)">取消</a-button>
              </a-space>
            </div>
          </a-form-model-item>
        </a-form-model>
      </div>
    </template>
  </content-area>
</template>

<script>
import ContentArea from "@/components/ContentArea";
import PageHeader from "@/components/PageHeader";
export default {
  components: { ContentArea, PageHeader },
  data() {
    return {
      action: "create",
      rules: {
        name: [
          { required: true, message: "必填", trigger: "blur" },
          { max: 64, message: "长度最大64位", trigger: "blur" },
        ],
        ip: [{ required: true, message: "必填", trigger: "blur" }],
      },
      form: {
        name: undefined,
        ip: undefined,
        port: undefined,
        username: undefined,
        password: undefined,
        isActive: true,
        remark: undefined
      },
      headers: {
        authorization: "authorization-text",
      },
    };
  },
  created() {
    let { action } = this.$route.query;
    this.action = action;
  },
  methods: {
    handleUploadChange(progress) {
      if (progress.file.status !== "uploading") {
        console.log(progress.file, progress.fileList);
      }
      if (progress.file.status === "done") {
        this.$message.success(`${progress.file.name} file uploaded successfully`);
      } else if (progress.file.status === "error") {
        this.$message.error(`${progress.file.name} file upload failed.`);
      }
    },
    submit() {
      
    }
  },
};
</script>

<style lang="less">
.gateway-edit-index {
  background-color: white;
  .page-content {
    margin-top: 20px;
    .gateway-form {
      width: 40%;
      .form-title {
        font-size: 15px;
        font-weight: 600;
        position: relative;
        padding-left: 10px;
        margin-bottom: 16px;
        color: #1a1a1a;
        &:before {
          content: "";
          position: absolute;
          left: 0;
          top: 3px;
          width: 4px;
          height: 16px;
          background: #0188fb;
        }
      }
    }
  }
}
</style>