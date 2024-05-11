import './index.css';
export default function PickAddOns(){
    return(
        <>   
        <div className="pick-add-ons-info">
        <h2 className='text-marine-blue font-bold text-2xl'>Pick add-ons</h2>
            <p className='text-lg text-cool-gray mb-4'>Add-ons help enhance your gaming experience.</p>
        </div>
        <div className="checklist">
            <div className="online-service flex
            justify-between border p-3 rounded-lg border-light-gray mt-5 items-center">
            <div className='flex items-center gap-4'>
            <img className='bg-purplish-blue p-1 rounded-sm h-4' src="src/assets/images/icon-checkmark.svg" alt="checkmark" />
                    <div className="arcade-info">
                        <h3 className='font-bold'>Online service</h3>
                        <h4 className='text-cool-gray'>Access to multiplayer games</h4>
                    </div>
            </div>
                    <div className="price-online">
                        <h3 className='text-purplish-blue'>+$1/mo</h3>
                    </div>
            </div>
            <div className="larger-storage flex
            justify-between border p-3 rounded-lg border-light-gray mt-5 items-center">
            <div className='flex items-center gap-4'>
                <img className='bg-purplish-blue p-1 rounded-sm h-4' src="src/assets/images/icon-checkmark.svg" alt="checkmark" />
                <div className="arcade-info">
                    <h3 className='font-bold'>Larger storage</h3>
                    <h4 className='text-cool-gray'>Extra 1TB of cloud save</h4>
                </div>
                </div>
                <div className="price-larger">
                    <h3 className='text-purplish-blue'>+$2/mo</h3>
                </div>
            </div>
            <div className="customizable flex
            justify-between border p-3 rounded-lg border-light-gray mt-5 items-center">
            <div className='flex items-center gap-4'>
                <img className='bg-purplish-blue p-1 rounded-sm h-4' src="src/assets/images/icon-checkmark.svg" alt="checkmark" />
                <div className="arcade-info">
                    <h3 className='font-bold'>Customizable profile</h3>
                    <h4 className='text-cool-gray'>Custom theme on your profile</h4>
                </div>
            </div>
            <div className="price-customize">
                <h3 className='text-purplish-blue'>+$2/mo</h3>
            </div>
            </div>

        </div>
        </>
    );
}