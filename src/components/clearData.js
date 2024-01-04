export default function clearData(
  setPersonalDetails,
  setEducationDetails,
  setExperienceDetails
) {
  for (let i = 0; i < setPersonalDetails.length; i++) {
    setPersonalDetails[i]("");
  }

  setEducationDetails([]);
  setExperienceDetails([]);
}
