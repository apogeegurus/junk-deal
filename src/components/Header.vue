<template>
    <b-navbar toggleable="lg" type="light" variant="white" class="shadow" :fixed="isFixed ? 'top' : ''">
        <b-container class="align-items-center d-flex z-index-3">
            <b-navbar-brand :to="{ name: 'home' }">
                <b-img src="/img/logo.svg" width="200px" height="69px"></b-img>
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav v-model="showCollapse">
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto flex-column">
                    <b-nav-text class="color-default align-self-md-start align-self-lg-end">
                        <a :href="`tel:${ SITE_DETAILS.phone }`" class="jd-font-medium jd-text-20">
                            <i class="fas fa-phone-square"></i>
                            {{ SITE_DETAILS.phone }}
                        </a>
                    </b-nav-text>

                    <section class="d-md-flex justify-content-between text-uppercase mt-2 flex-lg-row flex-md-column">
                        <b-nav-item :to="{ name: 'home'}" class="menu-item">Home</b-nav-item>
                        <b-nav-item-dropdown text="About Us" right no-caret class="menu-item">
                            <b-dropdown-item :to="{ name: 'blogs' }">Our Blogs</b-dropdown-item>
                            <b-dropdown-item :to="{ name: 'locations' }">Locations</b-dropdown-item>
                            <b-dropdown-item :to="{ name: 'about' }">About Junk Deal</b-dropdown-item>
                            <b-dropdown-item href="#">Our Message</b-dropdown-item>
                            <b-dropdown-item href="#">Who is who in Junk deal</b-dropdown-item>
                            <b-dropdown-item href="#">Planing for the future</b-dropdown-item>
                            <b-dropdown-item href="#">Tesimonials</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item-dropdown text="Services" right no-caret class="menu-item">
                            <b-dropdown-item :to="{name: 'services', params: { slug: item.slug }}" v-for="(item, key) in SERVICES" :key="key">{{ item.title }}</b-dropdown-item>
                        </b-nav-item-dropdown>
                        <b-nav-item :to="{ name: 'contact' }" class="menu-item">Contact Us</b-nav-item>
                    </section>
                </b-navbar-nav>
            </b-collapse>
        </b-container>

        <section id="get-quote-now" v-if="isFixed" @click="scrollToTop" class="d-none d-lg-block">GET QUOTE NOW!</section>
        <section class="d-flex d-lg-none mobile-bottom-btn">
            <a :href="`tel:${ SITE_DETAILS.phone }`" >
                <i class="fas fa-phone mr-2"></i>
                MAKE A CALL
            </a>
            <p  @click="$root.$emit('openQuote')">
                <i class="fas fa-align-right mr-2"></i>
                GET QUOTE
            </p>
        </section>
    </b-navbar>

</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                isFixed : true,
                scrollY: null,
                showCollapse: false
            }
        },
        beforeCreate() {
          this.$store.dispatch("GET_SERVICES_NAMES");
        },
        mounted() {
            window.addEventListener('scroll', (event) => {
                this.scrollY = Math.round(window.scrollY);
            });

            window.addEventListener('click', (event) => {
                let classList = event.target.classList;
                if(classList.contains('navbar-toggler-icon') || classList.contains('navbar-toggler'))
                    return;
                
                this.showCollapse = false;

            })
        },
        methods: {
            scrollToTop() {
                if(this.$route.name !== 'home') {
                    this.$router.push({name: 'home'})
                }
                window.scrollTo(0,0);
            }
        },
        watch: {
            scrollY(newValue) {
                this.isFixed = newValue > 0;
            }
        },
        computed: {
            ...mapGetters(['SITE_DETAILS', 'SERVICES'])
        }
    }
</script>

