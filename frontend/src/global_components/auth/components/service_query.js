import { ApiService } from '../../../services/api_service'

const AuthQuery = async values => {
	window.localStorage.removeItem('access')
	window.localStorage.removeItem('refresh')

	const { access, refresh } = await ApiService('token/', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})

	if (access !== undefined) {
		window.localStorage.setItem('access', access)
		window.localStorage.setItem('refresh', refresh)
		window.location.href = '/'
	}
}

const RegQuery = async values => {
	await ApiService('user/', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(values),
	})

	await AuthQuery({ username: values.username, password: values.password })
}

export { AuthQuery, RegQuery }
