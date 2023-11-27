import { Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Sections, TaskForm, isAuth } from '../global_components'
import { ApiService } from '../services/api_service'

const OrderQuery = async values => {
	await ApiService('orders/', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})
}

const OrderLayer = () => {
	const [user, setUser] = useState(null)
	const sections = [
		{ id: '1', name: 'Техническое задание', code: TaskForm },
		// { id: '2', name: 'Контактные данные', code: ContactForm },
	]

	useEffect(() => {
		;(async () => {
			if (isAuth) {
				const user = await ApiService('user/current')
				setUser(user.username)
			}
		})()
	}, [])

	// console.log(Object.fromEntries(
	// 	sections.map(item => [item.id, item.name])
	// ))

	return (
		<div className='container w-full flex flex-wrap mx-auto px-2 pt-8 lg:pt-16 mb-10'>
			<div className='w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal'>
				<div
					className='w-full sticky inset-0 hidden max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 border border-gray-400 lg:border-transparent bg-white shadow lg:shadow-none lg:bg-transparent z-20'
					style={{ top: '6em' }}
					id='menu-content'
				>
					<h1 className='text-base font-bold py-2 lg:pb-6 '>Заказать Дизайн</h1>
					<Sections key='sections' sections={sections} />
				</div>
			</div>
			<section className='w-full lg:w-4/5'>
				<Formik
					initialValues={{
						type: 'Мерч',
						task: '',
						deadlines: '',
						cnt: 0,
					}}
					onSubmit={async values => {
						values.user = user
						await OrderQuery(values)
					}}
				>
					<Form>
						{sections.map((item, index) => {
							return <item.code key={index} name={item.id} />
						})}
					</Form>
				</Formik>
			</section>
		</div>
	)
}

export { OrderLayer }
