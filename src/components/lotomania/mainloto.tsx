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
  const [acertos, setAcertos] = useState<AcertosCount>({
    20: 0,
    19: 0,
    18: 0,
    17: 0,
    16: 0,
    15: 0,
    0: 0,
  });

  const unico = [
    "01",
    "02",
    "03",
    "11",
    "12",
    "13",
    "21",
    "22",
    "23",
    "31",
    "32",
    "33",
    "41",
    "42",
    "43",
    "51",
    "52",
    "53",
    "61",
    "62",
    "63",
    "71",
    "72",
    "73",
    "81",
    "82",
    "83",
    "91",
    "92",
    "93",
    "04",
    "14",
    "24",
    "34",
    "44",
    "54",
    "64",
    "74",
    "84",
    "94",
    "05",
    "15",
    "25",
    "35",
    "45",
    "55",
    "65",
    "75",
    "85",
    "95",
  ];

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
            <div className="flex justify-between">
              <h2 className="text-lg font-medium">Exibir resultados</h2>
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
                    <p>{unico.join(" ")}</p>
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
        </div>
      </div>
    </div>
  );
}
