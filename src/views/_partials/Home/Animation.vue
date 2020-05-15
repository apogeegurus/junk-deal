<template>
    <div>
        <section id="animation">
            <div id="trees" :style="{'background-image' : `url(${HOME_PAGE['animation_back_path']})`, 'animation-duration': `${HOME_PAGE['back_duration_original']}s`}"></div>
            <div id="homes" :style="{'background-image' : `url(${HOME_PAGE['animation_front_path']})`, 'animation-duration': `${HOME_PAGE['front_duration_original']}s`}"></div>
            <div id="truck" :style="{'background-image' : `url(${HOME_PAGE['animation_truck_path']})`}"></div>
        </section>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters(["HOME_PAGE"])
        },
        mounted() {
            const truck = document.getElementById("truck");
            let startPosition = document.body.offsetWidth < 768 ? 90 : 60;
            let endPosition = document.body.offsetWidth < 768 ? 7 : 20;
            let position = document.body.offsetWidth < 768 ? 90 : 60;
            let intervalForward = null;
            let intervalBackward = null;

            window.onresize = () => {
                truck.classList.add("no-animation");
                startPosition = document.body.offsetWidth < 768 ? 90 : 60;
                endPosition = document.body.offsetWidth < 768 ? 7 : 20;
                position = document.body.offsetWidth < 768 ? 7 : 60;
                truck.style.backgroundPositionX = `${position}vw`;
                setTimeout(() => {
                    truck.classList.remove("no-animation");
                }, 1000)
            }

            function forward() {
                truck.classList.add("forward-animation");
                truck.classList.remove("backward-animation");
                intervalForward = setInterval(() => {
                    if(position <= endPosition) {
                        clearInterval(intervalForward);
                        setTimeout(() => {
                            backward()
                        }, 1000)
                        return;
                    }
                    if(document.body.offsetWidth < 768) {
                        position -= 10;
                    } else {
                        position -= 5;
                    }
                    truck.style.backgroundPositionX = `${position}vw`;
                }, 1000)
            }

            function backward() {
                truck.classList.remove("forward-animation");
                truck.classList.add("backward-animation");
                intervalBackward = setInterval(() => {
                    if(position >= startPosition) {
                        clearInterval(intervalBackward);
                        setTimeout(() => {
                            forward()
                        }, 1000)
                        return;
                    }
                    if(document.body.offsetWidth < 768) {
                        position += 10;
                    } else {
                        position += 5;
                    }
                    truck.style.backgroundPositionX = `${position}vw`;
                }, 2000)
            }

            forward();
        }
    }
</script>

<style scoped lang="scss">
#animation{
    position: relative;
    margin-bottom: 15px;
    height: 144px;
    #trees {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100000000000000000000000000000000000000%;
        height: 100%;
        animation: moveTreesRight linear 15s infinite;
        z-index: 3;
        @media screen and (max-width:768px) {
            animation: moveTreesRight linear 10s infinite;
        }
    }

    #homes {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100000000000000000000000000000000000000%;
        height: 100%;
        animation: moveTreesRight linear 30s infinite;
        z-index: 5;
        @media screen and (max-width:768px) {
            animation: moveTreesRight linear 15s infinite;
        }
    }

    #truck {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-position: 60vw 0;
        background-repeat: no-repeat;
        background-size: 400px;
        width: 100%;
        height: 100%;
        z-index: 5;
        transform: translateY(60%);
        @media screen and (max-width:768px) {
            background-position: 90vw 0;
        }
        &.no-animation {
            transition-duration: 0s !important;
        }
        &.backward-animation{
            transition:background-position 3s linear;
            @media screen and (max-width:768px) {
                transition:background-position 2s linear;
            }
        }
        &.forward-animation{
            transition:background-position 2s linear;
            @media screen and (max-width:768px) {
                transition:background-position 1s linear;
            }
        }
    }

    @media screen and (max-width:1500px) {
        #homes,#trees {
            /*background-size: cover;*/
        }
    }

}

@keyframes moveTreesRight {
    from {background-position: 0 0;}
    to {background-position: 100% 0;}
}
</style>