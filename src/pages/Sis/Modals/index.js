import React, { useEffect, useState, Suspense, lazy } from 'react';
import { ModalProvider } from 'styled-react-modal';
// Icons
// import { FiCalendar, FiMessageCircle, FiLogOut, FiUsers } from 'react-icons/fi';

import { Card } from '~/components/Card';
import { Button } from '~/components/Button';

// This styled only show buttons in row format
import styled from 'styled-components';
const Buttons = styled.div`
    display: flex;

    &.wrap {
        flex-wrap: wrap;
    }
    /* justify-content: space-around; */

    button {
        margin: 5px;
    }

`;

let ModalForm = () => <></>;
let ModalSuccess = () => <></>;
let ModalError = () => <></>;

export default function ButtonsPage() {
    const [ OpenForm, setOpenForm ] = useState(false);
    const [ openSuccess, setSuccess ] = useState(false);
    const [ openError, setError ] = useState(false);

    useEffect(() => {
        document.title = 'Modals'
    }, []);

    async function toggleModalForm(e) {
        ModalForm = await lazy(() => import("./modalForm"));

        setOpenForm(!OpenForm);
    }

    async function toggleModalSuccess(e) {
        ModalSuccess = await lazy(() => import("./modalSuccess"));

        setSuccess(!openSuccess);
    }

    async function toggleModalError(e) {
        ModalError = await lazy(() => import("./modalError"));

        setError(!openError);
    }

    function submitModalForm() {
        alert('this form was submited');

        setOpenForm(!OpenForm);
    }

    return (
        <>
            <div className="col-12 title">
                <h1>Modals</h1>
            </div>
            <div className="col-6 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Examples</h3>
                    </div>
                    <div className="card-body">
                        <Buttons>
                            <Button className="info" onClick={toggleModalForm}>Modal Form</Button>
                            <Button className="success" onClick={toggleModalSuccess}>Modal Success</Button>
                            <Button className="danger" onClick={toggleModalError}>Modal Error</Button>
                        </Buttons>
                    </div>
                </Card>
            </div>
            <Suspense fallback={null}>
                <ModalProvider>
                    <ModalForm isOpen={OpenForm} toggleModal={toggleModalForm} submit={submitModalForm} />
                    <ModalSuccess isOpen={openSuccess} toggleModal={toggleModalSuccess} />
                    <ModalError isOpen={openError} toggleModal={toggleModalError} />
                </ModalProvider>
            </Suspense>
        </>
    );
}
