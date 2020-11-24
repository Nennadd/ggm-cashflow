<template>
  <div class="home">
    <div class="charts">
      <PieChart :AmChart="AmCharts" />
      <ClusteredColumn :AmChart="AmCharts" />
    </div>
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
// am4core.useTheme(material);
// am4core.useTheme(am4themes_animated);
// import PieChart from "@/components/charts/PieChart.vue";
// import ClusteredColumn from "@/components/charts/ClusteredColumn.vue";
export default {
  name: "Home",
  components: {
    // PieChart,
    // ClusteredColumn
    PieChart: () =>
      import(
        /* webpackChunkName: "pie-chart" */ "../components/charts/PieChart.vue"
      ),
    ClusteredColumn: () =>
      import(
        /* webpackChunkName: "column-chart" */ "../components/charts/ClusteredColumn.vue"
      )
  },
  data() {
    return {
      AmCharts: {},
      indicator: null
    };
  },
  created() {
    this.AmCharts.am4core = am4core;
    this.AmCharts.am4charts = am4charts;
  }
};
</script>
<style lang="scss" scoped>
.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  gap: 2rem;
  margin: 2rem;
}
@media screen and (max-width: 960px) {
  .charts {
    grid-template-columns: 1fr;
  }
}
</style>
