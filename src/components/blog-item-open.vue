<style lang="scss" scoped>
h1 {
    margin-top: 0;
    font-weight: bold;
    color: #ecf0f1;
}

p {
    font-weight: 500;
    color: #ecf0f1;
}

img {
    max-width: 100%;
    margin-bottom: 30px;
}

.blog-article {
    width: 100%;
    margin-left: 100px;
}

@media only screen and (max-width: 600px) {
    .blog-article {
        margin-left: 0px;
    }
}

@-webkit-keyframes slideInRightAndFade {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        opacity: 0;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

@keyframes slideInRightAndFade {
    from {
        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
        visibility: visible;
        opacity: 0;
    }

    to {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        opacity: 1;
    }
}

.slideInRightAndFade {
    -webkit-animation-name: slideInRightAndFade;
    animation-name: slideInRightAndFade;
}

.delay-slow {
    animation-delay: 0.08s;
}
.delay-slower {
    animation-delay: 0.12s;
}

.blog-title{}
.blog-image{
    width: 100%;
    height: 300px;
    object-fit: cover;
}
.blog-text{}
</style>

<template>
    <div class="blog-article">
        <img class="blog-image animated slideInRightAndFade faster" :src="post.image" alt="">
        <h1 class="blog-title animated slideInRightAndFade faster delay-slow"> {{ post.title }} </h1>
        <p class="blog-text animated slideInRightAndFade faster delay-slower">{{ post.body }}</p>
    </div>
</template>

<script>
export default {
    props: ["post"],
}
</script>
