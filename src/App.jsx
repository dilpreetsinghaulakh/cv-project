import "./App.css";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <main className="flex flex-col xl:flex-row">
        {/* <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-black">Sidebar</h1>
        </div> */}
        <Sidebar />
      <section className="w-full h-screen">
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex justify-center items-center h-full absolute">
            <h1 className="text-4xl font-bold text-black">&rdquo;The A4 Sheet&rdquo;</h1>
          </div>
          <div className="bg-white a4-aspect h-full m-4 shadow-2xl">
            <div className="flex justify-center items-center h-full">
              <h1 className="text-6xl font-bold text-black/40 rotate-45">
                SAMPLE FILE
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
