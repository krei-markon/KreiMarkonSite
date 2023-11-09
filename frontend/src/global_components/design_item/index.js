import React from 'react'

const DesignItem = props => {
	return (
		<li className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col'>
			<img className='hover:grow hover:shadow-lg' src={props.url} alt='' />
			<div className='pt-3 flex items-center justify-between'>
				<p className=''>Product Name</p>
			</div>
			<p className='pt-1 text-gray-900'>£9.99</p>
		</li>
	)
}

export { DesignItem }
