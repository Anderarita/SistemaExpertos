import { useState } from "react";
import { motion } from "framer-motion";

const PlanAlimenticioPage = () => {
  const [nivel, setNivel] = useState("principiante");
  const [objetivo, setObjetivo] = useState("perder_grasa");
  const [planAlimenticio, setPlanAlimenticio] = useState("");
  const [platosSugeridos, setPlatosSugeridos] = useState([]);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  // Función para obtener el plan alimenticio y los platos sugeridos
  const obtenerPlanAlimenticio = () => {
    if (!nivel || !objetivo) {
      setError("Por favor selecciona un nivel y un objetivo.");
      return;
    }

    setCargando(true);
    setError("");

    // Simulamos la recomendación de un plan alimenticio
    setTimeout(() => {
      let plan = "";
      let platos = [];

      // Plan alimenticio y platos basados en el nivel y objetivo
      if (nivel === "principiante") {
        if (objetivo === "perder_grasa") {
          plan = "Plan para principiantes: Dieta baja en carbohidratos y alta en proteínas.";
          platos = [
            "Ensalada de pollo a la parrilla",
            "Tazón de quinoa con verduras",
            "Salmón al horno con espárragos",
            "Batido de proteínas con almendras",
            "Tacos de lechuga con carne magra"
          ];
        } else if (objetivo === "ganar_musculo") {
          plan = "Plan para principiantes: Dieta alta en calorías con enfoque en proteínas y carbohidratos.";
          platos = [
            "Pollo al curry con arroz integral",
            "Avena con fruta y nueces",
            "Salmón con brócoli y patatas",
            "Batido de proteínas con plátano",
            "Tostadas integrales con aguacate y huevo"
          ];
        } else {
          plan = "Plan para principiantes: Dieta balanceada con enfoque en fibra y nutrientes.";
          platos = [
            "Ensalada mixta con quinoa",
            "Sopa de lentejas con espinacas",
            "Pechuga de pollo con batatas",
            "Tostadas con aguacate y tomate",
            "Frutas frescas con yogur natural"
          ];
        }
      } else if (nivel === "intermedio") {
        if (objetivo === "perder_grasa") {
          plan = "Plan intermedio: Dieta moderada en carbohidratos con énfasis en proteínas y ejercicio regular.";
          platos = [
            "Ensalada de atún con espinacas",
            "Pollo a la parrilla con espárragos",
            "Tazón de arroz integral con verduras",
            "Sopa de verduras con pollo",
            "Pescado a la parrilla con aguacate"
          ];
        } else if (objetivo === "ganar_musculo") {
          plan = "Plan intermedio: Dieta enfocada en alto consumo de calorías con control de macronutrientes.";
          platos = [
            "Pechuga de pollo con pasta integral",
            "Arroz con vegetales y carne magra",
            "Batido de proteínas con avena y frutas",
            "Tacos de pescado con arroz integral",
            "Ensalada de quinoa con pollo"
          ];
        } else {
          plan = "Plan intermedio: Dieta balanceada con enfoque en la mejora de la digestión y energía.";
          platos = [
            "Sopa de calabaza y zanahoria",
            "Ensalada de lentejas con vegetales",
            "Pollo a la parrilla con batatas",
            "Tostadas integrales con aguacate y huevo",
            "Yogur con granola y frutos rojos"
          ];
        }
      } else {
        if (objetivo === "perder_grasa") {
          plan = "Plan avanzado: Dieta estricta con bajo consumo de carbohidratos y alta actividad física.";
          platos = [
            "Ensalada de espinacas con pollo",
            "Pescado a la parrilla con brócoli",
            "Sopa detox con apio y pepino",
            "Tazón de quinoa con aguacate",
            "Pollo asado con espárragos"
          ];
        } else if (objetivo === "ganar_musculo") {
          plan = "Plan avanzado: Dieta de alta carga calórica con suplementos y entrenamiento intenso.";
          platos = [
            "Ensalada de pollo con aguacate",
            "Batido de proteínas con leche de almendra y plátano",
            "Pollo al curry con arroz integral",
            "Ensalada de quinoa con espinacas",
            "Tacos de pescado con aguacate y arroz"
          ];
        } else {
          plan = "Plan avanzado: Dieta personalizada con control extremo de macronutrientes y micronutrientes.";
          platos = [
            "Ensalada detox de pepino y tomate",
            "Salmón con espárragos y aguacate",
            "Pollo asado con batatas",
            "Sopa de lentejas con espinacas",
            "Tazón de avena con semillas de chía"
          ];
        }
      }

      setPlanAlimenticio(plan);
      setPlatosSugeridos(platos);
      setCargando(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-32 px-4 max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Recomendación de Plan Alimenticio</h2>

      {/* Selector de nivel */}
      <select
        value={nivel}
        onChange={(e) => setNivel(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        <option value="principiante">Principiante</option>
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>
      </select>

      {/* Selector de objetivo */}
      <select
        value={objetivo}
        onChange={(e) => setObjetivo(e.target.value)}
        className="border p-2 w-full mb-3"
      >
        <option value="perder_grasa">Perder grasa</option>
        <option value="ganar_musculo">Ganar músculo</option>
        <option value="mejorar_resistencia">Mejorar resistencia</option>
        <option value="aumentar_flexibilidad">Aumentar flexibilidad</option>
      </select>

      {/* Botón para obtener plan alimenticio */}
      <button
        onClick={obtenerPlanAlimenticio}
        className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
      >
        {cargando ? "Cargando..." : "Obtener Plan"}
      </button>

      {/* Mensaje de error */}
      {error && <p className="text-red-500 mt-2">{error}</p>}

      {/* Mostrar el plan alimenticio recomendado */}
      {planAlimenticio && (
        <div className="mt-4 p-4 bg-gray-50 rounded">
          <h3 className="text-xl font-semibold">Plan Alimenticio Sugerido:</h3>
          <p className="mt-2">{planAlimenticio}</p>

          {/* Mostrar los platos sugeridos */}
          <h4 className="mt-4 font-semibold">Platos recomendados:</h4>
          <ul className="list-disc pl-5 mt-2">
            {platosSugeridos.map((plato, i) => (
              <li key={i}>{plato}</li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default PlanAlimenticioPage;

