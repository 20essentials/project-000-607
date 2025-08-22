import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <aside className="relative w-[220px] h-[220px] rounded-full shadow-[-5px_-5px_5px_#0008,5px_5px_3px_#fff2,inset_-5px_-5px_5px_#0008,inset_5px_5px_5px_#fff2,2px_2px_2px_2px_#0002] overflow-hidden hover:before:[filter:saturate(900%)_blur(30px)] before:absolute before:inset-0 before:rounded-full before:z-[-1] before:bg-gradient-to-b from-[#ffcc2f] via-[#62daca] via-[#d169d1] to-[#9ed478] before:animate-spin-slow">
      <div className="absolute w-[60%] h-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-inherit bg-[#222]"></div>
    </aside>
  );
};

const rootEl =
  document.getElementById("root") ||
  (() => {
    const el = document.createElement("div");
    el.id = "root";
    document.body.appendChild(el);
    return el;
  })();

createRoot(rootEl).render(
  <React.StrictMode>
    <div className="h-[100vh] w-full flex flex-wrap place-content-center bg-gradient-to-r from-[#e6589d] to-[#a65fb5]">
      <App />
    </div>
  </React.StrictMode>
);

export default App;
