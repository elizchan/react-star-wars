import Layout from "./components/common/Layout"
import Home from './components/Home'
import Starship from './components/Starship'
import {Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path="/" exact component={Home} />
        <Route path="/starship" render={({location}) => <Starship location={location}/>}/>
      </Layout>
    </div>
  );
}

export default App;
