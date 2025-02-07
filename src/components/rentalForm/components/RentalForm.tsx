import * as React from 'react';
import { InputField } from './components/InputField';
import { SelectField } from './components/SelectField';
import { StepHeader } from './components/StepHeader';
import { PaymentMethod } from './components/PaymentMethod';
import { RentalSummary } from './components/RentalSummary';
import Image from 'next/image';

export const RentalForm: React.FC = () => {
  return (
    <div className="overflow-hidden p-8 bg-neutral-100 max-md:px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[63%] max-md:ml-0 max-md:w-full">
          <form className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            {/* Billing Section */}
            <div className="flex overflow-hidden flex-col p-6 w-full bg-white rounded-xl max-w-[852px]">
              <StepHeader
                title="Billing Info"
                subtitle="Please enter your billing info"
                step="Step 1 of 4"
              />
              
              <div className="flex gap-5 max-md:flex-col">
                <InputField label="Name" placeholder="Your name" />
                <InputField label="Phone Number" placeholder="Phone number" />
              </div>
              
              <div className="flex flex-wrap gap-8 mt-6">
                <InputField label="Address" placeholder="Address" />
                <InputField label="Town / City" placeholder="Town or city" />
              </div>
            </div>

            {/* Rental Info Section */}
            <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
              <StepHeader
                title="Rental Info"
                subtitle="Please select your rental date"
                step="Step 2 of 4"
              />
              
              {/* Pick-up Section */}
              <div className="flex gap-2 items-center mt-8">
                <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-600 bg-opacity-30 rounded-[70px]">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
                <span className="text-base font-semibold tracking-tight text-gray-900">
                  Pick - Up
                </span>
              </div>

              <div className="flex flex-wrap gap-8 mt-6">
                <SelectField
                  label="Locations"
                  placeholder="Select your city"
                  icon="/images/r1.svg"
                />
                <SelectField
                  label="Date"
                  placeholder="Select your date"
                  icon="/images/r1.svg"
                />
              </div>

              <SelectField
                label="Time"
                placeholder="Select your time"
                icon="/images/r1.svg"
              />

              {/* Drop-off Section */}
              <div className="flex gap-2 items-center mt-8">
                <div className="flex justify-center items-center px-1 w-4 h-4 bg-blue-400 bg-opacity-30 rounded-[70px]">
                  <div className="w-2 h-2 bg-blue-400 rounded-full" />
                </div>
                <span className="text-base font-semibold tracking-tight text-gray-900">
                  Drop - Off
                </span>
              </div>

              <div className="flex flex-wrap gap-8 mt-6">
                <SelectField
                  label="Locations"
                  placeholder="Select your city"
                  icon="/images/r1.svg"
                />
                <SelectField
                  label="Date"
                  placeholder="Select your date"
                  icon="/images/r1.svg"
                />
              </div>

              <SelectField
                label="Time"
                placeholder="Select your time"
                icon="/images/r1.svg"
              />
            </div>

            {/* Payment Method Section */}
            <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
              <StepHeader
                title="Payment Method"
                subtitle="Please enter your payment method"
                step="Step 3 of 4"
              />

              <div className="flex overflow-hidden flex-col p-6 mt-8 w-full rounded-xl bg-neutral-100">
                <div className="flex gap-5 max-md:flex-col">
                  <InputField label="Card Number" placeholder="Card number" />
                  <InputField label="Expiration Date" placeholder="DD / MM / YY" />
                </div>
                
                <div className="flex flex-wrap gap-8 mt-6">
                  <InputField label="Card Holder" placeholder="Card holder" />
                  <InputField label="CVC" placeholder="CVC" type="password" />
                </div>
              </div>

              <PaymentMethod
                icon="/images/p1.svg"
                name="PayPal"
                logo="/images/p2.svg"
              />
              
              <PaymentMethod
                icon="/images/p1.svg"
                name="Bitcoin"
                logo="/images/p3.svg"
              />
            </div>

            {/* Confirmation Section */}
            <div className="flex overflow-hidden flex-col p-6 mt-8 w-full bg-white rounded-xl">
              <StepHeader
                title="Confirmation"
                subtitle="We are getting to the end. Just few clicks and your rental is ready!"
                step="Step 4 of 4"
              />

              <div className="flex flex-col mt-8">
                <label className="flex items-center gap-5 px-8 py-4 rounded-xl bg-neutral-100">
                  <input type="checkbox" className="sr-only" />
                  <div className="flex justify-center items-center w-6 h-6 border-2 border-gray-300 rounded">
                    <div className="hidden w-4 h-4 bg-blue-600 rounded" />
                  </div>
                  <span className="text-base font-semibold tracking-tight text-slate-800">
                    I agree with sending an Marketing and newsletter emails. No spam, promissed!
                  </span>
                </label>

                <label className="flex items-center gap-5 px-8 py-4 mt-6 rounded-xl bg-neutral-100">
                  <input type="checkbox" className="sr-only" />
                  <div className="flex justify-center items-center w-6 h-6 border-2 border-gray-300 rounded">
                    <div className="hidden w-4 h-4 bg-blue-600 rounded" />
                  </div>
                  <span className="text-base font-semibold tracking-tight text-slate-800">
                    I agree with our terms and conditions and privacy policy
                  </span>
                </label>
              </div>
                    <button
  className="gap-2 self-start px-6 py-3 mt-1 text-base font-medium tracking-tight text-center text-white bg-[#3563E9] rounded min-h-[10px] w-[130px] whitespace-nowrap"
 
>
  Rent Now
</button>

              <div className="flex overflow-hidden flex-col mt-8 max-w-full w-[548px]">
                <Image
                  loading="lazy"
                  src="/images/tick.svg"
                  alt=""
                  height={6}
                  width={6}
                  className="w-8 aspect-square"
                />
                <div className="mt-4">
                  <h4 className="text-base font-semibold tracking-tight text-gray-900">
                    All your data are safe
                  </h4>
                  <p className="mt-2 text-sm font-medium tracking-tight text-slate-400">
                    We are using the most advanced security to provide you the best experience ever.
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="flex flex-col ml-5 w-[37%] max-md:ml-0 max-md:w-full">
          <RentalSummary
            carName="Nissan GT - R"
            carImage="/images/tick2.png"
            rating={4}
            reviews={440}
            subtotal={80.00}
            tax={0}
            total={80.00}
          />
        </div>
      </div>
    </div>
  );
};