import PropTypes from 'prop-types'; 
import { useState , useEffect } from 'react';
export default function FinishingUp({selected ,  duration , result}){
    const [changed , setChanged] = useState(false);
    const [price,setPrice] = useState(9);
    useEffect(() => {
        if (duration == 0) {
          setChanged(false);
        } else {
          setChanged(true);
        }
      }, [duration ]);

      useEffect(() => {
        let totalPrice = 0;
        if (changed) {
            if (result === "Arcade") {
                totalPrice += 9;
            } else if (result === "Advanced") {
                totalPrice += 12;
            } else {
                totalPrice += 15;
            }
            if (!selected.selected1) {
                totalPrice += 1;
            }
            if (!selected.selected2) {
                totalPrice += 2;
            }
            if (!selected.selected3) {
                totalPrice += 2;
            }
        } else {
            if (result === "Arcade") {
                totalPrice += 90;
            } else if (result === "Advanced") {
                totalPrice += 120;
            } else {
                totalPrice += 150;
            }
            if (!selected.selected1) {
                totalPrice += 10;
            }
            if (!selected.selected2) {
                totalPrice += 20;
            }
            if (!selected.selected3) {
                totalPrice += 20;
            }
        }
        setPrice(totalPrice);
    }, [selected, result, changed]);

    return(
    <>
    <div className="finishing-up-info">
    <h2 className='text-marine-blue font-bold text-3xl'>Finishing up</h2>
        <p className='text-base text-cool-gray mb-10 mt-2'>Double-check everything looks OK before confirmig.</p>
        <div className="gray-box bg-magnolia p-3 rounded-lg text-cool-gray">
            <div className="total-arcade flex justify-between items-center">
                <div className="arcade-montly flex flex-col">
                    <h3 className=" text-marine-blue font-bold text-[15px]">
                        {`${result} (Monthly)`}</h3>
                    <h3 className="text-[15px] underline underline-offset-2 decoration-2 w-14 hover:text-purplish-blue cursor-pointer">Change</h3>
                </div>
                <h3 className=" text-marine-blue font-bold">
                {result === "Arcade" ? (changed ? "$9/mo" : "$90/yr"):
                result === "Advanced" ?(changed ? "$12/mo":"$120/yr") :
                (changed ? "$15/mo":"$150/yr")}</h3>
            </div>
            <hr className="mt-6 mb-6"/>
            <div className="service flex justify-between mb-4" style={{display: selected.selected1?"none":"flex"}}>
                    <h3>Online service</h3>
                    <h3 className="t text-marine-blue">{changed?"+$1/mo": "+$10/yr"}</h3>
            </div>
            <div className="storage flex justify-between mb-4" style={{display: selected.selected2?"none":"flex"}}>
                    <h3>Large storage</h3>
                    <h3 className="t text-marine-blue">{changed?"+$2/mo": "+$20/yr"}</h3>
            </div>
            <div className="profile flex justify-between mb-4"style={{display: selected.selected3?"none":"flex"}}>
                    <h3>Customizable profile</h3>
                    <h3 className="t text-marine-blue">{changed?"+$2/mo": "+$20/yr"}</h3>
            </div>
        </div>
        <div className="total flex justify-between p-5">
            <h3 className="text-cool-gray">{changed? "Total(per month)":"Total(per year)"}</h3>
            <h3 className="font-bold text-purplish-blue text-xl">{changed?`+$${price}/mo`: `+$${price}/yr`}</h3>
    
        </div>
    </div>
    </>
    );
}
FinishingUp.propTypes = {
    selected: PropTypes.object.isRequired,
    duration: PropTypes.string.isRequired,
    result: PropTypes.string.isRequired,
};