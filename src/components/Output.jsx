import PropTypes from "prop-types";

function Text({ text }) {
  return <p className="flex items-center gap-2 text-[0.65rem]">{text}</p>;
}
Text.propTypes = {
  text: PropTypes.string.isRequired,
};

function EducationDetails({ details }) {
  return (
    <div className="flex flex-col">
      <p className="text-[0.55rem] font-light">
        {details.startDate} - {details.endDate}
      </p>
      <h3 className="text-sm font-medium">{details.school}</h3>
      <h4 className="text-[0.7rem]">{details.degree}</h4>
      <h5 className="text-[0.7rem] font-light">{details.location}</h5>
    </div>
  );
}
EducationDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

function WorkDetails({ details }) {
  return (
    <div className="flex flex-col">
      <p className="text-[0.55rem] font-light">
        {details.startDate} - {details.endDate}
      </p>
      <h3 className="text-sm font-medium">{details.company}</h3>
      <h4 className="text-[0.7rem]">{details.position}</h4>
      <h5 className="text-[0.7rem] font-light">{details.location}</h5>
      <p className="text-[0.6rem] font-light flex flex-col gap-[0.15rem]">
        {details.description.split("\n").map((str, index) => (
          <p key={index}>{str}</p>
        ))}
      </p>
    </div>
  );
}
WorkDetails.propTypes = {
  details: PropTypes.object.isRequired,
};

export default function Output(props) {
  window.addEventListener("load", () => {
    if (window.innerWidth < 1280) {
      const scale =
        window.innerWidth /
        (553 +
          4 * parseFloat(getComputedStyle(document.documentElement).fontSize));
      document.getElementById("output").style.transform = `scale(${scale})`;
      document.getElementById("outputParent").style.height = `${780 * scale}px`;
    }
    else{
      const scale =
        window.innerHeight /
        (780 +
          4 * parseFloat(getComputedStyle(document.documentElement).fontSize));
      document.getElementById("output").style.transform = `scale(${scale})`;
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1280) {
      const scale =
        window.innerWidth /
        (553 +
          4 * parseFloat(getComputedStyle(document.documentElement).fontSize));
      document.getElementById("output").style.transform = `scale(${scale})`;
      document.getElementById("outputParent").style.height = `${780 * scale}px`;
    } else {
      document.getElementById("output").style.transform = `scale(1)`;
      document.getElementById("outputParent").style.height = `100vh`;

      const scale =
        window.innerHeight /
        (780 +
          4 * parseFloat(getComputedStyle(document.documentElement).fontSize));
      document.getElementById("output").style.transform = `scale(${scale})`;
    }
  });

  return (
    <section
      id="outputParent"
      className="w-full xl:h-screen flex items-center justify-center my-4 xl:my-0"
    >
      <div
        id="output"
        className="a4-aspect px-4 py-10 h-[780px] bg-[url(./assets/output-background.jpg)] bg-cover flex gap-4 font-exo"
      >
        <div className="w-[40%] overflow-hidden">
          <span className="flex justify-between">
            <h2 className="text-xs">PERSONALS</h2>
            <p className="text-xs">01</p>
          </span>
          <div className="bg-black h-[0.5px] w-full mt-1 mb-4"></div>
          <div className="flex flex-col gap-2 ">
            <Text text={props.personalDetails.email.toUpperCase()} />
            <Text text={props.personalDetails.phone} />
            <Text text={props.personalDetails.city.toUpperCase()} />
          </div>
        </div>

        <div className="">
          <h1 className="font-gruppo font-bold text-4xl leading-8 ">
            {props.personalDetails.name}
          </h1>

          <span className="flex justify-between mt-6">
            <h2 className="text-xs">EDUCATION</h2>
            <p className="text-xs">02</p>
          </span>
          <div className="bg-black h-[0.5px] w-full mt-1 mb-4"></div>
          <div className="flex flex-col gap-3">
            {props.educationalDetails.map((education, index) => {
              return <EducationDetails details={education} key={index} />;
            })}
          </div>

          <span className="flex justify-between mt-6">
            <h2 className="text-xs">EXPERIENCE</h2>
            <p className="text-xs">03</p>
          </span>
          <div className="bg-black h-[0.5px] w-full mt-1 mb-4"></div>
          <div className="flex flex-col gap-3">
            {props.workDetails.map((work, index) => {
              return <WorkDetails details={work} key={index} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

Output.propTypes = {
  personalDetails: PropTypes.object.isRequired,
  educationalDetails: PropTypes.array.isRequired,
  workDetails: PropTypes.array.isRequired,
};
