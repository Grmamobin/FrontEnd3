import thankYouImg from "../assets/images/icon-thank-you.svg";

export default function Confirm(){
    return (
        <>
        <div className="whole-confirm-part flex flex-col justify-center items-center pt-10">
            <img className="h-14" src={thankYouImg}alt="check-confirm" />
            <h1 className="font-bold pt-5 pb-2 text-marine-blue">Thank you!</h1>
            <p className="text-cool-gray text-center pb-10">thanks for confirming your subscription!
            We hope you have fun using our platform.If you ever need support, please feel free to email us at support@loremgaming.com.</p>
        </div>
        </>
    )
}