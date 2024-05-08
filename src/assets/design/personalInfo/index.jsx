import './index.css'
export default function PersonalInfoPage(){
    return (
    <>
    {/* left part */}
    <div className="steps">
        <div className="step1">
            <div className="bg-red-800">
                <label htmlFor="">1</label>
            </div>
            <div className="step-detail">
                <h3>STEP 1</h3>
                <h2>YOUR INFO</h2>
            </div>
        </div>

        <div className="step2">
            <div className="nu2">
                <label htmlFor="">2</label>
            </div>
            <div className="step-detail">
                <h3>STEP 2</h3>
                <h2>SELECT PLAN </h2>
            </div>
        </div>

        <div className="step3">
            <div className="num3">
                <label htmlFor="">3</label>
            </div>
            <div className="step-detail">
                <h3>STEP 3</h3>
                <h2>ADD-ONS</h2>
            </div>
        </div>

        <div className="step4">
            <div className="num4">
                <label htmlFor="">4</label>
            </div>
            <div className="step-detail">
                <h3>STEP 4</h3>
                <h2>SUMMERY</h2>
            </div>
        </div>
        
    </div>
    </>
    );
}