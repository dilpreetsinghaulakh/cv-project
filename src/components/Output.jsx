import PropTypes from "prop-types";

export default function Output(props) {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="a4-aspect h-[90%] bg-white">
        {/* Testing for now */}
        <h1>{props.personalDetails.name}</h1>
        <h1>{props.personalDetails.email}</h1>
        <h1>{props.personalDetails.phone}</h1>
        <h1>{props.personalDetails.city}</h1>
      </div>
    </section>
  );
}

Output.propTypes = {
  personalDetails: PropTypes.object.isRequired,
};

