export default function Info() {
  return (
    <div className="border bg-white dark:bg-neutral-900 dark:border-neutral-800 p-4 rounded-xl flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-xl text-gray-800 dark:text-gray-200">CV Maker</h1>
        <a
          href="https://github.com/dilpreetsinghaulakh/cv-project"
          target="blank"
          className="flex items-center justify-center gap-2 px-4 pl-5 rounded-lg py-2 border border-transparent outline-none text-gray-800 hover:bg-gray-200 focus-visible:outline-gray-800 dark:text-gray-200 dark:hover:bg-neutral-800 dark:focus-visible:outline-neutral-200 transition-colors"
        >
          <i className="ci-Arrow_Up_Right_MD scale-150"></i> Github
        </a>
      </div>
      <p className="text-gray-700 dark:text-gray-400">
        This is a simple CV Maker app made with React.js and TailwindCSS
      </p>
    </div>
  );
}
