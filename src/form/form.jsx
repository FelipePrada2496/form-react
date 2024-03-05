import React, { useState } from 'react';
import './forms.css';
import Title from '../title/title';
import Input from '../input/input';
import Select from '../select/select';
import Description from '../txtarea/txt-area';
import Checkbox from '../checkbox/checkbox';
import Button from '../button/button';

const Formulario = () => {
    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState(1);
    const [description, setDescription] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [submittedTickets, setSubmittedTickets] = useState([]);

    const handleTitleChange = (value) => {
        setTitle(value);
    };

    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    const handleDescriptionChange = (value) => {
        setDescription(value);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            title,
            priority,
            description,
            isChecked
        };

        try {
            const response = await fetch('http://localhost:3000/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed ');
            }

            const newTicket = await response.json();
            setSubmittedTickets([...submittedTickets, newTicket]);
            console.log('Formulario enviado con éxito:', newTicket);
        } catch (error) {
            console.error('Error al enviar formulario:', error.message);
        }
    };

    const handleDelete = (index) => {
        const updatedTickets = submittedTickets.filter((ticket, i) => i !== index);
        setSubmittedTickets(updatedTickets);
    };

    return (
        <div>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <Title />
                    <Input onChange={handleTitleChange} />
                    <Select onChange={handlePriorityChange} />
                    <Description onChange={handleDescriptionChange} />
                    <Checkbox onChange={handleCheckboxChange} />
                    <Button />
                </form>
            </div>
            {submittedTickets.map((submittedTicket, index) => (
                <div className='container-response' key={index}>
                    <h2 className='response-title'>Current Tickets</h2>
                    <div className='response'>
                        <h3 className='response-h3'>{submittedTicket.title}</h3>
                        <p className='response-p'>{submittedTicket.description}</p>
                        <div className='button-container'>
                            <button className='response-button'>{submittedTicket.priority}</button>
                            <button className='response-button-first'>{submittedTicket.isChecked ? '✅' : '❌'}</button>
                            <button className='button-delete' onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Formulario;
