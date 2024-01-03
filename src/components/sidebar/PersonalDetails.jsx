import Input from "../Input";
import PropTypes from "prop-types";

export default function PersonalDetails({ name, email, phone, city }) {
  function handleInputChange(value, setFunction) {
    setFunction(value);
  }

  return (
    <div className="border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl flex flex-col gap-2">
      <h1 className="font-bold text-lg text-gray-800 dark:text-gray-200">
        Personal Details
      </h1>

      <div className="flex flex-col gap-2">
        <Input
          name="Name"
          id="name"
          placeholder="John Doe"
          value={name[0]}
          onInputChange={(value) => handleInputChange(value, name[1])}
        />
        <Input
          name="Email"
          id="email"
          placeholder="email@example.com"
          keyboard="email"
          value={email[0]}
          onInputChange={(value) => handleInputChange(value, email[1])}
        />
        <Input
          name="Phone"
          id="phone"
          placeholder="123-456-7890"
          keyboard="tel"
          value={phone[0]}
          onInputChange={(value) => handleInputChange(value, phone[1])}
        />
        <Input
          name="City"
          id="city"
          placeholder="Amritsar, Punjab"
          value={city[0]}
          onInputChange={(value) => handleInputChange(value, city[1])}
        />
      </div>
    </div>
  );
}

PersonalDetails.propTypes = {
  name: PropTypes.array,
  email: PropTypes.array,
  phone: PropTypes.array,
  city: PropTypes.array,
};
