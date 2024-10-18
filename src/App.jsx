import CustomerCard from "./components/CustomerCard"
import DeliverierCard from "./components/DeliverierCard"
import OrderCard from "./components/OrderCard"
import PrimaryNav from "./components/PrimaryNav"
import RatingCard from "./components/RatingCard"
import SalesCard from "./components/SalesCard"
import SecondaryNav from "./components/SecondaryNav"

const App = () => {
  return (
    <>
    
    <div className="navbars">
  
           <PrimaryNav/>

          <SecondaryNav/>

      <div className="container">
      
          <CustomerCard/>

          <DeliverierCard/>
     
          <RatingCard/>

          <SalesCard/>

          <OrderCard/>
          
      </div>
    </div>
    
    
    </>
  )
}


export default App