<template>
    <div class="post">
        <div class="header">
            <div v-for="post in posts" :key="post.id">
                <PostSummary :post="post"/>
            </div>
            <button @click="backToList">Back to List</button>    
        </div>  
    </div>
</template>

<script>
import PostSummary from '@/components/PostSummary'
import { mapState } from 'vuex'

export default {
    name: 'Post',
    components: { PostSummary },
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        backToList() {
            this.$router.push({ name: 'list' });
        }
    }
}
</script>

<style scoped lang="scss">
    .header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 20px;
    }
</style>