import Input from "../Input";

export default function PersonalDetails() {
  return (
    <div className="border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl flex flex-col gap-2">
      <h1 className="font-bold text-lg text-gray-800 dark:text-gray-200">
        Personal Details
      </h1>

      <div className="flex flex-col gap-7 mt-2">
        <Input name="Name" id="name" placeholder="John Doe" />
        <Input
          name="Email"
          id="email"
          placeholder="email@example.com"
          keyboard="email"
        />
        <Input
          name="Phone"
          id="phone"
          placeholder="123-456-7890"
          keyboard="tel"
        />
        <Input name="City" id="city" placeholder="Amritsar, Punjab" />
      </div>
    </div>
  );
}
