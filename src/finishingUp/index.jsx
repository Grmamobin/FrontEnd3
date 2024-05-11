export default function FinishingUp(){
    return(
    <>
    <div className="finishing-up-info">
    <h2 className='text-marine-blue font-bold text-2xl'>Finishing up</h2>
        <p className='text-lg text-cool-gray mb-4'>Double-check everything looks OK before confirmig.</p>
        <div className="gray-box bg-light-gray p-3 rounded-lg text-cool-gray">
            <div className="total-arcade flex justify-between items-center">
                <div className="arcade-montly flex flex-col">
                    <h3 className=" text-marine-blue font-bold">Arcade (Monthly)</h3>
                    <h3>Change</h3>
                </div>
                <h3 className=" text-marine-blue font-bold">$9/mo</h3>
            </div>
            <hr />
            <div className="service flex justify-between">
                    <h3>Online service</h3>
                    <h3>+$1/mo</h3>
            </div>
            <div className="storage flex justify-between">
                    <h3>Large storage</h3>
                    <h3>+$2/mo</h3>
            </div>
        </div>
        <div className="total flex justify-between p-5">
            <h3 className="text-cool-gray">Total(per month)</h3>
            <h3 className="font-bold text-purplish-blue">+$12/mo</h3>
        </div>
    </div>
    </>
    );
}