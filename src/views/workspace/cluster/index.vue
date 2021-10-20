<template>
  <div class="cluster-index">
    <page-header title="集群列表" :showIcon="false"></page-header>
    <!-- pageheader -->

    <div class="page-content">
      <div class="page-search">
        <a-button type="primary" @click="createCluster">+ 创建集群</a-button>
        <a-input-search style="width: 350px" placeholder="搜索"></a-input-search>
      </div>
      <div class="page-data-table">
        <s-table class="s-table" ref="table" :pageSize="50" :rowKey="(record) => record.id" :columns="columns" :data="loadData">
          <template slot="clusterName" slot-scope="clusterName, record">
            <span class="cursor" style="color: #1890ff" @click="switchToDetail(record)">{{ clusterName }}</span>
          </template>
          <!-- 标题 -->

          <template slot="date" slot-scope="date">
            <span>{{ date | standardTime }}</span>
          </template>
          <!-- 日期类 -->

          <template slot="action" slot-scope="action, record">
            <a-space>
              <span class="cursor" @click="editItem(record)">编辑</span>
              <span class="cursor" @click="loginIn(record)">登录</span>
              <span class="cursor" style="color: red" @click="deleteConfirm(record)">删除</span>
            </a-space>
          </template>
          <!-- 标题 -->
        </s-table>
      </div>
    </div>
  </div>
</template>

<script>
// import { getClustersList } from "@/apis/kubernets/workspace/cluster";
import { standardTime } from "@/utils/timeformat";
import { getClusters } from "@/apis/mock";
import PageHeader from "@/components/PageHeader";
import STable from "@/components/STable";
export default {
  components: { PageHeader, STable },
  filters: {
    standardTime(time) {
      return standardTime(time);
    },
  },
  data() {
    return {
      columns: [
        {
          dataIndex: "id",
          title: "ID",
          width: 100,
        },
        {
          dataIndex: "name",
          title: "集群名称",
          width: 200,
          scopedSlots: { customRender: "clusterName" },
        },
        {
          dataIndex: "status",
          title: "状态",
          width: 100,
        },
        {
          dataIndex: "nodesCount",
          title: "节点数量",
          width: 100,
        },
        {
          dataIndex: "createTime",
          title: "创建时间",
          width: 150,
          sorter: true,
          scopedSlots: { customRender: "date" },
        },
        {
          title: "操作",
          width: 200,
          scopedSlots: { customRender: "action" },
        },
      ],
      loadData: this.getClusterData,
    };
  },

  methods: {
    createCluster() {
      this.$router.push({ name: "clusterEdit", query: { action: "create" } });
    },
    editItem(record) {
      this.$router.push({ name: "clusterEdit", query: { action: "edit", id: record.id } });
    },
    switchToDetail(record) {
      this.$router.push({ name: "clusterDetail", params: { id: record.id } });
    },
    deleteConfirm(record) {
      console.log(record);
      let _this = this;
      this.$confirm({
        title: "提示",
        content: "确定要删除此集群?",
        onOk() {
          _this.deleteCluster(record);
        },
        oncancel() {},
      });
    },
    loginIn() {},
    async deleteCluster(record) {
      console.log(record);
    },
    async getClusterData(params) {
      console.log(params);
      let query = {
        orderbys: [],
        skip: (params.pageNo - 1) * params.pageSize,
        limit: params.pageSize,
      };

      let res = await getClusters(query);
      console.log(res.data);
      if (res.data.ret > -1) {
        return res.data;
      } else {
        return [];
      }
    },
  },
};
</script>
<style lang="less" >
.cluster-index {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background-color: #fff;
  .page-content {
    margin-top: 20px;
  }
  .page-search {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>