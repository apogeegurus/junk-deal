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
        background-image: url("/img/animation/Background_Bushes.svg");
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100%;
        height: 100%;
        animation: moveTreesRight linear 60s infinite;
        z-index: 3;
    }

    #homes {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background-image: url("/img/animation/Line_Houses.svg"), url("/img/animation/Line_Houses.svg");
        background-repeat: repeat-x;
        background-position: 0 0;
        background-size: contain;
        width: 100%;
        height: 100%;
        animation: moveTreesRight linear 40s infinite;
        z-index: 5;
    }

    #truck {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background: url("/img/animation/Line_Truck-01.svg")  no-repeat;
        background-size: 600px;
        width: 100%;
        height: 100%;
        animation: moveTreesLeft linear infinite alternate-reverse;
        animation-duration: 10s;
        z-index: 5;
        transform: translateY(50%);
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

@keyframes moveTreesLeft {
    0% { background-position: 58vw 0;}
    90%  {background-position: 20vw 0;}
    100%  {background-position: 20vw 0;}
}

@keyframes moveTreesRight {
    from {background-position: 0 0;}
    to {background-position: 100vw 0;}
}
</style>