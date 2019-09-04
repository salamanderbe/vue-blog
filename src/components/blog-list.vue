<style lang="scss" scoped>
.blog-item {
    width: 100%;
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

@media screen and (max-width: 600px) {
    .blog-article {
        margin-left: 0px;
        order: 1;
    }

    .animation-to-left {
        transform: translateX(0px) !important;
    }
}

.blog-post {
    position: absolute;
    width: 1000px;
    height: 800px;
    top: 41%;
    left: 65%;
    transform: translate(-50%, -50%);
    margin-left: auto;
    margin-right: auto;
}

.circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #bf920a;
    margin-right: 10px;
}

.between {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.grid-container {
    display: grid;
    grid-template-columns: 350px 700px;
    & img {
        height: 100px;
        width: 100%;
        object-fit: cover;
    }
}

.carousel {
    display: none;
}

.grid-left {
    display: block;
    height: 800px;
}

.scroll-bar-cont {
    overflow-y: scroll;
    overflow-x: hidden;
    padding-right: 20px;
}

#style-1::-webkit-scrollbar,
#style-2::-webkit-scrollbar {
    width: 2px;
}

/**  STYLE 1 */
#style-1::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bf920a;
}

#style-1::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #ffffff2a;
}

@media only screen and (max-width: 600px) {
    .grid-container {
        display: flex;
        flex-direction: column;
    }
    .carousel {
        order: 2;
        width: 100%;
        display: block;
    }

    .blog-item-open {
        order: 1;
        margin-bottom: 50px;
    }

    .grid-left {
        display: none;
    }
}

p {
    color: #dfdfe5;
}
</style>

<template>
    <div>
        <masonry :cols="{default: 3, 1000: 3, 768: 2, 500: 1}" :gutter="{default: '60px', 700: '15px'}" v-if="!hide">
            <div href="#" class="blog-item" v-for="(item, index) in posts" :key="index" :class="itemClass" @click="go(index)" ref="staggerAnim">
                <div class="img-hover-zoom">
                    <img :src="item.image" alt="blog picture" class="blog-picture">
                </div>
                <h1>{{ item.title }}</h1>
                <p v-if="shownPost === null">{{ item.body.substring(0,255)+".." }}</p>
                <div class="between">
                    <button :class="buttonClass">{{ buttonText }}</button>
                    <div v-if="shownPost !== null" :class="{circle: shownIndex === index}"></div>
                </div>
            </div>
        </masonry>
        <div class="grid-container" v-show="hide">
            <div class="scroll-bar-cont" id="style-1">
                <div class="grid-left">
                    <div href="#" class="blog-item" v-for="(item, index) in posts" :key="index" :class="itemClass" @click="go(index)" ref="staggerAnim">
                        <div class="img-hover-zoom">
                            <img :src="item.image" alt="blog picture" class="blog-picture">
                        </div>
                        <h3>{{ item.title }}</h3>
                        <p v-if="shownPost === null">{{ item.body }}</p>
                        <div class="between">
                            <button :class="buttonClass">{{ buttonText }}</button>
                            <div v-if="shownPost !== null" :class="{circle: shownIndex === index}"></div>
                        </div>
                    </div>
                </div>
            </div>
            <carousel :perPage="1" paginationActiveColor="#bf920a" paginationColor="#fff" class="carousel">
                <slide v-for="(item, index) in posts" :key="index" :class="itemClass" @click="go(index)">
                    <div class="img-hover-zoom">
                        <img :src="item.image" alt="blog picture">
                    </div>
                    <h3>{{ item.title }}</h3>
                    <p v-if="shownPost === null">{{ item.body }}</p>
                    <button :class="buttonClass">{{ buttonText }}</button>
                </slide>
            </carousel>
            <blog-item-open class="blog-item-open" v-if="shownPost" :post="shownPost" :key="shownPost.title"></blog-item-open>
        </div>
    </div>
</template>

<script>
import { translate } from '@/animate';
import { test } from '@/animate';
import blogItemOpen from './blog-item-open';

export default {
    components: {
        blogItemOpen
    },
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
    },
    data: () => ({
        isActive: true,
        defaultContainer: true,
        blogIsOpen: false,
        shownPost: null,
        shownIndex: null,
        hide: false,
    }),
    methods: {
        go(i) {
            if (this.shownPost == null) {
                test(this.$refs.staggerAnim)
            }
            this.isActive = false;
            this.defaultContainer = false;
            this.blogIsOpen = true;

            this.shownPost = this.posts[i];
            this.shownIndex = i;
            this.hide = true;
        }
    },
    computed: {}
}
</script>
