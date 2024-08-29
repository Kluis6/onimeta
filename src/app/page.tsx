import { TbClover } from "react-icons/tb";

type Lmania = {
  concurso: string;
  data: string;
  dezenas: string[];
  trevos: string[];
  acumulou: boolean;
};

async function getLotomania(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/lotomania/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getMegasena(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/megasena/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getLotofacil(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/lotofacil/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getQuina(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/megasena/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getMaismilionaria(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/maismilionaria/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getDuplasena(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/duplasena/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getTimemania(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/timemania/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getFederal(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/federal/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getDiadasorte(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/diadesorte/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

async function getSupersete(): Promise<Lmania[]> {
  const response = await fetch(
    "https://loteriascaixa-api.herokuapp.com/api/supersete/latest"
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();

  // Verifica se data é um array, se não for, retorna um array vazio
  return Array.isArray(data) ? data : [data];
}

export default async function Home() {
  const lotomania = await getLotomania();
  const megasena = await getMegasena();
  const lotofacil = await getLotofacil();
  const quina = await getQuina();
  const maismilionaria = await getMaismilionaria();
  const duplasena = await getDuplasena();
  const timemania = await getTimemania();
  const federal = await getFederal();
  const diadasorte = await getDiadasorte();
  const supersete = await getSupersete();

  return (
    <main className="container mx-auto px-4 md:px-0 ">
      <section className="">
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12">
            <h1 className="font-bold text-3xl text-gray-800">Loterias</h1>{" "}
            <p className="font-semibold text-gray-700">
              Confira os últimos resultados
            </p>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-100">
            <div className="bg-indigo-950 p-4 flex items-center gap-2">
              <TbClover className="text-white text-2xl antialiased" />
              <h2 className="text-white text-base md:text-lg font-bold ">
                +milionária
              </h2>
            </div>

            <div>
              {maismilionaria.length > 0 ? (
                maismilionaria.map((masmi) => (
                  <section className="p-4" key={masmi.concurso}>
                    <div>
                      <p className="font-normal text-base text-gray-800">
                        Concuso {masmi.concurso} - {masmi.data}
                      </p>

                      <p className="text-2xl font-bold text-indigo-950 ">{masmi.dezenas.join(" ")}</p>
                      <p className="bg-white flex gap-4 px-2">{masmi.trevos}</p>
                      <div>{masmi.acumulou ? "acumulou" : "não acumulou"}</div>
                    </div>
                    <button
                      className="bg-blue-500 w-full flex items-center justify-center p-2 font-bold text-base text-white"
                      type="button"
                    >
                      saiba mais
                    </button>
                  </section>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-orange-500">
            <h2>megasena</h2>
            <div>
              {megasena.length > 0 ? (
                megasena.map((megas) => (
                  <ul className="my-2" key={megas.concurso}>
                    <li>
                      <h3>Sorteio:{megas.concurso}</h3>
                      <p>Data:{megas.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {megas.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-pink-500">
            <h2>lotofacil</h2>
            <div>
              {lotofacil.length > 0 ? (
                lotofacil.map((lfacil) => (
                  <ul className="my-2" key={lfacil.concurso}>
                    <li>
                      <h3>Sorteio:{lfacil.concurso}</h3>
                      <p>Data:{lfacil.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {lfacil.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-gray-500">
            <h2>quina</h2>
            <div>
              {quina.length > 0 ? (
                quina.map((quin) => (
                  <ul className="my-2" key={quin.concurso}>
                    <li>
                      <h3>Sorteio:{quin.concurso}</h3>
                      <p>Data:{quin.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {quin.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-amber-500">
            <h2>lotomania</h2>
            <div>
              {lotomania.length > 0 ? (
                lotomania.map((lmania) => (
                  <ul className="my-2" key={lmania.concurso}>
                    <li>
                      <h3>Sorteio:{lmania.concurso}</h3>
                      <p>Data:{lmania.data}</p>
                      <p>Dezenas sorteadas:</p>
                      <span className="font-medium bg-slate-300">
                        {lmania.dezenas}
                      </span>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-blue-500">
            time mania
            <div>
              {timemania.length > 0 ? (
                duplasena.map((tmania) => (
                  <ul className="my-2" key={tmania.concurso}>
                    <li>
                      <h3>Sorteio:{tmania.concurso}</h3>
                      <p>Data:{tmania.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {tmania.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-rose-500">
            <h2>duplasena</h2>
            <div>
              {duplasena.length > 0 ? (
                duplasena.map((dsena) => (
                  <ul className="my-2" key={dsena.concurso}>
                    <li>
                      <h3>Sorteio:{dsena.concurso}</h3>
                      <p>Data:{dsena.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {dsena.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-green-500">
            <h2>federal</h2>
            <div>
              {federal.length > 0 ? (
                federal.map((fed) => (
                  <ul className="my-2" key={fed.concurso}>
                    <li>
                      <h3>Sorteio:{fed.concurso}</h3>
                      <p>Data:{fed.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {fed.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-indigo-500">
            <h2>dia da sorte</h2>
            <div>
              {diadasorte.length > 0 ? (
                diadasorte.map((dds) => (
                  <ul className="my-2" key={dds.concurso}>
                    <li>
                      <h3>Sorteio:{dds.concurso}</h3>
                      <p>Data:{dds.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {dds.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 p-9 bg-orange-500">
            <h2>super sete</h2>
            <div>
              {supersete.length > 0 ? (
                supersete.map((ssete) => (
                  <ul className="my-2" key={ssete.concurso}>
                    <li>
                      <h3>Sorteio:{ssete.concurso}</h3>
                      <p>Data:{ssete.data}</p>
                      <p>
                        Dezenas sorteadas:
                        <div className="font-medium bg-slate-300">
                          {ssete.dezenas}
                        </div>
                      </p>
                    </li>
                  </ul>
                ))
              ) : (
                <p>Nenhum resultado encontrado.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
