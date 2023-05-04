import axios from '../api/Axios'

export const adminSignup = (signupData) => axios.post('/signup',signupData)

export const adminLogin = (loginData) => axios.post('/login',loginData)

export const addClient = (clientData) => axios.post('/add-client',clientData)

export const addShopper = (shopperData) => axios.post('/add-shopper',shopperData)

export const viewClient = () => axios.get('/view-client')

export const viewShopper = () => axios.get('/view-shopper')