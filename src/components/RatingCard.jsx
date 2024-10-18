import Viewbtn from "./Viewbtn"

const RatingCard = () => {
  return (
    <div class="card">
    <span>
      <h1 class="display-1"><i class="fa-solid fa-star"></i></h1>
      <div>
        <h2 class="display-2">Total Ratings</h2>
        <h1 class="display-1">9542</h1>
      </div>
    </span>

    <Viewbtn/>

  </div>

  )
}

export default RatingCard
