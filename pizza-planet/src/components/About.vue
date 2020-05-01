<template>
    <div>
        <h3>~ Click on the links below for more info ~</h3>
        <nav>
            <ul>
                <router-link to="/history" tag="li">
                    <a class="nav-link">Our history</a>
                </router-link>
                <span>~</span>
                <router-link to="/ordering-guide" tag="li">
                    <a class="nav-link">Ordering guide</a>
                </router-link>
                <span>~</span>
                <router-link to="/delivery" tag="li">
                    <a class="nav-link">Our delivery</a>
                </router-link>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'about',
    data() {
        return{
            
        }
    }
}
</script>

<style scoped>

    h3{
        text-align: center;
    }

</style>