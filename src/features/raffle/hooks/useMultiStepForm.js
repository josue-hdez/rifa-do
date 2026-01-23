"use client";

import { useState, useRef } from "react";

export const useMultiStepForm = (steps, formTrigger) => {
  const [currentStep, setCurrentStep] = useState(0);
  const isLastStep = useRef(false);

  const nextStep = async () => {
    const fields = steps[currentStep].fields;
    const isValid = await formTrigger(fields);

    if (!isValid) return;

    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const markAsLastStep = () => (isLastStep.current = true);

  return { steps, currentStep, isLastStep, nextStep, prevStep, markAsLastStep };
};
