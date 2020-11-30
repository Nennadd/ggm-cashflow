<template>
  <div id="header">
    <div class="header-left">
      <p class="brand">ggm<span>moebel</span></p>
      <h2>CashFlow</h2>
    </div>
    <div class="header-right">
      <div class="form">
        <div class="form-field">
          <i class="date__icon far fa-calendar-alt"></i>
          <input type="date" v-model="dateFrom" />
        </div>
        <div class="form-field">
          <i class="date__icon far fa-calendar-alt"></i>
          <input type="date" v-model="dateTo" />
        </div>
      </div>
      <div class="user">
        <button>Nenad</button>
      </div>
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
$header-background: #3a3a3a;
$blue: rgb(35, 84, 248);
$red: crimson;
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $header-background;
  border: 1px solid $red;
  color: #eee;
  padding: 0.6rem 2rem 0.6rem 1rem;

  .header-left {
    display: flex;
    align-items: center;
    gap: 4rem;
  }
  .brand {
    position: relative;
    top: -3px;
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
    font-size: 2.2rem;
    font-weight: 900;
  }
  p {
    position: relative;
    font-size: 1.2rem;
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
    color: $red;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 10rem;

    .form {
      display: flex;
      gap: 2rem;
    }

    .form-field {
      position: relative;
    }
    input {
      width: 190px;
      padding: 0.6rem 0.6rem 0.6rem 2.8rem;
      border-radius: 15px;
      border: none;
      color: #666;
      background-color: #ccc;
    }
    input:focus {
      outline: none;
      outline-style: none;
    }
    .date__icon {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: -6px;
      left: -1rem;
      width: 45px;
      height: 45px;
      padding: 0.3rem;
      font-size: 1.4rem;
      background-color: $blue;
      border-radius: 50%;
      z-index: 3;
    }

    .user button {
      margin: 0;
      padding: 0.6rem 1rem;
      font-size: 1.1rem;
      font-weight: 900;
      letter-spacing: 1px;
      background-color: $blue;
      border: none;
      border-radius: 15px;
      color: #fff;
    }
  }
}
</style>
