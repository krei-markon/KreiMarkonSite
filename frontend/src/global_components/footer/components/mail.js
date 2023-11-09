import { Field, Form, Formik } from 'formik'
import React from 'react'

const Mail = () => {
	return (
		<Formik
			initialValues={{
				email: '',
			}}
			onSubmit={async values => {
				await new Promise(r => setTimeout(r, 500))
				alert(JSON.stringify(values, null, 2))
			}}
		>
			<div className='flex flex-col justify-between'>
				<p className='max-w-md text-2xl font-bold text-center md:text-2xl md:text-left'>
					Подпишись на рассылку
				</p>
				<div>
					<hr className='w-80 h-1 my-6 float-left border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				</div>
				<Form>
					<div className='flex space-x-3'>
						<Field
							name='email'
							type='text'
							className='flex-1 px-4 rounded focus:outline-none'
							placeholder='Email'
						/>
						<button
							type='submit'
							className='px-6 py-2 text-white rounded bg-black hover:bg-gray-800 focus:outline-none'
						>
							Отправить
						</button>
					</div>
				</Form>
				<div className='hidden text-black md:block py-5'>
					Copyright &copy; 2023, All Rights Reserved
				</div>
			</div>
		</Formik>
	)
}

export default Mail
