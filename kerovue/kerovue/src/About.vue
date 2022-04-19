import App from '../../../keroapp/src/App';
<template>
  <h1 @click="setPost2">About {{ b }}</h1>
</template>
<script>
export default {
  data() {
    return {
      b: "",
      currentPath: window.location.hash,
      postData: {
        email: "Chat@gmail.com",
        password: "1234",
      },
    };
  },
  methods: {
    setPost2() {
      console.log("event ok");
      fetch("http://128.199.125.67:5500/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.postData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.b = data.message;
          
        });
    },
  },
};
</script>
