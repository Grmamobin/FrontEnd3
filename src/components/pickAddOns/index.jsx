import './index.css';
import PropTypes from 'prop-types'; 
import checkmark from "../../assets/images/icon-checkmark.svg";
import { useState , useEffect } from 'react';

export default function PickAddOns({duration , selected , setSelected}){


    const [change , setChange] = useState(false);

    const selectedOption = (index) => {
        setSelected((checked) => ({
            ...checked,
            [index]: !checked[index]
        }));
    };
    useEffect(() => {
        if (duration == 0) {
          setChange(false);
        } else {
          setChange(true);
        }
      }, [duration]);

    return(
        <>   
        <div className="pick-add-ons-info">
        <h2 className='text-marine-blue font-bold text-3xl'>Pick add-ons</h2>
            <p className='text-base text-cool-gray mb-10 mt-2'>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="checklist">
            <div className="online-service flex
            justify-between border p-3 rounded-lg border-light-gray mt-5 items-center  hover:border-purplish-blue"
            style={{
                borderColor: selected.selected1 ? "" : "hsl(243, 100%, 62%)",
                backgroundColor: selected.selected1 ? "" : "hsl(231, 100%, 99%)"
                }}
                onClick={() => selectedOption('selected1')} 
            >
            <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
                <img className='bg-purplish-blue p-1 rounded-sm h-5 w-5' style={{ display: selected.selected1 ? "none" : "flex" }} src={checkmark} alt="checkmark"/>
                <div className='p-1 rounded-sm h-5 border w-5' style={{ display: selected.selected1 ? "flex" : "none" }} src={checkmark} onClick={() => selectedOption('selected1')} ></div>
                </div>
                    <div className="arcade-info">
                        <h3 className='font-bold text-marine-blue'>Online service</h3>
                        <h4 className='text-cool-gray text-sm'>Access to multiplayer games</h4>
                    </div>
            </div>
                    <div className="price-online">
                        <h3 className='text-purplish-blue'>{change?"+$1/mo":"+$10/yr"}</h3>
                    </div>
            </div>
            <div className="larger-storage flex
            justify-between border p-3 rounded-lg border-light-gray mt-5 items-center hover:border-purplish-blue"
            style={{
                borderColor: selected.selected2 ? "" : "hsl(243, 100%, 62%)",
                backgroundColor: selected.selected2 ? "" : "hsl(231, 100%, 99%)"
                }}
                onClick={() => selectedOption('selected2')}
            >
            <div className='flex items-center gap-4'>
            <div className='flex flex-col'>
                <img className='bg-purplish-blue p-1 rounded-sm h-5 w-5' style={{ display: selected.selected2 ? "none" : "flex" }} src={checkmark}  alt="checkmark"/>
                <div className='p-1 rounded-sm h-5 border w-5' style={{ display: selected.selected2 ? "flex" : "none" }} src={checkmark} onClick={() => selectedOption('selected2')} ></div>
                </div>
                <div className="arcade-info">
                    <h3 className='font-bold text-marine-blue'>Larger storage</h3>
                    <h4 className='text-cool-gray text-sm'>Extra 1TB of cloud save</h4>
                </div>
                </div>
                <div className="price-larger">
                    <h3 className='text-purplish-blue'>
                        {change?"+$2/mo": "+$20/yr"}</h3>
                </div>
            </div>
            <div className="customizable flex
            justify-between border p-3 rounded-lg border-light-gray mt-5 items-center hover:border-purplish-blue"
            style={{
                borderColor: selected.selected3 ? "" : "hsl(243, 100%, 62%)",
                backgroundColor: selected.selected3 ? "" : "hsl(231, 100%, 99%)"
                }}
                onClick={() => selectedOption('selected3')}
            >
            <div className='flex items-center gap-4'>
                <div className='flex flex-col'>
                <img className='bg-purplish-blue p-1 rounded-sm h-5 w-5' style={{ display: selected.selected3 ? "none" : "flex" }} src={checkmark} alt="checkmark"/>
                <div className='p-1 rounded-sm h-5 border w-5' style={{ display: selected.selected3 ? "flex" : "none" }} src={checkmark} onClick={() => selectedOption('selected3')} ></div>
                </div>
                <div className="arcade-info">
                    <h3 className='font-bold text-marine-blue'>Customizable profile</h3>
                    <h4 className='text-cool-gray text-sm'>Custom theme on your profile</h4>
                </div>
            </div>
            <div className="price-customize">
                <h3 className='text-purplish-blue'>{change?"+$2/mo": "+$20/yr"}</h3>
            </div>
            </div>

        </div>
        </>
    );
}
PickAddOns.propTypes = {
    duration: PropTypes.string.isRequired,
    selected: PropTypes.string.isRequired,
    setSelected : PropTypes.object.isRequired,
};