import thankYouImg from "./.././../assets/images/icon-thank-you.svg"

export default function Confirm(){
    return (
        <>
        <div className="whole-confirm-part flex flex-col justify-center items-center pt-10 sm:mt-20">
            <img className="h-16 sm:h-20" src={thankYouImg}alt="check-confirm" />
            <p className="font-bold pt-5 pb-2 text-marine-blue text-[30px]">Thank you!</p>
            <p className="text-cool-gray text-center pb-10 flex items-center justify-center  text-[16px] sm:max-w-[50%]">Thanks for confirming your subscription!
            We hope you have fun using our platform.If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
        </>
    )
}