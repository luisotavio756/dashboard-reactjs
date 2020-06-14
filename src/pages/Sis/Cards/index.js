import React, { useEffect } from 'react';

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

export default function CardsPage() {
    useEffect(() => {
        document.title = 'Cards'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Cards</h1>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Card Title</h3>
                    </div>
                    <div className="card-body light-text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ab voluptatibus impedit saepe, error soluta quia. Incidunt natus voluptas magnam dolore amet quod accusamus perspiciatis, illum omnis, dignissimos porro recusandae.</p>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Card With Action</h3>
                    </div>
                    <div className="card-body light-text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ab voluptatibus impedit saepe, error soluta quia. Incidunt natus voluptas magnam dolore amet quod accusamus perspiciatis, illum omnis, dignissimos porro recusandae.</p>
                    </div>
                    <div className="card-actions flex-end">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Card With Action Center</h3>
                    </div>
                    <div className="card-body light-text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ab voluptatibus impedit saepe, error soluta quia. Incidunt natus voluptas magnam dolore amet quod accusamus perspiciatis, illum omnis, dignissimos porro recusandae.</p>
                    </div>
                    <div className="card-actions center">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Card With Action Start</h3>
                    </div>
                    <div className="card-body light-text">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam ab voluptatibus impedit saepe, error soluta quia. Incidunt natus voluptas magnam dolore amet quod accusamus perspiciatis, illum omnis, dignissimos porro recusandae.</p>
                    </div>
                    <div className="card-actions flex-start">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
        </>
    );
}
