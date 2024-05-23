import BloodPressure from "./components/heart-disease/BloodPressure";
import BloodSugar from "./components/heart-disease/BloodSugar";
import SymptomsCard from "./components/heart-disease/SymptomsCard";
import ChornicCondition from "./components/heart-disease/ChornicCondition";
import ListAlerts from "./components/heart-disease/ListAlerts";
import PatientDetailCard from "./components/heart-disease/PatientDetailCard";

const PatientSummaryHD = () => {
  return (
    <div className=" flex justify-between">
      <div className="flex flex-col gap-6">
        <div className="flex gap-12">
          <BloodPressure />
          <BloodSugar />
          <SymptomsCard />
        </div>
        <div className="flex gap-12">
          <div className="bg-white w-[530px] h-[350px rounded-md shadow-sm"></div>
          <ChornicCondition />
        </div>
        <div>
          <ListAlerts />
        </div>
      </div>
      <div className="bottom-0 bg-white w-1/4 right-0 mt-[-80px] p-4 rounded-md shadow-sm">
        <PatientDetailCard />
      </div>
    </div>
  );
};

export default PatientSummaryHD;
