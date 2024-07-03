const DonorInfoForm: React.FC = ()=> {
  return(
    <div
    className="w-full h-fit lg:min-h-screen py-5 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-themeGrayText"
  >
    <div className="w-full bg-white px-2 py-4 sm:px-8 md:px-20 sm:py-6 md:py-14 md:rounded-3xl">
      <div className="sm:m-0 w-full text-center space-y-4 py-3">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
          Donor Information
        </h2>
        <p className="text-xs md:text-[16px]">
        An easy-to-use online form that allows potential drivers to apply for a position. This form collects essential information from applicants to streamline the hiring process.
        </p>
      </div>
      <form
          className="mx-auto w-full md:w-[70%] lg:w-[50%] px-4 py-4 md:pt-8 space-y-3 md:space-y-5 flex flex-col"
          action=""
        >
          <div className="text-themeGrayText2 w-full text-xs sm:text-xs md:text-sm grid grid-cols-1 gap-2 sm:gap-3">
            <h3 className="text-sm lg:text-base">Billing Details</h3>
              <input
                type="text"
                name="name"
                className="w-full h-8 md:h-9 px-2 py-3 outline-none border border-border rounded-md"
                placeholder="Name"
              />
              <input
                type="text"
                name="cardNo"
                className="w-full h-8 md:h-9 px-2 py-3 outline-none border border-border rounded-md"
                placeholder="Card Number"
              />
          <div className="text-themeGrayText2 w-full text-xs sm:text-sm grid grid-cols-2 gap-2 sm:gap-3">
               <input
                type="text"
                name="expiry"
                className="w-full h-8 md:h-9 px-2 py-3 outline-none border border-border rounded-md"
                placeholder="MM/YY"
              />
               <input
                type="text"
                name="cvv"
                className="w-full h-8 md:h-9 px-2 py-3 outline-none border border-border rounded-md"
                placeholder="CVV"
              />
              </div>
              </div>
          <div className="text-themeGrayText2 w-full text-xs sm:text-sm grid grid-cols-1 gap-2 sm:gap-3">
              <h3 className="text-sm lg:text-base">Country</h3>
              <input
                type="text"
                name="country"
                className="w-full h-8 md:h-9 px-2 py-3 outline-none border border-border rounded-md"
                placeholder="Country Name"
              />
              <input
                type="text"
                name="zipCode"
                className="w-full h-8 md:h-9 px-2 py-3 outline-none border border-border rounded-md"
                placeholder="Zipcode"
              />
              </div>
              <p className="w-full text-sm text-themeGrayText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
        </form>
    </div>
  </div>
  )
}

export default DonorInfoForm