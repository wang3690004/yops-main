<template>
  <content-area class="gateway-index">
    <template slot="content">
      <page-header title="网关" :showIcon="true" @back="() => this.$router.go(-1)" />
      <div class="page-content">
        <div class="page-search">
          <a-button type="primary" @click="createGateway">创建网关</a-button>
          <div class="flex-align-center">
            <a-input-search style="width: 350px" placeholder="搜索"></a-input-search>
            <a-icon type="upload" class="operate-icon ml20" @click="upload" />
            <a-icon type="download" class="operate-icon ml10" @click="download" />
          </div>
        </div>
        <div>
          <s-table size="small" ref="table" :pageSize="50" :rowKey="(record) => record.id" :columns="columns" :data="loadData" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
            <!-- 日期类 -->
            <template slot="date" slot-scope="date">
              <span>{{ date }}</span>
            </template>

            <!-- 动作 -->
            <template slot="action" slot-scope="action, record">
              <a-space>
                <span class="cursor" @click="editItem(record)">编辑</span>
                <span class="cursor" style="color: red" @click="deleteItem(record)">删除</span>
              </a-space>
            </template>
          </s-table>
        </div>
      </div>
    </template>
  </content-area>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import ContentArea from "@/components/ContentArea";
import STable from "@/components/STable";
import { getGateways } from "@/apis/mock";
export default {
  components: { ContentArea, STable, PageHeader },
  data() {
    return {
      columns: [
        {
          dataIndex: "name",
          title: "名称",
          width: 400,
        },
        {
          dataIndex: "ip",
          title: "IP",
          width: 200,
        },
        {
          dataIndex: "port",
          title: "端口",
          width: 100,
        },
        {
          dataIndex: "protocol",
          title: "协议",
          width: 100,
        },
        {
          dataIndex: "username",
          title: "用户名",
          width: 200,
        },
        {
          dataIndex: "remark",
          title: "备注",
          width: 200,
        },
        {
          dataIndex: "createTime",
          title: "创建时间",
          width: 200,
          scopedSlots: { customRender: "date" },
        },
        {
          dataIndex: "action",
          title: "操作",
          width: 200,
          scopedSlots: { customRender: "action" },
        },
      ],
      loadData: this.getGatewayList,
      selectedRowKeys: [],
    };
  },
  methods: {
    upload() {
      console.log("upload");
    },
    download() {
      console.log("download");
    },
    createGateway() {
      this.$router.push({ name: "domainGatewayEdit", query: { action: "create" } });
    },
    editItem(record) {
      this.$router.push({ name: "domainGatewayEdit", query: { action: "edit", id: record.id } });
    },
    async getGatewayList(params) {
      let query = {
        orderbys: [],
        skip: (params.pageNo - 1) * params.pageSize,
        limit: params.pageSize,
      };

      let res = await getGateways(query);
      console.log(res.data);
      if (res.data.ret > -1) {
        return res.data;
      } else {
        return [];
      }
    },
    onSelectChange(selectedRowKeys) {
      this.selectedRowKeys = selectedRowKeys;
    },
  },
};
</script>

<style lang="less">
.gateway-index {
  background-color: white;
  .page-content {
    margin-top: 20px;
    .page-search {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      .operate-icon {
        font-size: 20px;
      }
    }
  }
}
</style>