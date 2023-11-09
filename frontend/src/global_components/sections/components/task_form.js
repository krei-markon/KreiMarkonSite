import { Field, useField, useFormikContext } from 'formik'
import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const MyDatePicker = ({ name = '', className }) => {
	const [field, meta, helpers] = useField(name)

	const { value } = meta
	const { setValue } = helpers

	return (
		<DatePicker
			{...field}
			selected={value}
			onChange={date => setValue(date)}
			className={className}
		/>
	)
}

const TaskForm = props => {
	let formikProps = useFormikContext()

	const cntReducer = (increment = true) => {
		let cnt = formikProps.values.cnt
		if (increment) {
			formikProps.setFieldValue('cnt', cnt + 1)
		} else {
			if (cnt > 0) formikProps.setFieldValue('cnt', cnt - 1)
		}
	}

	return (
		<div
			id={props.name}
			className='bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6'
		>
			<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3'>
				<div className='lg:col-span-5'>
					<div className='grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5'>
						<div className='md:col-span-2'>
							<label htmlFor='country'>Выберите тип дизайна</label>
							<div className='h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
								<Field
									as='select'
									name='type'
									className='px-4 appearance-none outline-none text-gray-800 w-full bg-transparent'
									id='my-select'
								>
									<option value='Default'>Мерч</option>
									<option value='визитка'>Визитка</option>
									<option value='брендбук'>Брендбук</option>
									<option value='сайт'>Сайт</option>
								</Field>
							</div>
						</div>
						<div className='md:col-span-5'>
							<label htmlFor='full_name'>Опишите техническое задание</label>
							<Field
								as='textarea'
								name='task'
								className=' flex-1 border mt-1 rounded px-4 pt-4 w-full bg-gray-50'
								rows='4'
							/>
						</div>
						<div className='md:col-span-2'>
							<label htmlFor='address'>Сроки</label>
							<div></div>
							<MyDatePicker
								name='deadlines'
								className='h-10 border mt-1 rounded px-4 w-full bg-gray-50'
							/>
						</div>

						<div className='md:col-span-2'>
							<label htmlFor='soda'>Количество переработок</label>
							<div className='h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1'>
								<button
									type='button'
									onClick={() => cntReducer(false)}
									htmlFor='show_more'
									className='cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-4 w-4 mx-2'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
								<Field
									name='cnt'
									type='text'
									placeholder='0'
									className='px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent'
									value={formikProps.values.cnt}
								/>
								<button
									type='button'
									onClick={() => cntReducer()}
									htmlFor='show_more'
									className='cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-4 w-4 mx-2 fill-current'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path
											fillRule='evenodd'
											d='M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z'
											clipRule='evenodd'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { TaskForm }
