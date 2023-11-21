import React, { useEffect, useState } from 'react'
import { DesignItem } from '../global_components'
import { ApiService } from '../services/api_service'

const DesignsLayer = () => {
	const [designs_list, setDesignsList] = useState([])

	useEffect(() => {
		;(async () => {
			const designs = await ApiService('designs')
			setDesignsList(designs)
		})()
	}, [])

	console.log(designs_list)

	return (
		<ul className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
			{designs_list.map(item => (
				<DesignItem key={item.id} url={item.design} />
			))}
		</ul>
	)
}

export { DesignsLayer }
