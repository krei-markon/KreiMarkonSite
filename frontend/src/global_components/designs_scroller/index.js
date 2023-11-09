import React from 'react'
import Text from './components/text.js'

const DesignsScroller = () => {
	return (
		<section className='p-16'>
			{/* Flex Container */}
			<div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
				<Text />

				{/* Image */}
				<div className='md:w-1/2'>
					<img src='img/девочка_1.png' alt='' />
				</div>
			</div>
		</section>
	)
}

export { DesignsScroller }
