<template>
    <div>
        <header>
            <j-header></j-header>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <j-footer></j-footer>
        </footer>
    </div>
</template>

<script>
    import JHeader from "../components/Header";
    import JFooter from "../components/Footer";

    export default {
        components: { JHeader, JFooter },
        data() {
            return {

            }
        }
    }
</script>