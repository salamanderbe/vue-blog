<style scoped>
.blog-item {
    margin-bottom: 50px;
    color: white;
}
.blog-picture {
    max-width: 100%;
    height: auto;
}
.custom-button {
    display: inline-block;
    cursor: pointer;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 4px;
    outline: none;
    background: #bf920a;
    color: #fff;
    margin-bottom: 30px;
}

a {
    color: black;
    text-decoration: none;
}

.img-hover-zoom {
    overflow: hidden;
}

.img-hover-zoom img {
    transition: transform 0.5s ease;
}

.img-hover-zoom:hover img {
    transform: scale(1.2);
}
</style>

<template>
    <masonry :cols="{default: 3, 1000: 2, 700: 2, 500: 1}" :gutter="60">
        <a :href="item.link" class="blog-item" v-for="(item, index) in posts" :key="index" :class="itemClass">
            <div class="img-hover-zoom">
                <img :src="item.image" alt="blog picture" class="blog-picture">
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.body }}</p>
            <button :class="buttonClass">{{ buttonText }}</button>
        </a>
    </masonry>
</template>

<script>
export default {
    props: {
        buttonClass: {
            type: String,
            default: "custom-button"
        },
        itemClass: {
            type: String,
            default: ""
        },
        buttonText: {},
        posts: {
            type: Array,
            default: () => { return [] }
        }
    }
}
</script>
