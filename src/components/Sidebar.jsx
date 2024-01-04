import DataBtn from "./sidebar/DataBtn";
import EducationalDetails from "./sidebar/EducationalDetails.jsx";
import Info from "./sidebar/Info";
import PersonalDetails from "./sidebar/PersonalDetails.jsx";
import PropTypes from "prop-types";
import WorkDetails from "./sidebar/WorkDetails.jsx";
import sampleData from "./sampleData.js";

export default function Sidebar(props) {
  const getSets = () => {
    let details = [];
    for (let i = 0; i < Object.values(props.personalDetails).length; i++) {
      details.push(Object.values(props.personalDetails)[i][1]);
    }
    return details;
  };
  const setPersonalDetails = getSets();

  return (
    <section
      className="w-full xl:max-w-xl xl:h-screen xl:overflow-scroll p-4 flex flex-col gap-2"
      id={"sidebar"}
    >
      <div className="hidden xl:block absolute gradient-blur w-full xl:max-w-2xl h-screen p-4 top-0 left-0 -z-10"></div>
      <Info />
      <DataBtn
        fillSampleData={() =>
          sampleData(
            setPersonalDetails,
            props.educationalDetails[1],
            props.workDetails[1]
          )
        }
      />
      <PersonalDetails
        name={props.personalDetails.name}
        email={props.personalDetails.email}
        phone={props.personalDetails.phone}
        city={props.personalDetails.city}
      />
      <EducationalDetails
        educationalDetails={props.educationalDetails[0]}
        setEducationalDetails={props.educationalDetails[1]}
      />
      <WorkDetails
        workDetails={props.workDetails[0]}
        setWorkDetails={props.workDetails[1]}
      />
    </section>
  );
}

Sidebar.propTypes = {
  personalDetails: PropTypes.object,
  educationalDetails: PropTypes.array,
  workDetails: PropTypes.array,
};
