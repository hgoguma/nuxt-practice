<template>
    <div class="inputWrapper">
        <b-row>
            <b-col cols="8">
                <b-form-input v-model="keyword" type="text" :placeholder="this.placeholderMsg"></b-form-input>
            </b-col>
            <b-col>
                <b-button variant="primary" @click="submitBtn">
                    <b-icon icon="search"></b-icon>
                </b-button>
            </b-col>
        </b-row>
    </div>
</template>

<style scoped>
    .inputWrapper {
        margin: 20px;
    }
</style>

<script>
export default {
    props: ['placeholderMsg'],
    data() {
        return {
            keyword: ''
        }
    },
    methods: {
        submitBtn() {
            $nuxt.$emit('search', this.keyword);
        }
    }
}
</script>