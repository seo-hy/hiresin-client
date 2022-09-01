<template>
  <div class="main">
    <router-link :to="{ name: 'home' }" class="logo"
      ><img src="@/assets/images/logo.png"
    /></router-link>
    <router-link :to="{ name: 'onlineStore' }" class="menu">
      <div>
        <div class="sub">레진아트 재료</div>
        <div>온라인 스토어</div>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'offlineStore' }"
      class="menu"
    >
      <div>
        <div class="sub">레진아트 재료</div>
        <div>오프라인 스토어</div>
      </div>
    </router-link>
    <router-link :to="{ name: 'share' }" class="menu">
      <div>스토어 정보 공유</div>
    </router-link>
    <router-link :to="{ name: 'about' }" class="menu">
      <div>About 하이레진</div>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.main {
  width: 100%;
  min-width: 1000px;
  height: 80px;
  box-shadow: 0px 2px 10px rgba(17, 17, 16, 0.2);
  display: flex;
}
.logo {
  width: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo > img {
  width: 68px;
  margin-left: 10px;
}
.menu {
  width: 160px;
  height: 80px;
  text-decoration: none;
  color: #373530;
  font-size: 17px;
  letter-spacing: -0.2px;
  display: flex;
  align-items: center;
}

.menu:hover {
  color: #373530c8;
}

.sub {
  font-size: 13px;
}
</style>
