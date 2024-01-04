import { useState } from "react";
import Input from "../Input";
import PropTypes from "prop-types";

// FORMAT
// [{company: "", position:"", startDate:"", endDate:"", location:"", description:""}] | array of objects

function ButtonWithIcon({ text, iconClasses, color, onClick }) {
  let classes =
    "active:scale-[.99] outline-none transition-colors py-3 rounded-lg flex-grow flex items-center justify-center gap-2 font-bold ";

  classes +=
    color === "blue"
      ? "bg-blue-500/5 text-blue-700 dark:text-blue-500 hover:bg-blue-500/10 hover:text-blue-800 dark:hover:text-blue-400 focus-visible:outline-blue-500"
      : color === "purple"
      ? "bg-purple-500/5 text-purple-700 dark:text-purple-400 hover:bg-purple-500/10 hover:text-purple-800 dark:hover:text-purple-300 focus-visible:outline-purple-500"
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

function WorkDetailsForm({ workDetails, setWorkDetails, setIsEditing, index }) {
  let prevData;

  if (index[0] >= 0) {
    prevData = workDetails[index[0]];
  } else {
    prevData = {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    };
  }

  const [company, setCompany] = useState(prevData.company);
  const [position, setPosition] = useState(prevData.position);
  const [startDate, setStartDate] = useState(prevData.startDate);
  const [endDate, setEndDate] = useState(prevData.endDate);
  const [location, setLocation] = useState(prevData.location);
  const [description, setDescription] = useState(prevData.description);

  function saveDetails(
    workDetails,
    index,
    setWorkDetails,
    setIsEditing,
    newData
  ) {
    if (index[0] >= 0) {
      let newWorkDetails = [...workDetails];
      newWorkDetails[index[0]] = newData;
      setWorkDetails(newWorkDetails);
      index[1]([]);
    } else {
      setWorkDetails([...WorkDetails, newData]);
    }

    setIsEditing(false);
  }

  return (
    <div className="flex flex-col gap-2">
      <Input
        name="Company"
        id="company"
        type="text"
        placeholder="Company"
        value={company}
        onInputChange={(value) => setCompany(value)}
      />
      <Input
        name="Position"
        id="position"
        type="text"
        placeholder="Position"
        value={position}
        onInputChange={(value) => setPosition(value)}
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
      <Input
        name="Description"
        id="description"
        type="text-area"
        placeholder="Description"
        value={description}
        onInputChange={(value) => setDescription(value)}
        textArea={true}
      />
      <div className="flex gap-2">
        {index[0] >= 0 ? (
          <ButtonWithIcon
            text="Delete"
            color="red"
            iconClasses="ci-Trash_Full text-xl"
            onClick={() => {
              let newWorkDetails = [...workDetails];
              newWorkDetails.splice(index[0], 1);
              setWorkDetails(newWorkDetails);
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
            saveDetails(workDetails, index, setWorkDetails, setIsEditing, {
              company: company,
              position: position,
              startDate: startDate,
              endDate: endDate,
              location: location,
              description: description,
            })
          }
        />
      </div>
    </div>
  );
}

WorkDetailsForm.propTypes = {
  workDetails: PropTypes.array.isRequired,
  index: PropTypes.array,
  setWorkDetails: PropTypes.func.isRequired,
  setIsEditing: PropTypes.func.isRequired,
};

function WorkDetailsList({ workDetails, setIsEditing, setDataToEdit }) {
  return (
    <>
      <div key="main" className="flex flex-col gap-2">
        {workDetails && workDetails.length > 0 ? (
          workDetails.map((detail, index) => (
            <button
              key={index}
              className="border bg-gray-50 dark:border-neutral-700 dark:bg-neutral-800 focus:border-gray-500 active:border-neutral-500 dark:focus:border-neutral-400 dark:active:border-gray-400 p-3 rounded-lg flex justify-between items-center gap-2 transition-colors"
              onClick={() => {
                setIsEditing(true);
                setDataToEdit([index]);
              }}
            >
              <h2 className="font-bold text-base text-gray-700 dark:text-gray-200">
                {detail.company}
              </h2>
              <i className="ci-Edit_Pencil_01 text-xl font-bold text-gray-700 dark:text-gray-200 rounded" />{" "}
            </button>
          ))
        ) : (
          <p className="text-gray-500 dark:text-gray-400 my-2">
            No work experience details added
          </p>
        )}
      </div>
      <ButtonWithIcon
        text="Add Experience Details"
        color="purple"
        onClick={() => setIsEditing(true)}
        iconClasses="ci-Add_Plus text-xl font-bold"
      />
    </>
  );
}
WorkDetailsList.propTypes = {
  workDetails: PropTypes.array,
  setIsEditing: PropTypes.func,
  setDataToEdit: PropTypes.func,
};

export default function WorkDetails({ workDetails, setWorkDetails }) {
  const [isEditing, setIsEditing] = useState(false);
  const [dataToEditIndex, setDataToEditIndex] = useState([]);

  return (
    <div className="border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl flex flex-col gap-2">
      <h1 className="text-lg font-bold text-gray-700 dark:text-gray-200">
        Work Experience Details
      </h1>
      {!isEditing ? (
        <WorkDetailsList
          workDetails={workDetails}
          setIsEditing={setIsEditing}
          setDataToEdit={setDataToEditIndex}
        />
      ) : dataToEditIndex ? (
        <WorkDetailsForm
          index={[dataToEditIndex[0], setDataToEditIndex]}
          workDetails={workDetails}
          setWorkDetails={setWorkDetails}
          setIsEditing={setIsEditing}
        />
      ) : (
        <WorkDetailsForm
          workDetails={workDetails}
          setWorkDetails={setWorkDetails}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  );
}

WorkDetails.propTypes = {
  workDetails: PropTypes.array.isRequired,
  setWorkDetails: PropTypes.func.isRequired,
};
