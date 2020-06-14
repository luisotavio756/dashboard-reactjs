import React, { useEffect, useState } from 'react';

// Icons
import { FiFile } from 'react-icons/fi';

import { Card } from '~/components/Card';
import { Button } from '~/components/Button';
import { Form } from '~/components/Form';

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

export default function FormsPage() {
    const [ selectedCV, setSelectedCV ] = useState();

    useEffect(() => {
        document.title = 'Forms'
    }, []);

    return (
        <>
            <div className="col-12 title">
                <h1>Forms</h1>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Simple Form</h3>
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="input-block">
                                <label>Name</label>
                                <input type="text" placeholder="Ex: Luis Otávio"/>
                            </div>
                            <div className="input-block">
                                <label>E-mail</label>
                                <input type="email" placeholder="Ex: luisotavio@gmail.com"/>
                            </div>
                            <div className="input-block">
                                <label>Password</label>
                                <input type="password" placeholder="********"/>
                            </div>
                        </Form>
                    </div>
                    <div className="card-actions flex-end">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>Form Inline</h3>
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="input-row">
                                <div className="col-8">
                                    <div className="input-block">
                                        <label>Name</label>
                                        <input type="text" placeholder="Ex: Luis Otávio"/>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="input-block">
                                        <label>Age</label>
                                        <input type="number" min="0" placeholder="Ex: 19"/>
                                    </div>
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="col-6">
                                    <div className="input-block">
                                        <label>E-mail</label>
                                        <input type="email" placeholder="Ex: luisotavio@gmail.com"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="input-block">
                                        <label>Password</label>
                                        <input type="password" placeholder="********"/>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                    <div className="card-actions flex-end">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>All components Form</h3>
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="input-block">
                                <label>Name</label>
                                <input type="text" placeholder="Ex: Luis Otávio"/>
                            </div>
                            <div className="input-block">
                                <label>E-mail</label>
                                <input type="email" placeholder="Ex: luisotavio@gmail.com"/>
                            </div>
                            <div className="input-block">
                                <label>Select you Genre</label>
                                <select>
                                    <option selected disabled>Select on Option</option>
                                    <option value="">Male</option>
                                    <option value="">Female</option>
                                    <option value="">Other</option>
                                    <option value="">I prefer not say</option>
                                </select>
                            </div>
                            <div className="input-block">
                                <label>Your Description</label>
                                <textarea cols="30" rows="6" placeholder="I am a young and bad boy in search of the best tecnologies"></textarea>
                            </div>
                            <div className="input-block">
                                <div className="checkbox">
                                    <input
                                        type="checkbox"
                                        // onChange={() => { setIsHere(!isHere) }}
                                    />
                                    <span>I not working</span>
                                </div>
                            </div>
                            <div className="input-block">
                                <label>Password</label>
                                <input type="password" placeholder="********"/>
                            </div>
                        </Form>
                    </div>
                    <div className="card-actions flex-end">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
            <div className="col-6 px-0">
                <Card>
                    <div className="card-title">
                        <h3>File Input</h3>
                    </div>
                    <div className="card-body">
                        <Form>
                            <div className="input-block">
                                <label htmlFor="email">Curriculum</label>
                                <label className="file-input">
                                    <input
                                        type="file"
                                        placeholder="Upload Curriculum"
                                        accept=".pdf, .doc, .docx"
                                        onChange={(e) => setSelectedCV(e.target.files[0])}
                                    />
                                    <div className="text">
                                        { selectedCV ? selectedCV.name : 'Select a file' }
                                    </div>
                                    <div className="icon">
                                        <FiFile />
                                    </div>
                                </label>
                            </div>
                        </Form>
                    </div>
                    <div className="card-actions flex-end">
                        <Button className="success btn-circle">Submit</Button>
                    </div>
                </Card>
            </div>
        </>
    );
}
