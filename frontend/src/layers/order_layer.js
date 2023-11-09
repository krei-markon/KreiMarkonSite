import { Form, Formik } from 'formik'
import React from 'react'
import { ContactForm, Sections, TaskForm } from '../global_components'

const OrderLayer = () => {
	const sections = [
		{ id: '1', name: 'Техническое задание', code: TaskForm },
		{ id: '2', name: 'Контактные данные', code: ContactForm },
	]

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
						full_name: '',
						telegram: '',
						email: '',
					}}
					onSubmit={async values => {
						await new Promise(r => setTimeout(r, 500))
						alert(JSON.stringify(values, null, 2))
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
