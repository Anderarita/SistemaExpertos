import { useState } from "react";

export const DropdownHorario = ({ schedule }) => {
    const [open, setOpen] = useState(false);
  
    return (
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-gray-300 text-white rounded-full items-center  hover:bg-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? "Ocultar horario" : "Ver horario"}
        </button>
  
        {open && (
          <div className="mt-2 border rounded p-2 bg-gray-100">
            {Object.entries(schedule).map(([day, hours]) => (
              <div key={day} className="flex justify-between">
                <span className="capitalize">{day}</span>
                <span>{hours}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  