//Terrain Rotation
AFRAME.registerComponent("terrain-rotation-reader", {
  schema: {
    speedOfRoation: { type: "number", default: 0 }    
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRoation < 0.1) {
          this.data.speedOfRoation += 0.01;
        }
      }
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRoation > -0.1) {
          this.data.speedOfRoation -= 0.01;
        }
      }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");

    mapRotation.y += this.data.speedOfRoation;

    this.el.setAttribute("rotation", {
      x: mapRotation.x,
      y: mapRotation.y,
      z: mapRotation.z
    });
  }
});

//Plane Rotation
AFRAME.registerComponent("plane-rotation-reader" , {
  schema:{
    speedOfRotation : { type : "number" , default : 0 },
    speedOfAscent : { type : "number" , default : 0 }
  },
  init : function () {
    window.addEventListener("keydown" , (e) => {
      
      this.data.speedOfRotation = this.el.getAttribute("rotation");
      this.data.speedOfAscent = this.el.getAttribute("position");

      var planeRotation = this.data.speedOfRotation;
      var planePositon = this.data.speedOfAscent;

      if(e.key === "ArrowRight"){
        if(planeRotation < 10){
          planeRotation.x += 0.5;
          this.el.setAttribute("rotation",planeRotation);
        }
      }
      if(e.key === "ArrowLeft"){
        if(planeRotation < -10){
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation",planeRotation);
        }
      }
      if(e.key === "ArrowUp"){
        if(planeRotation.z < 20){
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation",planeRotation);
        }
        if(planePositon.y < 2){
          planePositon.y += 0.01;
          this.el.setAttribute("position",planePositon);
        }
      }
      if(e.key === "ArrowDown"){
        if(planeRotation.z < -20){
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation",planeRotation)
        }
        if(planePositon.y < -2){
          planePositon.y -= 0.01;
          this.el.setAttribute("position",planePositon)
        }
      }
    })
  }
})