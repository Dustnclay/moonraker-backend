import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <Header/>
        <div class="page">
          {/* <Route path='/About' component={About}/> */}
          <About/>
          {/* <Route path='/Merchandise' component={Moonraker}/> */}
          <AboutMe/>
          <Route path='/Contact' component={Contact}/>
          {/* <Contact/>           */}
          {/* <Route exact path='/' component={Examples}/> */}
          <Examples/>
        </div>
      <Footer/> 
    </>
  );
}

export default App;
