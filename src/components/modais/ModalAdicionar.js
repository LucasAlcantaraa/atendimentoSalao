import React, { useState } from 'react'
import './modalAdicionar.css'

const btStyle = {
    padding: "8px",
    borderRadius: "8px",
    border: "none",
    boxShadow: "0px 0px 1px 1px #bfbfbf"
}

function ModalAdicionar(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button style={btStyle} onClick={toggleModal}>Agendar Atendimento</button>
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={toggleModal}>
                                &times;
                            </span>

                        </div>
                        <div className="modal-body">
                            <div>
                                <label>Texto 1</label>
                                <input />
                            </div>
                            <div>
                                <label>Texto 2</label>
                                <input />
                            </div>
                            <div>
                                <label>Texto 3</label>
                                <input />
                            </div>
                            <div>
                                <label>Texto 4</label>
                                <input />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button>aplicar</button>
                        </div>

                    </div>
                </div>
            )}
        </>
    )

}

export default ModalAdicionar;