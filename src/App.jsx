import './App.css'
// import PersonalInfoPage from './personalInfo'
// import SelectPlan from './selectPlan'
// import PickAddOns from './pickAddOns'
// import FinishingUp from './finishingUp'
import Confirm from './confirm5'
export default function App() {
  return (
    <>
    <div className="whole-part flex flex-col">
{/* left part */}
      <div className='left-part'>
          <div className="img-view-desktop hidden">
            <img src="src/assets/images/bg-sidebar-desktop.svg" alt="leftSide" />
          </div>
          <div className="img-view-mobile absolute w-full object-cover">
            <img className='w-full' src="src/assets/images/bg-sidebar-mobile.svg" alt="leftSide" />
          </div>

          <div className="steps flex items-center w-full p-10 justify-evenly text-white font-ubunto-bold
          relative">
              <div className="step1">
                  <div className="num1 border border-white rounded-full p-[10px] w-[50px] h-[50px]">
                      <h4 className='flex justify-center'>1</h4>
                  </div>
                  <div className="step-detail hidden">
                      <h3>STEP 1</h3>
                      <h2>YOUR INFO</h2>
                  </div>
              </div>

              <div className="step2">
                  <div className="num2 border border-white rounded-full p-[10px] w-[50px] h-[50px]">
                  <h4 className='flex justify-center'>2</h4>
                  </div>
                  <div className="step-detail hidden">
                      <h3>STEP 2</h3>
                      <h2>SELECT PLAN </h2>
                  </div>
              </div>

              <div className="step3">
                  <div className="num3 border border-white rounded-full p-[10px] w-[50px] h-[50px]">
                  <h4 className='flex justify-center'>3</h4>
                  </div>
                  <div className="step-detail hidden">
                      <h3>STEP 3</h3>
                      <h2>ADD-ONS</h2>
                  </div>
              </div>

              <div className="step4">
                  <div className="num4 border border-white rounded-full p-[10px] w-[50px] h-[50px]">
                  <h4 className='flex justify-center'>4</h4>
                  </div>
                  <div className="step-detail hidden">
                      <h3>STEP 4</h3>
                      <h2>SUMMERY</h2>
                  </div>
              </div>
        
          </div>
    </div>
{/* right part */}
    <div className="right-part absolute bg-white flex flex-col w-[92%] p-5 ml-4 mt-[100px] border border-white rounded-lg">
    {/* <PersonalInfoPage></PersonalInfoPage> */}
    {/* <SelectPlan></SelectPlan> */}
    {/* <PickAddOns></PickAddOns> */}
    {/* <FinishingUp></FinishingUp> */}
    <Confirm></Confirm>


    </div>
{/* footer part */}
    <footer className="footer-btn bg-white flex flex-row-reverse w-full h-[80px] absolute bottom-0 left-0 right-0">
      <div className='flex items-center p-5 w-full justify-between'>
        <button className='text-cool-gray'>
          <p>Go Back</p>
        </button>
        <button className='bg-marine-blue text-white rounded-md'>
            <p className='px-4 py-2'>Next Step</p>
        </button>
               {/* <Button></Button> */}
      </div>
    </footer>

  </div>
    </>
  )
}