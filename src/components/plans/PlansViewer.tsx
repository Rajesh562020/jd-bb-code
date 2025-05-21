import React from "react";
type Plan = {
  id: number;
  name: string;
  desc: string;
  price: string;
  features: string[];
};

const plans: Plan[] = [
  {
    id: 1,
    name: "Abcd Vintage",
    desc: "Perfect for balanced, all-level traders lookin for consistency and solid growth.",
    price: "$10%",
    features: ["from 0.2pips", "No Commission", "1:Unlimited","0.01","200 trades during peek hours","Unlimited","0%","30%","0%","Moderate","Forex,Crypto,Stocks,Commodities,Indices"],
  },
  {
    id: 2,
     name: "Abcd Cent",
    desc: "Perfect for balanced, all-level traders lookin for consistency and solid growth.",
    price: "$10%",
    features: ["from 0.2pips", "No Commission", "1:Unlimited","0.01","200 trades during peek hours","Unlimited","0%","30%","0%","Moderate","Forex,Crypto,Stocks,Commodities,Indices"],
  },
  {
    id: 3,
    name: "Abcd Pro",
    desc: "Perfect for balanced, all-level traders lookin for consistency and solid growth.",
    price: "$10%",
    features: ["from 0.2pips", "No Commission", "1:Unlimited","0.01","200 trades during peek hours","Unlimited","0%","30%","0%","Moderate","Forex,Crypto,Stocks,Commodities,Indices"],
  },
];
export default function PlansViewer() {
  return (
    <section className="w-full sm:px-6 flex justify-center flex-col items-center gap-1 py-[100px]">
      <span
        className="px-6 py-3 mb-2 border border-white/25 rounded-[20px] font-semibold text-[#b195f0]"
        style={{
          fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "-0.02em",
          lineHeight: "16px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: "rgba(255,255,255,0.25)",
          opacity: 1,
        }}
      >
        Compare Plans
      </span>
      <h1
        className="text-center font-medium"
        style={{
          fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
          fontSize: "36px",
          fontStyle: "normal",
          fontWeight: 500,
          letterSpacing: "-0.05em",
          lineHeight: "40px",
          color: "#fff",
          textTransform: "none",
          textDecoration: "none",
        }}
      >
        Start Small, <br />
        <span
          className="bg-gradient-to-r from-[#a35ca2] to-[#a35ca2] bg-clip-text text-transparent font-bold"
          style={{
            fontWeight: 500,
            fontStyle: "normal",
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
          }}
        >
          Scale
        </span>
        &nbsp;Big
      </h1>
      <div className="flex flex-col items-center gap-2">
        <span
          className="font-medium text-center"
          style={{
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            letterSpacing: "-0.01em",
            lineHeight: "20px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "16px",
            textAlign: "center",
            fontWeight: 500,
            textTransform: "none",
            textDecoration: "none",
            WebkitTextStrokeWidth: "initial",
            WebkitTextStrokeColor: "initial",
            fontFeatureSettings: "initial",
            fontVariationSettings: "normal",
          }}
        >
          Flexible Deposits for
        </span>
        <span
          className="font-medium text-center"
          style={{
            fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            letterSpacing: "-0.01em",
            lineHeight: "20px",
            color: "rgba(255,255,255,0.75)",
            fontSize: "16px",
            textAlign: "center",
            fontWeight: 500,
            textTransform: "none",
            textDecoration: "none",
            WebkitTextStrokeWidth: "initial",
            WebkitTextStrokeColor: "initial",
            fontFeatureSettings: "initial",
            fontVariationSettings: "normal",
          }}
        >
          Every Trader
        </span>
      </div>
      {/* Plans Cards Grid */}
      <div className="mt-16 grid gap-8 grid-cols-2 max-w-6xl w-[60%] px-4">
        {/* Optional first card */}
        <div className="bg-black-800 rounded-lg p-6 shadow-lg flex flex-col overflow-hidden w-full">
          <h3
            className="text-xl font-semibold mb-8 text-center"
            style={{
              fontFamily: '"Manrope", "Manrope Placeholder", sans-serif',
            }}
          >
            {/* Optional header content */}
          </h3>
          <table className="w-full text-center table-auto">
            <tbody>
              <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Who it&apos;s for
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Initial capital requirement
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Spread advantage
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Trading fees
                </td>
              </tr>
                <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Leverage Capicity
                </td>
              </tr>
              <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Minimum lot size
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                  Trade execution limit
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                 Position Capacity
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                 Out Threshold
                </td>
              </tr>
               <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                 Margin call activation
                </td>
              </tr>
                <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                 Swap Policy
                </td>
              </tr>
                <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                 Risk Exposure
                </td>
              </tr>
                <tr>
               
                <td
                  className="py-3 text-sm gradient-border"
                  style={{
                    fontFamily:
                      '"Manrope", "Manrope Placeholder", sans-serif',
                  }}
                >
                 Asset Options
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`relative rounded-lg p-1 shadow-lg flex flex-col overflow-hidden w-full ${
              index === 0 || index === 2
                ? "bg-gradient-to-b from-[#a35ca2] to-[#000]"
                : "bg-black-800"
            }`}
          >
            {index === 1 && (
              <span className="absolute inset-0 rounded-lg border-2 border-[#b195f0] animate-border-travel pointer-events-none"></span>
            )}
            <h3
              className="py-4 text-2xl text-center font-semibold"
              style={{
                fontFamily:
                  '"Manrope", "Manrope Placeholder", sans-serif',
              }}
            >
              {plan.name}
            </h3>
            <p
              className="text-center font-semibold mb-4 text-xs"
              style={{
                fontFamily:
                  '"Manrope", "Manrope Placeholder", sans-serif',
              }}
            >
              {plan.desc}
            </p>
            <table className="w-[50%] text-center table-auto mx-auto">
              <tbody>
                <tr>
                  <td
                    className="py-3 text-sm gradient-border text-center"
                    style={{
                      fontFamily:
                        '"Manrope", "Manrope Placeholder", sans-serif',
                    }}
                  >
                    {plan.price}
                  </td>
                </tr>

                {plan.features.map((feature, idx) => (
                  <tr key={idx}>
                    <td
                      className="py-3 text-sm gradient-border text-center"
                      style={{
                        fontFamily:
                          '"Manrope", "Manrope Placeholder", sans-serif',
                      }}
                    >
                      {feature}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="relative px-6 py-3 rounded-xl text-white font-medium bg-[#7c5fe6] overflow-hidden border-2 border-[#b195f0] group">Start Trading</button>
          </div>
        ))}
      </div>
    </section>
  );
}
