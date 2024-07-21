import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import Payment from '@/components/sigup/payment'
import Progress from '@/components/sigup/progress'
// import SignupHeader from '@/components/sigup/signupHeader'
import SignupComponent from '@/components/sigup/step1'
import Subscription from '@/components/sigup/subscription'
import React, { useState } from 'react'

const Signup = () => {

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (data) => {
    console.log('Form submitted with data:', data);
    // add logic to submit data 
  };


  return (
    <div>
        <div>
            <Navbar/>
        </div>

        <div>
        {

          step == 1 && <SignupComponent onNext={handleNext}/>
        }
        
        {

          step == 2 && <Subscription onPrevious={handlePrevious} onNext={handleNext}/>
        }

        {

          step == 3 && <Payment  data={formData} onPrevious={handlePrevious}/>
        }
        
       
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Signup