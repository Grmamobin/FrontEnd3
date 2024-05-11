import './index.css'
export default function PersonalInfoPage(){
    return (
    <>
        <div className="personal-info-text">
            <h2 className='text-marine-blue font-bold text-2xl'>Personal info</h2>
            <p className='text-lg text-cool-gray mb-4'>Please provide your name, email address, and phone number.</p>
        </div>
        <div className="personal-info-text-feild p-0">
            <div className="name-info">
                <h4 className='text-marine-blue'>Name</h4>
                <input className='border w-full p-2.5 rounded-md border-light-gray' type="text" placeholder='e.g.Stephen King'/>
            </div>
            <div className="email-address-info">
                <h4 className='text-marine-blue mt-5'>Email Address</h4>
                <input className='border w-full p-2.5 rounded-md border-light-gray' type="email" placeholder='e.g.stephenking@lorem.com'/>
            </div>
            <div className="phone-number-info">
                <h4 className='text-marine-blue mt-5'>Phone Number</h4>
                <input className='border w-full p-2.5 rounded-md border-light-gray' type="tel" placeholder='e.g. +1 234 567 890'/>
            </div>
        </div>

    </>
    );
}