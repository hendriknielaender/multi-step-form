import React, { useState } from 'react';
import Form from "@rjsf/chakra-ui";
import step1schema from "../schema/page1.json";
import step2schema from "../schema/page2.json";

export default function HookForm() {
  const [formData, setFormData] = useState();
  const [step, setStep] = useState(1);

  const onSubmit = ({formData}) => {
  	if (step === 1) {
      setFormData(formData)
      console.log(formData);
      setStep(2);
    } else {
      alert("You submitted " + JSON.stringify(formData, null, 2));
    }
  }
  
  return (
    <Form schema={step === 1 ? step1schema : step2schema}
          onSubmit={onSubmit}
          formData={formData}
    />  
  )
}
