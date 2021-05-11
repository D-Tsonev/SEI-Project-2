import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [countries, setCountries] = React.useState(null)

  const [setIsError] = React.useState(false)
  // const isLoading = !countries && !isError

  const [selectedCountry, setSelecteCountry] = React.useState('')
  const [selectedYear, setSelectedYear] = React.useState('')

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'https://calendarific.com/api/v2/countries?api_key=693d3ccc7451ce37aad5fb8f2e88fe7355c16bcd'
        )
        setCountries(response.data)
      } catch (error) {
        setIsError(true)
      }
    }
    getData()
  }, [])

  const handleSelect = (e) => {
    setSelecteCountry(e.target.value)
  }

  const handleSelectedYear = (e) => {
    setSelectedYear(e.target.value)
  }
  // console.log(selectedCountry)
  // console.log(selectedYear)

  return (
    <main>
      <div>
        <section>
          <h1>Everyday Holiday</h1>
          <p>
              Welcome to "Everyday Holiday"! Your friendly neighbourhood API
              that displays all holidays for any country all the way up to 2048!
              Just select your country and year and click "GO!" to view all
              holidays for the country of your choice!
          </p>
          <select onChange={handleSelect} value={selectedCountry}>
            <option value="" disabled selected>
                Select Country
            </option>
            {countries
              ? countries.response.countries.map((country) => (
                <option
                  key={country.country_name}
                  value={country['iso-3166']}
                >
                  {country.country_name}
                </option>
              ))
              : console.error('No countries!')}
          </select>
          
        </section>
        <section className="choices">
          <select onChange={handleSelectedYear} value={selectedYear}>
            <option value="" disabled selected>
                Select Year
            </option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
            <option>2026</option>
            <option>2027</option>
            <option>2028</option>
            <option>2029</option>
            <option>2030</option>
            <option>2031</option>
            <option>2032</option>
            <option>2033</option>
            <option>2034</option>
            <option>2035</option>
            <option>2036</option>
            <option>2037</option>
            <option>2038</option>
            <option>2039</option>
            <option>2040</option>
            <option>2041</option>
            <option>2042</option>
            <option>2043</option>
            <option>2044</option>
            <option>2045</option>
            <option>2046</option>
            <option>2047</option>
            <option>2048</option>
          </select>
          <Link to={`/holidays/${selectedCountry}/${selectedYear}`}>
            <button>GO!</button>
          </Link>
        </section>
      </div>
    </main>
  )
}

export default Home