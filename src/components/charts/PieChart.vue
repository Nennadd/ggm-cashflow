<template>
  <div class="chart" ref="chartdiv"></div>
</template>
<script>
export default {
  name: "PieChart",
  props: {
    AmChart: {
      type: Object
    }
  },
  data() {
    return {
      chart: {},
      countries: [
        {
          country: "Lithuania",
          litres: 501.9
        },
        {
          country: "Czech Republic",
          litres: 301.9
        },
        {
          country: "Ireland",
          litres: 201.1
        },
        {
          country: "Germany",
          litres: 165.8
        }
      ]
    };
  },
  mounted() {
    (async () => {
      this.AmChart.am4core.options.queue = true;
      this.chart = await this.AmChart.am4core.create(
        this.$refs.chartdiv,
        this.AmChart.am4charts.PieChart
      );

      this.chart.exporting.menu = await new this.AmChart.am4core.ExportMenu();
      this.chart.responsive.enabled = true;
      this.chart.preloader.disabled = true;
      // Add and configure Series
      let pieSeries = await this.chart.series.push(
        new this.AmChart.am4charts.PieSeries()
      );
      pieSeries.dataFields.value = "litres";
      pieSeries.dataFields.category = "country";

      // Let's cut a hole in our Pie chart the size of 30% the radius
      this.chart.innerRadius = this.AmChart.am4core.percent(30);

      // Put a thick white border around each Slice
      pieSeries.slices.template.stroke = this.AmChart.am4core.color("#fff");
      pieSeries.slices.template.strokeWidth = 2;
      pieSeries.slices.template.strokeOpacity = 1;
      // change the cursor on hover to make it apparent the object can be interacted with
      pieSeries.slices.template.cursorOverStyle = [
        {
          property: "cursor",
          value: "pointer"
        }
      ];

      pieSeries.alignLabels = true;
      pieSeries.labels.template.bent = true;
      pieSeries.labels.template.radius = 3;
      pieSeries.labels.template.padding(0, 0, 0, 0);

      pieSeries.ticks.template.disabled = true;

      // Create a base filter effect (as if it's not there) for the hover to return to
      let shadow = pieSeries.slices.template.filters.push(
        new this.AmChart.am4core.DropShadowFilter()
      );
      shadow.opacity = 0;

      // Create hover state
      let hoverState = pieSeries.slices.template.states.getKey("hover"); // normally we have to create the hover state, in this case it already exists

      // Slightly shift the shadow and make it more prominent on hover
      let hoverShadow = await hoverState.filters.push(
        new this.AmChart.am4core.DropShadowFilter()
      );
      hoverShadow.opacity = 0.7;
      hoverShadow.blur = 5;

      // Add a legend
      this.chart.legend = await new this.AmChart.am4charts.Legend();
      this.chart.data = await this.countries;
    })();
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
};
</script>
<style lang="scss" scoped>
.chart {
  padding: 0;
  box-shadow: 4px 4px 8px #aaa, -4px -4px 8px #fff;

  &:hover {
    box-shadow: 7px 7px 12px #aaa, -7px -7px 12px #fff;
  }
}
</style>
