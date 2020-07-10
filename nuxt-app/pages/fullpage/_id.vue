<template>
    <div>
        Test! {{id}}
    </div>
</template>

<script>
export default {
    asyncData({ store, params }) {
        console.log('Test asyncData!!!');
        console.log('파라미터?', params.id);
        return {
            id: params.id
        }
    },
}
</script>