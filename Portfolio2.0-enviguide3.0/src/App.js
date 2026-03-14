import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Solutions from './components/Solutions';
import Blog from './components/Blog';
import ContactUs from './components/ContactUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogOne from './components/Blogs/BlogOne';
import BlogTwo from './components/Blogs/BlogTwo';
import PagenotFound from './components/PagenotFound';
import CCFCalculator from './components/CCFCalculator';
import { CarbonFootprintProvider } from './context/CarbonFootprintContext';
import LandingPage from './components/CCFCalculator/LandingPage';
import NameScreen from './components/CCFCalculator/NameScreen';
import ActivityScreen from './components/CCFCalculator/ActivityScreen';
import DesignationScreen from './components/CCFCalculator/DesignationScreen';
import EmailScreen from './components/CCFCalculator/EmailScreen';
import EmployeeNoScreen from './components/CCFCalculator/EmployeeNoScreen';
import RevenueScreen from './components/CCFCalculator/RevenueScreen';
import ReportScreen from './components/CCFCalculator/ReportScreen';
import EligibilityScreen from './components/CCFCalculator/EligibilityScreen';
import ProcurementScreen from './components/CCFCalculator/ProcurementScreen';
import ScopeScreen from './components/CCFCalculator/ScopeScreen';
import DirectEmissions from './components/CCFCalculator/DirectEmissions';
import DirectEmissions3 from './components/CCFCalculator/DirectEmissions3';
import DirectEmissions4 from './components/CCFCalculator/DirectEmissions4';
import IndirectEmissions from './components/CCFCalculator/IndirectEmissions';
import IndirectEmissions2 from './components/CCFCalculator/IndirectEmissions2';
import IndirectEmissions3 from './components/CCFCalculator/IndirectEmissions3';
import IndirectEmissions4 from './components/CCFCalculator/IndirectEmissions4';
import IndirectEmissions5 from './components/CCFCalculator/IndirectEmissions5';
import IndirectEmissions6 from './components/CCFCalculator/IndirectEmissions6';
import Others from './components/CCFCalculator/Others';
import Others4 from './components/CCFCalculator/Others4';
import Others5 from './components/CCFCalculator/Others5';
import Others6 from './components/CCFCalculator/Others6';
import Others8 from './components/CCFCalculator/Others8';
import Others9 from './components/CCFCalculator/Others9';
import AvoidedEmissions from './components/CCFCalculator/AvoidedEmissions';
import Avoided2 from './components/CCFCalculator/Avoided2';
import Avoided3 from './components/CCFCalculator/Avoided3';
import FuelScreen from './components/CCFCalculator/FuelScreen';
import ResultsScreen from './components/CCFCalculator/ResultsScreen';
import Modules from './components/CCFCalculator/Modules';
import Household from './components/CCFCalculator/Household';
import Electricity from './components/CCFCalculator/Electricity';
import Electricity2 from './components/CCFCalculator/Electricity2';
import Fuel from './components/CCFCalculator/Fuel';
import Fuel2 from './components/CCFCalculator/Fuel2';
import Fuel3 from './components/CCFCalculator/Fuel3';
import Travel from './components/CCFCalculator/Travel';
import Travel2 from './components/CCFCalculator/Travel2';
import Travel3 from './components/CCFCalculator/Travel3';
import Travel4 from './components/CCFCalculator/Travel4';
import Travel5 from './components/CCFCalculator/Travel5';
import Travel6 from './components/CCFCalculator/Travel6';
import Travel7 from './components/CCFCalculator/Travel7';
import Travel8 from './components/CCFCalculator/Travel8';
import Travel9 from './components/CCFCalculator/Travel9';
import Meal from './components/CCFCalculator/Meal';
import IndividualResults from './components/CCFCalculator/IndividualResults';

