import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faPaperPlane, faInbox, faUsers } from '@fortawesome/free-solid-svg-icons';

import { CardDashboard, Card } from '~/components/Card';
import { Table } from '~/components/Table';

import api from '~/services/api';
import { getToken } from '~/services/auth';

const config = {
    headers: {
        'Authorization': `Bearer ${getToken}`
    }
};

let array = [
    {
        id: 1,
        name: 'Luis Otávio',
    },
    {
        id: 2,
        name: 'Fernando Moreira',
    },
    {
        id: 3,
        name: 'José Augusto',
    },
    {
        id: 2,
        name: 'Jonathan Moreira',
    },
]

export default function Dashboard() {
    return (
        <>
            <div className="col-12 title">
                <h1>Olá, Bem vindo à Dashboard</h1>
            </div>
            <div className="col-3 px-0">
                <CardDashboard className="red">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Card One</div>
                                <div className="number pulsate">34</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faCalendar} size="3x" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-3 px-0">
                <CardDashboard className="blue">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Card Two</div>
                                <div className="number pulsate">0</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faPaperPlane} size="3x" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-3 px-0">
                <CardDashboard className="green">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Mensagens</div>
                                <div className="number pulsate">0</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faInbox} size="3x" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-3 px-0">
                <CardDashboard className="orange">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="title">Usuários</div>
                                <div className="number pulsate">0</div>
                            </div>
                            <div className="col-auto">
                                <FontAwesomeIcon icon={faUsers} size="3x" />
                            </div>
                        </div>
                    </div>
                </CardDashboard>
            </div>
            <div className="col-12 px-0">
                <Card className="red">
                    <div className="card-title">
                        <h3>Tables</h3>
                    </div>
                    <div className="card-body">
                        <Table>
                            <thead>
                                <tr>
                                    <th className="col-1">#</th>
                                    <th className="col-8">Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {array.map(item => (
                                    <tr>
                                        <td style={{ textAlign: 'center' }}>{ item.id }</td>
                                        <td style={{ textAlign: 'center' }}>{ item.name }</td>
                                        <td style={{ textAlign: 'center' }}>
                                            <button className="edit">
                                                Edit
                                            </button>
                                            <button className="info">
                                                Info
                                            </button>
                                            <button className="eraser">
                                                Trash
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </Card>
            </div>
        </>
    );
}
