import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="header"
      style={{
        backgroundColor: "#282c34", // Color de fondo constante
        color: "white",
        padding: "1rem",
        textAlign: "center",
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000,
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Contenedor para el icono y los enlaces */}
      <div className="flex items-center justify-center gap-4">
        {/* Imagen como icono */}
        <motion.div
          whileHover={{ scale: 1.2 }} // Efecto de rebote en el icono
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img
            src="/src/assets/Moveit.png" // Asegúrate de usar la ruta correcta a tu imagen
            alt="Icon"
            className="w-12 h-12 rounded-full object-cover" // Tamaño y estilo del icono
          />
        </motion.div>

        {/* Enlaces */}
        <nav className="flex gap-6 text-lg font-semibold">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <Link to="/" className="hover:text-yellow-300 transition">
              IMC
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <Link to="/rutinas" className="hover:text-yellow-300 transition">
              Rutinas
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <Link to="/plan-alimenticio" className="hover:text-yellow-300 transition">
              Plan Alimenticio
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300, damping: 10 }}>
            <Link to="/Map" className="hover:text-yellow-300 transition">
              Mapa de Gimnasios
            </Link>
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;




