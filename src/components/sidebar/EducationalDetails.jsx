import { useState } from "react";
import Input from "../Input";
import PropTypes from "prop-types";

// FORMAT
// [{school: "", degree:"", startDate:"", endDate:"", location:""}] | array of objects

function ButtonWithIcon({ text, iconClasses, color, onClick }) {
  let classes =
    "active:scale-[.99] outline-none transition-colors py-3 rounded-lg flex-grow flex items-center justify-center gap-2 font-bold ";

  classes +=
    color === "blue"
      ? "bg-blue-500/5 text-blue-700 dark:text-blue-500 hover:bg-blue-500/10 hover:text-blue-800 dark:hover:text-blue-400 focus-visible:outline-blue-500"
      : color === "emerald"
      ? "bg-emerald-500/5 text-emerald-700 dark:text-emerald-500 hover:bg-emerald-500/10 hover:text-emerald-800 dark:hover:text-emerald-400 focus-visible:outline-emerald-500"
      : color === "red"
      ? "bg-red-500/5 text-red-700 dark:text-red-500 hover:bg-red-500/10 hover:text-red-800 dark:hover:text-red-400 focus-visible:outline-red-500"
      : "";
  return (
    <button className={classes} onClick={() => onClick()}>
      <i className={iconClasses} />
      {text}
    </button>
  );
}
ButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  iconClasses: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

function EducationalDetailsForm({
  educationalDetails,
  setEducationalDetails,
  setIsEditing,
  index,
}) {
  let prevData;

  if (index[0] >= 0) {
    prevData = educationalDetails[index[0]];
  } else {
    prevData = {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    };
  }

  const [school, setSchool] = useState(prevData.school);
  const [degree, setDegree] = useState(prevData.degree);
  const [startDate, setStartDate] = useState(prevData.startDate);
  const [endDate, setEndDate] = useState(prevData.endDate);
  const [location, setLocation] = useState(prevData.location);

  function saveDetails(
    educationalDetails,
    index,
    setEducationalDetails,
    setIsEditing,
    newData
  ) {
    if (index[0] >= 0) {
      let newEducationalDetails = [...educationalDetails];
      newEducationalDetails[index[0]] = newData;
      setEducationalDetails(newEducationalDetails);
      index[1]([]);
    } else {
      setEducationalDetails([...educationalDetails, newData]);
    }

    setIsEditing(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        name="School"
        id="school"
        type="text"
        placeholder="School"
        value={school}
        onInputChange={(value) => setSchool(value)}
      />
      <Input
        name="Degree"
        id="degree"
        type="text"
        placeholder="Degree"
        value={degree}
        onInputChange={(value) => setDegree(value)}
      />
      <Input
        name="Start Date"
        id="startDate"
        type="text"
        placeholder="Start Date"
        value={startDate}
        onInputChange={(value) => setStartDate(value)}
      />
      <Input
        name="End Date"
        id="endDate"
        type="text"
        placeholder="End Date"
        value={endDate}
        onInputChange={(value) => setEndDate(value)}
      />
      <Input
        name="Location"
        id="location"
        type="text"
        placeholder="Location"
        value={location}
        onInputChange={(value) => setLocation(value)}
      />

      <div className="flex gap-2">
        {index[0] >= 0 ? (
          <ButtonWithIcon
            text="Delete"
            color="red"
            iconClasses="ci-Trash_Full text-xl"
            onClick={() => {
              let newEducationalDetails = [...educationalDetails];
              newEducationalDetails.splice(index[0], 1);
              setEducationalDetails(newEducationalDetails);
              setIsEditing(false);
              index[1]([]);
            }}
          />
        ) : (
          <ButtonWithIcon
            text="Cancel"
            color="red"
            iconClasses="ci-Close_MD text-xl"
            onClick={() => {
              setIsEditing(false);
            }}
          />
        )}

        <ButtonWithIcon
          text="Save"
          color="blue"
          iconClasses="ci-Save text-xl"
          onClick={() =>
            saveDetails(
              educationalDetails,
              index,
              setEducationalDetails,
              setIsEditing,
              {
                school: school,
                degree: degree,
                startDate: startDate,
                endDate: endDate,
                location: location,
              }
            )
          }
        />
      </div>
    </div>
  );
}

EducationalDetailsForm.propTypes = {
  educationalDetails: PropTypes.array.isRequired,
  index: PropTypes.array,
  setEducationalDetails: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

function EducationalDetailsList({
  educationalDetails,
  setIsEditing,
  setDataToEdit,
}) {
  return (
    <>
      <div key="main" className="flex flex-col gap-2">
        {educationalDetails && educationalDetails.length > 0 ? (
          educationalDetails.map((detail, index) => (
            <button
              key={index}
              className="border bg-gray-50 dark:border-neutral-700 dark:bg-neutral-800 focus:border-gray-500 active:border-neutral-500 dark:focus:border-neutral-400 dark:active:border-gray-400 p-3 rounded-lg flex justify-between items-center gap-2 transition-colors"
              onClick={() => {
                setIsEditing(true);
                setDataToEdit([index]);
              }}
            >
              <h2 className="font-bold text-base text-gray-700 dark:text-gray-200">
                {detail.school}
              </h2>
              <i className="ci-Edit_Pencil_01 text-xl font-bold text-gray-700 dark:text-gray-200 rounded" />{" "}
            </button>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 my-2">
            No educational details added
          </p>
        )}
      </div>
      <ButtonWithIcon
        text="Add Education Details"
        color="emerald"
        onClick={() => setIsEditing(true)}
        iconClasses="ci-Add_Plus text-xl font-bold"
      />
    </>
  );
}
EducationalDetailsList.propTypes = {
  educationalDetails: PropTypes.array,
  setIsEditing: PropTypes.func,
  setDataToEdit: PropTypes.func,
};

export default function EducationalDetails({
  educationalDetails,
  setEducationalDetails,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [dataToEditIndex, setDataToEditIndex] = useState([]);

  return (
    <div className="border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl flex flex-col gap-2">
      <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">
        Educational Details
      </h1>
      {!isEditing ? (
        <EducationalDetailsList
          educationalDetails={educationalDetails}
          setIsEditing={setIsEditing}
          setDataToEdit={setDataToEditIndex}
        />
      ) : dataToEditIndex ? (
        <EducationalDetailsForm
          index={[dataToEditIndex[0], setDataToEditIndex]}
          educationalDetails={educationalDetails}
          setEducationalDetails={setEducationalDetails}
          setIsEditing={setIsEditing}
        />
      ) : (
        <EducationalDetailsForm
          educationalDetails={educationalDetails}
          setEducationalDetails={setEducationalDetails}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

EducationalDetails.propTypes = {
  educationalDetails: PropTypes.array.isRequired,
  setEducationalDetails: PropTypes.func.isRequired,
};
