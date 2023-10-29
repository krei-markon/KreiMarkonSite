import React from 'react'

const Text = () => {
	return (
		<div className='flex flex-col mb-32  space-y-6 md:w-1/2'>
			<h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
				Дизайны
			</h1>
			<div>
				<hr className='w-48 h-1 my-6 float-left border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
			</div>

			<h2 className='text-2xl max-w-md font-bold text-center md:text-left'>
				Большой опыт в выполнении заказов различной сложности
			</h2>

			<p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
				Более 100 выполненных заказов
			</p>
			<div className='flex justify-center md:justify-start'>
				<a
					href='https://github.com/williamboman/mason-lspconfig.nvim'
					className='p-3 px-6 pt-2 rounded baseline text-white bg-black hover:bg-gray-800'
				>
					Посмотреть Дизайны
				</a>
			</div>
		</div>
	)
}

export default Text
