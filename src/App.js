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
          <Route path="/blog" element={<BlogScreen/>} exact></Route>
          <Route path="/influencerscreen" element={<InfluencerScreen/>} exact></Route>
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
