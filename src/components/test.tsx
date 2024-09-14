"use client"
import { useEffect, useState } from 'react';

interface LoteriaResult {
    nome: string;
    data: string;
    numeros: number[];
  }

export default function Test() {
    const [results, setResults] = useState<LoteriaResult[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResults = async () => {
          try {
            const res = await fetch('/api/loterias');
            const data = await res.json();
            setResults(data);
            console.log(data);
          } catch (err) {
            setError('Failed to fetch results');
          } finally {
            setLoading(false);
          }
        };
    
        fetchResults();
      }, []);

      if (loading) return <p>Loading...</p>;
      if (error) return <p>{error}</p>;

  return (
    <div>
    <h1>Loteria Results</h1>
    {results.map((result, index) => (
      <div key={index}>
        <h2>{result.nome}</h2>
        <p>Data: {result.data}</p>
        <p>Números: {result.numeros.join(', ')}</p>
      </div>
    ))}
  </div>
  )
}
