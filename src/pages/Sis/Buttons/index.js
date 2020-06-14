import React, { useEffect } from 'react';

// Icons
// import { FiCalendar, FiMessageCircle, FiLogOut, FiUsers } from 'react-icons/fi';

import { Card } from '~/components/Card';
import { Button } from '~/components/Button';

// This styled only show buttons in row format
import styled from 'styled-components';
import { FiX, FiInfo, FiAlertTriangle, FiCheckCircle, FiCoffee } from 'react-icons/fi';
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

export default function ButtonsPage() {
    useEffect(() => {
        document.title = 'Buttons'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Tables</h1>
            </div>
            <div className="col-6 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>State Buttons</h3>
                    </div>
                    <div className="card-body">
                        <Buttons className="wrap">
                            <Button className="danger">Danger</Button>
                            <Button className="warning">Warning</Button>
                            <Button className="info">Info</Button>
                            <Button className="success">Success</Button>
                            <Button className="primary">Primary</Button>
                            <Button className="light">Light</Button>
                            <Button className="dark">Dark</Button>
                        </Buttons>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Circle Buttons</h3>
                    </div>
                    <div className="card-body">
                        <Buttons className="wrap">
                            <Button className="danger btn-circle">Danger</Button>
                            <Button className="warning btn-circle">Warning</Button>
                            <Button className="info btn-circle">Info</Button>
                            <Button className="success btn-circle">Success</Button>
                            <Button className="primary btn-circle">Primary</Button>
                            <Button className="light btn-circle">Light</Button>
                            <Button className="dark btn-circle">Dark</Button>
                        </Buttons>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Shadow Buttons</h3>
                    </div>
                    <div className="card-body">
                        <Buttons className="wrap">
                            <Button className="danger btn-shadow">Danger</Button>
                            <Button className="warning btn-shadow">Warning</Button>
                            <Button className="info btn-shadow">Info</Button>
                            <Button className="success btn-shadow">Success</Button>
                            <Button className="primary btn-shadow">Primary</Button>
                            <Button className="light btn-shadow">Light</Button>
                            <Button className="dark btn-shadow">Dark</Button>
                        </Buttons>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Button with Icon</h3>
                    </div>
                    <div className="card-body">
                        <Buttons className="wrap">
                            <Button className="danger btn-shadow"><FiX /> Danger</Button>
                            <Button className="warning btn-shadow"><FiAlertTriangle /> Warning</Button>
                            <Button className="info btn-shadow"><FiInfo />Info</Button>
                            <Button className="success btn-shadow"><FiCheckCircle /> Success</Button>
                            <Button className="primary btn-shadow"><FiCoffee /> Primary</Button>
                        </Buttons>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Size Buttons</h3>
                    </div>
                    <div className="card-body">
                        <Buttons>
                            <Button className="danger btn-sm">Danger SM</Button>
                            <Button className="warning btn-sm">Warning SM</Button>
                            <Button className="success btn-sm">Success SM</Button>
                        </Buttons>
                        <Buttons>
                            <Button className="danger">Danger</Button>
                            <Button className="warning">Warning</Button>
                            <Button className="success">Success</Button>
                        </Buttons>
                        <Buttons>
                            <Button className="danger btn-lg">Danger LG</Button>
                            <Button className="warning btn-lg">Warning LG</Button>
                            <Button className="success btn-lg">Success LG</Button>
                        </Buttons>
                    </div>
                </Card>
            </div>
        </>
    );
}
