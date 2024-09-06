import Navbar from '@/components/common/navbar'
import Footer from '@/components/footer/footer'
import Payment from '@/components/sigup/payment'
import Progress from '@/components/sigup/progress'
import RegistrationComponent from '@/components/sigup/regForm'
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
        <RegistrationComponent/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default Signup