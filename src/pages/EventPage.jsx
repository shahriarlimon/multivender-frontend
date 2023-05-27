import React from 'react'
import Header from '../components/layout/Header'
import EventCard from '../components/Route/Events/EventCard'
import { useSelector } from 'react-redux';

const EventPage = () => {
    const { allEvents, isLoading } = useSelector((state) => state.events);
    console.log(allEvents)
    return (
        <div>
            <Header activeHeading={4} />
            <EventCard active={true} data={allEvents && allEvents[0]} />

        </div>
    )
}


export default EventPage
