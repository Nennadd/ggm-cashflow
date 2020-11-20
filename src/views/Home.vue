<template>
  <div class="home">
    <div class="charts">
      <PieChart />
      <ClusteredColumn />
    </div>
  </div>
</template>

<script>
import PieChart from "@/components/charts/PieChart.vue";
import ClusteredColumn from "@/components/charts/ClusteredColumn.vue";
export default {
  name: "Home",
  components: { PieChart, ClusteredColumn }
};
</script>
<style lang="scss" scoped>
.charts {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 300px;
  gap: 3rem;
  margin: 2rem;
  padding: 1rem;
}
</style>
