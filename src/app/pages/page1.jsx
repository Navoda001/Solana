import React from "react";
import Hero from "../components/hero";
import Card1 from "../components/card1";

const Page1 = () => {
  return (
    <div className="bg-[rgba(0,0,0,0.28)] min-h-screen">
      <Hero />

      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-18 items-start">
          {/* Left Section - Title */}
          <div className="flex items-center lg:sticky lg:top-24">
            <div>
              <h2 className="text-white text-[38px] lg:text-6xl font-normal leading-tight">
                Made for
                <br />
                mass adoption.
              </h2>
              <div className="relative inline-block">
                <div
                  className={`absolute top-4 -left-2 rounded-full bg-[rgba(31,207,241,1)]`}
                  style={{ width: "4.29px", height: "4.29px" }}
                ></div>
                <p className="text-[rgba(196,196,196,1)] text-sm mt-4 tracking-widest">
                  LIVE DATA
                </p>
              </div>
            </div>
          </div>

          {/* Right Section - Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-6 md:pt-12">
              <Card1
                title="Fast"
                description="Don't keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network."
                count="3,969"
                label="TRANSACTIONS PER SECOND"
                accentColor="border-[rgba(31,207,241,1)]"
                dotColor="bg-[rgba(31,207,241,1)]"
              />

              <Card1
                title="Scalable"
                description="Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01."
                count="163,077,581,394"
                label="TOTAL TRANSACTIONS"
                accentColor="border-[rgba(153,69,255,1)]"
                dotColor="bg-[rgba(153,69,255,1)]"
              />
            </div>

            <div className="flex flex-col gap-6">
              <Card1
                title="Decentralized"
                description="The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant."
                count="1,675"
                label="VALIDATOR NODES"
                accentColor="border-[rgba(255,213,18,1)]"
                dotColor="bg-[rgba(255,213,18,1)]"
              />

              <Card1
                title="Energy Efficient"
                description={
                  <>
                    Solana's proof of stake network and other innovations
                    minimize its impact on the{" "}
                    <a
                      href="https://climate.solana.com/"
                      className="font-medium"
                      style={{ color: "rgba(25, 251, 155, 1)" }}
                      
                    >
                      environment.
                    </a>
                     Each Solana transaction uses about the same energy as a
                    few Google searches.
                  </>
                }
                count="0%"
                label="NET CARBON IMPACT"
                accentColor="border-[rgba(25,251,155,1)]"
                dotColor="bg-[rgba(25,251,155,1)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
