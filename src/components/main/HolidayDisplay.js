import React from 'react'
// import Home from './Home'
import { useParams } from 'react-router-dom'
import { getSingleCountry } from '../../lib/api'
import { useHistory } from 'react-router-dom'

function HolidayDisplay() {
  const { id, year } = useParams()
  const history = useHistory()
  console.log(id)
  console.log(year)
  const [singleCountry, setSingleCountry] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const response = await getSingleCountry(id, year)
      setSingleCountry(response.data)
      console.log(response)
    }
    getData()
  }, [id, year])

  function handleBack(){
    history.push('')
  }

  return (
    <>
      <button onClick={handleBack}>Back</button>
      <section className="HolidayCard">
        {singleCountry ? (
          singleCountry.response.holidays.map((holiday) => (
            <div className="holiday-view" key={holiday.name}>
              <h3>{holiday.name}</h3> 
              <h5>
                {holiday.date.datetime.day}/{holiday.date.datetime.month}/
                {holiday.date.datetime.year}
              </h5>
              <h4>{holiday.description}</h4>
            </div>
          ))
        ) : (
          <p>... Loading holidays </p>
        )}
      </section>
    </>
  )
}

export default HolidayDisplay
