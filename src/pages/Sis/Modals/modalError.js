import React, { useState, memo, useRef } from 'react';
import Modal from 'styled-react-modal';

import { Form } from '~/components/Form';
import { Link } from 'react-router-dom';
import { FiX, FiCheckCircle } from 'react-icons/fi';


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
        padding: 1rem;
        height: auto;
        overflow-y: auto;

        h1, p {
            text-align: center;
        }

        div.icon {
            text-align: center;
            color: #f64e60;
        }

        h1 {
            color: #777;
            margin-top: 5px
        }

        p {
            margin-top: 5px;
            color: #666;
            font-size: 14px;
            line-height: 22px;
        }

        div.link {
            margin: 15px auto;
            text-align: center;
        }

        a {
            padding: 9px 20px;
            background-color: #1bc5bd;
            text-align: center;
            color: #fff;
            font-weight: 500;
            border-radius: 10px;


        }
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

function ModalSuccess({ isOpen, toggleModal }) {


    return (

        <StyledModal
            isOpen={isOpen}
            onBackgroundClick={toggleModal}
            onEscapeKeydown={toggleModal}
        >
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Success</h5>
                <button type="button" className="close" onClick={toggleModal}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <div className="icon">
                    <FiX size="5em"/>
                </div>
                <h1>Error !</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eligendi numquam eveniet quidem nobis at quisquam blanditiis cum nihil nemo, alias assumenda soluta hic. Id mollitia error rem fugit dolor?</p>
            </div>
        </StyledModal>
    );

}

export default memo(ModalSuccess);
