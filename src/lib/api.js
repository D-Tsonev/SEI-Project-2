import axios from 'axios'


//* Token to access API
const dimiToken = 'a2e54ca29fc0cdebd9174c197aad413cf21d6833'

//* Base URL
const holidayUrl = `https://calendarific.com/api/v2/holidays?api_key=${dimiToken}`


//* Requests
export function getSingleCountry(id, year) {
  return axios.get(`${holidayUrl}&country=${id}&year=${year}`)
}

export function getAllCountries(){
  return axios.get('https://calendarific.com/api/v2/countries?api_key=aad5de35593f48602bc3a0b1908fe764e122af32')
}

