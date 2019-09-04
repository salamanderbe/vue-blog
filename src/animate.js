import anime from 'animejs/lib/anime.es.js';


export function translate(element) {
    anime({
        targets: element,
        opacity: "1",
        translateX: ['0', '-200px'],
    });
};

export function test(element) {
    anime({
        targets: element,
        opacity: [0, 1],
        translateY: ["5rem", "0rem"],
        scale: [.75, 1],
        delay: function (el, index) {
            return index * 80;
        },
        direction: 'forwards'
    });
};