import React, { useState } from 'react'
import './modal.css'

const btStyle = {
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    boxShadow: "0px 0px 1px 1px #bfbfbf"
}

function ModalAgendamento(props) {
    const [isOpen, setIsOpen] = useState(false);

    const [newDate, setNewDate] =  useState("");


    function handleDate(event){
        const date =  event.target.value
        setNewDate(date)
        console.log(date)
    }

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    function sendDate(){
        const dataCorte = newDate.split("-");
        const dataFormatada = `${dataCorte[2]}/${dataCorte[1]}/${dataCorte[0]}`;
        props.marcador(dataFormatada)
    }

    return (
        <>
            <button style={btStyle} onClick={toggleModal}>Agendar Atendimento</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Agendar Atendimento</h3>
                            <span className="close" onClick={toggleModal}>
                                &times;
                            </span>
                        </div>
                        <div className="modal-body">
                            <div>
                                <span className="material-symbols-outlined">
                                    person
                                </span>
                                <input placeholder="cliente"/>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    calendar_today
                                </span>
                                <input onChange={handleDate} type="date"  placeholder="data" value={newDate}/>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    group
                                </span>
                                <input type="text"  placeholder="Profissional"/>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    list_alt
                                </span>
                                <input type="text"  placeholder="Serviço"/>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    schedule
                                </span>
                                <div className='horarioDiv'>
                                <input type="text"  placeholder="Horário"/>
                                <input type="text"  placeholder="Duração"/>
                                </div>                    
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    money_off
                                </span>
                                <input type="text"  placeholder="Preço"/>
                            </div>
                            <div>
                                <span className="material-symbols-outlined">
                                    label
                                </span>
                                <input type="text"  placeholder="Observação"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button onClick={sendDate}>aplicar</button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )

}

export default ModalAgendamento;