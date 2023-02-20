import './calendar.css'
import { useState } from 'react'
// import BotaoAdicionar from '../BotaoAdicionar';
import ModalAdicionar from '../modais/ModalAdicionar';

const today = new Date();

let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
// const [selectedGroup, setSelectedGroup] = useState(null);
// const [selectedSubgroup, setSelectedSubgroup] = useState(null);
// onClick={() => setSelectedSubgroup(subgroup.id)}


const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];

function Calendar() {
    const [month, setMonth] = useState(currentMonth);
    const [year, setYear] = useState(currentYear);

    function previousMonth() {
        setMonth(month - 1)

        if (month === 0) {
            setMonth(11)
            setYear(year - 1)
        }

    }

    function nextMonth() {
        setMonth(month + 1)

        if (month === 11) {
            setMonth(0)
            setYear(year + 1)
        }

    }

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const days = [];
    let prevDays = [];
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const daysToAdd = firstDayOfMonth;

    for (let i = daysInPrevMonth - daysToAdd + 1; i <= daysInPrevMonth; i++) {
        prevDays.push(i)
    }

    prevDays = prevDays.reverse();

    for (let i = 0; i < prevDays.length; i++) {
        days.unshift(prevDays[i]);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }


    return (
        <div id="calendarPage">
            <ModalAdicionar/>

            <div id="calendar">
                <div id="header">
                    <div className='calendar_icons'>
                        <span className="left button" id="prev" onClick={previousMonth}>❮</span>
                        <span className="material-symbols-outlined">
                            today
                        </span>
                        <span className="right button" id="next" onClick={nextMonth}>❯</span>
                    </div>

                    <span className="month-year" id="label">{months[month] + " " + year}</span>

                    <div className='calendar_icons'>
                        <span>D</span>
                        <span>M</span>
                        <span>S</span>
                    </div>

                </div>
                <table id="days">
                    <thead className='tableHeader'>
                        <tr>
                            <th>Dom</th>
                            <th>Seg</th>
                            <th>Ter</th>
                            <th>Qua</th>
                            <th>Qui</th>
                            <th>Sex</th>
                            <th>Sab</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: Math.ceil(days.length / 7) }, (_, i) => (
                            <tr key={i}>
                                {days.slice(i * 7, (i + 1) * 7).map((day, j) => (
                                    <td key={j}>{day}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Calendar;