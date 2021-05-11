import axios from 'axios'

const dimiToken = '693d3ccc7451ce37aad5fb8f2e88fe7355c16bcd'


const holidayUrl = `https://calendarific.com/api/v2/holidays?api_key=${dimiToken}`



export function getSingleCountry(id, year) {
  return axios.get(`${holidayUrl}&country=${id}&year=${year}`)
}

