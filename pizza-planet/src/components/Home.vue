<template>
    <div class="background">
        <div class="background-overlay">
            <h2>Welcom To Pizza Planet!</h2>
            <img src="../assets/images/roller.png" alt="roller">
            <h3>Osecas se danglim?</h3>
            <button class="order_btn">Let's order</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style>

    h2, 
    h3 {
        margin: 2%;
    }

    .background {
        background: url('../assets/images/dough.jpg') center;
        background-size: cover;
        height: 30vh;
        display: flex;
        text-align: center;
        align-items: center;
    }

    .background-overlay {
        display: column;
        flex: column;
        background: #f1e6da;
        opacity: 0.8;
        widows: 50%;
        margin: 0 auto;
        padding: 5px;
    }

    .background-overlay > img {
        max-width: 15%;
        align-items: center;
    }

    .order_btn {
        background: #f79f38;
        border-radius: 3px;
        margin-bottom: 10px;
        pad: 10px;
        cursor: pointer;
    }

</style>