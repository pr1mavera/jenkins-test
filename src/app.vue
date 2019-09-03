<template>
    <div :class="s.home">
        <h1>首页</h1>
        {{data}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            data: 'qwer'
        }
    }
}
</script>

<style module="s">
.home {
    background-color: #000;
    color: lightgreen;
}
</style>