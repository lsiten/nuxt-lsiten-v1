<template>
  <section class="container">
    222
  </section>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      showHotline: false
    }
  },
  computed: {
    ...mapGetters({})
  },
  created () {
    // this.$store.dispatch('home_get_center_app_list', {})
    // this.$store.dispatch('home_get_local_app_list', {})
  },
  methods: {
  }
}
</script>
<style scoped>
.container {
  position: relative;
}
.lsiten-login-box {
  position: absolute;
  top: -315px;
  overflow: hidden;
  width: 100%;
}
.lsiten-login-box .login-content {
  width: 1180px;
  height: 290px;
  margin: 0 auto;
  position: relative;
}

.container .lsiten-hotline {
  position: fixed;
  top: 414px;
  right: 0;
}
.container .lsiten-show-detail {
  position: fixed;
  top: 414px;
  right: 80px;
  left: auto;
  width: 140px;
  height: 38px;
  padding: 20px;
  z-index: 2018;
  box-sizing: content-box;
  border: #1e68e4 solid 1px;
  background-color: #fff;
}
.container .lsiten-show-detail  h2 {
  color: #1e68e4;
  line-height: 38px;
}
</style>
