export default function DataBtn() {
  return (
    <div className="flex gap-4 justify-center border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl font-bold">
      <button className="bg-red-500/5 text-red-600 dark:text-red-500 hover:bg-red-500/10 hover:text-red-700 dark:hover:text-red-400 focus-visible:outline-red-500 active:scale-[.99] outline-none transition-colors p-2 rounded-lg flex-grow flex items-center justify-center gap-2">
        <i className="ci-Trash_Full text-xl" /> Clear Data
      </button>
      <button className="bg-blue-500/5 text-blue-600 dark:text-blue-500 hover:bg-blue-500/10 hover:text-blue-700 dark:hover:text-blue-400 focus-visible:outline-blue-500 active:scale-[.99] outline-none transition-colors py-3 rounded-lg flex-grow flex items-center justify-center gap-2">
        <i className="ci-File_Document text-xl" />
        {/* <i className="ci-Data text-xl" /> Yet to decide. [opt 2] */}
        Sample Data
      </button>
    </div>
  );
}
