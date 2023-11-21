import React from 'react'
import { useSelector } from 'react-redux'

const OrderItem = ({ id }) => {
	const { type, task, deadlines, cnt, user } = useSelector(
		state => state.orders.orders[id]
	)

	const { first_name, email, tg } = useSelector(
		state => state.orders.users[user]
	)

	return (
		<li className='pb-4'>
			<p className='text-2xl max-w-md font-bold  md:text-left'>Заказ {id}</p>
			<div>
				<hr className='w-48 h-1 my-6 float-left border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
			</div>

			<ol className='pt-20 space-y-4  list-disc list-inside'>
				<li>
					<b>Тип</b> &mdash; {type}
				</li>
				<li>
					<b>Задача</b> &mdash; {task}
				</li>
				<li>
					<b>Сроки</b> &mdash; {deadlines}
				</li>
				<li>
					<b>Количество отработок</b> &mdash; {cnt}
				</li>
				<li>
					<b>Имя заказчика</b> &mdash; {first_name}
				</li>
				<li>
					<b>Telegram</b> &mdash; {tg}
				</li>
				<li>
					<b>Email</b> &mdash; {email}
				</li>
				{/* <li>
					<b>Статус</b> &mdash; {status === 'P' ? 'Обрабатывается' : 'Далее'}
				</li> */}
			</ol>
		</li>
	)
}

export { OrderItem }
