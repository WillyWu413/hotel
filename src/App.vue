<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: NotoSansCJKtc-Light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 14px;
  letter-spacing: 1.46px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.homepage {
  // background: url(../src/assets/hotel1.jpeg) no-repeat;
  width: 100%;
  height: 100%;
  background-size: cover;
  a {
    color: #000000;
  }
}

.left_menu {
  display: flex;
  flex-direction: column;
  // align-items: space-around;
  justify-content: space-around;
  .logo {
    width: 148px;
    height: 148px;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid #FFFFFF;
    box-shadow: -15px -15pt rgba(255, 255, 255, 0.3);
    h1 {
      font-family: NotoSansCJKtc-Medium;
      font-size: 30px;
      margin-top: 35px;
    }
  }
  .RoomID {
    margin-top: 300px;
    color: #ffffff;
    .RoomNum {
      font-size: 60px;
      text-decoration: underline;
      text-decoration-color: rgba(255, 255, 255, 0.3);
      text-decoration-style: 30px;
    }
  }
}

.right_block {
  display: flex;
  justify-content: flex-end;
  .side_menu {
    width: 230.5pt;
    box-shadow: 8px 8pt rgba(255, 255, 255, 0.3);
    .list-group-item {
      border: 0px solid #ffffff !important;
      // margin-bottom: 20px;
      padding: 20px;
    }
  }
}

.address {
  list-style: none;
  li {
    margin-bottom: 5px;
  }
}
</style>
