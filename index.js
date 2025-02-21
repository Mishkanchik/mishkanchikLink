import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.2/build/threejs-toys.module.cdn.min.js'

neonCursor({
  el: document.getElementById('app'),
  shaderPoints: 16,
  curvePoints: 80,
  curveLerp: 0.5,
  radius1: 5,
  radius2: 30,
  velocityTreshold: 10,
  sleepRadiusX: 100,
  sleepRadiusY: 100,
  sleepTimeCoefX: 0.0025,
  sleepTimeCoefY: 0.0025
})




document.body.addEventListener("click", (e) => {
    const sparkCount = 12; // Количество частиц
    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement("div");
      spark.className = "spark";
      document.body.appendChild(spark);
  
      // Устанавливаем положение и направление
      const angle = (i * 360) / sparkCount;
      const dx = 50 * Math.cos((angle * Math.PI) / 180); // Смещение по X
      const dy = 50 * Math.sin((angle * Math.PI) / 180); // Смещение по Y
      spark.style.setProperty("--dx", `${dx}px`);
      spark.style.setProperty("--dy", `${dy}px`);
  
      // Устанавливаем начальные координаты частиц
      spark.style.left = `${e.pageX}px`;
      spark.style.top = `${e.pageY}px`;
  
      // Удаление частиц после завершения анимации
      spark.addEventListener("animationend", () => spark.remove());
    }
  });


 

 