import { ClickToComponent } from 'click-to-react-component'
import Landing from "./components/Landing/Landing";
import NotFound from "./components/NotFound/NotFound";
// import Dashboard from "./components/Dashboards/Dashboard";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import {
  Route,
  Routes,
  useLocation,
  Outlet,
  BrowserRouter,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Landing/Home/Home";
import Dash from "./components/Dashboards/Dash/Dash";
import RealEstates from "./components/RealEstates";
import React, { useEffect, useState } from "react";
import Modals from "./components/Dashboards/Modals/Modals";
import Web3 from "web3";
import Governance from "./components/Governance/Governance";
import Vaults from "./components/Vaults/Vaults";
import RealEstateDetail from "./components/RealEstateDetail/index";
import SideBarMobile from "./components/SideBar/mobile/SideBarMobile";
import CoomingSoon from "./components/ComingSoon/ComingSoon";
//import Launchpad from "./components/Launchpad/Launchpad";
//import ProductPage from "./components/Launchpad/ProductPage/ProductPage";
import GovernanceDetails from "./components/Governance/GovernanceDetails/GovernanceDetails";
import Marketplace from "./components/MarketPlace/Marketplace";
import Details from "./components/MarketPlace/Details/Details";
import NavbarMarket from "./components/Landing/NavBar/NavbarMarket/NavbarMarket";
import { useModal } from "./helpers/useModal/useModal";
//import WarningBuilding from "./components/WarningBuilding";
import AdminMenu from "./components/Admin/AdminMenu/AdminMenu";
import { useAccount } from "wagmi";
import { getAdminByWallet, getUnapprovedProjects } from "../redux/actions";
import { setIsAdmin } from "../redux/reducer";
import ChatBot from "./components/ChatBot/ChatBot";
import Recommendations from "./components/ChatBot/Recommendations";
import { useMediaQuery } from "react-responsive";
import SupportCenter from "./components/SupportCenter/SupportCenter";
// import BuyProperty from "../components/RealEstateDetail/BuyProperty";
import BuyProperty from "./components/RealEstateDetail/Buying/BuyProperty"
import IDO from "./components/IDO/IDO";
import Footer from "./components/RealEstates/Footer/Footer.jsx";
import CreateProperty from "./components/CreateProperty/CreateProperty";
import AdminDash from "./components/AdminDashboard/AdminDash";
import UsersTable from "./components/AdminDashboard/UsersTable/UsersTable";
import Transactions from "./components/AdminDashboard/Transactions/Trasactions";
import Properties from "./components/AdminDashboard/Properties/Properties";
import DashboardUser from "./components/DashboardUser/DashboardUser";
import CoinPage from "./components/Coin/Coin";
import SignIn from "./components/SignIn/SignIn";
import SubscribePage from "./components/Contact/SubscribePage";
import ContactPage from "./components/Contact/ContactPage";
import AboutPage from "./components/AboutUs/About";
import ICO from './components/ICOPage/ICO';




