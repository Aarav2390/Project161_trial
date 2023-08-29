AFRAME.registerComponent("throw",{
    init:function(){
        this.shootBullet();
    },

    shootBullet:function(){
        window.addEventListener("keydown",evt=>{
            if(evt.key === "z"){
                var ball = document.querySelector("#bowling_ball")
                var camEl = document.querySelector("#camera").object3D
                var direction = new THREE.Vector3()
                camEl.getWorldDirection(direction)
                ball.setAttribute("velocity",direction.multiplyScalar(-10))
                var sceneEl = document.querySelector("#scene")
                sceneEl.appendChild(bullet)
            }
        })
    }
}) 