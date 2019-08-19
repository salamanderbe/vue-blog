<style scoped>
#app {
    font-family: "Roboto", sans-serif;
}
.container {
    max-width: 1250px;
    margin: 0 auto;
}
</style>

<style>
html,
body {
    background: #02050f;
}
</style>

<template>
    <div id="app" class="container">
        <blog-list buttonText="Salamander" :posts="posts"></blog-list>
    </div>
</template>

<script>
import blogList from './components/blog-list';
export default {
    name: 'app',
    components: {
        blogList
    },
    data: () => ({
        posts: [
            { title: 'I am a title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/600?grayscale', link: "https://google.com" },
            { title: 'I am a title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/301?grayscale', link: "https://google.com" },
            { title: 'I am a title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/202?grayscale', link: "https://google.com" },
            { title: 'I am a title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/503?grayscale', link: "https://google.com" },
            { title: 'I am a title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beataeLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/604?grayscale', link: "https://google.com" },
            { title: 'I am a title', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/505?grayscale', link: "https://google.com" },
        ]
    }),
}
</script>

