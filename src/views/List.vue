<template>
    <div class="list">
        <div class="header">
            <span>Eric's Vue Blog!</span>
            <button>Make New Entry<button>
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
    }
}
</script>

<style scoped lang="scss">

</style>