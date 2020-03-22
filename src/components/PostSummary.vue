<template>
    <div class="post">
        <div class="id">{{ post.id }}</div>
        <div class="date">{{ post.date }}</div>
        <div class="author">{{ post.author }}</div>
        <div class="title">{{ post.title }}</div>
        <div class="body">{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    name: 'PostSummary',
    props: ['post']
}
</script>

<style scoped lang="scss">

</style>