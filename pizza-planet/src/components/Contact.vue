<template>
    <div class="contact_wrapper">
        <h4>Contact</h4>
        <address>
            <strong>Pizza Planet</strong>
            <br> Adress 1
            <br> Adress 2
            <br> Phone number
        </address>
        <address>
            <strong>Email:</strong>
            <br>
            <p>pizaa@gmail.com</p>
        </address>
    </div>
</template>

<script>
export default {
    name: 'contact',
    data() {
        return {

        }
    }
}
</script>

<style scoped>

    .contact_wrapper {
        background: #f1e6da;
        height: 100vh;
        margin: 10px;
        padding: 10px;
    }

</style>