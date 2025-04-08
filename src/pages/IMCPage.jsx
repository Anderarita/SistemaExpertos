// src/pages/IMCPage.jsx
import { useState } from 'react';

export default function IMCPage({ onCalcular }) {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const alturaM = parseFloat(altura) / 100;
    const pesoKg = parseFloat(peso);
    if (!alturaM || !pesoKg || alturaM <= 0 || pesoKg <= 0) return;
    const imc = pesoKg / (alturaM * alturaM);
    let categoria = 'alto';
    if (imc < 18.5) categoria = 'bajo';
    else if (imc < 25) categoria = 'normal';
    setResultado({ imc: imc.toFixed(1), categoria });
    onCalcular?.(categoria);
  };

  return (
    <div className="pt-32 px-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Calculadora de IMC</h2>
      <input placeholder="Peso (kg)" type="number" value={peso} onChange={e => setPeso(e.target.value)} className="border p-2 w-full mb-3" />
      <input placeholder="Altura (cm)" type="number" value={altura} onChange={e => setAltura(e.target.value)} className="border p-2 w-full mb-3" />
      <button onClick={calcularIMC} className="bg-yellow-500 text-white px-4 py-2 rounded w-full">Calcular</button>
      {resultado && (
        <div className="mt-4 bg-gray-100 p-4 rounded">
          <p>Tu IMC es: <strong>{resultado.imc}</strong></p>
          <p className="capitalize">Categoría: <strong>{resultado.categoria}</strong></p>
        </div>
      )}
    </div>
  );
}

