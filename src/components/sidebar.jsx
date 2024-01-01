import DataBtn from "./sidebar/dataBtn";
import Info from "./sidebar/info";

export default function Sidebar() {
  return (
    <section className="sidebar w-full xl:max-w-xl h-screen p-4 flex flex-col gap-2">
      <Info />
      <DataBtn />
    </section>
  );
}
