export default function FinishingUp(){
    return(
    <>
    <div className="finishing-up-info">
    <h2 className='text-marine-blue font-bold text-3xl'>Finishing up</h2>
        <p className='text-base text-cool-gray mb-4 mt-2'>Double-check everything looks OK before confirmig.</p>
        <div className="gray-box bg-light-gray p-3 rounded-lg text-cool-gray">
            <div className="total-arcade flex justify-between items-center">
                <div className="arcade-montly flex flex-col">
                    <h3 className=" text-marine-blue font-bold text-[15px]">Arcade (Monthly)</h3>
                    <h3 className="text-[15px] underline underline-offset-2 decoration-2">Change</h3>
                </div>
                <h3 className=" text-marine-blue font-bold">$9/mo</h3>
            </div>
            <hr className="mt-2 mb-2"/>
            <div className="service flex justify-between mb-2">
                    <h3>Online service</h3>
                    <h3 className="t text-marine-blue">+$1/mo</h3>
            </div>
            <div className="storage flex justify-between mb-2">
                    <h3>Large storage</h3>
                    <h3 className="t text-marine-blue">+$2/mo</h3>
            </div>
            <div className="profile flex justify-between mb-1">
                    <h3>Customizable profile</h3>
                    <h3 className="t text-marine-blue">+$2/mo</h3>
            </div>
        </div>
        <div className="total flex justify-between p-5">
            <h3 className="text-cool-gray">Total(per month)</h3>
            <h3 className="font-bold text-purplish-blue text-xl">$12/mo</h3>
        </div>
    </div>
    </>
    );
}