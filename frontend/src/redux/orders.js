import { createSlice } from '@reduxjs/toolkit'
import { normalize, schema } from 'normalizr'

const userSchema = new schema.Entity("users");
const orderSchema = new schema.Entity('orders', {
	'user': userSchema
}
)

const initialState = {
	orders_list: [],
	orders: {},
	users: {}
}

const ordersSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		setOrders: (state, action) => {
			console.log(normalize(action.payload.orders, [orderSchema]))
			const { result, entities } = normalize(action.payload.orders, [
				orderSchema,
			])

			state.orders_list = result
			state.users = entities.users
			state.orders = entities.orders
	
		},
	},
})

export const ordersReducer = ordersSlice.reducer
export const { setOrders } = ordersSlice.actions
