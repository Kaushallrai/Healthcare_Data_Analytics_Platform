import { useState } from "react";
import InsightTable from "./components/InsightTable";

const HDAnalysis = () => {
  const [formData, setFormData] = useState({
    age: "",
    sex: "",
    chestPainType: "",
    restingBloodPressure: "",
    serumCholesterol: "",
    fastingBloodSugar: "",
    restingECGResults: "",
    maxHeartRate: "",
    exerciseInducedAngina: "",
    oldpeak: "",
    stSegment: "",
    majorVessels: "",
    thal: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, such as sending data to backend
    console.log(formData);
  };

  return (
    <div>
      <div className=" bg-gray-100 flex px-4 justify-between">
        <div className="flex flex-col gap-8">
          <div className="bg-white p-8 rounded-md shadow-md ">
            <p className="text-xl font-medium mb-6 mt-[-12px]">Patient</p>
            <div className="flex justify-between ">
              <div className="flex flex-col mr-2 gap-4">
                <div className="flex font-medium">
                  <p className="text-gray-500">Name&nbsp;: &nbsp; </p>
                  <p>Kaushal Rai</p>
                </div>
                <div className="flex font-medium">
                  <p className="text-gray-500">Blood Group&nbsp;: &nbsp;</p>
                  <p>A+</p>
                </div>
              </div>
              <div className="flex flex-col mr-2 gap-4">
                <div className="flex font-medium">
                  <p className="text-gray-500">Gender&nbsp;: &nbsp; </p>
                  <p>Male</p>
                </div>
                <div className="flex font-medium">
                  <p className="text-gray-500">Height&nbsp;: &nbsp;</p>
                  <p>170cm</p>
                </div>
              </div>
              <div className="flex flex-col mr-2 gap-4">
                <div className="flex font-medium">
                  <p className="text-gray-500">Age&nbsp;: &nbsp; </p>
                  <p>21</p>
                </div>
                <div className="flex font-medium">
                  <p className="text-gray-500">Weight&nbsp;: &nbsp;</p>
                  <p>60Kg</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-md shadow-md">
            <p className="text-center text-gray-600 mb-6">
              Fill out the form below to predict the likelihood of heart disease
              based on health metrics.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter age in years.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">Sex</label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select Sex</option>
                    <option value="0">Female</option>
                    <option value="1">Male</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Select biological sex.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Chest Pain Type
                  </label>
                  <select
                    name="chestPainType"
                    value={formData.chestPainType}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select Chest Pain Type</option>
                    <option value="1">Typical angina</option>
                    <option value="2">Atypical angina</option>
                    <option value="3">Non-anginal pain</option>
                    <option value="4">Asymptomatic</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Describe the type of chest pain you experience.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Resting Blood Pressure (mm Hg)
                  </label>
                  <input
                    type="number"
                    name="restingBloodPressure"
                    value={formData.restingBloodPressure}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter resting blood pressure in mm Hg.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Serum Cholesterol (mg/dL)
                  </label>
                  <input
                    type="number"
                    name="serumCholesterol"
                    value={formData.serumCholesterol}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter serum cholesterol level in mg/dL.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Fasting Blood Sugar
                  </label>
                  <select
                    name="fastingBloodSugar"
                    value={formData.fastingBloodSugar}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select</option>
                    <option value="0">False</option>
                    <option value="1">True</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Is fasting blood sugar &gt; 120 mg/dL?
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Resting ECG Results
                  </label>
                  <select
                    name="restingECGResults"
                    value={formData.restingECGResults}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select ECG Results</option>
                    <option value="0">Normal</option>
                    <option value="1">ST-T wave abnormality</option>
                    <option value="2">Left ventricular hypertrophy</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Choose the result of resting ECG.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Max Heart Rate
                  </label>
                  <input
                    type="number"
                    name="maxHeartRate"
                    value={formData.maxHeartRate}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter the maximum heart rate achieved during exercise.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Exercise Induced Angina
                  </label>
                  <select
                    name="exerciseInducedAngina"
                    value={formData.exerciseInducedAngina}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select</option>
                    <option value="0">No</option>
                    <option value="1">Yes</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Do you experience angina induced by exercise?
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">Oldpeak</label>
                  <input
                    type="number"
                    name="oldpeak"
                    value={formData.oldpeak}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter the ST depression induced by exercise relative to
                    rest.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">ST Segment</label>
                  <select
                    name="stSegment"
                    value={formData.stSegment}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select ST Segment</option>
                    <option value="1">Upsloping</option>
                    <option value="2">Flat</option>
                    <option value="3">Downsloping</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Choose the slope of the peak exercise ST segment.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Major Vessels
                  </label>
                  <input
                    type="number"
                    name="majorVessels"
                    value={formData.majorVessels}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Enter the number of major vessels (0-3) colored by
                    fluoroscopy.
                  </p>
                </div>
                <div className="col-span-1 mb-4">
                  <label className="block text-gray-700 mb-2">
                    Thalassemia
                  </label>
                  <select
                    name="thal"
                    value={formData.thal}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded outline-none text-sm "
                  >
                    <option value="">Select Thalassemia</option>
                    <option value="3">Normal</option>
                    <option value="6">Fixed defect</option>
                    <option value="7">Reversible defect</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2">
                    Select thalassemia status.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 px-4 rounded mt-6 hover:bg-teal-700"
              >
                Predict
              </button>
            </form>
          </div>
        </div>

        <div className="w-1/3">
          <InsightTable />
        </div>
      </div>
    </div>
  );
};

export default HDAnalysis;
