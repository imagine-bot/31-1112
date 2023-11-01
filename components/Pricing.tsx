import React from 'react'

interface PricingPlan {
  name: string
  price: number
  features: string[]
}

interface PricingProps {
  monthly: PricingPlan[]
  annual: PricingPlan[]
}

const Pricing: React.FC<PricingProps> = ({ monthly, annual }) => {
  const [isAnnual, setIsAnnual] = React.useState(false)
  const plans = isAnnual ? annual : monthly

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center mb-4">
        <label className="mr-2">Monthly</label>
        <input
          type="radio"
          checked={!isAnnual}
          onChange={() => setIsAnnual(false)}
        />
        <label className="mr-2 ml-4">Annual</label>
        <input
          type="radio"
          checked={isAnnual}
          onChange={() => setIsAnnual(true)}
        />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border rounded p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl mb-2">{plan.name}</h2>
            <p className="text-xl mb-4">${plan.price}</p>
            <ul>
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing