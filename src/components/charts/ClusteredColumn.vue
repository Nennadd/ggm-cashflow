<template>
  <div class="chart" ref="chartdiv"></div>
</template>
<script>
export default {
  name: "ClusteredColumn",
  props: {
    AmChart: {
      type: Object
    }
  },
  data() {
    return {
      loading: false,
      chart: {},
      data: [
        {
          category: "Place #1",
          first: 40,
          second: 55,
          third: 60
        },
        {
          category: "Place #2",
          first: 30,
          second: 78,
          third: 69
        },
        {
          category: "Place #3",
          first: 27,
          second: 40,
          third: 45
        },
        {
          category: "Place #4",
          first: 50,
          second: 33,
          third: 22
        }
      ]
    };
  },
  mounted() {
    (async () => {
      this.AmChart.am4core.options.queue = true;
      this.chart = await this.AmChart.am4core.create(
        this.$refs.chartdiv,
        this.AmChart.am4charts.XYChart
      );
      this.chart.responsive.enabled = true;
      //   this.AmChart.am4core.options.queue = true;
      this.chart.colors.step = 2;

      this.chart.legend = await new this.AmChart.am4charts.Legend();
      this.chart.legend.position = "top";
      this.chart.legend.paddingBottom = 20;
      this.chart.legend.labels.template.maxWidth = 95;

      var xAxis = await this.chart.xAxes.push(
        new this.AmChart.am4charts.CategoryAxis()
      );
      xAxis.dataFields.category = "category";
      xAxis.renderer.cellStartLocation = 0.1;
      xAxis.renderer.cellEndLocation = 0.9;
      xAxis.renderer.grid.template.location = 0;

      var yAxis = await this.chart.yAxes.push(
        new this.AmChart.am4charts.ValueAxis()
      );
      yAxis.min = 0;

      const createSeries = async (value, name) => {
        var series = await this.chart.series.push(
          new this.AmChart.am4charts.ColumnSeries()
        );
        series.dataFields.valueY = value;
        series.dataFields.categoryX = "category";
        series.name = name;

        await series.events.on("hidden", arrangeColumns);
        await series.events.on("shown", arrangeColumns);

        var bullet = await series.bullets.push(
          new this.AmChart.am4charts.LabelBullet()
        );
        bullet.interactionsEnabled = false;
        bullet.dy = 30;
        bullet.label.text = "{valueY}";
        bullet.label.fill = this.AmChart.am4core.color("#ffffff");

        return await series;
      };

      this.chart.data = await this.data;

      await createSeries("first", "The First");
      await createSeries("second", "The Second");
      await createSeries("third", "The Third");

      const arrangeColumns = async () => {
        var series = this.chart.series.getIndex(0);

        var w =
          1 -
          xAxis.renderer.cellStartLocation -
          (1 - xAxis.renderer.cellEndLocation);
        if (series.dataItems.length > 1) {
          var x0 = xAxis.getX(series.dataItems.getIndex(0), "categoryX");
          var x1 = xAxis.getX(series.dataItems.getIndex(1), "categoryX");
          var delta = ((x1 - x0) / this.chart.series.length) * w;
          if (this.AmChart.am4core.isNumber(delta)) {
            var middle = this.chart.series.length / 2;

            var newIndex = 0;
            await this.chart.series.each(series => {
              if (!series.isHidden && !series.isHiding) {
                series.dummyData = newIndex;
                newIndex++;
              } else {
                series.dummyData = this.chart.series.indexOf(series);
              }
            });
            var visibleCount = newIndex;
            var newMiddle = visibleCount / 2;

            await this.chart.series.each(series => {
              var trueIndex = this.chart.series.indexOf(series);
              var newIndex = series.dummyData;

              var dx = (newIndex - trueIndex + middle - newMiddle) * delta;

              series.animate(
                { property: "dx", to: dx },
                series.interpolationDuration,
                series.interpolationEasing
              );
              series.bulletsContainer.animate(
                { property: "dx", to: dx },
                series.interpolationDuration,
                series.interpolationEasing
              );
            });
          }
        }
      };
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
  padding: 0.5rem;
  box-shadow: 4px 4px 8px #aaa, -4px -4px 8px #fff;

  &:hover {
    box-shadow: 7px 7px 12px #aaa, -7px -7px 12px #fff;
  }
}
</style>
