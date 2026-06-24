import * as satellite from "satellite.js";

// Listen for messages from the main thread
self.addEventListener("message", (event) => {
  const { type, payload } = event.data;

  if (type === "PROPAGATE_TLE") {
    const { tleLine1, tleLine2, timeMs } = payload;
    
    try {
      const satrec = satellite.twoline2satrec(tleLine1, tleLine2);
      const positionAndVelocity = satellite.propagate(satrec, new Date(timeMs));
      
      if (positionAndVelocity && positionAndVelocity.position && typeof positionAndVelocity.position !== 'boolean') {
        const positionEci = positionAndVelocity.position;
        const gmst = satellite.gstime(new Date(timeMs));
        const positionGd = satellite.eciToGeodetic(positionEci, gmst);
        
        const longitude = satellite.degreesLong(positionGd.longitude);
        const latitude = satellite.degreesLat(positionGd.latitude);
        const height = positionGd.height;
        
        self.postMessage({
          type: "TLE_RESULT",
          payload: { longitude, latitude, height }
        });
      } else {
        throw new Error("Propagation failed");
      }
    } catch (e) {
      self.postMessage({
        type: "TLE_ERROR",
        error: "Failed to parse or propagate TLE"
      });
    }
  }

  if (type === "CALCULATE_NBODY") {
    // Placeholder for computationally expensive N-Body integration
    // Returns scaled positions for asteroids
    self.postMessage({
      type: "NBODY_RESULT",
      payload: { /* ... */ }
    });
  }
});
