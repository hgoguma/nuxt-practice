<template>
    <div class="title-wrapper">
        <h3>{{title}}</h3>
        <p>{{contents}}</p>
    </div>
</template>

<style scoped>
    .title-wrapper {
        background-color: #333333;
        color: #fff;
        padding: 15px;
    }

    h3, p {
        text-align: center;
    }
</style>

<script>
export default {
    props: ['title', 'contents'],
}
</script>