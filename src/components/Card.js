import React from "react";
import "./style.css"

const Card = () => {

    const btnColor={
        backgroundColor:"#b70c12",
        color:"#fff",
        borderRadius: "20px"
    }

  return (
    <div>
      <div class="container text-center" id="food">
     <p className="pt-5 fw-bold fs-2"> What's on your mind?</p>
        <div class="row pt-4">
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;"}}>
              <img src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 my-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
        </div>
        {/* 2nd Row */}
        <div class="row pt-4">
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;"}}>
              <img src="https://images.unsplash.com/photo-1517652792063-9c3118770d54?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=2154&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
               The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 my-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1554997433-bd88e371760b?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
        </div>
        {/* 3nd Row */}
        <div class="row pt-4">
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;"}}>
              <img src="https://images.unsplash.com/photo-1513442542250-854d436a73f2?q=80&w=2147&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 mt-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
               The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card border-0 my-3" style={{ width: "18rem;" }}>
              <img src="https://images.unsplash.com/photo-1655195672061-90c23e3e8026?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="..." />
              <div class="card-body">
                <p class="card-text">
                The absorption and utilization of food by the body is fundamental to nutrition and is facilitated by digestion.
                </p>
              </div>
              <button class="btn shadow" style={btnColor} >Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
