import React from 'react'
// import { AiOutlineInstagram } from 'react-icons/ai'
import { LiaTelegramPlane } from 'react-icons/lia'
import { SlSocialVkontakte } from 'react-icons/sl'

const Media = () => {
	return (
		<div className='flex justify-center space-x-4 fill-black-500'>
			<a href='https://t.me/krei_markon_bot'>
				<LiaTelegramPlane className='fill-black w-16 h-8' />
			</a>
			<a href='https://vk.com/krei.markon'>
				<SlSocialVkontakte className='fill-black w-16 h-8' />
			</a>
			{/* <a href='#'>
				<AiOutlineInstagram className='fill-black w-16 h-8' />
			</a> */}
		</div>
	)
}

export default Media
