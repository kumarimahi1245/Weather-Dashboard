import React, { useState } from 'react';
import './Weather.css';
import { IoSearch } from "react-icons/io5";

import Card from './Card';

const Weather = () => {
    const [name, setName] = useState('');
    const [area,setArea]=useState('');

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setArea(name.trim());
        setName("");
  
    };

    return (
        <div className='weather'>
           <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='Search city...'
                        value={name}
                        onChange={handleChange}
                    />
                    <button type="submit" id='btn'>
                        <IoSearch className='search-icon' />
                    </button>
                </form>
            </div>

            {
                area?<Card area={area}/>:""
            }
        </div>
    );
};

export default Weather;