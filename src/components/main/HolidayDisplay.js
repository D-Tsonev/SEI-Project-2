import React from 'react'
// import Home from './Home'
import { useParams } from 'react-router-dom'
import { getSingleCountry } from '../../lib/api'


function HolidayDisplay() {
  const { id, year } = useParams()
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




  return (
    <>
      <section className="HolidayCard"> 
        {singleCountry ?
          singleCountry.response.holidays.map((holiday) => (
            <>
              <h5>{holiday.date.datetime.day}/       
                {holiday.date.datetime.month}/ 
                {holiday.date.datetime.year}
              </h5>
              <h3 key={holiday.name}>{holiday.name}</h3>
              <h4>{holiday.description}</h4>
          
            </>
          ))
          : 
          <p>... Loading holidays </p>
        }
      </section>
    </>
  )
}

export default HolidayDisplay
