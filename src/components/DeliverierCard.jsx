import Viewbtn from "./Viewbtn"

const DeliverierCard = () => {
  return (
    <div className="card">
    <span>
      <h1 className="display-1">
        <i className="fa-solid fa-truck-ramp-box"></i>
      </h1>
      <div>
        <h2 className="display-2">Total Deliveries</h2>
        <h1 className="display-1">6512</h1>
      </div>
    </span>

    <Viewbtn/>
    
  </div>
  )
}

export default DeliverierCard
