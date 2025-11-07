import AnnouncementBar from "./components/Home/AnnouncementBar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="">
        <AnnouncementBar
          messages={[
            "Free milk delivery above ₹500",
            "Fresh cow & buffalo milk daily",
            "Get 10% off on ghee & paneer today!",
          ]}
        />

        <Navbar />
        <Home/>
      </div>
    </>
  );
}

export default App;
