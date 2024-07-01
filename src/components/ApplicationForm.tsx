import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"


const ApplicationForm = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className='align bg-foreground text-white text-sm sm:text-base px-8 sm:px-16 py-2 rounded-lg'>Apply</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Application Form</DialogTitle>
          <DialogDescription>
            An easy-to-use online form that allows potential drivers to apply for a position. This form collects essential information from applicants to streamline the hiring process.
          </DialogDescription>
        </DialogHeader>
        <form
          className="w-full px-4 pt-5 space-y-3 md:space-y-5 flex flex-col"
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
              <label htmlFor="preDrivingExperience">Previous Driving Experience</label>
              <input
                type="text"
                name="preDrivingExperience"
                className="w-full h-9 py-2 outline-none"
                placeholder="(Years, Type of vehicle driven)"
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="experienceTransportIndividuals">Experience with transporting individuals</label>
              <input
                type="text"
                name="experienceTransportIndividuals"
                className="w-full h-9 py-2 outline-none"
                placeholder="if any"
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="certifications">Any relevant certifications or Training</label>
              <input
                type="text"
                name="certifications"
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="availability">Availability</label>
              <input
                type="text"
                name="availability"
                className="w-full h-9 py-2 outline-none"
                placeholder="(full-time, part-time, weekends)"
              />
            </div>
            <div className="w-full border-b border-border flex flex-col">
              <label htmlFor="references">References</label>
              <input
                type="text"
                name="references"
                className="w-full h-9 py-2 outline-none"
                placeholder="if any"
              />
            </div>
            <div className="w-full border-b border-border flex flex-col md:col-span-2">
              <label htmlFor="address">Office Address</label>
              <input
                type="text"
                name="address"
                className="w-full h-9 py-2 outline-none"
                placeholder=""
              />
            </div>
          </div>

          <div className="py-2">
            <button
              type="submit"
              className=" bg-foreground px-10 w-fit  py-3 text-sm md:text-[16px] !text-white rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>

  )
}

export default ApplicationForm