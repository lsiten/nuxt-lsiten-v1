<template>
    <div class="header">
      <div class="lsiten-container">
        111
      </div>
      <div class="lsiten-row">
      2
      </div>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        value2: 0
      }
    },
    computed: {
      ...mapGetters({
        menu: 'com_get_menu',
      })
    },
    created () {
      this.$store.dispatch('com_get_menu', {
        menuId: 10000
      })  
    },
    methods: {
      selectMenu (index) {
        console.log(index)
        if (parseInt(index) <= 1) {
          this.$router.push(
            {
                path: '/'
            }
          )
        } else {
          this.$router.push(
            {
              path: '/list/' + index
            }
          )
        }
      }  
    }
  }
</script>
<style>
.header .lsiten-row .ivu-carousel-dots-inside {
  bottom: 20px;
}
.header .lsiten-row .ivu-carousel-dots-inside li {
  margin: 0 7px;
}
.header .lsiten-row .ivu-carousel-dots-inside li button {
  width: 10px;
  height: 10px;
  background: #ffffff;
  border-radius: 50%;
  opacity: 1;
}

.header .lsiten-row .ivu-carousel-dots-inside li.ivu-carousel-active button{
  background: #0092CE;
}
</style>
<style scoped>
.header {
  width: 100%;
  height: auto;
}
.header .lsiten-container {
  width: 1180px;
  height: auto;
  margin: 0 auto;
  padding-top: 12px;
}
.header .lsiten-container li.ivu-menu-item {
  border-bottom: none;
  font-size: 16px;
  color: #505050;
  font-weight: bold;

}
.header .lsiten-container li.ivu-menu-item .lsiten-header-logo{
  vertical-align:middle;
}
.header .lsiten-container .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item:hover, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu-active, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu:hover{
  color: #2d8cf0;
}
.header .lsiten-container .ivu-menu-horizontal.ivu-menu-light:after {
  background: none;
}

.header .lsiten-row {
  width: 100%;
}

.header .carousel-item {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
}

.header .carousel-item img {
  width: 100%;
  min-height: 334px;
  height: auto;
}
</style>
