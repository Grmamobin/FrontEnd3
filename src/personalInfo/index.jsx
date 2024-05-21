import { useState } from 'react';
import './index.css'
export default function PersonalInfoPage(){
    const [msg, setMsg] = useState({
        "msg1": "s.th",
        "msg2": "s.th",
        "msg3": "s.th"
    });
    return (
    <>
        <div className="personal-info-text">
            <h2 className='text-marine-blue font-bold text-3xl'>Personal info</h2>
            <p className='text-base text-cool-gray mb-4 mt-2'>Please provide your name, email address, and phone number.</p>
        </div>
        <div className="personal-info-text-feild p-0 sm:max-w-[100%]">
            <div className="name-info">
            <div className='flex items-end justify-between mb-2'>
                <h4 className='text-marine-blue'>Name</h4>
                <h4 className={`required text-strawberry-red font-bold text-[13px] ${msg.msg1 === '' ? 'visible' : 'invisible'}`}>
                    This field is required
                </h4>
                </div>
                <input 
                className={`input-form border w-full p-2.5 rounded-md ${
                    msg.msg1 == '' ? 'border-strawberry-red' : 'border-light-gray'
                }`}
                type="text"
                placeholder="e.g.Stephen King"
                onChange={(e) => setMsg({ ...msg, msg1: e.target.value })}
                />
            </div>
            <div className="email-address-info">
            <div className='flex items-end justify-between mb-2'>
                <h4 className='text-marine-blue mt-5'>Email Address</h4>
                <h4 className={`required text-strawberry-red font-bold text-[13px] ${msg.msg2 === '' ? 'visible' : 'invisible'}`}>
                    This field is required
                </h4>
            </div>
                <input 
                className={`input-form border w-full p-2.5 rounded-md ${
                    msg.msg2 == '' ? 'border-strawberry-red' : 'border-light-gray'
                }`} type="email" placeholder='e.g.stephenking@lorem.com'
                onChange={(e) => setMsg({ ...msg, msg2: e.target.value})}/>
            </div>
            <div className="phone-number-info">

                <div className='flex items-end justify-between mb-2'>
                <h4 className='text-marine-blue mt-5'>Phone Number</h4>
                <h4 className={`required text-strawberry-red font-bold text-[13px] ${msg.msg3 === '' ? 'visible' : 'invisible'}`}>
                    This field is required
                </h4>
                </div>

                <input
                className={`input-form border w-full p-2.5 rounded-md ${
                    msg.msg3 == '' ? 'border-strawberry-red' : 'border-light-gray'
                }`} type="tel" placeholder='e.g. +1 234 567 890'
                onChange={(e) => setMsg({ ...msg, msg3: e.target.value })}/>
            </div>
        </div>

    </>
    );
}