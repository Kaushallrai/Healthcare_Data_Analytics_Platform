import Header from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";

const PatientSummaryPage = () => {
  const pageTitle = "Statistics";

  return (
    <div className=" h-screen">
      <main className="">
        <Header />
        <Sidebar activePage={pageTitle} />
        <div
          className="flex gap-10 flex-col ml-[272px] pt-24 mr-4 pb-6"
          id="mainpage"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl font-semibold">Patient Summary</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PatientSummaryPage;
