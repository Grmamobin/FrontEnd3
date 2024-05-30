import { useState , useEffect } from 'react';
import './index.css';
import PropTypes from 'prop-types'; 
import arconArcade from "./../../assets/images/icon-arcade.svg"
import pro from "./../../assets/images/icon-pro.svg";
import advanced from "./../../assets/images/icon-advanced.svg";

export default function SelectPlan({setMonthly,setYearly, setResult}){
    const[selected , setSelected] = useState(false);
        useEffect(() => {
          if (selected) {
            setYearly(90);
            setMonthly(0);
          } else {
            setMonthly(9);
            setYearly(0);
          }
        }, [selected, setYearly, setMonthly]);

        const handleRadioChange = (plan) => {
            setResult(plan);
        };

        
    return(
    <>
    <div className="select-plan-info-text">
        <h2 className='text-marine-blue font-bold text-3xl'>Select your plan</h2>
        <p className='text-base text-cool-gray mb-10 mt-2'>You have the option of monthly or yearly biling.</p>
    </div>
    <div className="schedular-option">
        <div className='schedular sm:flex sm:flex-row  sm:gap-5'>
        <div className="arcade flex gap-4 border p-3 rounded-lg border-light-gray relative hover:border-purplish-blue sm:flex-col mt-5 sm:mt-0 sm:pr-20 sm:w-full">
        <input className='absolute h-full w-full
        opacity-0' type="radio" name="radio"  onChange={() => handleRadioChange('Arcade')}/>
            <img className='w-10 sm:mb-10' src={arconArcade} alt="arcade" />
            <div className="arcade-info">
                <h3 className='text-marine-blue font-bold'>Arcade</h3>
                <h4 className='text-cool-gray text-sm'>{selected? "$90/yr" :"$9/mo"}</h4>

                <p className='free hidden text-marine-blue text-sm'
                style={{display:selected?"flex" : "none"}}>2 months free</p>
            </div>
        </div>
        <div className="advanced flex gap-4 mt-5 border p-3 rounded-lg border-light-gray relative hover:border-purplish-blue
        sm:flex-col sm:mt-0
        sm:pr-20 sm:w-full">
            <input className='absolute h-full
             opacity-0 w-full' type="radio" name="radio" onChange={() => handleRadioChange('Advanced')}/>
            <img className='w-10 sm:mb-10' src={advanced} alt="advanced" />
            <div className="advanced-info">
                <h3 className='text-marine-blue font-bold'>Advanced</h3>
                <h4 className='text-cool-gray text-sm'>{selected? "$120/yr" :"$12/mo"}</h4>
                <p className='free hidden text-marine-blue text-sm'
                style={{display:selected?"flex" : "none"}}>2 months free</p>
            </div>
        </div>
        <div className="pro flex gap-4 mt-5 border p-3 rounded-lg border-light-gray relative hover:border-purplish-blue
        sm:flex-col sm:mt-0 sm:pr-20 sm:w-full">
            <input className='absolute h-full w-full opacity-0' type="radio" name="radio" onChange={() => handleRadioChange('Pro')}/>
            <img className='w-10 sm:mb-10' src={pro} alt="pro"/>
            <div className="pro-info">
                <h3 className='text-marine-blue font-bold'>Pro</h3>
                <h4 className='text-cool-gray text-sm'> {selected? "$150/yr" :"$15/mo"}</h4>
                <p className='free hidden text-marine-blue text-sm'
                style={{display:selected?"flex" : "none"}}>2 months free</p>
            </div>
        </div>
        </div>
        <div className="date bg-magnolia mt-5 flex justify-evenly h-[50px] rounded-lg items-center">
            <h3 className='text-marine-blue font-bold text-sm'>Monthly</h3>
            <div className="switch flex items-center bg-marine-blue w-10 rounded-xl h-5 cursor-pointer"
            style={{justifyContent:selected?"flex-end" : "flex-start"}}
            onClick={() => setSelected(!selected)}
            >
                <button  className="circle bg-white w-3 h-3
                border border-none rounded-full ml-1 mr-1">
                </button>
            </div>
            <h3 className=' text-cool-gray font-bold text-sm'>Yearly</h3>
        </div>
    </div>
    </>
    );
}
SelectPlan.propTypes = {
    setMonthly: PropTypes.func.isRequired,
    setYearly: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired,
};