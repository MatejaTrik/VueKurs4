<template>
    <div class="admin_wrapper">
        <div class="current_user_wrapper">
            <span>Logged in as:</span>
            <button type="button" class="btn_red" @click.prevent="signOut">Sign out</button>
        </div>
        <NewPizza></NewPizza>
        <div class="menu_wrapper">
            <h3>Menu:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Remove from menu</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Margarita</td>
                        <td>
                            <button type="button" class="btn_red">&times;</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="orders_wrapper">
            <h3>Current orders(5)</h3>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="order_number">
                        <th colspan="4">
                            <strong>Order number: 5</strong>
                            <button type="button" class="btn_red">&times;</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Margarita</td>
                        <td>9"</td>
                        <td>2</td>
                        <td>$13</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Login></Login>
    </div>
</template>

<script>
import NewPizza from './NewPizza'
import Login from './Login'
import { firebaseAuth } from '../firebase'

export default {
    name:'admin',
    components: {
        NewPizza,
        Login
    },
    methods: {
        async signOut() {
            try{ 
                await firebaseAuth.signOut()
            }
            catch(error){
                alert(`error signing out, ${error}`)
            }
        }
    }

}
</script>

<style>

    .admin_wrapper {
        margin: 10px;
    }

    .current_user_wrapper,
    .orders_wrapper,
    .menu_wrapper {
        margin: 10px 0;
        padding: 10px;
        border: solid 1px #f79e38;
    }

    table {
        text-align: center;
        width: 35vw;
    }

    .order_number th {
        background: #ddd;
    }

    .order_number button {
        margin: 10px 0;
    }
</style>