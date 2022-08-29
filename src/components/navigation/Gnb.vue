<template>
  <div class="main">
    <router-link :to="{name : 'home'}" class="logo"><img src="@/assets/images/logo.png"/></router-link>
    <div v-for="(menu, idx) in menuList" :key = "idx" class="menu">
        <router-link :to="{name : menu.to}" class="menu">{{menu.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            menuList:[
                {
                    title:"레진 온라인 스토어",
                    to : "onlineStore"   
                },
                {
                    title:"레진 오프라인 스토어",
                    to : "offlineStore"   
                },
                {
                    title:"레진아트 유튜브",
                    to : "youtube"   
                },
                {
                    title:"스토어/유튜브 정보 공유",
                    to : "share"   
                },
                {
                    title:"About 하이레진",
                    to : "about"   
                },
            ]
        }
    }
}
</script>

<style scoped>
.main{
    width:100%;
    min-width: 1440px;
    height: 60px;
    box-shadow: 0px 2px 10px rgba(17, 17, 16, 0.2);
    display: flex;
    float: left;
}
.logo{
    width:190px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo>img{
    width:130px;
    margin-left: 10px;
}
.menu{
    margin: 0 8px;
    height:60px;
    line-height: 60px;
    text-align: center;
    text-decoration: none;
    color : #373530;
    font-size: 15px;
    letter-spacing: -0.5px;
}
.menu:hover{
    color:#373530c8;
}
</style>