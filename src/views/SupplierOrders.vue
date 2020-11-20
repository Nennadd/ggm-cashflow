<template>
  <div class="supplier-orders">
    <table>
      <thead>
        <tr>
          <td>Hersteller</td>
          <td>Bestell_Nr</td>
          <td>Gesamtkosten</td>
          <td>Deposit</td>
          <td>Zahldatum Deposit</td>
          <td>Deposit in %</td>
          <td>Offen</td>
          <td>Zahldatum Offen</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.a }}</td>
          <td>{{ item.b }}</td>
          <td>{{ item.c }}&euro;</td>
          <td>{{ item.d }}&euro;</td>
          <td>{{ item.e }}</td>
          <td>{{ item.f }}</td>
          <td>{{ item.g }}</td>
          <td>{{ item.h }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [
        {
          a: "Firma",
          b: "0123456",
          c: "123,456",
          d: "23,456",
          e: "11.11.2020",
          f: "30%",
          g: "100,000",
          h: "11.11.2021"
        },
        {
          a: "Firma",
          b: "0123456",
          c: "123,456",
          d: "23,456",
          e: "11.11.2020",
          f: "30%",
          g: "100,000",
          h: "11.11.2021"
        },
        {
          a: "Firma",
          b: "0123456",
          c: "123,456",
          d: "23,456",
          e: "11.11.2020",
          f: "30%",
          g: "100,000",
          h: "11.11.2021"
        },
        {
          a: "Firma",
          b: "0123456",
          c: "123,456",
          d: "23,456",
          e: "11.11.2020",
          f: "30%",
          g: "100,000",
          h: "11.11.2021"
        },
        {
          a: "Firma",
          b: "0123456",
          c: "123,456",
          d: "23,456",
          e: "11.11.2020",
          f: "30%",
          g: "100,000",
          h: "11.11.2021"
        },
        {
          a: "Firma",
          b: "0123456",
          c: "123,456",
          d: "23,456",
          e: "11.11.2020",
          f: "30%",
          g: "100,000",
          h: "11.11.2021"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
table {
  margin: 3rem auto;
  width: 90%;
  border-collapse: collapse;

  thead tr td {
    font-size: 0.9rem;
  }

  tr td {
    padding: 0.5rem 0;
    color: #666;
    border-bottom: 1px solid #ccc;
    text-align: center;
  }
  tr td:nth-child(odd) {
    background-color: #aaa;
  }
  tr:hover td {
    color: #fff;
    background-color: rgba(0, 0, 0, 0.65);
  }
  tbody tr td {
    font-size: 0.8rem;
  }
}
</style>
