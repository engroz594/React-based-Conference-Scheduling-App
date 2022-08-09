import React, {useState} from 'react';
import './Schedule.css';

import ConferenceDays from "./Days/ConferenceDays";
import SessionsTimeSlots from "./TimeSlots/SessionsTimeSlots";

const Schedule = () => {
    const [sessions, setSessions] = useState({
        day: "",
        time_slots: [],
        all: []
    });

    return (
        <div className='schedule-page'>
            <h1>Conference Schedule</h1>
            <hr/>
            <div className='container'>
                <ConferenceDays sessions={sessions} setSessions={setSessions}/>
                <SessionsTimeSlots sessions={sessions}/>
            </div>
        </div>
    );
};

export default Schedule;