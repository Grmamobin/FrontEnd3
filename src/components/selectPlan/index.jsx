import { useState , useEffect } from 'react';
import './index.css';
import PropTypes from 'prop-types'; 
import arconArcade from "./../../assets/images/icon-arcade.svg"
import pro from "./../../assets/images/icon-pro.svg";
import advanced from "./../../assets/images/icon-advanced.svg";

export default function SelectPlan({setDuration , setResult, result}){
    const[selected , setSelected] = useState(false);
        useEffect(() => {
          if (selected) {
            setDuration(true);
          } else {
            setDuration(false);
          }
          const storedSelected = localStorage.getItem('selected');
          if (storedSelected !== null) {
            setSelected(JSON.parse(storedSelected));
          }
        }, [selected, setDuration]);

        const handleRadioChange = (plan) => {
            setResult(plan);
        };
        const handleSwitchClick = () => {
            setSelected(!selected);
            localStorage.setItem('selected', JSON.stringify(!selected));
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
        opacity-0' type="radio" name="radio" checked={result === 'Arcade'} onChange={() => handleRadioChange('Arcade')} />
        <div className='fllex justify-end'>
            <img className='w-10 sm:mb-10' src={arconArcade} alt="arcade" />
        </div>
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
             opacity-0 w-full' type="radio" name="radio" onChange={() => handleRadioChange('Advanced')} checked={result === 'Advanced'}/>
             <div className='fllex justify-end'>
            <img className='w-10 sm:mb-10' src={advanced} alt="advanced" />
            </div>
            <div className="advanced-info">
                <h3 className='text-marine-blue font-bold'>Advanced</h3>
                <h4 className='text-cool-gray text-sm'>{selected? "$120/yr" :"$12/mo"}</h4>
                <p className='free hidden text-marine-blue text-sm'
                style={{display:selected?"flex" : "none"}}>2 months free</p>
            </div>
        </div>
        <div className="pro flex gap-4 mt-5 border p-3 rounded-lg border-light-gray relative hover:border-purplish-blue
        sm:flex-col sm:mt-0 sm:pr-20 sm:w-full">
            <input className='absolute h-full w-full opacity-0' type="radio" name="radio" onChange={() => handleRadioChange('Pro')} checked={result === 'Pro'}/>
            <div className='fllex justify-end'>
            <img className='w-10 sm:mb-10' src={pro} alt="pro"/>
            </div>
            <div className="pro-info">
                <h3 className='text-marine-blue font-bold'>Pro</h3>
                <h4 className='text-cool-gray text-sm'> {selected? "$150/yr" :"$15/mo"}</h4>
                <p className='free hidden text-marine-blue text-sm'
                style={{display:selected?"flex" : "none"}}>2 months free</p>
            </div>
        </div>
        </div>
        <div className="date bg-magnolia mt-5 flex justify-center  h-[50px] rounded-lg items-center">
            <h3 className='text-marine-blue font-bold text-sm pr-10'>Monthly</h3>
            <div className="switch flex items-center bg-marine-blue w-10 rounded-xl h-5 cursor-pointer"
            style={{justifyContent:selected?"flex-end" : "flex-start"}}
            onClick={handleSwitchClick}
            >
                <button  className="circle bg-white w-3 h-3
                border border-none rounded-full ml-1 mr-1">
                </button>
            </div>
            <h3 className=' text-cool-gray font-bold text-sm pl-10'>Yearly</h3>
        </div>
    </div>
    </>
    );
}
SelectPlan.propTypes = {
    setDuration: PropTypes.func.isRequired,
    setResult: PropTypes.func.isRequired,
    result:  PropTypes.string.isRequired,
};