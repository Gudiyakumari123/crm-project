import React from "react";

// Styles Files
import "./App.css";
import "./Assets/scss/ReusableStyles.scss"; // All Reusable Styles
import "./Assets/scss/Forms.scss"; // All Forms Styles
import "./Assets/scss/Staff.scss"; // All Forms Styles
import "./Assets/scss/AllStyles.scss"; // All Others Styles
// import Login from './shared/Login/Login';

//Components
// import Home from "./components/Home/Home";
import Home from "./component/Home/Home";
import Login from "./shared/Login/Login";
// import Loading from "./shared/Loading/Loading";
import Table from "./shared/Table";

// Payment Gateway
import Payment from "./component/Payment/PaymentDesign";

// Leads Routes
import LeadEntry from "./component/Pages/Forms/Leads/LeadEntry";
// import TodayFollowups from './component/Pages/Forms/Leads/TodayFollow';
// import Unfollows from './component/Pages/Forms/Leads/Unfollow';
// import FollowupList from './component/Pages/Forms/Leads/FollowList';
// import LeadsReport from './component/Pages/Forms/Leads/LeadReport';
// import CategoryWiseLeads from './component/Pages/Forms/Leads/CategoryLead';

// import SoftwareWiseLeads from "./components/Pages/Forms/Leads/SoftwareLead";
// import AreaWiseLead from "./components/Pages/Forms/Leads/AreaLead";
// import CountryWiseLeads from "./components/Pages/Forms/Leads/CountryLead";
// import RatioWiseLeads from "./components/Pages/Forms/Leads/RadioLead";
// import ReferenceWiseLeads from "./components/Pages/Forms/Leads/ReferenceLead";
// import DealerWiseLeads from "./components/Pages/Forms/Leads/DealerLead";
// import SourceWiseLeads from "./components/Pages/Forms/Leads/SourceLead";
// import LeadSummary from "./components/Pages/Forms/Leads/LeadSummery";

// Installation Routes
import InstallationEntry from "./component/Pages/Forms/Installation/InstallEntry";
import ReInstallationEntry from "./component/Pages/Forms/Installation/ReInstall";

//  import InstallationEntry from "./components/Pages/Forms/Installation/InstallEntry";
//  import DemoInstallation from "./components/Pages/Forms/Installation/DemoInstall";
//  import ReInstallationEntry from "./components/Pages/Forms/Installation/ReInstall";
//  import InstallationReport from "./components/Pages/Forms/Installation/InstallReport";
//  import InstallationsSummary from "./components/Pages/Forms/Installation/InstallSummary";
//  import DemoInstallationReport from "./components/Pages/Forms/Installation/DemoInstallReport";
//  import InstallationHistory from "./components/Pages/Forms/Installation/InstallHistory";

// Services Routes

import ServiceEntry from "./component/Pages/Forms/Services/ServiceEntry";
// import ServiceEntry from "./components/Pages/Forms/Services/ServiceEntry";
// import TrackService from "./components/Pages/Forms/Services/TrackService";
// import UnclearedServices from "./components/Pages/Forms/Services/UnclearService";
// import ServiceList from "./components/Pages/Forms/Services/ServiceList";
// import ServicesSummary from "./components/Pages/Forms/Services/ServiceSummary";
// import CategoryWiseService from "./components/Pages/Forms/Services/CategoryService";
// import SoftwareWiseService from "./components/Pages/Forms/Services/SoftwareService";

// Dealer Routes
import DealerRegistration from "./component/Pages/Forms/Dealer/DealerRegister";

// import DealersList from "./components/Pages/Forms/Dealer/DealerList";
// import AreaWiseDealersList from "./components/Pages/Forms/Dealer/AreaDealerList";
// import CountryWiseDealersList from "./components/Pages/Forms/Dealer/CountryDealerList";
// import DealersSummary from "./components/Pages/Forms/Dealer/DealerSummary";
// import InactiveDealers from "./components/Pages/Forms/Dealer/InactiveDealer";

// Customer Routes
import CustomerRegistration from "./component/Pages/Forms/Customer/CustomerRegister";
import CustomerReceiptEntry from "./component/Pages/Forms/Customer/CustomerReceipt";

// import CustomerSearch from "./components/Pages/Forms/Customer/CusSearch";
// import DuesReport from "./components/Pages/Forms/Customer/DuesReport";
// import OverduesReport from "./components/Pages/Forms/Customer/OverDuesReport";
// import CustomerAccountsStatement from "./components/Pages/Forms/Customer/CusAccountStatement";
// import CustomersList from "./components/Pages/Forms/Customer/CustomerList";
// import AreaWiseCustomersList from "./components/Pages/Forms/Customer/AreaCusList";
// import CountryWiseCustomersList from "./components/Pages/Forms/Customer/CountryCusList";
// import CustomersSummary from "./components/Pages/Forms/Customer/CustomerSummary";

