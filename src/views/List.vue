<template>
    <div class="list">
        <div class="header">
            <span>Eric's Vue Blog!</span>
            <button @click="goToEntry">Make New Entry</button>
        </div>
        <div class="posts">
            <div v-for="post in posts" :key="post.id">
                <PostSummary :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
import PostSummary from '@/components/PostSummary'
import { mapState } from 'vuex'

export default {
    name: 'List',
    components: { PostSummary },
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        goToEntry() {
            this.$router.push({ name: 'entry' });
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