function App() {
  return (
    <CarbonFootprintProvider>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/About-us' element={<AboutUs />} />
          <Route path='/Solutions' element={<Solutions />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/CCF-Calculator' element={<CCFCalculator />} />
          <Route path='/CCF-Calculator/landing' element={<LandingPage />} />
          <Route path='/CCF-Calculator/name' element={<NameScreen />} />
          <Route path='/CCF-Calculator/activity' element={<ActivityScreen />} />
          <Route path='/CCF-Calculator/designation' element={<DesignationScreen />} />
          <Route path='/CCF-Calculator/email' element={<EmailScreen />} />
          <Route path='/CCF-Calculator/employeeNo' element={<EmployeeNoScreen />} />
          <Route path='/CCF-Calculator/revenue' element={<RevenueScreen />} />
          <Route path='/CCF-Calculator/report' element={<ReportScreen />} />
          <Route path='/CCF-Calculator/eligibility' element={<EligibilityScreen />} />
          <Route path='/CCF-Calculator/procurement' element={<ProcurementScreen />} />
          <Route path='/CCF-Calculator/scope' element={<ScopeScreen />} />
          <Route path='/CCF-Calculator/DirectEmissions' element={<DirectEmissions />} />
          <Route path='/CCF-Calculator/DirectEmissions3' element={<DirectEmissions3 />} />
          <Route path='/CCF-Calculator/DirectEmissions4' element={<DirectEmissions4 />} />
          <Route path='/CCF-Calculator/IndirectEmissions' element={<IndirectEmissions />} />
          <Route path='/CCF-Calculator/IndirectEmissions2' element={<IndirectEmissions2 />} />
          <Route path='/CCF-Calculator/IndirectEmissions3' element={<IndirectEmissions3 />} />
          <Route path='/CCF-Calculator/IndirectEmissions4' element={<IndirectEmissions4 />} />
          <Route path='/CCF-Calculator/IndirectEmissions5' element={<IndirectEmissions5 />} />
          <Route path='/CCF-Calculator/IndirectEmissions6' element={<IndirectEmissions6 />} />
          <Route path='/CCF-Calculator/others' element={<Others />} />
          <Route path='/CCF-Calculator/others4' element={<Others4 />} />
          <Route path='/CCF-Calculator/others5' element={<Others5 />} />
          <Route path='/CCF-Calculator/others6' element={<Others6 />} />
          <Route path='/CCF-Calculator/others8' element={<Others8 />} />
          <Route path='/CCF-Calculator/others9' element={<Others9 />} />
          <Route path='/CCF-Calculator/AvoidedEmissions' element={<AvoidedEmissions />} />
          <Route path='/CCF-Calculator/Avoided2' element={<Avoided2 />} />
          <Route path='/CCF-Calculator/Avoided3' element={<Avoided3 />} />
          <Route path='/CCF-Calculator/results' element={<ResultsScreen />} />
          <Route path='/CCF-Calculator/modules' element={<Modules />} />
          <Route path='/CCF-Calculator/household' element={<Household />} />
          <Route path='/CCF-Calculator/electricity' element={<Electricity />} />
          <Route path='/CCF-Calculator/electricity2' element={<Electricity2 />} />
          <Route path='/CCF-Calculator/fuel' element={<Fuel />} />
          <Route path='/CCF-Calculator/fuel2' element={<Fuel2 />} />
          <Route path='/CCF-Calculator/fuel3' element={<Fuel3 />} />
          <Route path='/CCF-Calculator/fuel-screen' element={<FuelScreen />} />
          <Route path='/CCF-Calculator/travel' element={<Travel />} />
          <Route path='/CCF-Calculator/travel2' element={<Travel2 />} />
          <Route path='/CCF-Calculator/travel3' element={<Travel3 />} />
          <Route path='/CCF-Calculator/travel4' element={<Travel4 />} />
          <Route path='/CCF-Calculator/travel5' element={<Travel5 />} />
          <Route path='/CCF-Calculator/travel6' element={<Travel6 />} />
          <Route path='/CCF-Calculator/travel7' element={<Travel7 />} />
          <Route path='/CCF-Calculator/travel8' element={<Travel8 />} />
          <Route path='/CCF-Calculator/travel9' element={<Travel9 />} />
          <Route path='/CCF-Calculator/meal' element={<Meal />} />
          <Route path='/CCF-Calculator/individual-results' element={<IndividualResults />} />
          <Route path='/Contact-Us' element={<ContactUs />} />
          <Route path='/Privacy-Policy' element={<PrivacyPolicy />} />
          <Route path='/BlogOne' element={<BlogOne />} />
          <Route path='/BlogTwo' element={<BlogTwo />} />
          <Route path='*' element={<PagenotFound />} />
        </Routes>
        <Footer />
      </div>
    </CarbonFootprintProvider>
  );
}

export default App;
