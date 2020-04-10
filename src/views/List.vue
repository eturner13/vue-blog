<template>
    <div class="list">
        <div class="header">
            <span>Eric's Vue Blog!</span>
            <button @click="goToEntry">Make New Entry</button>
        </div>
        <div class="posts">
            <div v-for="post in posts" :key="post.id">
                <PostSummary class="abrev" :post="post"/>
                <button @click="goToPost(post.id)">Go to Post</button>
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
        },
        goToPost(id) {
            this.$router.push('/post/' + id)
        },
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
    .abrev {
        border: solid;
        height: 150px;
        width: 80%;
    }
</style>