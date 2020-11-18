<template>
  <div id="header">
    <div class="header-left">
      <p class="brand">ggm<span>moebel</span></p>
      <h2>CashFlow</h2>
    </div>
    <div class="header-right">
      <div class="form">
        <div class="form-field">
          <img src="@/assets/setting-icon.png" alt="date icon" />
          <input type="date" v-model="dateFrom" />
        </div>
        <div class="form-field">
          <img src="@/assets/setting-icon.png" alt="date icon" />
          <input type="date" v-model="dateTo" />
        </div>
      </div>
      <div class="user"><p>Nenad</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      dateFrom: "",
      dateTo: ""
    };
  }
};
</script>

<style lang="scss" scoped>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #3a3a3a;
  color: #eee;
  padding: 0.7rem 2rem;

  .header-left {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  h2,
  .brand {
    letter-spacing: 1.5px;
    font-weight: 700;
    margin: 0;
    padding: 0;
  }
  h2 {
    color: #bbb;
    font-size: 1.9rem;
    font-weight: 900;
  }
  p {
    position: relative;
    font-size: 1.5rem;
  }
  .brand::after {
    content: "international";
    position: absolute;
    font-size: 0.75rem;
    font-weight: 400;
    letter-spacing: 1.5px;
    color: #bbb;
    bottom: -10px;
    right: 2px;
  }
  span {
    color: crimson;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 10rem;

    .form {
      display: flex;
    }

    .form-field {
      position: relative;
    }
    input {
      width: 190px;
      padding: 0.6rem 0.6rem 0.6rem 2.8rem;
      border-radius: 15px;
      border: none;
      color: #fff;
      background-color: #999;
    }

    img {
      position: absolute;
      top: -6px;
      left: -1rem;
      width: 45px;
      height: 45px;
      padding: 0.3rem;
      color: #fff;
      background-color: aqua;
      border-radius: 50%;
      z-index: 3;
    }

    p {
      margin: 0;
      padding: 0.6rem 1rem;
      font-size: 1.2rem;
      font-weight: 900;
      letter-spacing: 1px;
      background-color: rgb(23, 214, 214);
      border-radius: 15px;
      color: #fff;
    }
  }
}
</style>
