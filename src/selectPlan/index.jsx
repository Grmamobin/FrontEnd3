import './index.css';
export default function SelectPlan(){
    return(
    <>
    <div className="select-plan-info-text">
        <h2 className='text-marine-blue font-bold text-2xl'>Select your plan</h2>
        <p className='text-lg text-cool-gray mb-4'>You have the option of monthly or yearly biling.</p>
    </div>
    <div className="schedular-option">
        <div className="arcade flex gap-4 border p-3 rounded-lg border-light-gray">
            <img src="src/assets/images/icon-arcade.svg" alt="arcade" />
            <div className="arcade-info">
                <h3>Arcade</h3>
                <h4>$9/mo</h4>
            </div>
        </div>
        <div className="advanced flex gap-4 mt-5 border p-3 rounded-lg border-light-gray">
            <img src="src/assets/images/icon-advanced.svg" alt="advanced" />
            <div className="advanced-info">
                <h3>Advanced</h3>
                <h4>$12/mo</h4>
            </div>
        </div>
        <div className="pro flex gap-4 mt-5 border p-3 rounded-lg border-light-gray">
            <img src="src/assets/images/icon-pro.svg" alt="pro" />
            <div className="pro-info">
                <h3>Pro</h3>
                <h4>$15/mo</h4>
            </div>
        </div>
        <div className="date bg-light-gray mt-5 flex justify-evenly h-[50px] rounded-lg items-center">
            <h3>Monthly</h3>
            <div className="switch flex items-center bg-marine-blue w-10 rounded-xl h-5">
                <button className="circle bg-white w-3 h-3
                border border-none rounded-full ml-1 items-center justify-center">
                </button>
            </div>
            <h3>Yearly</h3>
        </div>
    </div>
    </>
    );
}