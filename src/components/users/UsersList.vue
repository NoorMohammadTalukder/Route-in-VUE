<template>

  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    <button @click="confirm">Confirm</button>
  </ul>
 
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods:{
    confirm(){
      this.$router.push('/teams');
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
button{
  background-color: aquamarine;
  border: 0px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgb(90, 26, 26);
}
button:hover{
  background-color: rgba(14, 80, 18, 0.521);
}
</style>