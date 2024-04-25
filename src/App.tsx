import { useEffect, useState } from "react";
import { FaArrowUpRightFromSquare, FaHeadSideVirus } from "react-icons/fa6"

function App() {

  const [data, setData] = useState<any>(null);

  const greeting = () => {
    const d = new Date();
    const time = d.getHours();
    console.log(time);

    if (time < 12) {
      return "Good morning";
    }
    if (time > 12 && time < 18) {
      return "Good afternoon";
    }
    if (time >= 18) {
      return "Good evening";
    }
  }

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await fetch('https://api.weatherapi.com/v1/current.json?q=%20177.158.152.154&key=636672c7ca9849e9b0811400242504')
    .then((data) => data.json())
    .then(data => {
      setData(data);
    });
  }

  return (
    <main className="flex bg-opacity-70 flex-col h-screen w-screen bg-olivia bg-cover bg-scroll bg-center bg-no-repeat text-white p-4">
      {/* Header */}
      <div className="flex justify-between font-semibold">

        {/* Header Left */}
        <div className="flex space-x-5">
          <div className="flex flex-col items-center">
            <FaArrowUpRightFromSquare />
            Links
          </div>
          <div className="flex flex-col items-center">
            <FaHeadSideVirus />
            Focus
          </div>
        </div>

        {/* Header right */}
        <div className="flex space-x-5">
          <div>
            <div className="flex space-x-2 text-3xl justify-end">0m</div>
            <div>Focused today</div>
          </div>
          
          <div>
            <div className="flex space-x-2 text-3xl items-center">
              <img src={data?.current.condition.icon} className="h-10" />
              <div>{data?.current.temp_c}°</div>
            </div>
            <div className="text-right">Brasília</div>
          </div>
        </div>
      </div>
      {/* End Header */}

      {/* Content */}
      <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col justify-center items-center max-w-screen-md space-y-10">
        
        <div className="flex flex-col items-center">
          <div className="text-9xl">{data?.location.localtime.split(" ")[1]}</div>
          <div className="text-4xl">{greeting()}, Camila.</div>
        </div>
        <div className="text-3xl">What is your main goal for today?</div>
        <div className="border-b h-px w-full border-white"></div>

      </div></div>
      {/* End content */}

      {/* Footer */}
      <div className="justify-center flex">"Coragen, mulher"</div>
      {/* End footer */}
    </main>
  )
}

export default App
