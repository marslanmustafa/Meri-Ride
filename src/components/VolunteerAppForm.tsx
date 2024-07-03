const VolunteerAppForm: React.FC = ()=> {
  return(
    <div
    className="w-full h-fit lg:min-h-screen py-5 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-themeGrayText"
  >
    <div className="w-full bg-white px-2 py-4 sm:px-8 md:px-20 sm:py-6 md:py-14 md:rounded-3xl">
      <div className="sm:m-0 w-full text-center space-y-4 py-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Volunteer Application Form
        </h2>
        <p className="text-xs md:text-[16px]">
        An online form that allows individuals to sign up for volunteer opportunities, collecting essential information to match their skills and availability with the organization’s needs.
        </p>
      </div>
      <form
          className="w-full px-4 pt-8 space-y-3 md:space-y-5 flex flex-col"
          action=""
        >
          <div className="text-sm sm:text-sm w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                name="phone"
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="skillAndExperience">Skill and Experience</label>
              <input
                type="text"
                name="skillAndExperience"
                className="w-full h-9 py-2 outline-none"
                placeholder="Relevent skill, previous volunteer experience"
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="interests">Interests</label>
              <input
                type="text"
                name="interests"
                className="w-full h-9 py-2 outline-none"
                placeholder="Preferred days and times"
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="availability">Availability</label>
              <input
                type="text"
                name="availability"
                className="w-full h-9 py-2 outline-none"
                placeholder="Preferred days and times"
              />
            </div>
          </div>

          <div className="py-2 sm:py-4">
            <button
              type="submit"
              className=" bg-foreground px-10 w-fit  py-3 text-sm md:text-[16px] !text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
    </div>
  </div>
  )
}

export default VolunteerAppForm