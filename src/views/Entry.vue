<template>
    <div class="entry">
        <input v-model="author">
        <input v-model="title">
        <textarea v-model="body"/>
        <div>
            <button @click="cancel">Cancel</button>
            <button @click="save">Save</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'Entry',
    computed: {
        ...mapState(['posts'])
    },
    methods: {
        ...mapMutations(['addPost']),
        save() {
            this.addPost({
                id: this.posts.length + 1,
                date: new Date(),
                author: this.author,
                title: this.title,
                body: this.body
            });
            this.$router.push('/')
        },
        cancel() {
            this.$router.push('/')
        }
    },
    data() {
        return {
            author: '',
            title: '',
            body: ''
        }
    }
}
</script>

<style scoped lang="scss">
    .entry {
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
    }
</style>