import {uiActions} from "./ui-slice";
import {cartActions} from "./cart-slice";


export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://flamelinktest-b9226-default-rtdb.firebaseio.com/cart.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch the data!')
            }
            const data = await response.json()
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity : cartData.totalQuantity
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                title: 'Error',
                message: 'Sending Cart Data Error',
                status: 'error'
            }))

        }

    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            title: 'Sending',
            message: 'Sending Cart Data ...',
            status: 'pending'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://flamelinktest-b9226-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify(cart)
                });
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest()

            dispatch(uiActions.showNotification({
                title: 'success',
                message: 'Sent Cart Data Successfully',
                status: 'success'
            }))

        } catch(error) {
            dispatch(uiActions.showNotification({
                title: 'Error',
                message: 'Sending Cart Data Error',
                status: 'error'
            }))
        }
    }
}