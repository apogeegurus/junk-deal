<template>
    <div>
        <section id="animation">
            <div id="trees"></div>
            <div id="homes"></div>
            <div id="truck"></div>
        </section>
    </div>
</template>

<script>
    export default {
        created() {
            setInterval(() => {
                const homes = document.getElementById("homes")

                if(!homes.style.backgroundPositionX) {
                    homes.style.backgroundPositionX = `5px`;
                } else {
                    const current = +homes.style.backgroundPositionX.replace("px", "")
                    homes.style.backgroundPositionX = `${current + 5}px`;
                }
            }, 100)

            setInterval(() => {
                const homes = document.getElementById("trees")

                if(!homes.style.backgroundPositionX) {
                    homes.style.backgroundPositionX = `5px`;
                } else {
                    const current = +homes.style.backgroundPositionX.replace("px", "")
                    homes.style.backgroundPositionX = `${current + 5}px`;
                }
            }, 50)

        }
    }
</script>

<style scoped lang="scss">
#animation{
    position: relative;
    margin-bottom: 0;
    #trees {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url("/img/animation/Background_Bushes.svg");
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100%;
        height: 100%;
        transition: background-position 50ms linear;
        z-index: 3;
    }

    #homes {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url("/img/animation/Line_Houses.svg");
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100%;
        height: 100%;
        transition: background-position 100ms linear;
        z-index: 5;
    }

    #truck {
        position: absolute;
        left: 0;
        right: 0;
        bottom: -80px;
        background: url("/img/animation/Line_Truck-01.svg")  no-repeat;
        background-size: 1000px;
        width: 100%;
        height: 100%;
        animation: moveTreesLeft linear infinite alternate-reverse;
        animation-duration: 5s;
        z-index: 5;
    }
    height: 261px;

    @media screen and (max-width:1400px) {
        height: 150px;
        #truck {
            bottom: -60px;
            background-size: 500px;
        }
    }

    @media screen and (min-width:2100px) {
        height: 170px;
        #truck {
            bottom: -97px;
            background-size: 400px;
        }
    }

    @media screen and (max-width:991px) {
        height: 170px;
        margin-bottom: 60px;
        #truck {
            bottom: -120px;
            background-size: 600px;
        }
        #trees ,#homes {
            background-size: cover;
        }
    }


}

@keyframes moveTreesLeft {
    0% { background-position: 50vw 0;}
    90%  {background-position: 20vw 0;}
    100%  {background-position: 20vw 0;}
}

@keyframes moveTreesRight {
    from {background-position: 0 0;}
    to {background-position: 100vw 0;}
}
</style>