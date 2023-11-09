import classNames from 'classnames'
import React, { useState } from 'react'
export { ContactForm } from './components/contact_form'
export { TaskForm } from './components/task_form'

const Sections = props => {
	const [section, setSection] = useState(props.sections[0].id)

	return (
		<ul className='list-reset py-2 md:py-0'>
			{props.sections.map((item, index) => (
				<li
					key={index}
					className={classNames(
						'py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent border-l-4 border-transparent',
						section === item.id && 'font-bold border-black'
					)}
				>
					<a
						href={'#' + item.id}
						className='block pl-4 align-middle  no-underline  hover:text-darkGrayishBlue'
						onClick={() => setSection(item.id)}
					>
						<span className='pb-1 md:pb-0 text-sm'>{item.name}</span>
					</a>
				</li>
			))}
		</ul>
	)
}

export { Sections }
