import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/optionSelection";
import Translation from "./components/compile";
import { arrayItem } from "./aiOptions";
import { useState } from "react";

function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  // console.log(import.meta.env.VITE_Open_AI_Key);
  const selectOption = (option) => {
    setOption(option);
  };

  const makeSearch = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItem={arrayItem} selectOption={selectOption} />
      ) : (
        <Translation makeSearch={makeSearch} setInput={setInput} result={result} />
      )}
    </div>
  );
}

export default App;
