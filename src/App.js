import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 3500);
  }, [open]);

  const style = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
    borderRadius: "10px",
  };
  return (
    <div className="font-mono ">
      <Home />
      <About />
      <Projects />
      <Contact setOpen={setOpen} />
      <Footer />
      {open && (
        <div
          className="fixed top-28 left-1/2 transform -translate-x-1/2 h-50 w-100 text-sm min-w-fit "
          style={style}
        >
          <div
            className="animate-pulse"
            style={{
              background: "white",
              padding: "10px 15px",
              zIndex: 1,
              color: "green",
              borderRadius: "5px",
              display: "flex",
              gap: 10,
            }}
          >
            <img
              src="https://cdn2.iconfinder.com/data/icons/greenline/512/check-1024.png"
              height="15px"
              width="20px"
              alt=""
            ></img>
            Email sent successfully
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
