<template>
    <div class="green content">
        {{msg}}
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: 'hello my friends'
        }
    }
}
</script>
<style lang="css">
@import url('./css/common.scss');
    .green {
        color: green
    }
</style>