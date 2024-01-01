import PropTypes from "prop-types";

export default function Input({ name, id, placeholder, type = "text", keyboard = "text" }) {
  Input.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    keyboard: PropTypes.string,
  };

  Input.defaultProps = {
    type: "text",
  };
  return (
    <div>
      <label
        htmlFor={id}
        className="text-gray-700 dark:text-gray-200 absolute font-bold -mt-3 ml-2 text-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 px-1"
      >
        {name}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        inputMode={keyboard}
        className="w-full border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 rounded-lg py-2 px-3 outline-none bg-white dark:bg-neutral-900 dark:text-gray-200 dark:placeholder-gray-400 transition-colors"
      />
    </div>
  );
}
