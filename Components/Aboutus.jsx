import React from "react";

export default function AboutMorSelv() {
  return (
    <div className="w-full bg-white text-black font-montserrat overflow-x-hidden">
      {/** ===================== DESKTOP (>= md) ===================== */}
      <div className="hidden md:block">
        {/** HERO - No changes needed */}
        <section className="w-full flex justify-center pt-14 pb-10 px-4">
          <div className="w-full max-w-[1280px] flex items-start justify-between gap-0 mx-auto">
            {/* Left copy */}
            <div className="shrink-0 w-[506px]">
              <div className="text-[#FECD8C] text-[24px] font-semibold leading-[30px] w-[444px] mb-4">
                ABOUT MOR-SELV
              </div>
              <h1 className="text-black text-[64px] font-bold leading-[80px] w-[506px]">
                Wellness, Designed for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">Women</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="215"
                    height="39"
                    viewBox="0 0 215 39"
                    fill="none"
                    aria-hidden="true"
                    className="absolute bottom-[8px] left-0 ml-[80px] z-0 opacity-100 pointer-events-none"
                  >
                    <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FCD69B" />
                  </svg>
                </span>
              </h1>
              <p className="font-inter text-[#5D5D5D] text-[18px] leading-[22.5px] w-[506px] mt-6">
                Connecting you with trusted experts across every aspect <br /> of women's well-being.
              </p>
            </div>

            {/* Right overlapping grey boxes */}
            <div className="relative shrink-0">
              <div
                className="absolute rounded-[20px] bg-[#D9D9D9]"
                style={{ width: 305, height: 328, left: "-602px" }}
              />
              <div
                className="absolute rounded-[20px] bg-[#D9D9D9]"
                style={{
                  width: "413px",
                  height: "238px",
                  left: "-375px",
                  top: "135px",
                  boxShadow: "-12px -6px 35.8px rgba(0,0,0,0.25)",
                }}
              />
            </div>
          </div>
        </section>

        {/** OUR STORY - Fixed full-width section */}
        <section className="w-full pt-[100px] flex flex-col items-center">
          {/* Title with orange trapezoid */}
          <div className="relative inline-block">
            <h2 className="relative z-10 text-[48px] font-bold leading-[60px]">OUR STORY</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="215"
              height="39"
              viewBox="0 0 215 39"
              fill="none"
              aria-hidden="true"
              className="absolute z-0 bottom-[0px] left-1/2 -translate-x-1/2 pointer-events-none opacity-100 ml-[95px]"
            >
              <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FECD8C" />
            </svg>
          </div>
          
          {/* Story copy */}
          <p className="w-full max-w-[1280px] text-center text-[24px] font-normal leading-[36px] mt-6 px-4">
            Morselv was created with one mission — to make women's wellness simple, accessible, and truly holistic. <br />
            We bring together trusted service providers across multiple wellness categories, so you can find the right <br />
            support for your mind, body, and lifestyle — all in one place.
          </p>

          {/* Full-width beige band with properly centered images */}
          <div className="mt-10 w-screen h-[518px] bg-[#F3D0A1] relative overflow-hidden -mx-[calc((100vw-100%)/2)]">
            <div className="absolute inset-0 flex justify-center">
              <div className="relative" style={{ width: '1437px', height: '518px' }}>
                {/* Left tall */}
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 305, height: 388, left: 40, top: 65 }} />
                
                {/* Middle top wide */}
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 413, height: 214, left: 373, top: 65 }} />
                
                {/* Second row images */}
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 305, height: 154, left: 373, top: 303 }} />
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 305, height: 154, left: 708, top: 303 }} />
                
                {/* Right thin */}
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 197, height: 214, left: 814, top: 65 }} />
                
                {/* Far right column */}
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 305, height: 181, left: 1041, top: 65 }} />
                <div className="absolute rounded-[20px] bg-[#D9D9D9]"
                  style={{ width: 305, height: 187, left: 1041, top: 270 }} />
              </div>
            </div>
          </div>
        </section>

        {/** MISSION & VALUES - No changes needed */}
        <section className="w-full flex justify-center py-16 px-4">
          <div className="w-full max-w-[1280px] flex items-start gap-16 mx-auto">
            {/* Left copy */}
            <div className="w-[560px]">
              <div className="relative inline-block">
                <h3 className="text-[64px] font-bold leading-[80px]">
                  <span className="relative inline-block">
                    <span className="relative z-10">Our Mission</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 215 39"
                      fill="none"
                      aria-hidden="true"
                      className="absolute bottom-[0px] left-0 ml-[145px] z-0 opacity-80 pointer-events-none w-[270px] h-[60px]"
                    >
                      <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FECD8C" />
                    </svg>
                  </span>
                  <br />&amp; Values
                </h3>
              </div>
              <p className="mt-7 w-[514px] text-[24px] font-normal leading-[36px]">
                To create a trusted space where women <br /> can access holistic wellness support, <br />connect with experts who truly care, and <br />feel empowered to prioritize their well- <br />being without barriers or guilt.
              </p>
            </div>

            <div className="flex-1 grid grid-cols-2 gap-x-[0px] gap-y-0 pt-2">
              {/* Card 1 */}
              <div className="w-[305px] h-[282px] border border-[#BFBFBF] rounded-[20px] p-[41px] flex flex-col gap-10 mt-0">
                <div className="w-[49px] h-[50px] bg-[#FECD8C] rounded-[6px]" />
                <div className="flex flex-col gap-2">
                  <div className="text-[24px] font-semibold leading-[30px]">Empowerment</div>
                  <div className="text-[#5D5D5D] text-[20px] leading-[25px] font-normal">
                    Helping women take charge of their wellness journey.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-[305px] h-[282px] border border-[#BFBFBF] rounded-[20px] p-[38px] flex flex-col gap-10 mt-[48px] ml-[-5px]">
                <div className="w-[49px] h-[50px] bg-[#FECD8C] rounded-[6px]" />
                <div className="flex flex-col gap-2">
                  <div className="text-[24px] font-semibold leading-[30px]">Accessibility</div>
                  <div className="text-[#5D5D5D] text-[20px] leading-[25px] font-normal">
                    Quality services for every budget and lifestyle.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-[305px] h-[285px] border border-[#BFBFBF] rounded-[20px] p-[41px] flex flex-col gap-10 mt-[-30px]">
                <div className="w-[49px] h-[50px] bg-[#FECD8C] rounded-[6px]" />
                <div className="flex flex-col gap-2">
                  <div className="text-[24px] font-semibold leading-[30px]">Trust</div>
                  <div className="text-[#5D5D5D] text-[20px] leading-[25px] font-normal">
                    Verified providers who care about your well-being.
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="w-[305px] h-[282px] border border-[#BFBFBF] rounded-[20px] p-[41px] flex flex-col gap-10 mt-[20px] ml-[-5px]">
                <div className="w-[49px] h-[50px] bg-[#FECD8C] rounded-[6px]" />
                <div className="flex flex-col gap-2">
                  <div className="text-[24px] font-semibold leading-[30px]">Holistic Approach</div>
                  <div className="text-[#5D5D5D] text-[20px] leading-[25px] font-normal">
                    Caring for body, mind, and soul together.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/** HOW IT WORKS - No changes needed */}
        <section className="w-full flex justify-center bg-[#FFF4E5] py-16 px-4">
          <div className="w-full max-w-[1280px] mx-auto">
            <div className="relative w-full text-center">
              <h3 className="relative z-10 text-[64px] font-bold leading-[80px] inline-block">How it Works</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="225"
                height="59"
                viewBox="0 0 215 39"
                fill="none"
                aria-hidden="true"
                className="absolute z-0 bottom-[0px] left-1/2 -translate-x-1/2 pointer-events-none ml-[120px]"
              >
                <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FECD8C" />
              </svg>
            </div>

            {/* Steps */}
            <div className="mt-12 w-full flex items-start justify-center gap-14">
              {/* Step 1 */}
              <div className="w-[360px] pl-[90px] text-left">
                <div className="inline-flex items-center justify-center rounded-[60px] border-[4px] border-[#FECD8C] px-[21px] py-[10px]">
                  <div className="text-[#FECD8C] text-[40px] font-bold leading-[50px]">1.</div>
                </div>
                <div className="mt-3 text-[24px] font-bold leading-[30px]">EXPLORE</div>
                <div className="mt-2 text-[16px] leading-[20px] font-normal">
                  Discover a variety of trusted wellness services — from fitness to mental health — all in one place.
                </div>
              </div>

              {/* connector */}
              <div className="self-center pt-4">
                <svg width="65" height="12" viewBox="0 0 65 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.0146 1C60.3407 0.884153 61.6125 1.30944 62.5502 2.24906C63.4879 3.1848 64.0146 4.55807 64.0146 6C64.0146 7.44193 63.4879 8.8152 62.5502 9.75094C61.6125 10.6906 60.3407 11.1158 59.0146 11C58.0475 10.9167 57.0803 10.8333 56.1132 10.75C38.7044 9.25 21.2955 7.75 3.88671 6.25C2.91955 6.16667 1.9524 6.08333 0.985245 6C1.9524 5.91667 2.91955 5.83333 3.88671 5.75C21.2955 4.25 38.7044 2.75 56.1132 1.25C57.0803 1.16667 58.0475 1.08333 59.0146 1Z" fill="#FECD8C" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="w-[360px] text-left">
                <div className="inline-flex items-center justify-center rounded-[60px] border-[4px] border-[#FECD8C] px-[21px] py-[10px]">
                  <div className="text-[#FECD8C] text-[40px] font-bold leading-[50px]">2.</div>
                </div>
                <div className="mt-3 text-[24px] font-bold leading-[30px]">SELECT</div>
                <div className="mt-2 text-[16px] leading-[20px] font-normal">
                  Find the provider who understands <br /> your needs and aligns with your <br /> wellness goals.
                </div>
              </div>

              {/* connector */}
              <div className="self-center pt-4">
                <svg width="65" height="12" viewBox="0 0 65 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M59.0146 1C60.3407 0.884153 61.6125 1.30944 62.5502 2.24906C63.4879 3.1848 64.0146 4.55807 64.0146 6C64.0146 7.44193 63.4879 8.8152 62.5502 9.75094C61.6125 10.6906 60.3407 11.1158 59.0146 11C58.0475 10.9167 57.0803 10.8333 56.1132 10.75C38.7044 9.25 21.2955 7.75 3.88671 6.25C2.91955 6.16667 1.9524 6.08333 0.985245 6C1.9524 5.91667 2.91955 5.83333 3.88671 5.75C21.2955 4.25 38.7044 2.75 56.1132 1.25C57.0803 1.16667 58.0475 1.08333 59.0146 1Z" fill="#FECD8C" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="w-[360px] text-left">
                <div className="inline-flex items-center justify-center rounded-[60px] border-[4px] border-[#FECD8C] px-[21px] py-[10px]">
                  <div className="text-[#FECD8C] text-[40px] font-bold leading-[50px]">3.</div>
                </div>
                <div className="mt-3 text-[24px] font-bold leading-[30px]">BOOK</div>
                <div className="mt-2 text-[16px] leading-[20px] font-normal">
                  Schedule your session instantly, and <br /> start your journey toward better well- <br />being.
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="w-full flex justify-center mt-10">
              <button className="inline-flex h-[60px] items-center gap-2 rounded-[10px] bg-[#121212] px-[44px] py-[16px] text-white text-[20px] font-medium leading-[22px]">
                Explore Mor-Selv
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.003 13.2406L4.87461 19.1333L3.34277 17.6604L8.70527 12.5042L3.34277 7.34792L4.87461 5.875L11.003 11.7677C11.2061 11.9631 11.3202 12.228 11.3202 12.5042C11.3202 12.7804 11.2061 13.0453 11.003 13.2406Z" fill="white" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/** ===================== MOBILE (< md) ===================== */}
      <div className="block md:hidden w-full px-4 overflow-x-hidden">
        {/* HERO Mobile */}
        <section className="pt-10">
          <div className="text-[#FECD8C] text-[18px] font-semibold leading-[26px] mb-3">ABOUT MOR-SELV</div>
          <h1 className="text-[34px] font-bold leading-[42px]">
            Wellness, Designed for{" "}
            <span className="relative inline-block">
              <span className="relative z-10">Women</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="18"
                viewBox="0 0 215 39"
                fill="none"
                className="absolute -bottom-0 left-0 w-[115px] h-[28px] ml-[40px] z-0"
              >
                <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FCD69B" />
              </svg>
            </span>
          </h1>
          <p className="font-inter text-[#5D5D5D] text-[16px] leading-[20px] mt-3">
            Connecting you with trusted experts across every aspect of women's well-being.
          </p>
          <div className="relative mt-6 h-[220px] w-full">
            <div className="absolute left-0 top-2 w-[60%] h-[190px] rounded-[20px] bg-[#D9D9D9]" />
            <div 
              className="absolute right-0 top-[80px] w-[70%] h-[150px] rounded-[20px] bg-[#D9D9D9]"
              style={{ boxShadow: "-12px -6px 35.8px rgba(0,0,0,0.25)" }}
            />
          </div>
        </section>

        {/* STORY Mobile */}
        <section className="mt-10">
          <div className="relative inline-block w-full text-center">
            <h2 className="relative z-10 text-[28px] font-bold">OUR STORY</h2>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="140" 
              height="28" 
              viewBox="0 0 215 39" 
              fill="none"
              className="absolute z-0 -bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[28px] pointer-events-none ml-[60px]"
            >
              <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FECD8C" />
            </svg>
          </div>
          <p className="mt-4 text-[16px] leading-[22px] text-center px-2">
            Morselv was created with one mission — to make women's wellness simple, accessible, and truly holistic. 
            We bring together trusted service providers across multiple wellness categories.
          </p>
          
          {/* 7-image grid for mobile */}
          <div className="mt-6 w-full bg-[#F3D0A1] py-6 px-4">
            <div className="grid grid-cols-3 gap-3 h-[400px]">
              <div className="bg-[#D9D9D9] rounded-[20px] row-span-2" />
              <div className="bg-[#D9D9D9] rounded-[20px] col-span-2" />
              <div className="bg-[#D9D9D9] rounded-[20px]" />
              <div className="bg-[#D9D9D9] rounded-[20px]" />
              <div className="bg-[#D9D9D9] rounded-[20px] col-span-2" />
              <div className="bg-[#D9D9D9] rounded-[20px]" />
              <div className="bg-[#D9D9D9] rounded-[20px]" />
            </div>
          </div>
        </section>

        {/* MISSION Mobile */}
        <section className="mt-10">
          <div className="relative inline-block">
            <h3 className="relative text-[28px] font-bold leading-tight inline-block">
              Our{' '}
              <span className="relative inline-block z-10 mx-1">
                <span className="relative z-10">Mission</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 215 39"
                  className="absolute bottom-[0px] left-0 w-[120px] h-[35px] z-0"
                  fill="none"
                >
                  <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FECD8C" />
                </svg>
              </span>
              <br />
              &amp; Values
            </h3>
          </div>
          <p className="mt-3 text-[16px] leading-[22px]">
            A trusted space to access holistic support and feel empowered without barriers or guilt.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {[
              {title: "Empowerment", top: "0", left: "0"},
              {title: "Accessibility", top: "0", left: "0"},
              {title: "Trust", top: "0", left: "0"},
              {title: "Holistic Approach", top: "0", left: "0"}
            ].map((item, i) => (
              <div 
                key={item.title} 
                className="w-full h-[230px] border border-[#BFBFBF] rounded-[20px] p-5 flex flex-col gap-6"
              >
                <div className="w-[42px] h-[44px] bg-[#FECD8C] rounded-[6px]" />
                <div className="text-[18px] font-semibold">{item.title}</div>
                <div className="text-[14px] leading-[18px] text-[#5D5D5D]">
                  {i === 0 && "Helping women take charge of their wellness journey."}
                  {i === 1 && "Quality services for every budget and lifestyle."}
                  {i === 2 && "Verified providers who care about your well-being."}
                  {i === 3 && "Caring for body, mind, and soul together."}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HOW IT WORKS Mobile */}
        <section className="mt-12 bg-[#FFF4E5] py-10 px-4">
          <div className="relative text-center">
            <h3 className="relative z-10 text-[32px] font-bold">How it Works</h3>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="100" 
              height="28" 
              viewBox="0 0 215 39" 
              fill="none"
              className="absolute z-0 -bottom-0 left-1/2 -translate-x-1/2 w-[140px] h-[28px] pointer-events-none ml-[70px]"
            >
              <path d="M10.4116 0H215L204.588 39H0L10.4116 0Z" fill="#FECD8C" />
            </svg>
          </div>

          <div className="mt-8 flex flex-col items-center gap-8">
            {[1, 2, 3].map((n, i) => (
              <div key={n} className="w-full max-w-[360px] text-center">
                <div className="inline-flex rounded-[60px] border-[4px] border-[#FECD8C] px-[21px] py-[10px]">
                  <span className="text-[34px] font-bold text-[#FECD8C]">{n}.</span>
                </div>
                <div className="mt-3 text-[20px] font-bold">{["EXPLORE", "SELECT", "BOOK"][i]}</div>
                <div className="mt-2 text-[14px] leading-[18px]">
                  {i === 0 && "Discover a variety of trusted wellness services — from fitness to mental health — all in one place."}
                  {i === 1 && "Choose personalized options that fit your needs and lifestyle."}
                  {i === 2 && "Book your session securely and begin your wellness journey."}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <button className="inline-flex h-[56px] items-center gap-2 rounded-[10px] bg-[#121212] px-8 text-white text-[18px] font-medium">
              Explore Mor-Selv
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="25" viewBox="0 0 13 25" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.003 13.2406L4.87461 19.1333L3.34277 17.6604L8.70527 12.5042L3.34277 7.34792L4.87461 5.875L11.003 11.7677C11.2061 11.9631 11.3202 12.228 11.3202 12.5042C11.3202 12.7804 11.2061 13.0453 11.003 13.2406Z" fill="white" />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}