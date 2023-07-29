import React from 'react'
import { Helmet } from 'react-helmet-async'
import EventsCard from '../EventsCard/EventsCard'
import Banner from '../Banner/Banner'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SEU || Home</title>
      </Helmet>
      <Banner/>
      <EventsCard></EventsCard>
    </div>
  )
}

export default Home