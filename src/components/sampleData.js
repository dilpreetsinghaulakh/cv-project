export default function sampleData(
  setPersonalDetails,
  setEducationDetails,
  setExperienceDetails
) {
  const personalDetails = [
    "John Doe",
    "username@email.com",
    "+0 000 000 0000",
    "Amritsar, Punjab",
  ];

  for (let i = 0; i < personalDetails.length; i++) {
    setPersonalDetails[i](personalDetails[i]);
  }

  setEducationDetails([
    {
      school: "Example University",
      degree: "Bachelors of Technology",
      startDate: "2023",
      endDate: "2027",
      location: "Amritsar, Punjab",
    },
    {
      school: "Example School",
      degree: "Senior Secondary",
      startDate: "2022",
      endDate: "2023",
      location: "Amritsar, Punjab",
    },
    {
      school: "Example School",
      degree: "High School",
      startDate: "2020",
      endDate: "2021",
      location: "Amritsar, Punjab",
    },
  ]);

  setExperienceDetails([
    {
      company: "Example Company Inc.",
      position: "Software Engineer",
      startDate: "Late 2023",
      endDate: "Present",
      location: "Remote",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Non quam lacus suspendisse faucibus interdum posuere lorem. Nisl nisi scelerisque eu ultrices.
      Eu lobortis elementum nibh tellus molestie nunc non. Sit amet nisl suscipit adipiscing bibendum est ultricies.
      `,
    },
    {
      company: "Example Company Inc.",
      position: "Junior Software Engineer",
      startDate: "2022",
      endDate: "2023",
      location: "Remote",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      Non quam lacus suspendisse faucibus interdum posuere lorem. Nisl nisi scelerisque eu ultrices.
      Eu lobortis elementum nibh tellus molestie nunc non. Sit amet nisl suscipit adipiscing bibendum est ultricies.
      `,
    },
  ]);
}
