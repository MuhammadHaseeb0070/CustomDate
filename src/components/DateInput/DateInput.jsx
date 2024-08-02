import React, { useState, useEffect } from 'react';
import './date.css';
import { BsCalendarDateFill } from "react-icons/bs";

function DateInput({format}) {
    const [date, setDate] = useState('');
    const [DateFormat,setDateFormat]=useState('');


    useEffect(() => {
        if(format == "MM/DD/YYYY"){
        
            setDateFormat(format);
        }
        else if(format == "YYYY/MM/DD"){
            setDateFormat(format);
        }
        else{
            setDateFormat('DD/MM/YYYY');
        }
      
    
     
    }, [format])
    


    const handleChange = (e) => {
        const inputDate = e.target.value;
        const [year, month, day] = inputDate.split('-');
        if(format == "MM/DD/YYYY"){
            const formattedDate = `${month}/${day}/${year}`;
            setDate(formattedDate);
        }
        else if(format == "YYYY/MM/DD"){
            const formattedDate = `${year}/${month}/${day}`;
            setDate(formattedDate);
        }
        else{
            const formattedDate = `${day}/${month}/${year}`;
            setDate(formattedDate);
        }
      
       
        
    };


    return (
        <div className="dateInputMonth">
            <input placeholder={`${DateFormat}`} type="text" className='formatedDateValue' value={date} />
            <div className="inputDateContainer">
                <input
                
                    type="date"
                    id="hiddenDate"
              
                    onChange={handleChange}
                    className='dateInput'
                />
                <BsCalendarDateFill className='calenderIcon' />
            </div>
        </div>
    );
}

export default DateInput;
