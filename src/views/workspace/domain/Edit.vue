<template>
  <content-area class="domain-edit-index">
    <template slot="content">
      <page-header :title="action === 'create' ? '创建网域' : '编辑网域'" :showIcon="true" @back="() => this.$router.go(-1)"></page-header>
      <div class="page-content">
        <a-form-model ref="domainDetailRef" class="domain-detail-form" :rules="rules" :layout="'horizontal'" labelAlign="left" :model="form" :label-col="{ span: 4 }" :wrapper-col="{ span: 15 }">
          <p class="form-title">基本信息</p>
          <a-form-model-item prop="name" label="名称"><a-input v-model="form.name" placeholder="请输入名称" /></a-form-model-item>
          <a-form-model-item prop="cluster" label="集群">
            <a-select v-model="form.cluster">
              <a-select-option key="1">集群aaaaa</a-select-option>
              <a-select-option key="2">集群bbbbb</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item prop="gateway" label="网关"><span>0</span></a-form-model-item>
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
      id: "",
      rules: {
        name: [
          { required: true, message: "必填", trigger: "blur" },
          { max: 64, message: "长度最大64位", trigger: "blur" },
        ],
      },
      form: {
        name: undefined,
        cluster: undefined,
        gateway: undefined,
        remark: undefined,
      },
    };
  },
  created() {
    let { action, id } = this.$route.query;
    this.action = action;
    this.id = id;
    if (action === "edit") {
      this.getDomainDetail(id);
    }
  },
  methods: {
    submit() {

    },
    async getDomainDetail(id) {
      console.log(`id:${id}`);
    }
  },
};
</script>

<style lang="less">
.domain-edit-index {
  background-color: white;
  .page-content {
    margin-top: 20px;
    .domain-detail-form {
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