import React, {useState} from 'react';
import {getSessionContent} from "../../../../services/conferenceSchedule";
import Presentations from "../Presentations/Presentations";

const SessionsTimeSlots = ({sessions}) => {
    const [presentations, setPresentations] = useState({
        count: 0,
        session: {},
        data: []
    });

    const getSessionDetails = session => {
        // Get the modal
        var modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        var span = document.getElementsByClassName("close")[0];

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };

        getSessionContent(session)
            .then(response => {
                if (response.status === 200 && response.data.count > 0) {
                   setPresentations({
                       count: response.data.count,
                       data: response.data.data,
                       session
                   })
                }
            })
            .catch(error => {
                console.log(error.toJSON())
            })
            .finally(() => {
                modal.style.display = "block";
            })
    };

    return (
        <>
            <Presentations presentations={presentations}/>
            {
                sessions.time_slots.length > 0 &&
                <>
                    <h3>Session Time Slots for {sessions.day}</h3>
                    {
                        sessions.time_slots.map((slot, key) => (
                            <>
                                <button
                                    className="accordion">{`${slot.startTime} - ${slot.endTime} (${slot.session_type})`}</button>
                                <div className="panel" key={key}>
                                    <table border="1">
                                        <thead>
                                        <tr>
                                            <th>Session</th>
                                            <th>Room</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            sessions.all.map(value => {
                                                return (value.startHour + ":" + value.startMinute === slot.startTime &&
                                                    value.endHour + ":" + value.endMinute === slot.endTime) ?
                                                    <tr id={value.sessionId}>
                                                        <td className='session_name'
                                                            onClick={() => getSessionDetails(value)}>{value.session_name}</td>
                                                        <td>{value.room_type}</td>
                                                    </tr> : null
                                            })
                                        }
                                        </tbody>
                                    </table>
                                </div>
                            </>
                        ))
                    }
                </>
            }
        </>
    );
};

export default SessionsTimeSlots;