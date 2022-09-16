import { createApp } from 'vue';
import { createRouter,createWebHistory } from 'vue-router';

import App from './App.vue';
// import TeamList from './components/teams/TeamList.vue';
import UserList from './components/users/UsersList.vue'

import TeamList from './components/teams/TeamsList.vue'
import TeamMembers from './components/teams/TeamMembers.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/teams',component:TeamList
        },
        {
            path:'/users',component:UserList
        },
        {
            // path:'/teams/:teamId',components:TeamList
            path:'/teams/:teamId',component:TeamMembers
        },
    ], 
});
const app = createApp(App)

app.use(router);

app.mount('#app');
