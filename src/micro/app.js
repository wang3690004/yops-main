const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "K8SApp",
    entry: "http://localhost:8094",
    container: "#micotemplate",
    activeRule: "/app/k8s",
  },
  {
    name: "CMDBApp",
    entry: "http://localhost:8095",
    container: "#micotemplate",
    activeRule: "/app/cmdb",
  },
  {
    name: "CMDBApp",
    entry: "http://localhost:8096",
    container: "#micotemplate",
    activeRule: "/app/cmdbs",
  },
];

export default apps;
