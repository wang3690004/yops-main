<template>
  <div class="cluster-edit">
    <page-header :title="action === 'create' ? '创建Kubernetes集群' : '编辑Kubernetes集群'" :showIcon="true" @back="() => $router.go(-1)" />
    <!-- pageheader -->
    <div class="page-content">
      <a-form-model ref="clusterRef" class="cluster-form" :rules="rules" :layout="'horizontal'" labelAlign="left" :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 15 }">
        <p class="form-title">基本信息</p>
        <a-form-model-item prop="name" label="名称"><a-input v-model="form.name" /></a-form-model-item>

        <a-form-model-item prop="type" label="类型">
          <a-select v-model="form.type">
            <a-select-option key="1">测试类型一</a-select-option>
            <a-select-option key="2">测试类型二</a-select-option>
          </a-select>
        </a-form-model-item>

        <a-form-model-item prop="domain" label="网域">
          <a-select v-model="form.domain">
            <a-select-option key="1">测试类型一</a-select-option>
            <a-select-option key="2">测试类型二</a-select-option>
          </a-select>
        </a-form-model-item>

        <p class="form-title">Kubernetes</p>
        <a-form-model-item prop="cluster" label="集群"><a-input v-model="form.cluster" /></a-form-model-item>

        <a-form-model-item prop="kubeConfig" label="KubeConfig"><a-input v-model="form.kubeConfig" type="textarea" /></a-form-model-item>

        <p class="form-title">其他</p>
        <a-form-model-item prop="other" label="备注"><a-input v-model="form.other" type="textarea" /></a-form-model-item>

        <a-form-model-item>
          <div style="width: 100%; text-align: center">
            <a-space size="large">
              <a-button @click="submit" type="primary">提交</a-button>
              <a-button @click="cancel">取消</a-button>
            </a-space>
          </div>
        </a-form-model-item>
      </a-form-model>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
export default {
  components: { PageHeader },
  created() {
    let { action } = this.$route.query;
    // console.log(action);
    if (action === "edit") {
      this.action = "edit";
      this.getClusterDetail(this.$route.query.id);
    } else {
      this.action = "create";
    }
  },
  data() {
    return {
      submitDenyFlag: false, //防止多次提交
      action: "create", //create, edit
      form: {
        name: undefined,
        type: undefined,
        domain: undefined,
        cluster: undefined,
        kubeConfig: undefined,
        other: undefined,
      },
      rules: {
        name: [
          { required: true, message: "必填", trigger: "blur" },
          { max: 64, message: "长度最大64位", trigger: "blur" },
        ],
        type: [{ required: true, message: "必填", trigger: "blur" }],
        cluster: [
          { required: true, message: "必填", trigger: "blur" },
          { max: 64, message: "长度最大64位", trigger: "blur" },
        ],
        kubeConfig: [
          { required: true, message: "必填", trigger: "blur" },
          { max: 128, message: "长度最大128", trigger: "blur" },
        ],
        other: [{ max: 128, message: "长度最大128", trigger: "blur" }],
      }, //创建 编辑校验
    };
  },

  methods: {
    async getClusterDetail(id) {
      console.log(id);
    }, //根据id获取集群详情
    submit() {
      this.$refs.clusterRef.validate(async (valid) => {
        if (!valid) {
          return;
        }
        console.log(this.form);
      });
    },
    cancel() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="less" >
.cluster-edit {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background-color: #fff;
  .page-content {
    margin-top: 20px;
  }
  .cluster-form {
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
</style>