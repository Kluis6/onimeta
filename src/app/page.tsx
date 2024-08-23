import MainLoto from "@/components/lotomania/mainloto";

type Lmania = {
  concurso: number;
  data: string;
  dezenas: string[];
};

// async function getLotomania(): Promise<Lmania[]> {
//   const response = await fetch(
//     "https://loteriascaixa-api.herokuapp.com/api/lotomania/"
//   );
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   const data = await response.json();

//   // Verifica se data é um array, se não for, retorna um array vazio
//   return Array.isArray(data) ? data : [];
// }

export default async function Home() {
  // const lotomania = await getLotomania();

  return (
    <main className="px-4 mx-auto py-2">
      {/* <section className="bg-gray-100 w-full h-full">
        {lotomania.length > 0 ? (
          lotomania.map((lmania) => (
            <ul className="my-2" key={lmania.concurso}>
              <li>
                <h3>Sorteio:{lmania.concurso}</h3>
                <p>Data:{lmania.data}</p>
                <p>
                  Dezenas sorteadas:<span className="font-medium bg-slate-300">{lmania.dezenas}</span>
                </p>
              </li>
            </ul>
          ))
        ) : (
          <p>Nenhum resultado encontrado.</p>
        )}
      </section> */}
      <MainLoto />
    </main>
  );
}
