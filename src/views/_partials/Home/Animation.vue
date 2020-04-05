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
    #trees {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: url("/img/animation/Background_Bushes.svg")  repeat-x 0 / 100% auto;
        width: 100%;
        height: 100%;
        animation: moveTreesRight 20s linear infinite ;
        z-index: 3;
    }

    #homes {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        background: url("/img/animation/Line_Houses.svg")  repeat-x 0 / 100% auto;
        width: 100%;
        height: 100%;
        animation: moveTreesRight 40s linear infinite ;
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
        animation: moveTreesLeft 40s linear infinite ;
        z-index: 5;
    }
    height: 300px;

    @media screen and (max-width:1400px) {
        height: 200px;
        #truck {
            bottom: -60px;
            background-size: 500px;
        }
    }

    @media screen and (max-width:991px) {
        height: 200px;
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
    from {background-position: 100vw 0;}
    to {background-position: -100% 0;}
}

@keyframes moveTreesRight {
    0%{background-position: 0 0;}
    100%{background-position: 100vw 0;}
}
</style>