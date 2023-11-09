import { Field } from 'formik'
import React from 'react'

const ContactForm = props => {
	console.log(props)
	return (
		<div
			id={props.name}
			className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'
		>
			<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
				<div className='lg:col-span-5'>
					<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
						<div className='md:col-span-5'>
							<label htmlFor='full_name'>ФИО</label>
							<Field
								name='full_name'
								type='text'
								placeholder='Антонио Родригес Александрович'
								id='full_name'
								className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
							/>
						</div>
						<div className='md:col-span-5'>
							<label htmlFor='telegram'>Телеграмм</label>
							<Field
								name='telegram'
								type='text'
								placeholder='https://t.me/'
								className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
							/>
						</div>
						<div className='md:col-span-5'>
							<label htmlFor='email'>Почта</label>
							<Field
								name='email'
								type='text'
								placeholder='antoniolksa@gmail.com'
								className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
							/>
						</div>
						<div className='md:col-span-5 text-right'>
							<div className='inline-flex items-end'>
								<button
									type='submit'
									className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
								>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { ContactForm }
