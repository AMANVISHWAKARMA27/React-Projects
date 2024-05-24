import { useCallback, useRef, useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumberAllowed) str += "1234567890";
    if (isCharacterAllowed) str += "!@#$%^&*()_-+={}[]|';:.>,</?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharacterAllowed, isNumberAllowed, passwordGenerator]);

  return (
    <div className="flex flex-col h-[100vh] w-[100%] bg-black text-white justify-center items-center">
      <div className="flex flex-col jutiify-around items-center p-10 outline rounded-lg bg-slate-700">
        <h1 className="text-[30px] mb-4 text-slate-300">Password Generator</h1>
        <div className="flex w-[95%] h-[30px] rounded shadow-lg">
          <input
            type="text"
            value={password}
            className="outline-none bg-aliceblue w-[80%] rounded pl-2 text-black"
            readOnly
            placeholder="Password"
            ref={passwordRef}
          />
          <button
            className="bg-blue-600 rounded w-[20%] h-[100%] hover:bg-blue-500 duration-[0.3s]"
            onClick={copyToClipboard}
          >
            Copy
          </button>
        </div>
        <div className="flex flex-row justify-between w-[100%] mt-5">
          <input
            type="range"
            className="mr-1"
            min={6}
            max={100}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <label className="text-orange-400 mr-5">length : {length}</label>
          <input
            type="checkbox"
            className="mr-1 rounded-full"
            defaultChecked={isNumberAllowed}
            onChange={() => setIsNumberAllowed((prev) => !prev)}
          />
          <label className="text-orange-400 mr-5">Number</label>
          <input
            type="checkbox"
            className="mr-1"
            defaultChecked={isCharacterAllowed}
            onChange={() => setIsCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor="characterInput" className="text-orange-400 mr-5">
            Character
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
