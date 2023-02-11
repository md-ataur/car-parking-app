import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <div className="main-card-area">
        <div className="card-area">
          <div className="card-middle">
            <p>Vehicles Parked</p>
            <h2>10</h2>
          </div>
          <div className="card-bottom-area">
            <div className="card-bottom-left">
              <p style={{ color: "green" }}>Empty Slot</p>
              <h3>5</h3>
            </div>
            <div className="card-bottom-right">
              <p style={{ color: "red" }}>Parked more than 2 hours</p>
              <h3>6</h3>
            </div>
          </div>
        </div>
        <div className="card-area">
          <div className="card-middle">
            <p>Cars Parked</p>
            <h2>3</h2>
          </div>
          <div className="card-bottom-area">
            <div className="card-bottom-left">
              <p>Trucks Parked</p>
              <h3>2</h3>
            </div>
            <div className="card-bottom-right">
              <p>Microbuses Parked</p>
              <h3>2</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
