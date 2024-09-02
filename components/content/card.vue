<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
defineProps({
    name: String,
    location: String,
    email: String,
    occupation: String
})
const center = ref(true)
onMounted(() => {
    gsap.to('.card-container', {autoAlpha: 1, duration: .23})
    gsap.to('.scroll-arrow', {
        top: '2.7rem',
        repeat: 3,
        yoyo: true,
        duration: 1.2,
        ease: 'elastic.in'
    })

    let mm = gsap.matchMedia(), breakpoint = 960;
    mm.add({
        isDesktop: `(min-width: ${breakpoint}px)`,
        isMobile: `(max-width: ${breakpoint - 1}px)`,
    }, (context) => {
        let { isDesktop, isMobile } = context.conditions;

        const calculateMobileCardHeight = () => {
            const contentHeight = document.querySelector('.homepage-content').clientHeight;
            return `calc(98vh - ${contentHeight}px - 3rem)`;
        }
        // Business card scroll animation
        let tl = gsap.timeline({
            scrollTrigger: {
                // markers: true,
                trigger: '.home-container > div',
                // pin: true,
                // pinSpacing: false,
                start: 'top top',
                end: '+=100%',
                scrub: 1,
                invalidateOnRefresh: true,
                snap: {
                    snapTo: 'labels',
                    duration: { min: 0.2, max: 1 },
                    delay: 0.2,
                    ease: 'power1.inOut'
                }
            }
        })

        tl.addLabel('start')
            .to('.card .card-front', {
                borderRadius: '20px',
                duration: .1,
            })
            .fromTo('.card .card-front', {
                rotateY: 0
            }, {
                rotateY: 180,
            }, '<')
            .fromTo('.card .card-back', {
                rotateY: 180
            }, {
                rotateY: 360
            }, '<')
            .fromTo('.card-container', {
                top: '50%',
                left: '50%',
                xPercent: -50,
                yPercent: -50,
            }, {
                rotation: 90,
                top: isDesktop ? '50%' : '0',
                left: isDesktop ? '0' : '50%',
                xPercent: isDesktop ? 0 : -50,
                yPercent: isDesktop ? -50 : 50,
                width: isDesktop ? '50vw' : () => calculateMobileCardHeight()
            }, '<')
            .to('.scroll', {
                opacity: 0
            }, '<')
            // .delay(10)
            // .to('.card-container', { position: 'sticky', top: 0 })
            .addLabel('end');
    })
})
</script>

<template>
    <div class="card-container" :class="{center}">
        <div class="card">
            <div class="card-front">
                <h1 v-text="name" class="name"></h1>
                <p v-text="occupation"></p>
                <p v-text="location"></p>
                <p><a v-text="email" :href="`mailto:${email}?subject=I need a website`"></a></p>
            </div>
            <div class="card-back">
                <div class="business-id">
                    <div class="picture">
                        <slot name="picture"></slot>
                    </div>
                    <h2 id="work" v-text="name" class="name"></h2>
                    <slot></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.card-container {
    container: card / size;
    width: 50vw;
    max-width: 60vh;
    aspect-ratio: 3.5 / 2;
    position: fixed;
    opacity: 0;
    filter: drop-shadow(0 0 40px var(--fg-color));
    -webkit-font-smoothing: antialiased;
    z-index: 1;
    @include lt-md {
        width: 80vw;
    }
    .card {
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 1000px;

        font-size: 3cqw;

        .card-front, .card-back {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            transform-style: preserve-3d;
        }
        .card-front {
            color: var(--bg-color);
            transform: rotateY(0deg);
        }
        .card-back {
            color: var(--bg-color);
            transform: rotateY(180deg);
            overflow: hidden;
            border-radius: 20px;
        }
    }

    .name {
        margin: 0;
        font-size: 8cqw;
        flex-grow: 1;
    }
    p {
        margin: 0 0 1cqi 0;
    }
}

.business-id, .card-front {
    display: flex;
    flex-direction: column;
    padding: 8cqh 5cqw;
    background-color: rgba(255, 255, 255, 1);
}

.business-id {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100cqw;
    width: 100cqh;
    transform: translate(-50%, -50%) rotate(-90deg);

    .picture {
        align-self: center;
        img {
            height: 59cqi;
            // border: 1cqi solid var(--accent-color);
            object-fit: cover;
            object-position: bottom;
            border-radius: 10px;
            width: 82cqh;
        }
    }
    
    .name {
        font-size: 4.5cqw;
        font-weight: 900;
        // text-align: center;
    }
}
</style>