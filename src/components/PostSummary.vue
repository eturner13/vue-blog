<template>
    <div class="post">
        <div class="id">{{ post.id }}</div>
        <div class="date">{{ post.date }}</div>
        <div class="author">{{ post.author }}</div>
        <div class="title">{{ post.title }}</div>
        <div class="body">{{ post.body }}</div>
        <button @click="goToPost">Go to Post</button>
    </div>
</template>

<script>

export default {
    name: 'PostSummary',
    props: ['post'],
    methods: {
        goToPost() {
            this.$router.push('/post/:id')
        },
    }
}
</script>

<style scoped lang="scss">
    .post {
        margin: 20px;
    }
</style>