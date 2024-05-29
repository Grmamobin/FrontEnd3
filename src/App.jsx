import './App.css'
import PersonalInfoPage from './components/personalInfo'
import SelectPlan from './components/selectPlan'
import PickAddOns from './components/pickAddOns'
import FinishingUp from './components/finishingUp'
import Confirm from './components/confirm5'
import { useState , useEffect , useRef} from 'react';

import sidebarDesktop from "../src/assets/images/bg-sidebar-desktop.svg"
import sidebarMobile from '../src/assets/images/bg-sidebar-mobile.svg';
export default function App() {
  const [step , setStep] = useState(1);
  const [msg, setMsg] = useState({
    names: "",
    email: "",
    phone: "",
  });

  const emailIsvalid=()=>{
    const email = msg.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    return isValid;
  };
  
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);
  const step4Ref = useRef(null);
  const backBtnRef = useRef(null);
  const secondBtnRef = useRef(null);
  const firstBtnRef = useRef(null);
  const footerBtnRef = useRef(null);

  useEffect(() => {
    const steps = [step1Ref, step2Ref, step3Ref, step4Ref];
    const stepStyles = {
      backgroundColor: 'transparent',
      color: 'hsl(0, 0%, 100%)',
      borderColor: 'hsl(0, 0%, 100%)',
    };

    steps.forEach((stepp) => {
      if (stepp.current) {
        stepp.current.style.backgroundColor = stepStyles.backgroundColor;
        stepp.current.style.color = stepStyles.color;
        stepp.current.style.borderColor = stepStyles.borderColor;
      }
    });

    backBtnRef.current.style.visibility = 'visible';
    secondBtnRef.current.style.display = 'none';
    firstBtnRef.current.style.display = 'flex';

    if (step === 1) {
      step1Ref.current.style.backgroundColor = 'hsl(228, 100%, 84%)';
      step1Ref.current.style.color = 'hsl(213, 96%, 18%)';
      step1Ref.current.style.borderColor = 'hsl(228, 100%, 84%)';
      backBtnRef.current.style.visibility = 'hidden';
    } else if (step === 2) {
      step2Ref.current.style.backgroundColor = 'hsl(228, 100%, 84%)';
      step2Ref.current.style.color = 'hsl(213, 96%, 18%)';
      step2Ref.current.style.borderColor = 'hsl(228, 100%, 84%)';
    } else if (step === 3) {
      step3Ref.current.style.backgroundColor = 'hsl(228, 100%, 84%)';
      step3Ref.current.style.color = 'hsl(213, 96%, 18%)';
      step3Ref.current.style.borderColor = 'hsl(228, 100%, 84%)';
    } else if (step === 5) {
      step4Ref.current.style.backgroundColor = 'hsl(228, 100%, 84%)';
      step4Ref.current.style.color = 'hsl(213, 96%, 18%)';
      step4Ref.current.style.borderColor = 'hsl(228, 100%, 84%)';
      footerBtnRef.current.style.visibility = 'hidden';
      backBtnRef.current.style.visibility = 'hidden';
    } else {
      step4Ref.current.style.backgroundColor = 'hsl(228, 100%, 84%)';
      step4Ref.current.style.color = 'hsl(213, 96%, 18%)';
      step4Ref.current.style.borderColor = 'hsl(228, 100%, 84%)';
      secondBtnRef.current.style.display = 'flex';
      firstBtnRef.current.style.display = 'none';
    }
  }, [step]);

  function nextStep(){
    if(step < 5){
      return setStep(step => step + 1);
    }
  }
  function prevStep(){
      return setStep(step => step - 1);
  }  

  return (
    <>
    <div className="whole-part flex flex-col sm:bg-white sm:flex-row h-[100%] sm:width-[100%] 
    absolute top-0 right-0 left-0 bottom-0 tall:relative
    ">
{/* left part */}
      <div className='left-part h-[95%] sm:flex sm:items-start tall:flex tall:items-start
      '>
          <div className="img-view-desktop hidden sm:mt-[24px] sm:mb-[24px] sm:ml-[24px]
          sm:flex sm:h-full tall:flex tall:h-full rounded-none sm:redius-10">
            <img className='h-full min-w-[300px] object-cover rounded-none sm:rounded-lg ' src={sidebarDesktop} alt="leftSide" />
          </div>
          <div className="img-view-mobile absolute w-full object-cover sm:hidden tall:hidden
          ">
            <img className='w-full' src={sidebarMobile} alt="leftSide" />
          </div>
{/* STEPS */}
          <div className="steps flex items-center p-10  justify-center text-white font-bold w-full gap-5
          relative sm:flex-col sm:absolute sm:top-[23px]  sm:ml-[24px]
          tall:flex-col tall:absolute tall:top-5 sm:pl-[24px] tall:pl-[24px">
              <div className="step1 sm:pt-[24px] sm:flex sm:w-full sm:gap-5 sm:items-center
              tall:pt-[24px] tall:flex tall:w-full tall:gap-5 tall:items-center">
                  <div className="num1 border border-white rounded-full w-[40px] h-[40px] flex justify-center items-center"
                  ref={step1Ref}>
                      <h4 className='flex justify-center'>1</h4>
                  </div>
                  <div className="step-detail hidden sm:flex sm:flex-col
                  tall:flex tall:flex-col">
                      <h3 className='font-medium text-cool-gray'>STEP 1</h3>
                      <h2>YOUR INFO</h2>
                  </div>
              </div>

              <div className="step2 sm:pt-[24px] sm:flex sm:w-full sm:gap-5 sm:items-center
              tall:pt-[24px] tall:flex tall:w-full tall:gap-5 tall:items-center">
              <div className="num2 border border-white rounded-full w-[40px] h-[40px] flex justify-center items-center"
              ref={step2Ref}>
                      <h4 className='flex justify-center'>2</h4>
                  </div>
                  <div className="step-detail hidden sm:flex tall:flex flex-col">
                      <h3 className='font-medium text-cool-gray'>STEP 2</h3>
                      <h2>SELECT PLAN</h2>
                  </div>
              </div>

              <div className="step3 sm:pt-[24px] sm:flex sm:w-full sm:gap-5 sm:items-center
              tall:pt-[24px] tall:flex tall:w-full tall:gap-5 tall:items-center">
              <div className="num3 border border-white rounded-full w-[40px] h-[40px] flex justify-center items-center"
              ref={step3Ref}>
                      <h4 className='flex justify-center'>3</h4>
                  </div>
                  <div className="step-detail hidden sm:flex sm:flex-col
                  tall:flex tall:flex-col">
                      <h3 className='font-medium text-cool-gray'>STEP 3</h3>
                      <h2>ADD-ONS</h2>
                  </div>
              </div>

              <div className="step4 sm:pt-[24px] sm:flex sm:w-full sm:gap-5 sm:items-center
              tall:pt-[24px] tall:flex tall:w-full tall:gap-5 tall:items-center">
              <div className="num4 border border-white rounded-full w-[40px] h-[40px] flex justify-center items-center"
              ref={step4Ref}>
                      <h4 className='flex justify-center'>4</h4>
                  </div>
                  <div className="step-detail hidden sm:flex sm:flex-col
                  tall:flex tall:flex-col">
                      <h3 className='font-light text-cool-gray'>STEP 4</h3>
                      <h2>SUMMERY</h2>
                  </div>
              </div>
        
          </div>
    </div>
{/* right part */}
<div className='sm:flex sm:flex-col absolute w-full h-full sm:relative sm:pl-10
tall:flex tall:flex-col tall:relative tall:pl-10'>
    <section className="right-part bg-white flex flex-col w-[92%] p-5 ml-4 mt-[100px] border border-white rounded-lg sm:rounded-none sm:mt-0 sm:pt-20 tall:rounded-none tall:mt-0 tall:pt-20 sm:justify-centerd">
    {step === 1 && <PersonalInfoPage msg={msg} setMsg={setMsg}/>}
    {step === 2 && <SelectPlan/>}
    {step === 3 && <PickAddOns/>}
    {step === 4 && <FinishingUp/>}
    {step === 5 && <Confirm/>}


    </section>
{/* footer part */}
    <footer className="footer-btn bg-white flex flex-row-reverse w-full h-[80px] absolute bottom-0 left-0 right-0 tall:relative mb-10" ref={footerBtnRef}>
      <div className='flex items-center p-4 w-full justify-between sm:pr-20 sm:pl-20
      '>
        <button className='back-btn text-cool-gray hover:text-[#000]'
        onClick={prevStep} ref={backBtnRef}> 
          <p>Go Back</p>
        </button>
        <button className='first-btn bg-marine-blue text-white rounded-md
         hover:opacity-[0.75] px-6 py-2.5 ' onClick={emailIsvalid()?nextStep:""}
         disabled={msg.names === '' || msg.email === '' || msg.phone === ''} ref={firstBtnRef}
         >Next Step
        </button>

        <button className='second-btn bg-purplish-blue text-white 
        rounded-md hidden hover:opacity-[0.5] px-6 py-2.5 ' onClick={nextStep} ref={secondBtnRef}>Confirm
        </button>
          
      </div>
    </footer>
    </div>

  </div>
    </>
  )
}

