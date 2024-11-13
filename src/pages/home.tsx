import Calender from "../components/Full-View-Calender/calender";
import { SearchInputModal } from "../components/search-input-modal";

const Home = () => {
  return (
    <div className={"w-full"}>
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-2 mb-4">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold leading-none tracking-tight">
          Welcome User
        </h1>
        <SearchInputModal />
      </div>
      <div className="py-2">
        <Calender />
      </div>
    </div>
  );
};

export default Home;
