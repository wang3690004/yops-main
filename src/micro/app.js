const apps = [
  /**
   * name: 微应用名称 - 具有唯一性
   * entry: 微应用入口 - 通过该地址加载微应用，这里我们使用 config 配置
   * container: 微应用挂载节点 - 微应用加载完成后将挂载在该节点上
   * activeRule: 微应用触发的路由规则 - 触发路由规则后将加载该微应用
   */
  {
    name: "K8SApplication",
    entry: "http://localhost:8092",
    container: "#micotemplate",
    activeRule: "/k8s",
  },
  {
    name: "CMDBApplication",
    entry: "http://localhost:8093",
    container: "#micotemplate",
    activeRule: "/cmdb",
  },
];

export default apps;
