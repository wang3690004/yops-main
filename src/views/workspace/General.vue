<template>
  <div class="workspace-general">
    <div class="page-content">
      <div style="display: flex; justify-content: space-between">
        <div style="width: 68.5%; background-color: #fff; border-radius: 15px; padding: 12px 16px; margin-bottom: 20px;">
          <p class="form-title">我的资源</p>
          <div class="application-status">
            <module-status backgroundColor="#cae6e4" circleColor="#009380" :total="3" :normalNum="3" :abnormalNum="0" type="集群" @getClicked="moduleStatusClicked" />
            <module-status backgroundColor="#d9f0f7" circleColor="#00a9d9" :total="62" :normalNum="62" :abnormalNum="0" type="总节点数" @getClicked="moduleStatusClicked" />
          </div>
        </div>

        <div style="width: 30%; background-color: #fff; border-radius: 15px; padding: 12px 16px; margin-bottom: 20px">
          <p class="form-title">快捷入口</p>
          <a-space :size="40" style="display: flex; justify-content: space-around">
            <div>
              <a-icon type="database" theme="twoTone" style="font-size: 50px" />
              <p style="margin-top: 5px; text-align: center">创建集群</p>
            </div>
            <div>
              <a-icon type="question-circle" theme="twoTone" style="font-size: 50px" />
              <p style="margin-top: 5px; text-align: center">帮助中心</p>
            </div>
            <div>
              <a-icon type="dashboard" theme="twoTone" style="font-size: 50px" />
              <p style="margin-top: 5px; text-align: center">仪表盘</p>
            </div>
          </a-space>
        </div>
      </div>

      <div style="width: 100%; background-color: #fff; border-radius: 15px; padding: 12px 16px; margin-bottom: 20px">
        <p class="form-title">会话统计</p>
        <statistics-line width="95%" title="CPU" />
      </div>

      <div class="common-static" style="display: flex; justify-content: space-between">
        <div style="width: 32.5%; background-color: #fff; border-radius: 15px; padding: 12px 16px">
          <p class="form-title">周用户 TOP10</p>
          <ul style="margin-left: 5px; color: #666">
            <li v-for="(item, index) in topTenUser" :key="index" style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #e8e8e8">
              <span style="width: 85%">{{ index + 1 + "、" + item.name }}</span>
              <span style="width: 15%; text-align: right">{{ item.frequency }}</span>
            </li>
          </ul>
        </div>
        <div style="width: 32.5%; background-color: #fff; border-radius: 15px; padding: 12px 16px">
          <p class="form-title">周集群 TOP10</p>
          <ul style="margin-left: 5px; color: #666">
            <li style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #e8e8e8">
              <span style="width: 85%">1、aws-orid-eu-central-1-ybdp-private-az-b-workers-c3fc02394832asd2dg3fad2312dsd3e1rg2w43r</span>
              <span style="width: 15%; text-align: right">{{ "3次/周" }}</span>
            </li>
          </ul>
        </div>
        <div style="width: 32.5%; background-color: #fff; border-radius: 15px; padding: 12px 16px">
          <p class="form-title">最近10次登陆记录</p>
          <ul style="margin-left: 5px; color: #666">
            <li v-for="(item, index) in recentTenRecord" :key="index" style="display: flex; justify-content: space-between; padding: 5px; border-bottom: 1px solid #e8e8e8">
              <span style="width: 68%">
                {{ index + 1 + "、" }}
                <span style="font-weight: 600">{{ item.name }}</span>
                {{ item.cluster }}
              </span>
              <span style="width: 32%; text-align: right">{{ item.time }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModuleStatus from "@/views/clusterdetail/components/ModuleStatus";
import StatisticsLine from "@/views/clusterdetail/components/StatisticsLine";

export default {
  components: { ModuleStatus, StatisticsLine },
  data() {
    return {
      topTenUser: [
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
        { name: "王金(yl2619)", frequency: "3次/周" },
      ],
      topTenCluster: [],
      recentTenRecord: [
        { name: "王金(yl2619)", cluster: "内网-上海集群test1234567890123d", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
        { name: "王金(yl2619)", cluster: "内网-上海集群", time: "2021-08-30 14:02:39" },
      ],
    };
  },
  methods: {
    moduleStatusClicked() {
      console.log(333);
    },
  },
};
</script>

<style lang="less" >
.workspace-general {
  width: 100%;
  height: 100%;
  padding: 16px 20px;
  // background-color: #fff;
  overflow: hidden auto;
  .page-content {
    width: 100%;
  }
  .application-status {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    margin-bottom: 25px;
    justify-content: space-around;
    // margin-left: 10px;
  }
  .form-title {
    font-size: 15px;
    // font-weight: 600;
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
  .nodes-status,
  .component-status {
    width: 50%;
  }
  .resource-monitor {
    display: flex;
    justify-content: space-between;
  }
}
</style>