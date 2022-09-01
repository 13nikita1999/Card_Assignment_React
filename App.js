import './App.css'
import Card from './Component/Card'
import Sdata from './Component/Sdata'
const App = () => {
  return (
    <>
        <div className="container">
        <div class="upp">
        <h1 id="head1" class="head">Reliable, efficient delivery</h1>
        <h1 id="head2" class="head">Powered by Technology</h1>
        <p class="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae tempora dolorem eveniet!</p>
        <p class="para ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>

        {/* ------------------------------------------------------------------- */}
        <Card heading={Sdata[0].heading} 
        icon={Sdata[0].icon}
        />
        <Card heading={Sdata[1].heading} 
        icon={Sdata[1].icon}
        />
        <Card heading={Sdata[2].heading} 
        icon={Sdata[2].icon}
        />
        <Card heading={Sdata[3].heading} 
        icon={Sdata[3].icon}
        />
        </div>
    </>
  )
}
export default App 