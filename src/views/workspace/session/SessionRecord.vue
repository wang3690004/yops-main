<template>
  <div class="session-record">
    <page-header title="命令记录" :showIcon="false"></page-header>

    <div class="page-content">
      <div class="page-search">
        <a-row>
          <a-col align="right">
            <a-space>
              <a-range-picker :show-time="{ format: 'HH:mm' }" format="YYYY-MM-DD HH:mm"
                              :placeholder="['开始时间', '结束时间']" @change="selectTimeChange" @ok="onSearch" />
              <a-input-group compact>
                <a-select default-value="" @change="searchTypeChange">
                  <a-select-option v-for="item in searchTypeMap" :key="item.value">
                    {{ item.text }}
                  </a-select-option>
                </a-select>
                <a-input-search style="width: 250px" placeholder="搜索" v-model="searchInput"
                                @search="onSearch"></a-input-search>
              </a-input-group>
            </a-space>
          </a-col>
        </a-row>
      </div>
      <div>
        <a-table
          :loading="loading"
          :rowKey="(record) => record.id"
          :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
          :columns="columns"
          :data-source="data"
          :pagination="pagination"
          :expandRowByClick="false"
          :expandIconAsCell="false"
          :expandIconColumnIndex="1"
          @change="handleTableChange">
          <template slot="date" slot-scope="date">
            <span>{{ date | standardTime }}</span>
          </template>
          <template slot="action" slot-scope="action, record">
            <a style="color: #1890FF" @click="toSomething(record)">转到</a>
          </template>
          <template slot="expandedRowRender" slot-scope="record" style="margin: 0">
            <p>{{ record.detail }}</p>
          </template>
          <template slot="expandIcon" slot-scope="props">
            <a-icon v-if="props.expanded" type="down" @click="(e)=>{props.onExpand(props.record, e)}"
                    style="margin-right: 10px" />
            <a-icon v-else type="right" @click="(e)=>{props.onExpand(props.record, e)}" style="margin-right: 10px" />
          </template>
        </a-table>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import { standardTime } from "@/utils/timeformat";
import { getRecordList } from "@/apis/mock";
import PageHeader from "@/components/PageHeader";

export default {
  components: { PageHeader },
  filters: {
    standardTime(time) {
      return standardTime(time);
    }
  },
  data() {
    return {
      searchStartTime: null,
      searchEndTime: null,
      searchType: "",
      searchInput: "",

      queryParams: {},
      data: [],
      selectedRowKeys: [],
      loading: true,
      pagination: {
        pageSize: 20,
        current: 1,
        total: 0,
        showSizeChanger: true,
        pageSizeOptions: ["10", "20", "50", "100", "150"],
        showTotal: () => `共${this.pagination.total}条`
      },
      pageSizeOptions: ["10", "20", "50", "100", "150"],
      columns: [
        {
          dataIndex: "command",
          title: "命令"
        },
        {
          dataIndex: "riskLevel",
          title: "风险等级"
        },
        {
          dataIndex: "username",
          title: "用户"
        },
        {
          dataIndex: "systemUser",
          title: "系统用户"
        },
        {
          dataIndex: "instance",
          title: "资产"
        },
        {
          dataIndex: "addTime",
          title: "日期",
          scopedSlots: { customRender: "date" }
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
      ]
    };
  },
  created() {
    console.log("create");
    this.getData(true);
  },
  methods: {
    getData(refresh = false) {
      this.loading = true;
      if (refresh) {
        this.pagination.current = 1;
      }
      let query = {
        orderbys: [],
        skip: (this.pagination.current - 1) * this.pagination.pageSize,
        limit: this.pagination.pageSize,
        ...this.queryParams
      };
      console.log("requests params:", query);
      getRecordList(query).then((resonpse) => {
        const res = resonpse.data;
        if (res.ret > -1) {
          this.data = cloneDeep(res.data.data);
          this.pagination.total = res.data.total;
          console.log("data:", this.data);
        } else {
          this.pagination.total = 0;
          this.data = [];
        }
        this.loading = false;
      });

    },
    handleTableChange(pagination, filters) {
      console.log("table change", pagination);
      this.pagination.current = pagination.current;
      this.queryParams.skip = (pagination.current - 1) * 20;
      this.getData();
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
      let queryParams = {};
      if (this.searchStartTime && this.searchEndTime) {
        queryParams["startTime"] = this.searchStartTime;
        queryParams["endTime"] = this.searchEndTime;
      }
      if (this.searchType) {
        queryParams[this.searchType] = this.searchInput;
      }
      return queryParams;
    },
    onSearch() {
      this.queryParams = this.loadingQueryParams();
      console.log("queryParams:", this.queryParams);
      this.getData(true);
    },
    onSelectChange(selectedRowKeys) {
      console.log("selectedRowKeys changed: ", selectedRowKeys);
      this.selectedRowKeys = selectedRowKeys;
    },
    toSomething(record) {
      console.log("to something:", record);
    }
  }
};
</script>
<style lang="less">
.session-record {
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
