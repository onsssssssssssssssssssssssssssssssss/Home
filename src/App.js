import { BrowserRouter as Router, 
  Route,
   Switch } from 'react-router-dom';
   import About from "./pages/aboutus/About";
   import Contact from "./pages/contact/Contact";
   import home from "./pages/home/home";
   import Service from "./pages/service/Service";
      import Navbar from './pages/navbar/Navbar';
   import Slider from './pages/slider/Slider';
   import 'bootstrap/dist/css/bootstrap.min.css';
import Section2 from './pages/section2/Section2';
import Call from './pages/CALLACTION/Call';
import Skils from './pages/skills/Skils';
import Facts from './pages/facts/Facts';
import Partner from './pages/partner/Partner';
import Footer from './pages/footer/Footer';
import Test from "./pages/testmonnai/Testmonnais"

const App = ()=>
 {
 return (
    <>
     <Navbar/>
     <Router>
     <Switch>
       <Route exact path="/Contact" exact component={Contact} />
       <Route exact path="/About" component={About} />
       <Route exact path="/Service" component={Service} />
       <Route exact path="/testmonnai" component={Test} />
       <Route path="/">
       <Slider/>
   <Section2/>
   <Call/>
   <Skils/>
   <Facts/>
   <Partner/>
       </Route>
       </Switch>
   
   <Footer/>  
    </Router>
</>

  );
}

export default App;
