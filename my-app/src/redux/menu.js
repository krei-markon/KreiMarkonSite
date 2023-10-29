import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	toggle: false,
}

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		menuToggle: state => {
			state.toggle = !state.toggle
		},
	},
})

export const menuReducer = menuSlice.reducer
export const { menuToggle } = menuSlice.actions
