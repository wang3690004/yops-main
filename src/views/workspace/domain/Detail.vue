<template>
  <content-area class="domain-detail-index">
    <template slot="content">
      <page-header :title="domainInfo.name + domainInfo.id" :showIcon="true" @back="() => this.$router.go(-1)"></page-header>
      <div class="page-content">
        <a-form-model class="form-model" :rules="rules" :model="domainInfo" :layout="'horizontal'" labelAlign="left" :label-col="{ span: 4 }" :wrapper-col="{ span: 15 }">
          <p class="form-title">基本信息</p>
          <a-form-model-item prop="name" label="名称" :colon="false">{{ domainInfo.name + domainInfo.id }}</a-form-model-item>
          <a-form-model-item prop="host" label="主机" :colon="false">{{ domainInfo.host }}</a-form-model-item>
          <a-form-model-item prop="gateway" label="网关" :colon="false">{{ domainInfo.id }}</a-form-model-item>
          <a-form-model-item prop="createDate" label="创建日期" :colon="false">{{ domainInfo.createDate }}</a-form-model-item>
          <a-form-model-item prop="remark" label="备注" :colon="false">{{ domainInfo.remark }}</a-form-model-item>
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
      domainInfo: {
        id: "",
        name: "网域",
        host: "网域主机",
        createDate: "2021/4/27 14:25:40",
        remark: "Aliyun-ap-northeast-1(vpc-6wedrdsu7zk0gke58q7kq)",
      },
      rules: {},
    };
  },
  created() {
    let { id } = this.$route.params;
    this.domainInfo.id = id;
    this.getDomainDetail(id);
  },
  //获取网域详情信息
  async getDomainDetail(id) {
    console.log(`id:${id}`);
  },
};
</script>

<style lang="less">
.domain-detail-index {
  background-color: white;
  .page-content {
    margin-top: 20px;
    .form-model {
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