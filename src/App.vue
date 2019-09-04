<style scoped>
#app {
    font-family: "Roboto", sans-serif;
}
.container {
    max-width: 1250px;
    margin: 0 auto;
}

img.salamander {
    height: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 100%;
}
</style>

<style>
@import "~animate.css/animate.css";
html,
body {
    background: #02050f;
    
}

h1 {
    font-weight: bold;
    color: #ecf0f1;
}

h3 {
    font-weight: bold;
    color: #ecf0f1;
}

p {
    font-weight: 500;
    color: #ecf0f1;
}

a {
    color: black;
    text-decoration: none;
}

</style>

<template>
    <div id="app" class="container">
        <a href="https://salamander.be/nl" target="_blank">
            <img src="./assets/salamander-media.svg" alt="Salamander logo" class="salamander">
        </a>
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
            { title: 'Lancashire fondue queso.', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/600?grayscale', link: "https://google.com" },
            { title: 'Fondue taleggio chalk and cheese', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: './assets/images/dummy-image.jpg', link: "https://google.com" },
            { title: 'Cheesy grin say cheese', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/202?grayscale', link: "https://google.com" },
            { title: 'Croque monsieur pepper jack', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/503?grayscale', link: "https://google.com" },
            { title: 'cheesecake manchego feta roquefort.', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beataeLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae', image: 'https://picsum.photos/500/604?grayscale', link: "https://google.com" },
            { title: 'everyone loves gouda babybel smelly cheese hard cheese', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beataeLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beatae Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit adipisci temporibus earum vero aut fuga rerum atque, sapiente alias consectetur quia beataeLorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ', image: 'https://picsum.photos/500/505?grayscale', link: "https://google.com" },
        ]
    }),
}
</script>