//HR routes
import StaffList from "./component/Pages/Forms/HR/staffList";
import StaffDetails from "./component/Pages/Forms/HR/StaffDetails";
import Attendance from "./component/Pages/Forms/HR/Attendance";
import StaffPayrol from "./component/Pages/Forms/HR/staffPayroll";
// import StaffList from "./components/Pages/Forms/HR/staffList";
// import StaffDetails from "./components/Pages/Forms/HR/StaffDetails";
// import Attendance from "./components/Pages/Forms/HR/Attendance";
// import StaffPayrol from "./components/Pages/Forms/HR/staffPayroll";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/table" element={<Table />} />
          {/* <Route path="/search-lists" element={<Search />} /> */}

          {/* Leads Routers */}
          <Route path="/leadEntry" element={<LeadEntry />} />
          {/* <Route path="/todayFollow" element={<TodayFollowups />} />
            <Route path="/unFollow" element={<Unfollows />} />
            <Route path="/followList" element={<FollowupList />} />
            <Route path="/leadReport" element={<LeadsReport />} />
            <Route path="/category-wise-lead" element={<CategoryWiseLeads />} />
            <Route path="/software-wise-lead" element={<SoftwareWiseLeads />} />
            <Route path="/area-wise-lead" element={<AreaWiseLead />} />
            <Route path="/country-wise-lead" element={<CountryWiseLeads />} />
            <Route path="/radio-wise-lead" element={<RatioWiseLeads />} />
            <Route
              path="/reference-wise-lead"
              element={<ReferenceWiseLeads />}
            />
            <Route path="/dealer-wise-lead" element={<DealerWiseLeads />} />
            <Route path="/source-wise-lead" element={<SourceWiseLeads />} />
            <Route path="/leadSummery" element={<LeadSummary />} /> */}

          {/* Installation Routers */}
          <Route path="/installationEntry" element={<InstallationEntry />} />
          {/* <Route path="/demoInstallation" element={<DemoInstallation />} /> */}
          <Route
            path="/reInstallationEntry"
            element={<ReInstallationEntry />}
          />
          {/* <Route
              path="/installationReport"
              element={<InstallationReport />}
            />
            <Route
              path="/installationSummary"
              element={<InstallationsSummary />}
            />
            <Route
              path="/demoInstallationReport"
              element={<DemoInstallationReport />}
            />
            <Route
              path="/installationHistory"
              element={<InstallationHistory />}
            /> */}

          {/* Services Routers */}
          <Route path="/serviceEntry" element={<ServiceEntry />} />
          {/* <Route path="/trackService" element={<TrackService />} />
            <Route path="/undeclaredService" element={<UnclearedServices />} />
            <Route path="/serviceList" element={<ServiceList />} />
            <Route path="/serviceSummary" element={<ServicesSummary />} />
            <Route
              path="/category-wise-service"
              element={<CategoryWiseService />}
            />
            <Route
              path="/software-wise-servie"
              element={<SoftwareWiseService />}
            /> */}

          {/* Dealer Routers */}
          <Route
            path="/dealer-registeration"
            element={<DealerRegistration />}
          />
          {/* <Route path="/dealer-list" element={<DealersList />} />
          <Route
            path="/area-wise-dealer-list"
            element={<AreaWiseDealersList />}
          />
          <Route
            path="/country-wise-dealer-list"
            element={<CountryWiseDealersList />}
          />
          <Route path="/dealerSummary" element={<DealersSummary />} />
          <Route path="/inactiveDealer" element={<InactiveDealers />} /> */}

          {/* Customer Routers */}

          <Route
            path="/customer-registration"
            element={<CustomerRegistration />}
          />
          <Route
            path="/customer-receipt-entry"
            element={<CustomerReceiptEntry />}
          />
          {/* <Route path="/customer-search" element={<CustomerSearch />} />
          <Route path="/dues-report" element={<DuesReport />} />
          <Route path="/overdues-report" element={<OverduesReport />} />
          <Route
            path="/customer-account-statement"
            element={<CustomerAccountsStatement />}
          />
          <Route path="/customer-list" element={<CustomersList />} />
          <Route
            path="/area-wise-customer-list"
            element={<AreaWiseCustomersList />}
          />
          <Route
            path="/country-wise-customer-list"
            element={<CountryWiseCustomersList />}
          />
          <Route path="/customer-summary" element={<CustomersSummary />} /> */}

          {/* HR Routers  */}
          <Route path="/staff-details" element={<StaffDetails />} />
          <Route path="/staff-list" element={<StaffList />} />
          <Route path="/staff-attendence" element={<Attendance />} />
          <Route path="/staff-payroll" element={<StaffPayrol />} />

          {/* Payment */}
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
