import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const MainPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="p-4 flex-grow">
          {/* Main content goes here */}
          <h1 className="text-2xl font-bold mb-4">Main Content</h1>
          <p>This is the main section of your page.</p>
        </main>
      </div>
    </div>
  );
};

export default MainPage;
