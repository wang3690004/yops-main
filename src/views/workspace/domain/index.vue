<template>
  <content-area class="domain-index">
    <template slot="content">
      <page-header title="网域加速" :showIcon="false" />
      <div class="page-content">
        <div class="page-search">
          <a-button type="primary" @click="createDomain">+ 创建网域</a-button>
          <a-input-search style="width: 350px" placeholder="搜索"></a-input-search>
        </div>
        <div>
          <s-table size="small" ref="table" :pageSize="50" :rowKey="(record) => record.id" :columns="columns" :data="loadData" :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }">
            <!-- 标题 -->
            <template slot="domainName" slot-scope="domainName, record">
              <span class="cursor" style="color: #1890ff" @click="switchToDetail(record)">{{ domainName }}</span>
            </template>

            <!-- 网关 -->
            <template slot="gateway" slot-scope="gateway, record">
              <span class="cursor" style="color: #1890ff" @click="switchToGateway(record)">{{ gateway }}</span>
            </template>

            <!-- 日期类 -->
            <template slot="date" slot-scope="date">
              <span>{{ date | standardTime }}</span>
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
import ContentArea from "@/components/ContentArea";
import PageHeader from "@/components/PageHeader";
import STable from "@/components/STable";
import { getDomains } from "@/apis/mock";
export default {
  components: { ContentArea, PageHeader, STable },
  data() {
    return {
      columns: [
        {
          dataIndex: "name",
          title: "名称",
          width: 200,
          scopedSlots: { customRender: "domainName" },
        },
        {
          dataIndex: "cluster",
          title: "集群",
          width: 200,
        },
        {
          dataIndex: "gateway",
          title: "网关",
          width: 200,
          scopedSlots: { customRender: "gateway" },
        },
        {
          dataIndex: "note",
          title: "注释",
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
      loadData: this.getDomainList,
      selectedRowKeys: [],
    };
  },
  methods: {
    createDomain() {
      this.$router.push({ name: "domainEdit", query: { action: "create" } });
    },
    editItem(record) {
      this.$router.push({ name: "domainEdit", query: { action: "edit", id: record.id } });
    },
    async getDomainList(params) {
      let query = {
        orderbys: [],
        skip: (params.pageNo - 1) * params.pageSize,
        limit: params.pageSize,
      };

      let res = await getDomains(query);
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
    switchToGateway(record) {
      console.log(`recordId:${record.id}`);
      this.$router.push({ name: "domainGateway" });
    },
    switchToDetail(record) {
      this.$router.push({ name: "domainDetail", params: { id: record.id } });
    }
  },
  computed: {
    hasSelected() {
      return this.selectedRowKeys.length > 0;
    },
  },
};
</script>

<style lang="less">
.domain-index {
  background-color: white;
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