import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import OnlineStore from "@/views/OnlineStore.vue";
import OfflineStore from "@/views/OfflineStore.vue";
import Youtube from "@/views/Youtube.vue";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes:[
        {
            name: "home",
            path: "/",
            component: Home,
        },
        {
            name: "onlineStore",
            path: "/online-store",
            component: OnlineStore,
        },
        {
            name: "offlineStore",
            path: "/offline-store",
            component: OfflineStore,
        },
        {
            name: "youtube",
            path: "/youtube",
            component: Youtube,
        },
    ],
})

export default router;