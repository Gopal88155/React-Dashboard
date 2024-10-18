import Viewbtn from "./Viewbtn"

const CustomerCard = () => {
  return (
    <div className="card">
    <span>
      <h1 className="display-1"><i className="fa-solid fa-users"></i></h1>
      <div>
        <h2 className="display-2">Total Customers</h2>
        <h1 className="display-1">10000</h1>
      </div>
    </span>
   
     <Viewbtn/>

  </div>
  )
}

export default CustomerCard