<style scoped lang="scss">
#get-quote-now{
    position: fixed;
    font-size: 14px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 66px;
    height: 69px;
    border-radius: 20px 0 0 20px;
    background: #EF4E23;
    color: #fff;
    cursor: pointer;
    z-index: 5;
    text-align: right;
    padding: 5px 9px 6px 8px;
    opacity: 0.9;
    transition: 0.3s ease;
    &:hover{
        opacity: 1;
    }
}
.z-index-3{
    position: relative;
    z-index: 3;
}
.mobile-bottom-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    width: 100%;
    z-index: 4;
    a, p {
        flex-grow: 1;
        text-align: center;
        background: #EF4E23;
        color: #fff;
        line-height: 50px;
        margin-bottom: 0;
        cursor: pointer;
    }

    a {
        margin-right: 1px;
        border-radius: 0 20px 0 0;
    }

    p {
        border-radius: 20px 0 0 0;
    }
}
/deep/.navbar-toggler[aria-expanded="true"]{
    .navbar-toggler-icon{
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAQAAAD41aSMAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAABKpJREFUeNrt3c1OU1EYheGFRidivRw1oTowhlLGeidOmHE7OhYscYJ/vaDC3MFJJJX+nH3O/r69FllrRsLAvA8JtD17e/AJXssdGMAABvAMYADPAAbwDGAAzwAG8AxgAM8ABvAMYADPAAbwDGAAzwAG8AxgAM8ABvAMYADPAAbwDGAAzwAG8AxgAM8ABvBYAaY4wwfcCHWZ4DPOsXwYAFNc4BC/cCJDMME3vMYKx/EE8QBdfgAyBF1+AFhhhj/aAFNc4tm/rxQI7vKnEMQCrOdXIFjPn0AQCfAGF//lZye4n78jOMFvPYDN+ZkJNucPJogC2J6flWB7/lCCGIC3+LojPyPB7vwAcINZBEEEwP78bAT784cR1Afol5+JoF/+IIL6AFd43/t7GQgmWOBV7+++xJwd4DkWPX+eGAjK8v/EvPa/NuJ3gA5B8/xRfwVpEBDkj3sdwE9AkT/ylTA3AUn+2PeCeAlo8ke/G8pJQJQ//vMAPgKq/BmfiHERkOXP+UyYh4Auf9ZTERwEhPnzngtqTzDBFV4W5D/BbUaYvAez2hKQ5s99Mq4dAW3+7EcT2xAQ589/NjSfgDp/i4dzcwnI87d5OjqPgD5/q8fTcwgE8rc7HxBPIJG/5QGNWAKR/G1PyMQRvMCiIP8PzFvlb31EKYZAKH/7M2L1CaTyMxzSq0sglp/jlGQ9Arn8LMdU6xAI5uc5JzyeQDI/00HtcQSi+blOyg8nkM3PdlXBMALh/Hx3RZQTPFbOz3hZRynBk4L81zjlys95W0oZAZTzs15XE0FAmZ/3vqDaBKT5mS9sqklAm5/7xqxaBMT52a8sq0FAnZ//zrixBOT5FS7tG0NAn1/j1sShBAL5Va6tHEIgkV/n3tBSApH8OgD9bzTptsQxVgZolV+IQAFgSH4ZAn6AoflFCNgBxuSXIOAGGJtfgIAZoEZ+egJegFr5yQlYAWrmpybgBKidn5iAESAiPy0BH0DZlRrXeFqARUjABlCa/xSPit6moyPgAijPf4vSd0rJCJgAhuWHNgEPwPD80gQsAOPyCxNwAIzPL0vAAFAnvyhBe4B6+SUJWgPUzS9I0Bagfn45gpYAZflLDhcJEbQDKLtQpvRslwxBK4DY/EIEbQDi88sQtADIyS9CkA+Ql1+CIBsgN78AQS5Afn56gkyANvnJCfIA2uWnJsgCaJufmCAHgONCGUqCDICy/JG32BISxAPw5KckiAbgyk9IEAvAl5+OIBKAMz8ZQRwAb34qgigA7vxEBDEA/PlpCCIANPKTENQH0MlPQVAf4DveyeQvJ1hgxg5whEsc9sw/T/tf5OsQrHCMJf/vgH4ELPn7EwTkj/oraD8BU/5+BCH5414H7CZgy7+fICh/5Cvh7QSM+XcThOWPfS9oMwFr/u0Egfmj3w29T8CcfzNBaP74zwPWCdjz3ycIzp/xidgdgUL+dYLw/DmfCXcEKvnvCBLyZz0VcYQzfJTJ3xF8wXl8fp17Qx/sDGAAA3gGMIBnAAN4BjCAZwADeAYwgGcAA3gGMIBnAAN4BjCAZwADeAYwgGcAA3gGMIBnAAN4BjCAZwADeAYwgGcAA3gD9hekz6qfhZ0bzQAAAABJRU5ErkJggg==');
        background-size: contain;
    }
}
</style>