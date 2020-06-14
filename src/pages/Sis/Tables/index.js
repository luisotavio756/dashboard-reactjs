import React, { useEffect } from 'react';

// Icons
// import { FiCalendar, FiMessageCircle, FiLogOut, FiUsers } from 'react-icons/fi';

import { CardDashboard, Card } from '~/components/Card';
import { Table } from '~/components/Table';

import { getToken } from '~/services/auth';
import { FiEdit, FiInfo, FiTrash } from 'react-icons/fi';

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

export default function TablesPage() {

    useEffect(() => {
        document.title = 'Tables'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Tables</h1>
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
                                                <FiEdit />
                                            </button>
                                            <button className="info">
                                                <FiInfo />
                                            </button>
                                            <button className="eraser">
                                                <FiTrash />
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
