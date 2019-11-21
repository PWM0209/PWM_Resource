<template>
    <div id="client" v-wechat-title="$route.meta.title">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "client"
    }
</script>

<style scoped>

</style>