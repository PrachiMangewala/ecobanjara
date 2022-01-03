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
import SavedEntitiesScreen from './screens/SavedEntitiesScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProfileEditScreen from './screens/ProfileEditScreen';
import AllDestinationsScreen from './screens/AllDestinationsScreen';
import AllTravelexpertsScreen from './screens/AllTravelexpertsScreen';
import CheckoutScreen from './screens/CheckoutScreen';
import CongratulationsScreen from './screens/CongratulationsScreen';
import ChatScreen from './screens/ChatScreen';
import ChatInfluencerScreen from './screens/ChatInfluencerScreen';
import AddCustomItineraryScreen from './screens/AddCustomItineraryScreen';
import AddItinerarySectionScreen from './screens/AddItinerarySectionScreen';
import SetMeetingScreen from './screens/SetMeetingScreen';
import VideosScreen from './screens/VideosScreen';

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
          <Route path="/destinations/all" element={<AllDestinationsScreen type="all"/>} exact></Route>
          <Route path="/destinations/popular" element={<AllDestinationsScreen type="popular"/>} exact></Route>
          <Route path="/destinations/newest" element={<AllDestinationsScreen type="newest"/>} exact></Route>
          <Route path="/travelexperts/rating" element={<AllTravelexpertsScreen type="rating"/>} exact></Route>
          <Route path="/profilescreen/:id" element={<ProfileScreen/>} exact></Route>
          <Route path="/edit/:id" element={<ProfileEditScreen/>} exact></Route>
          <Route path="/saved/:id" element={<SavedEntitiesScreen/>} exact></Route>
          <Route path="/signup/:role" element={<SignupScreen/>} exact></Route>
          <Route path="/enterdetails" element={<SignupDetailsScreen />} exact></Route>
          <Route path="/otpscreen/:role" element={<OtpScreen/>} exact></Route>
          <Route path="/destination/:id" element={<DestinationScreen/>} exact></Route>
          <Route path="/blogscreen/:id" element={<BlogsScreen/>} exact></Route>
          <Route path="/videos/:id" element={<VideosScreen/>} exact></Route>
          <Route path="/blog/:locationId/:id" element={<BlogScreen/>} exact></Route>
          <Route path="/influencer/:id" element={<InfluencerScreen/>} exact></Route>
          <Route path="/connect/:id/:influencer" element={<ConnectScreen/>} exact></Route>
          <Route path="/checkout/:id" element={<CheckoutScreen/>} exact></Route>
          <Route path="/description" element={<DescriptionScreen/>} exact></Route>
          <Route path="/chat" element={<ChatScreen/>} exact></Route>
          <Route path="/chat/influencer" element={<ChatInfluencerScreen/>} exact></Route>
          <Route path="/customitinerary" element={<AddCustomItineraryScreen/>} exact></Route>
          <Route path="/itinerarysection/:day" element={<AddItinerarySectionScreen/>} exact></Route>
          <Route element={<TravelExpertRoute/>}>
            <Route path="/home/influencer/:id" element={<InfluencerPrivateScreen />} exact></Route>
            <Route path="/itinerary/addlocations/:id" element={<AddLocationsScreen/>} exact></Route>
            <Route path="/edit/influencer/:id" element={<EditInfluencerScreen />} exact></Route>
            <Route path="/itinerary/adddetails/:id" element={<DescriptionScreen2/>} exact></Route>
            <Route path="/itinerary/adddetails/:id" element={<DescriptionScreen2/>} exact></Route>
            <Route path="/itinerary/addperdayiteneraries/:id" element={<AddItenerariesScreen/>} exact></Route>
            <Route path="/itineraryday/:itineraryId/:dayNo" element={<IteneraryDayScreen/>} exact></Route>
            <Route path="/itinerary/:itineraryId" element={<IteneraryScreen/>} exact></Route>
            <Route path="/congratulations/:itineraryId" element={<CongratulationsScreen/>} exact></Route>
            <Route path="/meeting" element={<SetMeetingScreen/>} exact></Route>
          </Route>
          <Route path="/wholeitinerary/:id" element={<WholeIteneraryScreen/>} exact></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
