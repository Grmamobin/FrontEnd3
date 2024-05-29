import './index.css'
import PropTypes from 'prop-types'; 
export default function PersonalInfoPage({ msg, setMsg }) {
    return (
      <>
        <div className="personal-info-text">
          <h2 className="text-marine-blue font-bold text-3xl">Personal info</h2>
          <p className="text-base text-cool-gray mb-10 mt-2">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="personal-info-text-feild p-0 sm:max-w-[100%]">
          <div className="name-info">
            <div className="flex items-end justify-between mb-2">
              <h4 className="text-marine-blue">Name</h4>
              <h4
                className={`required text-strawberry-red font-bold text-[13px] ${
                  msg.names === '' ? 'visible' : 'invisible'
                }`}
              >
                This field is required
              </h4>
            </div>
            <input
              className={`input-form border w-full p-2.5 rounded-md ${
                msg.names === '' ? 'border-strawberry-red' : 'border-light-gray'
              }`}
              type="text"
              placeholder="e.g.Stephen King"
              onChange={(e) => setMsg({ ...msg, names: e.target.value })}
            />
          </div>
          <div className="email-address-info">
            <div className="flex items-end justify-between mb-2">
              <h4 className="text-marine-blue mt-5">Email Address</h4>
              <h4
                className={`required text-strawberry-red font-bold text-[13px] ${
                  msg.email === '' ? 'visible' : 'invisible'
                }`}
              >
                This field is required
              </h4>
            </div>
            <input
              className={`input-form border w-full p-2.5 rounded-md ${
                msg.email === '' ? 'border-strawberry-red' : 'border-light-gray'
              }`}
              type="email"
              placeholder="e.g.stephenking@lorem.com"
              onChange={(e) => setMsg({ ...msg, email: e.target.value })}
            />
          </div>
          <div className="phone-number-info">
            <div className="flex items-end justify-between mb-2">
              <h4 className="text-marine-blue mt-5">Phone Number</h4>
              <h4
                className={`required text-strawberry-red font-bold text-[13px] ${
                  msg.phone === '' ? 'visible' : 'invisible'
                }`}
              >
                This field is required
              </h4>
            </div>
            <input
              className={`input-form border w-full p-2.5 rounded-md ${
                msg.phone === '' ? 'border-strawberry-red' : 'border-light-gray'
              }`}
              type="tel"
              placeholder="e.g. +1 234 567 890"
              onChange={(e) => setMsg({ ...msg, phone: e.target.value })}
            />
          </div>
        </div>
      </>
    );
  }
  
PersonalInfoPage.propTypes = {
    msg: PropTypes.object.isRequired,
    setMsg: PropTypes.func.isRequired,
};