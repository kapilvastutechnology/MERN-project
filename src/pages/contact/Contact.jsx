
export default function Contact() {
  return (
    <div className="px-7 my-15 ">
      <h1 className="text-2xl">Contact</h1>
      <p className="mt-7">Lets get in touch and talk about your next project.</p>

      <div className="space-y-7 mt-5">
        <input  className="border-2  border-gray-300 w-full p-2" type="text" name="fname" id="fname" placeholder="Name"/>
        <br />
        <input  className="border-2 border-gray-300 w-full p-2"type="e-mail" name="" id="" placeholder="E-Mail" />
        <br />
        <input className="border-2 border-gray-300 w-full p-2" type="text"  name="subject" id="" placeholder="Subject"/>
        <br />
        <input className="border-2 border-gray-300 w-full p-2" type="text"  name="comment" id="" placeholder="Comment"/>

        <br />
        <button className=" bg-black text-white p-3 hover:bg-gray-500 hover:text-black">SEND MESSAGE</button>
      </div>

    
    <div className="mt-10">
      <div className="max-w-full h-[606px] max-sm:h-[80vw]  bg-[url('https://www.w3schools.com/w3images/map.jpg')] bg-cover bg-no-repeat flex justify-center"></div>
      </div>
    
    </div>
  )
}