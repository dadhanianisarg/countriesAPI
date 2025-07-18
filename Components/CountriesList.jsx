  import React, { useEffect, useState } from 'react'
  // import countriesData from '../countriesData'
  import CountryCard from './CountryCard'
  import CountriesListShimmer from './CountriesListShimmer'
  import data from '../countriesData'
  export default function CountriesList({ query }) {
    const [countriesData, setCountriesData] = useState([])

    // const [filteredData, setQuery] = useFilter(data, () => '')

    // useEffect(() => {
    //   fetch('https://restcountries.com/v3.1/all')
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setCountriesData(data)
    //     })
    // }, [])

     useEffect(() => {
    // Simulating async data fetch with a timeout
    setTimeout(() => {
      setCountriesData(data)
    }, 100) // Optional delay to simulate API latency
  }, [])

    if (!countriesData.length) {
      return <CountriesListShimmer />
    }

    return (
      <>
        <div className="countries-container">
          {countriesData
            .filter((country) =>
              country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
            )
            .map((country) => {
              return (
                <CountryCard
                  key={country.name.common}
                  name={country.name.common}
                  flag={country.flags.svg}
                  population={country.population}
                  region={country.region}
                  capital={country.capital?.[0]}
                  data={country}
                />
              )
            })}
        </div>
      </>
    )
  }