"use client";

export default function loterias({ loteria }: { loteria: any }) {
  return (
    <div>
      {loteria.length > 0 ? (
        loteria.map((masmi: any) => (
          <section className="relative" key={masmi.concurso}>
            <div className="bg-neutral-700 p-2 ">
              <h2 className="text-white text-base md:text-lg font-bold ">
                {masmi.loteria}
              </h2>
            </div>
            <div>
              <p className="font-normal text-base text-gray-800">
                Concuso {masmi.concurso} - {masmi.data}
              </p>

              <p className="text-xl font-bold text-indigo-950 ">
                {masmi.dezenas.join(" ")}
              </p>
              <div className="flex text-xl text-green-500 font-bold ">
                {masmi.trevos.join(" ")}
              </div>
              <p className="text-xl font-semibold text-center">
                {masmi.acumulou ? "Acumulou" : "não acumulou"}
              </p>
            </div>
          </section>
        ))
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
}
