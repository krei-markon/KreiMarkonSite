import classNames from 'classnames'
import React from 'react'
import { useDispatch } from 'react-redux'
import { menuToggle } from '../../../redux'
// !Вроде кривая реализация, но ничего лучше не придумал

const HamburgerButton = props => {
	const dispatch = useDispatch()

	return (
		<button
			id='menu-btn'
			className={classNames(
				'block hamburger md:hidden focus:outline-none',
				props.toggle && 'open'
			)}
			onClick={() => dispatch(menuToggle())}
		>
			<span className='hamburger-top'></span>
			<span className='hamburger-middle'></span>
			<span className='hamburger-bottom'></span>
		</button>
	)
}

export default HamburgerButton
