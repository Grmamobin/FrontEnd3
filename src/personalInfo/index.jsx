import './index.css'
export default function PersonalInfoPage(){
    return (
    <>
        <div className="personal-info-text">
            <h2 className='text-marine-blue font-bold text-3xl'>Personal info</h2>
            <p className='text-base text-cool-gray mb-4 mt-2'>Please provide your name, email address, and phone number.</p>
        </div>
        <div className="personal-info-text-feild p-0">
            <div className="name-info">
            <div className='flex items-end justify-between mb-2'>
                <h4 className='text-marine-blue'>Name</h4>
                <h4 className=' text-strawberry-red font-bold text-[13px] invisible'>
                    This field is required
                </h4>
                </div>
                <input className='border w-full p-2.5 rounded-md border-light-gray' type="text" placeholder='e.g.Stephen King'/>
            </div>
            <div className="email-address-info">
            <div className='flex items-end justify-between mb-2'>
                <h4 className='text-marine-blue mt-5'>Email Address</h4>
                <h4 className=' text-strawberry-red font-bold text-[13px] invisible'>
                    This field is required
                </h4>
            </div>
                <input className='border w-full p-2.5 rounded-md border-light-gray' type="email" placeholder='e.g.stephenking@lorem.com'/>
            </div>
            <div className="phone-number-info">

                <div className='flex items-end justify-between mb-2'>
                <h4 className='text-marine-blue mt-5'>Phone Number</h4>
                <h4 className=' text-strawberry-red font-bold text-[13px] invisible'>
                    This field is required
                </h4>
                </div>

                <input className='border w-full p-2.5 rounded-md border-light-gray' type="tel" placeholder='e.g. +1 234 567 890'/>
            </div>
        </div>

    </>
    );
}