import './calendar.css'
import { useState } from 'react'
// import BotaoAdicionar from '../BotaoAdicionar';
import ModalAgendamento from '../modais/ModalAgendamento';

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
    const [markedDays, setMarkedDays] = useState([]);



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

    function addMarkedDay(day) {
        setMarkedDays([...markedDays, day]);
        console.log(markedDays)
    }

    function click(event) {
        const day = event.target.textContent;
        const clickedDate = new Date(year, month, day);
        const dataFormatada = clickedDate.toLocaleDateString('pt-br')
        console.log(dataFormatada);
    }

    function calendarMode(event){
        const calendarMode = event.target.textContent;
        console.log(calendarMode)

    }


    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const daysInPrevMonth = new Date(year, month, 0).getDate();
    const lastDaysInPrevMonth = daysInPrevMonth - firstDayOfMonth + 1;
    // console.log(lastDaysInPrevMonth)
    // console.log(firstDayOfMonth)
    const days = [];
    let prevDays = [];
    // console.log(daysInPrevMonth)
    for (let i = lastDaysInPrevMonth; i <= daysInPrevMonth; i++) {
        prevDays.push(i)
    }

    prevDays = prevDays.reverse();

    for (let i = 0; i < prevDays.length; i++) {
        days.unshift(prevDays[i]);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }
    let diferenca = days.length - daysInMonth
    // console.log(days)
    console.log(diferenca)

    return (
        <div id="calendarPage">
            <ModalAgendamento marcador={addMarkedDay} />

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
                        <span onClick={calendarMode}>D</span>
                        <span onClick={calendarMode}>M</span>
                        <span onClick={calendarMode}>S</span>
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
                                {days.slice(i * 7, (i + 1) * 7).map((day, j) => {
                                    let date;

                                    diferenca > 0 ? date = new Date(year, month - 1, day) : date = new Date(year, month, day)                   
                                    const dataFormatada = date.toLocaleDateString('pt-br');
                                    diferenca--
                                    const isMarked = markedDays.filter(data => {
                                        return data === dataFormatada
                                    });
                                    
                                    return (
                                        <td onClick={click} key={j}>
                                            {day}
                                            <div className='marksDiv'>

                                                {isMarked.length <= 5 ? (

                                                    isMarked.map((day, index) => (
                                                        <div key={index}
                                                            className="marked-day"
                                                            style={{ top: `${(index + 1) * 0.5}em` }} />
                                                    ))
                                                ) : <span className='marcadoresPlus'>+5</span>

                                                }

                                            </div>
                                        </td>
                                    )
                                })}             
                            </tr>                    
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Calendar;