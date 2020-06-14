import React, { useEffect, useState } from 'react';

// Icons
// import { FiCalendar, FiMessageCircle, FiLogOut, FiUsers } from 'react-icons/fi';

import { Card } from '~/components/Card';
import Alert from '~/components/Alert';

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

export default function AlertsPage() {
    const [ alrt, setAlert ] = useState(true);


    function toggleAlert(valueWhenToggle) {
        alert('This alert was closed')

        setAlert(valueWhenToggle)
    }

    useEffect(() => {
        document.title = 'Alerts'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Alerts</h1>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Simple Alerts</h3>
                    </div>
                    <div className="card-body">
                        <Alert className="danger" text="Danger Alert !" />
                        <Alert className="success" text="Success Alert !" />
                        <Alert className="warning" text="Warning Alert !" />
                        <Alert className="info" text="Info Alert !" />
                        <Alert className="light" text="Light Alert !" />
                        <Alert className="dark" text="Dark Alert !" />
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Pass Function Toggle and value when</h3>
                    </div>
                    <div className="card-body">
                        <Alert className="success" text="Success Alert !" toggle={toggleAlert} valueToggle={false}  />
                        <Alert className="warning" text="Warning Alert !" toggle={toggleAlert} valueToggle={false}  />
                        <Alert className="danger" text="Danger Alert !" toggle={toggleAlert} valueToggle={false}  />
                    </div>
                </Card>
            </div>
        </>
    );
}
