<template>
    <div class="menu_wrapper">
        <!-- menu -->
        <div class="menu">
            <h3>~ Authentic handmade pizza ~</h3>
            <table v-for="(item, index) in getMenuItems" :key="index">
                <tbody>
                    <tr>
                        <td>
                            <strong>~ {{item.name}} ~</strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <small>~ {{item.description}} ~</small>
                        </td>
                    </tr>
                    <tr v-for="(option, index) in item.options" :key="index">
                        <td>{{ option.size }}"</td>
                        <td>${{option.price}}</td>
                        <td>
                            <button type="button" class="btn_green" @click="addToBasket(item, option)">+</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- shopping basket -->
        <div class="basket" >
            <h3>~ Basket ~</h3>
            <div v-if="basket.length > 0">
                <table>
                    <tbody v-for="(item, index) in basket" :key="index">
                        <tr>
                            <td>
                                <button class="btn_green" @click="decreaseQuantity(item)">&#8722;</button>
                                <span>{{ item.quantity }}</span>
                                <button class="btn_green" @click="increaseQuantity(item)">&#43;</button>
                            </td>
                            <td>{{ item.name }}  {{ item.size }}"</td>
                            <td>${{ item.price * item.quantity}}</td>
                        </tr>
                    </tbody>
                </table>
                <p>Order Total:</p>
                <button class="btn_green">Place order</button>
            </div>
            <div>
                <p>{{ basketText }}</p>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: 'Menu',
        data() {
            return {
                basketText: 'Your basket is empty',
                basket:[],
                getMenuItems: {
                    1: {
                      'name': 'Margherita',
                      'description': 'A delicious tomato based pizza topped with mozzarella',
                      'options': [{
                        'size': 9,
                        'price': 6.95
                      }, {
                        'size': 12,
                        'price': 10.95
                      }]
                    },
                    2: {
                      'name': 'Pepperoni',
                      'description': 'A delicious tomato based pizza topped with mozzarella and pepperoni',
                      'options': [{
                        'size': 9,
                        'price': 7.95
                      }, {
                        'size': 12,
                        'price': 12.95
                      }]
                    },
                    3: {
                      'name': 'Ham and Pineapple',
                      'description': 'A delicious tomato based pizza topped with mozzarella, ham and pineapple',
                      'options': [{
                        'size': 9,
                        'price': 7.95
                      }, {
                        'size': 12,
                        'price': 12.95
                      }]
                    }
                }

            }
        },
        methods: {
            async addToBasket(item, option) {
                const pizzaExists = await this.basket.find(
                    pizza => pizza.name === item.name && pizza.size === option.size
                )
                if(pizzaExists) {
                    pizzaExists.quantity++
                    return
                }
                this.basket.push({
                    name: item.name,
                    price: option.price,
                    size: option.size,
                    quantity: 1
                })
            },
            removeFromBasket(smt) {
                this.basket.splice(this.basket.indexOf(smt), 1)
            },
            increaseQuantity(item) {
                item.quantity++
            },
            decreaseQuantity(item) {
                item.quantity--;
                if(item.quantity === 0) {
                    this.removeFromBasket(item)
                }
            },
        }
    }
</script>

<style scoped>

    h2 {
        text-align: center;
    }

    .menu_wrapper {
        display: flex;
        flex-direction: column;

    }

    .menu,
    .basket {
        background: #f1e6da;
        border-radius: 3px;
        height: 100vh;
        margin: 10px;
        padding: 10px;

    }

    @media screen and (min-width: 900px) {
         .menu_wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    }

    .menu {
        width: 65vw ;
    }

    .basket {
        width: 35vw;
    }
</style>