
export default function Contact() {
  return (
    <>
    
    <div className="mx-15 mt-10 max-sm:mx-2 max-sm:mt-7"> 
      <h1 className="text-5xl max-sm:text-3xl max-sm:text-center">Contact</h1>
      <p className="pt-12 max-sm:pt-8">We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
      <h1 className="pt-6 text-2xl text-[#607DA9] max-sm:pt-4 max-sm:lg">Catering Service, 42nd Living St, 43043 New York, NY</h1>
      <p className="pt-6 max-sm:pt-4">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>

    <div>
      <form className="mt-4 space-y-6">
        <input className="border-b-2 border-gray-400 w-full" type="text" id="name" placeholder="Name" />
        <br />
        <br/>
        <input className="border-b-2 w-full border-gray-400" type="text" id="people" placeholder="How many people" />
        <br />
        <br />
        <input className="border-b-2 w-full border-gray-400" type="datetime-local" id="date" value="2020-11-16T20:00" placeholder="" />
        <br />
        <br />
        <textarea className="border-b-2 w-full border-gray-400" name="message" id="message " placeholder="Message\Special Requirement"></textarea>
      </form>
    </div>

      <button className="mt-6 p-3 text-2xl bg-gray-300 text-black">Send Message</button>
    </div>

    </>
  )
}
