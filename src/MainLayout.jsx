import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return(
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default MainLayout;
