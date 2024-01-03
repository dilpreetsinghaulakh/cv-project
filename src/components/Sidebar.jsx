import DataBtn from "./sidebar/DataBtn";
import Info from "./sidebar/Info";
import PersonalDetails from "./sidebar/PersonalDetails.jsx";
import PropTypes from "prop-types";

export default function Sidebar(props) {
  return (
    <section
      className="w-full xl:max-w-xl h-screen p-4 flex flex-col gap-2"
      id={"sidebar"}
    >
      <div className=" gradient-blur w-full xl:max-w-2xl h-screen p-4 fixed top-0 left-0 -z-10"></div>
      <Info />
      <DataBtn />
      <PersonalDetails
        name={props.personalDetails.name}
        email={props.personalDetails.email}
        phone={props.personalDetails.phone}
        city={props.personalDetails.city}
      />
    </section>
  );
}

Sidebar.propTypes = {
  personalDetails: PropTypes.object,
};
