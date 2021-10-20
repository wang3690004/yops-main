import * as echarts from "echarts/core";
import { BarChart, PieChart,LineChart } from "echarts/charts";
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([TitleComponent, TooltipComponent, GridComponent, LegendComponent, BarChart, PieChart, CanvasRenderer,LineChart]);

export default echarts;