function App() {
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModal();
  const { address } = useAccount();
  const { selectedIcon, walletPopUp, adminWallet, isAdmin } = useSelector(
    (state) => state.reducerCompleto
  );
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const AppLayout = () => (
    <>
      {/* <div className="bgImage">
        <img src="./icons/Background.svg" />
      </div> */}
      {/* <WarningBuilding isOpen={isOpenModal} closeModal={closeModal} /> */}
      <Modals state={stateModal} setStateModal={setStateModal} />

      <div className="SideBar">
        <NavbarMarket />
      </div>
      <Outlet />
    </>
  );

  useEffect(() => {
    openModal();
    dispatch(getAdminByWallet(address));
    dispatch(setIsAdmin(adminWallet.length ? true : false));
    isAdmin ? dispatch(getUnapprovedProjects()) : null;
  }, [dispatch]);

  return (
    <div className="App">
        <ClickToComponent />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <div className="Page">
                <Dash setStateModal={setStateModal} />
              </div>
            }
          />
          <Route
            path="/vaults"
            element={
              <div className="Page">
                <Vaults />
              </div>
            }
          />

          <Route
            path="/ico"
            element={
              <div className="">
                {/* <ICO /> */}
                <CoomingSoon />
              </div>
            }
          />
          <Route path="/" element={<Landing />} />
          <Route
            path={"/marketplace"}
            element={
              <div className="Page">
                <RealEstates />
              </div>
            }
          />
          <Route
            path={"/marketplace/:id"}
            element={
              <div className="Page">
                <RealEstateDetail />
              </div>
            }
          />
          <Route
          path="/marketplace/buy/:id"
          element={<BuyProperty />}
          />

          <Route
          path="/peertopeer"
          element={
          <div className="Page">
          <Marketplace />
          </div>
        }
          />

          {/* <Route
            path={"/marketplace/:id"}
            element={
              <div className="Page" style={{ flexDirection: "column" }}>
                <Details />
              </div>
            }
          />

           */}
          <Route path={"/chatbot"} element={<ChatBot />} />
          <Route />

          {/* <Route
            path={"/launchpad"}
            element={
              <div className="Page">
                <IDO />
              </div>
            }
          /> */}
          <Route
            path="/governance"
            element={
              <div className="Page">
                <Governance />
              </div>
            }
          />
          <Route
            path="/governance/id"
            element={
              <div className="Page">
                <GovernanceDetails />
              </div>
            }
          />

        {/* <Route
            path={"/userdash"}
            element={
              <div className="Page">
                <UserDashboard />
              </div>
            }
          /> */}
                  {/* <Route
            path={"/userdash/myproperties"}
            element={
              <div className="Page">
                <UserProperties />
              </div>
            }
          /> */}

          <Route
            path={"/userdash/myproperties/:id"}
            element={
              <div className="Page">
                <RealEstateDetail />
              </div>
            }
          />

            {/* <Route
            path="/userdash/myproperties/sell/:number"
            element={<SellProperty />}
            /> */}


        <Route
          path="/admindashboard"
          element={
          <div className="Page">
          <AdminDash />
          </div>
        }
          />

        <Route
          path="/admin-allusers"
          element={
          <div className="Page">
          <UsersTable />
          </div>
        }
          />

      <Route
          path="/admin-properties"
          element={
          <div className="Page">
          <Properties />
          </div>
        }
          />



      <Route
          path="/admin-transactions"
          element={
          <div className="Page">
          <Transactions />
          </div>
        }
          />



          {/* <Route
            path={"/product"}
            element={
              <div className="Page">
                <ProductPage />
              </div>
            }
          /> */}
          <Route
            path={"/admin"}
            element={
              <div className="Page">
                <AdminMenu />
              </div>
            }
          />

          <Route path={"/create"} element={<CreateProperty />} />

          <Route path={"/create/:id"} element={<CreateProperty />} />

          <Route path="/support" element={<SupportCenter />} />
          {/* <Route
          path="/support"
          element={Faq}
          /> */}

          {/* <Route
            path="/realestate"
            element={
              <div className="Page">
                <Marketplace />
              </div>
            }
          /> */}

          <Route path={"/mydashboard/*"} element= {<DashboardUser />} />

          <Route path="/subscribe" element = {<SubscribePage />} />

          <Route path= "/contact" element = { <ContactPage />} />

          <Route path= "/about" element = { <AboutPage />} />


          <Route
            path={"/coinrelease"}
            element={
              <div className="Page">
                <CoinPage />
              </div>
            }
          />

          {/* Dentro de este Route van todas las cosas que tengan sidebar */}
        </Route>
        <Route path="/swap" element={<CoomingSoon />} />
        <Route path="/comingsoon" element={<CoomingSoon />} />
        <Route path="*" element={<NotFound />} />

        {/* <Route path="/signin" element={<DashboardUser />} /> */}
      </Routes>
      <Footer />
      <ClickToComponent />

    </div>

    // <div className="App">
    //   <ClickToComponent />

    //   <ICO />
    // </div>

  );
}

export default App;
