import { useState } from 'react';

export default function RutinasPage() {
  const [plan, setPlan] = useState('principiante');
  const [objetivo, setObjetivo] = useState('perder_grasa');
  const [imc, setIMC] = useState('');
  const [rutina, setRutina] = useState([]);
  const [error, setError] = useState('');
  const [cargando, setCargando] = useState(false);

  // Función para clasificar el IMC
  const clasificarIMC = (valor) => {
    const num = parseFloat(valor);
    if (isNaN(num)) return null;
    if (num < 18.5) return 'bajo';
    else if (num > 18.5 && num < 25) return 'normal';
    else if (num > 25 && num < 30) return 'sobrepeso';
    return 'obesidad';
  };

  const obtenerRutina = async () => {
    if (!plan || !objetivo || !imc) {
      setError('Completa todos los campos, incluyendo tu IMC.');
      return;
    }

    const categoria = clasificarIMC(imc);
    if (!categoria) {
      setError('IMC inválido. Ingresa un número válido.');
      return;
    }

    setCargando(true);
    try {
      const res = await fetch('https://dd2a-190-92-2-90.ngrok-free.app/rutina', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan, imc: categoria, objetivo }),
      });

      // Verificar la respuesta del servidor
      const data = await res.json();
      console.log('Respuesta del servidor:', data); // Depuración

      // Comprobar si la respuesta tiene una estructura esperada
      if (data && data.rutina) {
        setRutina(data.rutina); // Establecer la rutina si existe
        setError('');
      } else {
        setError('No se encontraron rutinas en la respuesta.');
      }
    } catch (err) {
      setError('Error al obtener rutina: ' + err.message);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="pt-32 px-4 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Obtener Rutina</h2>

      <select
        value={plan}
        onChange={e => setPlan(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>

      <select
        value={objetivo}
        onChange={e => setObjetivo(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        <option value="perder_grasa">Perder grasa</option>
        <option value="ganar_musculo">Ganar músculo</option>
        <option value="mejorar_resistencia">Mejorar resistencia</option>
        <option value="aumentar_flexibilidad">Aumentar flexibilidad</option>
      </select>

      <input
        type="number"
        step="0.1"
        placeholder="Ingresa tu IMC"
        value={imc}
        onChange={(e) => setIMC(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={obtenerRutina}
        className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
      >
        {cargando ? 'Cargando...' : 'Obtener rutina'}
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      {Array.isArray(rutina) && rutina.length > 0 && (
        <ul className="mt-4 bg-gray-50 rounded p-4 space-y-2">
          {rutina.map((ejercicio, i) => (
            <li key={i} className="border-b pb-2">{ejercicio}</li>
          ))}
        </ul>
      )}
    </div>
  );
}



