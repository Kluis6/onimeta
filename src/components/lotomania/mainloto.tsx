"use client";
import React, { useEffect, useState } from "react";

type LotoManiaResult = {
  data: string;
  concurso: string;
  dezenas: string[];
};

type AcertosCount = {
  20: number;
  19: number;
  18: number;
  17: number;
  16: number;
  15: number;
  0: number;
};

export default function MainLoto() {
  const [lotoMania, setLotoMania] = useState<LotoManiaResult[]>([]);
  const [valor, setValor] = useState("");
  const [tabs, setTabs] = useState(true);
  const [acertos, setAcertos] = useState<AcertosCount>({
    20: 0,
    19: 0,
    18: 0,
    17: 0,
    16: 0,
    15: 0,
    0: 0,
  });

  // Estado que gerencia uma lista de strings
  const [items, setItems] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  // Função para adicionar um item à lista
  const addItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue(""); // Limpa o campo de entrada após adicionar
    }
  };



   // Função para remover um item da lista com base no índice
   const removeItem = (index: number) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const [option, setOption] = useState<LotoManiaResult[]>([]);
  // Ordena o array em ordem crescente
  // const sortedOptions = option.sort((a, b) => a - b);
  const sortedOptions = option.sort(
    (a: LotoManiaResult, b: LotoManiaResult) => {
      const aConcurso = parseInt(a.concurso);
      const bConcurso = parseInt(b.concurso);
      return aConcurso - bConcurso;
    }
  );

  const tabsSwitch = () => {
    setTabs(true);
  };
  const tabsSwitch2 = () => {
    setTabs(false);
  };
  const [unico, setUnico] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove espaços e adiciona espaço a cada dois dígitos
    const formattedValue = e.target.value
      .replace(/\D/g, "")
      .replace(/(\d{2})(?=\d)/g, "$1 ");
    setUnico(formattedValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://loteriascaixa-api.herokuapp.com/api/lotomania/${valor}`
      );
      const data: LotoManiaResult = await response.json();
      setLotoMania(valor.length > 0 ? [data] : Array.isArray(data) ? data : []);
    };

    fetchData();
  }, [valor]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://loteriascaixa-api.herokuapp.com/api/lotomania/`
      );
      const data: LotoManiaResult = await response.json();
      setOption(option.length < 0 ? [data] : Array.isArray(data) ? data : []);
    };

    fetchData();
  });

  // Função para lidar com a mudança de seleção
  const handleSelectChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValor(event.target.value);
  };

  const verificarAcertos = () => {
    const totalAcertos: AcertosCount = {
      20: 0,
      19: 0,
      18: 0,
      17: 0,
      16: 0,
      15: 0,
      0: 0,
    };

    lotoMania.forEach((result) => {
      const dezenas = result.dezenas;
      const matches = dezenas.filter((dezena) => unico.includes(dezena)).length;

      if (matches >= 15) {
        totalAcertos[matches as keyof AcertosCount]++;
      } else if (matches === 0) {
        totalAcertos[0]++;
      }
    });

    setAcertos(totalAcertos);
  };

  return (
    <div className="h-full">
      <div className="bg-white p-4 my-4">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-orange-500 text-base font-bold">LotoMania</h2>
              <span className="flex items-center gap-3 ">
                <h3>Concurso:</h3>
                <select
                  className="outline outline-1 outline-black w-48 ps-2 py-1"
                  id="concurso"
                  value={valor}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled>
                    Escolha o concurso
                  </option>
                  {Array.isArray(option) ? (
                    sortedOptions.map((resulto) => (
                      <option
                        id="concurso"
                        key={resulto.concurso}
                        value={resulto.concurso}
                        className=""
                      >
                        {resulto.concurso}
                      </option>
                    ))
                  ) : (
                    <option>Carregando...</option>
                  )}{" "}
                  */
                </select>
              </span>
            </div>

            <div className="bg-gray-100 p-4">
              {Array.isArray(lotoMania) ? (
                lotoMania.map((result) => (
                  <ul key={result.concurso} className="">
                    <li className="p-1">
                      <div className="text-gray-600">
                        <h4>
                          Concurso:{" "}
                          <span className="font-medium">{result.concurso}</span>{" "}
                        </h4>
                        <p>
                          Data do sorteio:{" "}
                          <span className="font-medium"> {result.data}</span>{" "}
                        </p>
                        <div>
                          <h4>Dezenas sorteadas</h4>
                          <div>
                            <p className="font-medium">
                              {result.dezenas.join("  ")}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
          <div className="col-span-6">
            <div className="w-full flex justify-between items-center mb-2">
              <button
                className="w-full py-1.5 bg-slate-400"
                onClick={tabsSwitch}
              >
                metodo 1
              </button>{" "}
              <button
                className="w-full  py-1.5 bg-slate-400"
                onClick={tabsSwitch2}
              >
                metodo 2
              </button>
            </div>
            {tabs ? (
              <div className="">
                <h2 className="text-lg font-medium">Exibir resultados</h2>
                <div className="flex justify-between gap-2">
                  <input
                    className="w-full px-2 bg-gray-100 placeholder:text-gray-600"
                    type="text"
                    placeholder="digite sua combinação"
                    value={unico}
                    onChange={handleChange}
                  />
                  <button
                    className="bg-blue-500 px-5 py-1.5 font-medium text-base text-white"
                    onClick={verificarAcertos}
                  >
                    Verificar
                  </button>
                </div>
                <section>
                  <ul>
                    <li>
                      <div>
                        <h3>Teste 1</h3>
                        <div className="w-full h-10">
                          <p>{unico}</p>
                        </div>

                        <div className="bg-gray-100">
                          <h2 className="text-base font-medium">
                            Total de acertos
                          </h2>
                          <div className="flex justify-between items-center text-center">
                            <span className="w-full bg-red-500 text-white font-bold">
                              20 : {acertos[20]}
                            </span>
                            <span className="w-full bg-green-800 text-white font-bold">
                              19 : {acertos[19]}
                            </span>
                            <span className="w-full bg-green-700 text-white font-bold">
                              18 : {acertos[18]}
                            </span>
                            <span className="w-full bg-green-600 text-white font-bold">
                              17 : {acertos[17]}
                            </span>
                            <span className="w-full bg-green-500 text-white font-bold">
                              16 : {acertos[16]}
                            </span>
                            <span className="w-full bg-green-400 text-green-800 font-bold">
                              15 : {acertos[15]}
                            </span>
                            <span className="w-full bg-green-300 text-green-800 font-bold">
                              {" "}
                              0 : {acertos[0]}
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </section>
              </div>
            ) : (
              <div className="w-full h-full">
                <div className="flex justify-between items-center gap-2">
                  <input
                    type="text"
                    className="bg-gray-100 w-full p-1.5 placeholder:text-gray-500"
                    placeholder="Digite sua combinação"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <button
                    onClick={addItem}
                    className="bg-green-500 py-1.5 px-5 text-base text-white font-medium"
                  >
                    adicionar
                  </button>
                  <button className="bg-blue-500 py-1.5 px-5 text-base text-white font-medium">
                    Verificar
                  </button>
                </div>
                <div className="">
                  <ul>
                    {items.map((item, index) => (
                      <li key={index}>
                        {item}<button className="bg-red-600 p-3 mx-2" onClick={() => removeItem(index)} >delete</button>
                        <div className="bg-gray-100">
                          <h2 className="text-base font-medium">
                            Total de acertos
                          </h2>
                          <div className="flex justify-between items-center text-center">
                            <span className="w-full bg-red-500 text-white font-bold">
                              20 : {acertos[20]}
                            </span>
                            <span className="w-full bg-green-800 text-white font-bold">
                              19 : {acertos[19]}
                            </span>
                            <span className="w-full bg-green-700 text-white font-bold">
                              18 : {acertos[18]}
                            </span>
                            <span className="w-full bg-green-600 text-white font-bold">
                              17 : {acertos[17]}
                            </span>
                            <span className="w-full bg-green-500 text-white font-bold">
                              16 : {acertos[16]}
                            </span>
                            <span className="w-full bg-green-400 text-green-800 font-bold">
                              15 : {acertos[15]}
                            </span>
                            <span className="w-full bg-green-300 text-green-800 font-bold">
                              {" "}
                              0 : {acertos[0]}
                            </span>
                          </div>
                        </div>
                      </li>
                      
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
