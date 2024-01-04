import "./App.css";
import Output from "./components/Output";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");

  const [educationalDetails, setEducationalDetails] = useState([]);

  const [workDetails, setWorkDetails] = useState([]);

  return (
    <main className="flex flex-col xl:flex-row">
      <Sidebar
        personalDetails={{
          name: [name, setName],
          email: [email, setEmail],
          phone: [phone, setPhone],
          city: [city, setCity],
        }}
        educationalDetails={[educationalDetails, setEducationalDetails]}
        workDetails={[workDetails, setWorkDetails]}
      />
      <Output
        personalDetails={{
          name: name,
          email: email,
          phone: phone,
          city: city,
        }}
        educationalDetails={educationalDetails}
        workDetails={workDetails}
      />
    </main>
  );
}

export default App;
