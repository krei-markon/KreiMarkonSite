import { configureStore } from '@reduxjs/toolkit'
import { menuReducer } from './menu'
import { ordersReducer } from './orders'
// !Почему нельзя сделать одновременно импорт и экспорт, если в предыдущей
// !строке поменять import на export, то menuReducer не будет виден в файле

export { menuToggle } from './menu'

export const store = configureStore({
	reducer: {
		menu: menuReducer,
		orders: ordersReducer
	},
	devTools: true,
})
