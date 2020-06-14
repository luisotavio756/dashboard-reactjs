import React, { useState, memo, useRef } from 'react';
import Modal from 'styled-react-modal';

import { Form } from '~/components/Form';
import Alert from '~/components/Alert';
import { FiCheckCircle, FiX } from 'react-icons/fi';


const StyledModal = Modal.styled`

    max-width: 600px;
    width: 98%;
    height: auto;

    background-color: white;
    position: fixed;
    top: 0;
    margin: 1.75rem auto;
    border-radius: .3rem;

    @keyframes modalFade {
        from {transform: translateY(-50%);opacity: 0;}
        to {transform: translateY(0);opacity: 1;}
    }

    & {
        animation-name: modalFade;
        animation-duration: .3s;
    }

    .modal-header {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: start;
        align-items: flex-start;
        -webkit-box-pack: justify;
        justify-content: space-between;
        padding: 1rem;
        border-bottom: 1px solid #dee2e6;
        border-top-left-radius: calc(.3rem - 1px);
        border-top-right-radius: calc(.3rem - 1px);
        color: #333;

        .modal-title {
            margin-bottom: 0;
            line-height: 1.6;
            font-size: 1.25rem;
            font-weight: normal;

        }

        button.close {
            padding: 0;
            background-color: transparent;
            border: 0;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            align-self: center;
            cursor: pointer;
            font-size: 22px;
        }
    }

    .modal-body {
        // position: relative;
        // flex: 1 1 auto;
        padding: 1rem 1rem;
        max-height: 430px;
        overflow-y: auto;
    }

    .modal-footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        padding: .75rem;
        border-top: 1px solid #dee2e6;
        border-bottom-right-radius: calc(.3rem - 1px);
        border-bottom-left-radius: calc(.3rem - 1px);

        .close, .submit {
            margin: 0 3px;
            padding: 7px 14px;
            border-radius: 50px;
            font-size: 12px;
            font-weight: 500 !important;
            transition: all 0.2s !important;
            line-height: 1.6;
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
                filter: brightness(90%)
            }
        }

        .close {
            border: 1px solid transparent;
            color: #333333c9;
            background: none;
        }

        .submit {
            background-color: #1bbc9b;
            border: 1px solid #1bbc9b;
            color: #fff !important;
        }
    }
`;

function ModalExperience({ isOpen, toggleModal, submit }) {
    const [ error, setError ] = useState(false);
    const reference = useRef(null);

    const [ data, setData ] = useState({
        office: '',
        org: '',
        location: '',
        description: '',
    });

    function handleInputChange(e) {
        const { value, name } = e.target;

        setData({
            ...data,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // alert(JSON.stringify(data))

        submit()
    }

    return (

        <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
        >
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal Form</h5>
                <button type="button" className="close" onClick={toggleModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <Form onSubmit={handleSubmit}>
                <div className="modal-body" ref={reference}>
                    {error === 1 && <Alert className="danger" text="Por favor, preencha todos os campos obrigatórios" />}
                    {error === 2 && <Alert className="danger" text="Por favor, preencha todos os campos obrigatórios" />}
                    {error === 3 && <Alert className="danger" text="Por favor, selecione uma data válida" />}
                    <div className="input-block">
                        <label className="required">Office <sup>*</sup></label>
                        <input
                            name="office"
                            type="text"
                            placeholder="Ex: Gerente de vendas..."
                            // value={}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-block">
                        <label className="required">Business <sup>*</sup></label>
                        <input
                            name="org"
                            type="text"
                            placeholder="Ex: Microsoft..."
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="input-block">
                        <label>Location</label>
                        <input
                            name="location"
                            type="text"
                            placeholder="Ex: Rio de Janeiro..."
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="input-block">
                        <label>Description</label>
                        <textarea
                            name="description"
                            rows="5"
                            onChange={handleInputChange}
                        ></textarea>
                    </div>


                </div>
                <div className="modal-footer">
                    <button type="button" className="close" onClick={toggleModal}>
                        <FiX /> Close
                    </button>
                    <button type="submit" className="submit">
                        <FiCheckCircle /> Submit
                    </button>
                </div>
            </Form>
        </StyledModal>
    );

}

export default memo(ModalExperience);
