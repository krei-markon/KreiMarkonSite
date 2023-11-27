import { Field, Form, Formik } from 'formik'
import { RegQuery } from './service_query'

const RegForm = () => {
	return (
		<Formik
			initialValues={{
				username: '',
				password: '',
				first_name: '',
				last_name: '',
				tg: '',
				email: '',
			}}
			onSubmit={async values => {
				await RegQuery(values)
			}}
		>
			<Form className='space-y-4 md:space-y-6' action='#'>
				<div>
					<label
						htmlFor='username'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Ник
					</label>
					<Field
						type='text'
						name='username'
						id='username'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='antonio'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='password'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Пароль
					</label>
					<Field
						type='password'
						name='password'
						id='password'
						placeholder='••••••••'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='first_name'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Имя
					</label>
					<Field
						type='text'
						name='first_name'
						id='first_name'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Антонио'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='last_name'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Фамилия
					</label>
					<Field
						type='text'
						name='last_name'
						id='last_name'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='Родригес'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='tg'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Телеграм
					</label>
					<Field
						type='text'
						name='tg'
						id='tg'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='https://t.me/'
						required=''
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
					>
						Почта
					</label>
					<Field
						type='email'
						name='email'
						id='email'
						className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
						placeholder='name@gmail.com'
						required=''
					/>
				</div>
				<button
					type='submit'
					className='w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
				>
					Зарегистрироваться
				</button>
			</Form>
		</Formik>
	)
}

export { RegForm }
