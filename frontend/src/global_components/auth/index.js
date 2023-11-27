import React, { useState } from 'react'
import { AuthForm } from './components/auth_from'
import { RegForm } from './components/reg_form'

const AuthItem = () => {
	const [form, setForm] = useState('auth')

	const forms = {
		auth: {
			code: AuthForm,
			name: 'Авторизация',
			question: 'Нет аккаунта?',
			button: 'Зарегистрируйся',
		},
		reg: {
			code: RegForm,
			name: 'Регистрация',
			question: 'Есть аккаунт?',
			button: 'Авторизуйся',
		},
	}

	return (
		<section className='bg-gray-50 dark:bg-gray-900'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
				<p
					// href='#'
					className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'
				>
					{/* <img
						className='w-8 h-8 mr-2'
						src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg'
						alt='logo'
					/> */}
					{forms[form].name}
				</p>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Зайди в свой аккаунт
						</h1>
						{form === 'auth' ? <AuthForm /> : <RegForm />}

						<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
							{forms[form].question}{' '}
							<button
								onClick={() => setForm(form === 'auth' ? 'reg' : 'auth')}
								className='font-medium text-primary-600 hover:underline dark:text-primary-500'
							>
								{forms[form].button}
							</button>
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export { AuthItem }
