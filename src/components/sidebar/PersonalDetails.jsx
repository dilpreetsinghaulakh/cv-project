export default function PersonalDetails() {
  return (
    <div className="border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl flex flex-col gap-2">
      <h1 className="font-bold text-lg text-gray-800 dark:text-gray-200">
        Personal Details
      </h1>

      <div className="flex flex-col gap-7 mt-2">
        <div>
          <label
            htmlFor="name"
            className="text-gray-700 dark:text-gray-200 absolute font-bold -mt-3 ml-2 text-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 px-1"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="w-full border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 rounded-lg py-2 px-3 outline-none bg-white dark:bg-neutral-900 dark:text-gray-200 dark:placeholder-gray-400 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-gray-700 dark:text-gray-200 absolute font-bold -mt-3 ml-2 text-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 px-1"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="w-full border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 rounded-lg py-2 px-3 outline-none bg-white dark:bg-neutral-900 dark:text-gray-200 dark:placeholder-gray-400 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="text-gray-700 dark:text-gray-200 absolute font-bold -mt-3 ml-2 text-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 px-1"
          >
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="123-456-7890"
            className="w-full border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 rounded-lg py-2 px-3 outline-none bg-white dark:bg-neutral-900 dark:text-gray-200 dark:placeholder-gray-400 transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="text-gray-700 dark:text-gray-200 absolute font-bold -mt-3 ml-2 text-sm bg-white dark:bg-neutral-900 dark:border-neutral-800 px-1"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="1234 Main St"
            className="w-full border border-gray-300 dark:border-neutral-700 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25 rounded-lg py-2 px-3 outline-none bg-white dark:bg-neutral-900 dark:text-gray-200 dark:placeholder-gray-400 transition-colors"
          />
        </div>
      </div>
    </div>
  );
}
