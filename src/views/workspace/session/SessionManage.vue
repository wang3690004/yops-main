<template>
  <div class="session-index">
    <page-header title="会话管理" :showIcon="false">
      <template slot="extra">
        <a-space size="large" style="margin-right: 10px">
          <span class="item" :class="{'active': pageType === 'online' }"
                @click="handleSessionType('online')">在线会话</span>
          <span class="item" :class="{'active': pageType === 'history' }"
                @click="handleSessionType('history')">历史会话</span>
        </a-space>
      </template>
    </page-header>

    <div class="page-content">
      <div class="page-search">
        <a-row>
          <a-col align="right">
            <a-space>
              <a-range-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm"
                              :placeholder="['开始时间', '结束时间']"  @change="selectTimeChange" @ok="onSearch" />
              <a-input-group compact>
                <a-select default-value="" @change="searchTypeChange">
                  <a-select-option v-for="item in searchTypeMap" :key="item.value">
                    {{ item.text }}
                  </a-select-option>
                </a-select>
                <a-input-search style="width: 250px" placeholder="搜索" v-model="searchInput" @search="onSearch"></a-input-search>
              </a-input-group>
            </a-space>
          </a-col>
        </a-row>
      </div>
      <div>
        <s-table ref="table" :pageSize="20" :rowKey="(record) => record.id" :columns="columns" :data="loadData"
                 :rowSelection="{onChange: rowSelectionOnChange}">
          <template slot="date" slot-scope="date">
            <span>{{ date | standardTime }}</span>
          </template>

          <template slot="action" slot-scope="action, record">
            <a-space v-if="pageType==='online'">
              <a style="color: #1890FF" @click="toTerminal(record)">终端</a>
              <a style="color: #1890FF" @click="toMonitor(record)">监控</a>
            </a-space>
            <a-space v-if="pageType==='history'">
              <a style="color: #1890FF" @click="toReplay(record)">回放</a>
              <a style="color: #1890FF" @click="download(record)">下载</a>
            </a-space>
          </template>
        </s-table>
      </div>
    </div>
  </div>
</template>

<script>
import { standardTime } from "@/utils/timeformat";
import { getSessionList } from "@/apis/mock";
import PageHeader from "@/components/PageHeader";
import STable from "@/components/STable";


export default {
  components: { PageHeader, STable },
  filters: {
    standardTime(time) {
      return standardTime(time);
    }
  },
  data() {
    return {
      pageType: "online",
      searchStartTime: null,
      searchEndTime: null,
      searchType: "",
      searchInput: "",
      queryParams: {},
      columns: [
        {
          dataIndex: "id",
          title: "ID"
        },
        {
          dataIndex: "username",
          title: "用户"
        },
        {
          dataIndex: "instance",
          title: "目标"
        },
        {
          dataIndex: "systemUser",
          title: "系统用户"
        },
        {
          dataIndex: "address",
          title: "远端地址"
        },
        {
          dataIndex: "protocol",
          title: "协议"
        },
        {
          dataIndex: "loginFrom",
          title: "登录来源"
        },
        {
          dataIndex: "commandCount",
          title: "命令"
        },
        {
          dataIndex: "startTime",
          title: "开始时间",
          scopedSlots: { customRender: "date" }
        },
        {
          dataIndex: "runTime",
          title: "时长"
        },
        {
          title: "操作",
          scopedSlots: { customRender: "action" }
        }
      ],
      searchTypeMap: [
        { value: "", text: "搜索类型" },
        { value: "username", text: "用户" },
        { value: "instance", text: "资产" },
        { value: "systemUser", text: "用户系统" },
        { value: "loginFrom", text: "登录来源" }
      ],
      loadData: this.getData
    };
  },

  methods: {
    async getData(params) {
      let query = {
        type: this.pageType,
        orderbys: [],
        skip: (params.pageNo - 1) * params.pageSize,
        limit: params.pageSize,
        ...this.queryParams
      };
      console.log('requests params:', query)
      let res = await getSessionList(query);
      console.log(res.data);
      if (res.data.ret > -1) {
        return res.data;
      } else {
        return [];
      }
    },
    handleSessionType(pageType) {
      this.pageType = pageType;
      this.onSearch()
    },
    selectTimeChange(value) {
      this.searchStartTime = value[0].valueOf();
      this.searchEndTime = value[1].valueOf();
      console.log("selectTimeChange:", this.searchStartTime, this.searchEndTime);
    },
    searchTypeChange(value) {
      this.searchType = value;
      console.log("searchTypeChange:", this.searchType);
    },
    loadingQueryParams() {
      let queryParams = {}
      if (this.searchStartTime && this.searchEndTime) {
        queryParams['startTime'] = this.searchStartTime
        queryParams['endTime'] = this.searchEndTime
      }
      if (this.searchType) {
        queryParams[this.searchType] = this.searchInput
      }
      return queryParams
    },
    onSearch() {
      this.queryParams = this.loadingQueryParams()
      console.log("queryParams:", this.queryParams);
      this.$refs.table.refresh(true);
    },
    rowSelectionOnChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys:`, selectedRowKeys, "selectedRows: ", selectedRows);
    },
    toTerminal(record) {
      console.log("toTerminal");
      // this.$router.push({ name: "clusterEdit", query: { action: "edit", id: record.id } });
    },
    toMonitor(record) {
      console.log("toMonitor");
      // this.$router.push({ name: "clusterEdit", query: { action: "edit", id: record.id } });
    },
    toReplay() {
      console.log("toReplay");
    },
    download() {
      console.log("download");
    }
  }
};
</script>
<style lang="less">
.session-index {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background-color: #fff;

  .item {
    font-size: 13px;
    border-bottom: 2px;

    &:hover {
      color: #1890ff;
      cursor: pointer;
    }

    &.active {
      color: #1890ff;
      //border-bottom: 2px solid #1890ff
    }
  }

  .page-content {
    margin-top: 20px;
  }

  .page-search {
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
</style>
