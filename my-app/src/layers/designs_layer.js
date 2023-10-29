import React, { useEffect, useState } from 'react'
import { DesignItem } from '../global_components'

const DesignsLayer = () => {
	const [designs_list, setDesignsList] = useState([])

	useEffect(() => {
		;(async () => {
			const data = await fetch('http://localhost:3001/designs')
			const designs = await data.json()
			setDesignsList(designs)
		})()
	}, [])

	console.log(designs_list)

	return (
		<ul className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
			{designs_list.map(item => (
				<DesignItem key={item.id} url={item.imageUrl} />
			))}
		</ul>
	)
}

export { DesignsLayer }
