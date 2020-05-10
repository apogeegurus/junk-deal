<template>
    <div>
        <section id="animation">
            <div id="trees" :style="{'background-image' : `url(${HOME_PAGE['animation_back_path']})`}"></div>
            <div id="homes" :style="{'background-image' : `url(${HOME_PAGE['animation_front_path']})`}"></div>
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
                startPosition = document.body.offsetWidth < 768 ? 90 : 60;
                endPosition = document.body.offsetWidth < 768 ? 7 : 20;
                position = document.body.offsetWidth < 768 ? 90 : 60;
            }

            function forward() {
                truck.classList.add("forward-animation");
                truck.classList.remove("backward-animation");
                intervalForward = setInterval(() => {
                    if(position <= endPosition) {
                        clearInterval(intervalForward);
                        setTimeout(() => {
                            backward()
                        }, 3000)
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
    margin-bottom: 0;
    height: 230px;
    #trees {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100%;
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
        width: 100%;
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
        background-size: 600px;
        width: 100%;
        height: 100%;
        z-index: 5;
        transform: translateY(50%);
        @media screen and (max-width:768px) {
            background-position: 90vw 0;
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

    @media screen and (max-width:1600px) {
        height: 150px;
        margin-bottom: 40px;
        #truck {
            transform: translateY(52%);
        }
    }

    @media screen and (max-width:1300px) {
        height: 140px;
        margin-bottom: 40px;
        #truck {
            transform: translateY(50%);
        }
    }

    @media screen and (max-width:1200px) {
        height: 130px;
        margin-bottom: 0;
        #truck {
            transform: translateY(43%);
            background-size: 400px;
        }
    }

    @media screen and (max-width:991px) {
        height: 110px;
        margin-bottom: 0;
        #truck {
            transform: translateY(50%);
            background-size: 300px;
        }
        #homes,#trees{
            background-size:1000px;
        }
    }

    @media screen and (min-width:2100px) {
        margin-bottom: 40px;
        #truck {
            transform: translateY(67%);
        }
    }

}

@keyframes moveTreesRight {
    from {background-position: 0 0;}
    to {background-position: 100vw 0;}
}
</style>