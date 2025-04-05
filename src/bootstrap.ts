import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.withCredentials = true
axios.defaults.baseURL = 'http://api.tasktracker.com:8080/api/v1/'
