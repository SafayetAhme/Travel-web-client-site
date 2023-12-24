import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';



const MyCalender = () => {
    const [startDate, setStartDate] = useState(null); // State to store the selected date

    return (
        <div className=' items-center gap-0'>
            <h2 className='font-bold pb-2 text-xl text-gray-900'>Select your dates</h2>
            <div className='bg-slate-100 text-2xl border-2 rounded-sm w-fit px-0'>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy" // Customize the date format
                    isClearable // 
                />
            </div>
        </div>
    )
}

export default MyCalender;