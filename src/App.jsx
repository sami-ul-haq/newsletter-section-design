import Pic from "./assets/sub-pic.png";

function App() {

  return (
    <div className="w-100 h-screen flex items-center justify-center bg-[#f7f7f7]">
      <div className="flex flex-col bg-white rounded-lg drop-shadow  w-4/5 md:w-3/4 lg:w-1/2 md:flex-row py-16 px-10">
        <div className="img flex-1 my-auto">
          <img src={Pic} alt="picture" className="block mx-auto mb-5 md:mb-0"/>
        </div>
        <div className="right flex-1">
          <h2 className="text-2xl color-black-600 text-center md:text-left">Subscribe To</h2>
          <h1 className="font-bold text-4xl text-center md:text-left">Our Newsletter</h1>
          <p className="text-black-700 py-3 text-center md:text-left">Subscribe to our newsletter & stay updated</p>
          <div className="sub-form flex flex-col gap-3">
            <input type="text" placeholder="Your Email" className="p-2 border rounded focus:outline-none placeholder:text-black  border-gray"/>
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 text-white p-2 rounded uppercase font-bold">Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;