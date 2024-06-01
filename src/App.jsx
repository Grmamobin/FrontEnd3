import './App.css'
import PersonalInfoPage from './components/personalInfo'
import SelectPlan from './components/selectPlan'
import PickAddOns from './components/pickAddOns'
import FinishingUp from './components/finishingUp'
import Confirm from './components/confirm5'
import { useState } from 'react';

import sidebarDesktop from "../src/assets/images/bg-sidebar-desktop.svg"
import sidebarMobile from '../src/assets/images/bg-sidebar-mobile.svg';

export default function App() {
  const [step , setStep] = useState(1);
  const [msg, setMsg] = useState({
    names: "",
    email: "",
    phone: "",
  });
  const [selected, setSelected] = useState({
    selected1: true,
    selected2: true,
    selected3: true
});

  const [duration , setDuration] = useState(0);
  const [result , setResult] = useState("Arcade");

  const emailIsvalid=()=>{
    const email = msg.email;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = emailRegex.test(email);
    return isValid;
  };
  
  
  function nextStep(){
    if(step < 5){
      return setStep(step => step + 1);
    }
  }
  function prevStep(){
      return setStep(step => step - 1);
  }
  
  const AllStep =  [
      {
        info : "YOUR INFO",
        stepNumber : 1,
      },
      {
        info : "SELECT PLAN",
        stepNumber: 2,
      },
      {
        info : "ADD-ONS",
        stepNumber : 3,
      },
      {
        info : "SUMMARY",
        stepNumber: 4,
      },
    ];
  
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
          <div className="steps flex items-center p-10  justify-center text-white font-bold sm:w-[50%] gap-5 w-full
          relative sm:flex-col sm:absolute sm:top-[23px]  sm:ml-[24px]
          tall:flex-col tall:absolute tall:top-5 sm:pl-[24px] tall:pl-[24px">

            {AllStep.map((eachStep) =>{
              return(

              <div className="sm:pt-[24px] sm:flex sm:w-full sm:gap-5 sm:items-center
              tall:pt-[24px] tall:flex tall:w-full tall:gap-5 tall:items-center"
              key={eachStep.stepNumber}>
                  <div className="num1 border border-white rounded-full w-[40px] h-[40px] flex justify-center items-center"
                  style={{backgroundColor: eachStep.stepNumber === step ? "hsl(228, 100%, 84%)": "transparent", borderColor: eachStep.stepNumber === step ?"hsl(228, 100%, 84%)":"hsl(0, 0%, 100%)",
                  color: eachStep.stepNumber === step ?"hsl(228, 100%, 18%)":"hsl(0, 0%, 100%)"
                  }}>
                      <h4 className='flex justify-center'>{eachStep.stepNumber}</h4>
                  </div>
                  <div className="step-detail hidden sm:flex sm:flex-col
                  tall:flex tall:flex-col">
                      <h3 className='font-medium text-cool-gray'>STEP {eachStep.stepNumber}</h3>
                      <h2>{eachStep.info}</h2>
                  </div>
              </div>
              )
            })
            }

        
          </div>
    </div>
{/* right part */}
<div className='sm:flex sm:flex-col absolute w-full h-full sm:relative sm:pl-10
tall:flex tall:flex-col tall:relative tall:pl-10'>
    <section className="right-part bg-white flex flex-col w-[92%] p-5 ml-4 mt-[100px] border border-white rounded-lg sm:rounded-none sm:mt-0 sm:pt-20 tall:rounded-none tall:mt-0 tall:pt-20 sm:justify-centerd">
    {step === 1 && <PersonalInfoPage msg={msg} setMsg={setMsg}/>}
    {step === 2 && <SelectPlan setDuration={setDuration}  setResult={setResult}/>}
    {step === 3 && <PickAddOns duration={duration}  selected={selected} setSelected={setSelected}/>}
    {step === 4 && <FinishingUp selected={selected} duration={duration} result={result}/>}
    {step === 5 && <Confirm/>}


    </section>
{/* footer part */}
<footer className="footer-btn bg-white flex w-full h-[80px] absolute bottom-0 left-0 right-0">
  <div className='flex items-center p-4 w-full sm:pr-20 sm:pl-20 justify-between '>
    <button className='back-btn text-cool-gray hover:text-[#000]' onClick={prevStep}
    style={{visibility: step>1 && step!=5? "visible":"hidden"}}>
      Go Back
    </button>
    {step < 4 && <button className='first-btn bg-marine-blue text-white rounded-md hover:opacity-[0.75] px-6 py-2.5' onClick={emailIsvalid() ? nextStep : ""} disabled={msg.names === '' || msg.email === '' || msg.phone === ''}>
      Next Step
    </button>}
    {step === 4 && <button className='second-btn bg-purplish-blue text-white rounded-md  hover:opacity-[0.5] px-6 py-2.5' onClick={nextStep}>
      Confirm
    </button>}
  </div>
</footer>

    </div>

  </div>
    </>
  )
}

