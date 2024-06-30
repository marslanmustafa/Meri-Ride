const ConnectForm: React.FC = ()=> {
  return(
    <div
    style={{ backgroundImage: `url('/images/about/bg.svg')` }}
    className="w-full h-fit lg:min-h-screen p-4 md:px-8 lg:px-20 xl:px-32 lg:py-16 text-themeGrayText"
  >
    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center font-bold p-4 sm:pb-6">
      Let&apos;s Start
    </h1>
    <div className="w-full bg-white px-2 py-4 sm:px-8 md:px-20 sm:py-6 md:py-14 rounded-3xl">
      <div className="m-auto sm:m-0 w-full sm:w-[430px]">
        <h2 className="text-xl md:text-[30px] font-semibold pb-3">
          Let&apos;s connect constellations
        </h2>
        <h3 className="text-xs md:text-textEm">
          Let&apos;s align our constellations! Reach out and let the magic
          of collaboration illuminate our skies.
        </h3>
      </div>
      <form
        className="w-full py-4 space-y-3 md:space-y-5 flex flex-col items-center"
        action=""
      >
        <div className="text-sm sm:text-textEm w-full flex justify-between flex-wrap gap-4">
          <input
            type="text"
            name="fname"
            className="w-full sm:w-[48%] h-9 md:h-11 border border-border rounded-lg px-4 py-3"
            placeholder="First Name"
          />
          <input
            type="text"
            name="lname"
            className="w-full sm:w-[48%] h-9 md:h-11 border border-border rounded-lg px-4 py-3"
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            className="w-full h-9 md:h-11 border border-border rounded-lg px-4 py-3"
            placeholder="Email"
          />
          <input
            type="number"
            name="phone"
            className="w-full h-9 md:h-11 border border-border rounded-lg px-4 py-3"
            placeholder="Phone"
          />
          <textarea
            name="message"
            id=""
            rows={4}
            className="w-full sm:h-44 border border-border rounded-lg px-4 py-3 resize-none"
            placeholder="Message"
          ></textarea>
        </div>
        <button
          type="submit"
          className=" bg-foreground px-10 sm:px-20 lg:px-40 py-3 text-sm md:text-textEm !text-white rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
  )
}

export default ConnectForm