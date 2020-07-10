<template>
    <!-- <div class="header"> -->
        <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
            <b-navbar-brand href="#">Vue</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav v-for="(item, i ) in items" :key="i" >
                    <b-nav-item href="#" @click="goPage(item.path)">{{item.title}}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    <!-- </div> -->
</template>

<style scoped>
    
</style>

<script>
export default {
    data() {
        return {
            items: [
                {
                    title: 'Home',
                    path: '/'
                },
                {
                    title: 'Movie',
                    path: '/movie/1'
                },
                {
                    title: 'Fullpage',
                    path: '/fullpage'
                },
                {
                    title: 'food',
                    path: '/food'
                }
            ]
        }
    },
    methods: {
        goPage(link) {
            this.$router.push(link);
        }
    }
}
</script>