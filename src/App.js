import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
// import SignupScreen from './screens/SignupScreen';
import SignInScreen from './screens/SignInScreen';
import OnBoardingScreen from './screens/OnBoardingScreen';
import OnBoardRoleScreen from './screens/OnBoardRoleScreen';
import SignupScreen from './screens/SignupScreen';
import OtpScreen from './screens/OtpScreen';
import SignupDetailsScreen from './screens/SignupDetailsScreen';
import DestinationScreen from './screens/DestinationScreen';
import BlogsScreen from './screens/BlogsScreen';
import BlogScreen from './screens/BlogScreen';
import InfluencerScreen from './screens/InfluencerScreen';
import ConnectScreen from './screens/ConnectScreen';
import DescriptionScreen from './screens/DescriptionScreen';
import DescriptionScreen2 from './screens/DescriptionScreen2';
import AddLocationsScreen from './screens/AddLocationsScreen';
import AddItenerariesScreen from './screens/AddItenerariesScreen';
import IteneraryDayScreen from './screens/IteneraryDayScreen';
import IteneraryScreen from './screens/IteneraryScreen';
import WholeIteneraryScreen from './screens/WholeIteneraryScreen';
import TravelExpertRoute from './components/InfluencerRoute';
import InfluencerPrivateScreen from './screens/InfluencerPrivateScreen';
import EditInfluencerScreen from './screens/EditInfluencerScreen';

function App() {
  return (
    <BrowserRouter>
    <div>
      <main>
        <Routes>
          <Route path="/" element={<OnBoardingScreen />} exact></Route>
          <Route path="/onboardrole" element={<OnBoardRoleScreen />} exact></Route>
          <Route path="/signin" element={<SignInScreen/>} exact></Route>
          <Route path="/home" element={<HomeScreen/>} exact></Route>
          <Route path="/signup/:role" element={<SignupScreen/>} exact></Route>
          <Route path="/enterdetails" element={<SignupDetailsScreen />} exact></Route>
          <Route path="/otpscreen/:role" element={<OtpScreen/>} exact></Route>
          <Route path="/destination/:id" element={<DestinationScreen/>} exact></Route>
          <Route path="/blogscreen/:id" element={<BlogsScreen/>} exact></Route>
          <Route path="/blog/:locationId/:id" element={<BlogScreen/>} exact></Route>
          <Route path="/influencer/:id" element={<InfluencerScreen/>} exact></Route>
          <Route path="/connectscreen" element={<ConnectScreen/>} exact></Route>
          <Route path="/description" element={<DescriptionScreen/>} exact></Route>
          <Route element={<TravelExpertRoute/>}>
            <Route path="/home/influencer/:id" element={<InfluencerPrivateScreen />} exact></Route>
            <Route path="/itinerary/addlocations/:id" element={<AddLocationsScreen/>} exact></Route>
            <Route path="/edit/influencer/:id" element={<EditInfluencerScreen />} exact></Route>
            <Route path="/itinerary/adddetails/:id" element={<DescriptionScreen2/>} exact></Route>
          </Route>
          <Route path="/itinerary/addperdayiteneraries/:id" element={<AddItenerariesScreen/>} exact></Route>
          <Route path="/iteneraryday/:day" element={<IteneraryDayScreen/>} exact></Route>
          <Route path="/itenerary" element={<IteneraryScreen/>} exact></Route>
          <Route path="/wholeitenerary" element={<WholeIteneraryScreen/>} exact></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
