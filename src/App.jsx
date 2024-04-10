import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./components/Input";
import useCurrencyInfo from "./customeHook/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState("");
  const [to, setTo] = useState("inr");
  const [from, setFrom] = useState("usd");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currInfo = useCurrencyInfo(from);
  const options = Object.keys(currInfo);
  let convert = () => {
    // console.log(amount);
    setConvertedAmount((amount * currInfo[to]).toFixed(2));
  };

  let swap = ()=>{
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  }

  return (
    <>
      <div
        className="container bg-slate-400 flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`
        }}
      >
        <div className="box bg-black h-2/4 w-2/5 rounded-xl"></div>
        <main className="bg-black h-2/4 w-2/5 absolute opacity-85 rounded-xl shadow-2xl shadow-black font-sans flex justify-center" style={{backgroundImage: `url('https://images.pexels.com/photos/534229/pexels-photo-534229.jpeg?auto=compress&cs=tinysrgb&w=600')`,objectFit:`fill`, backgroundRepeat:`repeat-x`}}>
          <form className="flex flex-col items-center justify-around h-3/4 w-3/4">
            <div className="firstInput flex gap-2">
              <Input
                label="From"
                inputVal={amount}
                dropDownOptions={options}
                dropDownVal={from}
                onChangeInput={(amount) => setAmount(amount)}
                onChangeCountry={(from) => setFrom(from)}
              />
            </div>

            <div className="swap-btn">
              <button type="button" className="btn-submit border-x-2 border-y-2 border-black bg-slate-400 p-2 rounded-lg hover:shadow-2xl shadow-black hover:bg-green-300 cursor-pointer" onClick={swap}>Swap</button>
            </div>

            <div className="secondInput flex gap-2">
              <Input
                label="To"
                inputVal={convertedAmount}
                dropDownOptions={options}
                dropDownVal={to}
                isReadOnly={true}
                onChangeCountry={(to) => setTo(to)}
              />
            </div>

            <div className="btn-submit border-x-2 border-y-2 border-black bg-slate-400 p-2 rounded-lg hover:shadow-2xl shadow-black hover:bg-red-300 cursor-pointer">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  convert();
                }}
              >
                Convert
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default App;
