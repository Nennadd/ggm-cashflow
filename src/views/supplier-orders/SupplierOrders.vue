<template>
  <div class="supplier-orders">
    <div class="filters">
      <button @click="setActive($event)" class="filter active">alles</button>
      <button @click="setActive($event)" class="filter">button</button>
      <button @click="setActive($event)" class="filter">button</button>
      <button @click="setActive($event)" class="filter">button</button>
    </div>
    <router-view :key="$route.path" />
    <table>
      <thead>
        <tr>
          <td colspan="4"><h2>Bestellung</h2></td>
          <td colspan="5" class="proforma"><h2>Proforma</h2></td>
          <td colspan="6"><h2>Comercial</h2></td>
        </tr>
        <tr>
          <td>Bestell_Nr</td>
          <td>Hersteller</td>
          <td>Gesamtkosten</td>
          <td>icon</td>
          <td>Nr</td>
          <td>Deposit</td>
          <td>Zahldatum</td>
          <td>%</td>
          <td>icon</td>
          <td>Nr</td>
          <td>Offen</td>
          <td>Zahldatum</td>
          <td>%</td>
          <td>Deadline</td>
          <td>icon</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.a }}</td>
          <td>{{ item.b }}</td>
          <td>{{ item.c }}&euro;</td>
          <td class="btn">
            <i class="search-btn fas fa-search"></i>
          </td>
          <td>{{ item.e }}</td>
          <td>{{ item.f }}&euro;</td>
          <td>{{ item.g }}</td>
          <td>{{ item.h }}</td>
          <td class="btn"><button class="proforma-btn">+</button></td>
          <td>{{ item.j }}</td>
          <td>{{ item.k }}</td>
          <td>{{ item.l }}</td>
          <td>{{ item.m }}</td>
          <td>{{ item.n }}</td>
          <td class="btn"><button class="comercial-btn">+</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      data: [
        {
          a: "0123456",
          b: "Firma",
          c: "123,456",
          d: "icon",
          e: "pi-0123456",
          f: "23,456",
          g: "11.11.2021",
          h: "30%",
          i: "icon",
          j: "12345678",
          k: "100,000",
          l: "11.12.2020",
          m: "70%",
          n: "11.11.2021",
          o: "icon"
        },
        {
          a: "0123456",
          b: "Firma",
          c: "123,456",
          d: "icon",
          e: "pi-0123456",
          f: "23,456",
          g: "11.11.2021",
          h: "30%",
          i: "icon",
          j: "12345678",
          k: "100,000",
          l: "11.12.2020",
          m: "70%",
          n: "11.11.2021",
          o: "icon"
        },
        {
          a: "0123456",
          b: "Firma",
          c: "123,456",
          d: "icon",
          e: "pi-0123456",
          f: "23,456",
          g: "11.11.2021",
          h: "30%",
          i: "icon",
          j: "12345678",
          k: "100,000",
          l: "11.12.2020",
          m: "70%",
          n: "11.11.2021",
          o: "icon"
        },
        {
          a: "0123456",
          b: "Firma",
          c: "123,456",
          d: "icon",
          e: "pi-0123456",
          f: "23,456",
          g: "11.11.2021",
          h: "30%",
          i: "icon",
          j: "12345678",
          k: "100,000",
          l: "11.12.2020",
          m: "70%",
          n: "11.11.2021",
          o: "icon"
        },
        {
          a: "0123456",
          b: "Firma",
          c: "123,456",
          d: "icon",
          e: "pi-0123456",
          f: "23,456",
          g: "11.11.2021",
          h: "30%",
          i: "icon",
          j: "12345678",
          k: "100,000",
          l: "11.12.2020",
          m: "70%",
          n: "11.11.2021",
          o: "icon"
        },
        {
          a: "0123456",
          b: "Firma",
          c: "123,456",
          d: "icon",
          e: "pi-0123456",
          f: "23,456",
          g: "11.11.2021",
          h: "30%",
          i: "icon",
          j: "12345678",
          k: "100,000",
          l: "11.12.2020",
          m: "70%",
          n: "11.11.2021",
          o: "icon"
        }
      ]
    };
  },
  methods: {
    ...mapActions(["removeLoading"]),
    setActive(event) {
      event.target.parentElement.children.forEach(element => {
        element.classList.remove("active");
      });
      event.target.classList.add("active");
    }
  },
  mounted() {
    this.removeLoading();
  }
};
</script>
<style lang="scss" scoped>
$blue: rgb(35, 84, 248);
$green: rgb(3, 170, 3);
$orange: rgb(192, 114, 12);
$red: crimson;
.filters {
  display: flex;
  margin: 1rem 0 0 2.5rem;

  .filter {
    display: block;
    position: relative;
    padding: 0.7rem 1rem;
    border: none;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-weight: bolder;
    font-size: 0.95rem;
    text-decoration: none;
    background-color: transparent;
    cursor: pointer;
  }
  .filter:nth-child(1) {
    color: #555;
  }
  .filter:nth-child(2) {
    color: $green;
  }
  .filter:nth-child(3) {
    color: $orange;
  }
  .filter:nth-child(4) {
    color: $red;
  }
  .active::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    animation: slide 0.2s linear;
  }
  .active:nth-child(1)::after {
    background-color: #666;
  }
  .active:nth-child(2)::after {
    background-color: green;
  }
  .active:nth-child(3)::after {
    background-color: rgb(194, 97, 5);
  }
  .active:nth-child(4)::after {
    background-color: crimson;
  }

  @keyframes slide {
    from {
      left: -30px;
    }
    to {
      left: 0;
    }
  }
}
table {
  margin: 2rem auto;
  width: 93%;
  border-collapse: collapse;

  thead h2 {
    margin: 0;
    padding: 0.5rem;
  }
  thead tr td {
    font-size: 0.9rem;
  }
  tr td {
    padding: 0.5rem 0;
    color: #333;
    border-bottom: 1px solid #aaa;
    text-align: center;
  }
  tr td:nth-child(odd) {
    background-color: #ddd;
  }
  tr td:nth-child(even) {
    background-color: #ccc;
  }
  tr td:nth-child(4),
  tr td:nth-child(9) {
    border-right: 3px solid #aaa;
  }

  tbody tr:hover td {
    color: #000;
    background-color: rgba(255, 255, 255, 0.75);
  }
  tbody tr td {
    font-size: 0.8rem;
  }
  .proforma {
    // background-color: #ccc;
    border-left: 3px solid #aaa;
    border-right: 3px solid #aaa;
  }
  .btn {
    padding: 0.5rem 0.3rem;
  }
  .proforma-btn,
  .comercial-btn,
  .search-btn {
    background-color: $blue;
    color: #fff;
    width: 2rem;
    height: 2rem;
    font-weight: 700;
    font-size: 1.1rem;
    border-radius: 100%;
    padding: 0.2rem;
    border: none;
    cursor: pointer;
  }
  .search-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    margin: 0 auto;
    background-color: $orange;
  }
}
</style>
