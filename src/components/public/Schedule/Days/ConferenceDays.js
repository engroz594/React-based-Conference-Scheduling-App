import React, {useState, useEffect} from 'react';
import {getTimeSlotsByDay} from "../../../../services/conferenceSchedule";

const ConferenceDays = ({sessions, setSessions}) => {
    const [days] = useState([
        {
            id: "1",
            title: "Monday"
        },
        {
            id: "2",
            title: "Tuesday"
        },
        {
            id: "3",
            title: "Wednesday"
        },
        {
            id: "4",
            title: "Thursday"
        }
    ]);

    useEffect(() => {
        document.addEventListener("click", function (event) {
            if(event.target.classList.contains('accordion')){
                event.target.classList.toggle("active");
                let panel = event.target.nextElementSibling;
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                } else {
                    panel.style.maxHeight = panel.scrollHeight + "px";
                }
            }
        });
    }, []);

    // const initEventOnTimeSlots = () => {
    //     var accordions = document.getElementsByClassName("accordion");
    //     for (let i = 0; i < accordions.length; i++) {
    //         accordions[i].addEventListener("click", function () {
    //             debugger
    //             this.classList.toggle("active");
    //             var panel = this.nextElementSibling;
    //             if (panel.style.maxHeight) {
    //                 panel.style.maxHeight = null;
    //             } else {
    //                 panel.style.maxHeight = panel.scrollHeight + "px";
    //             }
    //         });
    //     }
    // };

    const getTimeSlots = day => {
        getTimeSlotsByDay(day)
            .then(response => {
                if (response.status === 200 && response.data.count > 0) {
                    let records = response.data.data;
                    let timeSlots = records.map(session => ({
                        startTime: session.startHour + ":" + session.startMinute,
                        endTime: session.endHour + ":" + session.endMinute,
                        session_type: session.type
                    }));

                    let obj = {};

                    for (let i = 0, len = timeSlots.length; i < len; i++)
                        obj[timeSlots[i]['startTime']] = timeSlots[i];

                    timeSlots = [];
                    for (let key in obj)
                        timeSlots.push(obj[key]);

                    setSessions({
                        day,
                        time_slots: timeSlots,
                        all: records
                    })
                }
            })
            .catch(error => {
                console.log(error.toJSON())
            })
            .finally(() => {
                // initEventOnTimeSlots();
            })
    };

    return (
        <>
            <p>Select a day to get all sessions time slots.</p>
            {
                days.map(value => <div className='day-container' key={value.id}>
                    <div className={`day ${sessions.day === value.title ? "active" : ""}`}
                         onClick={() => getTimeSlots(value.title)}>{value.title}</div>
                </div>)
            }

        </>
    );
};

export default ConferenceDays;