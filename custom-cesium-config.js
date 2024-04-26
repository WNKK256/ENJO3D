const basemapProvider = new Cesium.UrlTemplateImageryProvider({
    url: 'https://mapapi.geodata.gov.hk/gs/api/v1.0.0/xyz/imagery/WGS84/{z}/{x}/{y}.png',
    credit: "© Map from Lands Department"
  });
  
  const viewer = new Cesium.Viewer('cesiumContainer', {
    baseLayer: new Cesium.ImageryLayer(basemapProvider),
    baseLayerPicker: false,
    timeline: false,
    animation: false,
    vrButton: false,
    fullscreenButton: false,
    homeButton: false,
    navigationHelpButton: false,
    geocoder: false,
    sceneModePicker: false,
    requestRenderMode: true,
    creditContainer: "credit",
  });

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3ZmQ1NDg5OS1mMTI1LTQ4MmQtYmNlMi1iN2M2NDM3YzEyZWYiLCJpZCI6MjExMTMyLCJpYXQiOjE3MTQxMjUzNzh9.5qmyANiVhpblT-D35m05D8ZIYTPEM2AibGOBIHccwFg'

viewer.scene.setTerrain(
  new Cesium.Terrain(
    Cesium.CesiumTerrainProvider.fromIonAssetId(2552854),
  ),
);

  addLayer = async() =>{
    let tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/bldg_l1_b1_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/bldg_l1_b2_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/bldg_l1_b3_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);  
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/bldg_l1_b4_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);  
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/bldg_l23_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);  
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/bldg_l23_bf_rt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);  
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/infr_l3_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);  
    
    tileset = await Cesium.Cesium3DTileset.fromUrl(
      'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/infr_l3_bf_rt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    );
    viewer.scene.primitives.add(tileset);    
  }
  
  addLayer();
  
  viewer.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(
      114.18819975052165,
      22.10599601170555,
      28396.659303925215
    ),
    orientation: {
      heading: 0.0016441615286524325,
      pitch: -0.7886247456431201,
      roll: 6.2815354362936295,
    },
    duration: 0,
  });
  
  function flyThrough() {
    const currentState = 'stopped' === document.getElementById("fly").className ? 'playing' : 'stopped';
    document.getElementById("fly").className = currentState;
    viewer.scene.screenSpaceCameraController.enableInputs = false;
    if('playing' === currentState) {
      viewer.camera.flyTo({
        destination: {
          x: -2422424.2445589276,
          y: 5384032.397876303,
          z: 2405707.0615597237
        },
        orientation: {
          heading: 5.6200000366324705,
          pitch: -0.32032049944881735,
          roll: 6.283175543034232
        },
        complete: function() {
          const distance = Cesium.Cartesian3.distance(
            new Cesium.Cartesian3.fromDegrees(114.214374, 22.315202),
            new Cesium.Cartesian3.fromDegrees(114.22428750237164, 22.304629162175697)
          );
          const startTime = Cesium.JulianDate.fromDate(new Date());
          const stopTime = Cesium.JulianDate.addSeconds(
            startTime,
            distance,
            new Cesium.JulianDate()
          );
          const property = new Cesium.SampledPositionProperty();
          let time = Cesium.JulianDate.addSeconds(
            startTime,
            0,
            new Cesium.JulianDate()
          );
          let position = Cesium.Cartesian3.fromDegrees(
            114.22428750237164,
            22.304629162175697,
            132.02238802935133
          );
          property.addSample(time, position);
          time = Cesium.JulianDate.addSeconds(
            startTime,
            distance,
            new Cesium.JulianDate()
          );
          position = Cesium.Cartesian3.fromDegrees(
            114.214374,
            22.315202,
            132.02238802935133
          );
          property.addSample(time, position);
          let entity = {
            availability: new Cesium.TimeIntervalCollection([
              new Cesium.TimeInterval({
                start: startTime,
                stop: stopTime,
              }),
            ]),
            position: property,
          };
          entity.position.setInterpolationOptions({
            interpolationDegree: 2,
            interpolationAlgorithm: Cesium.HermitePolynomialApproximation,
          });
  
          viewer.clock.startTime = startTime.clone();
          viewer.clock.stopTime = stopTime.clone();
          viewer.clock.currentTime = startTime.clone();
          viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP;
          viewer.clock.multiplier = 50;
          viewer.clock.shouldAnimate = true;
          viewer.camera.position = new Cesium.Cartesian3(0.25, 0, 5);
          viewer.camera.direction = new Cesium.Cartesian3(-1.25, 1.6, -0.6725);
          viewer.camera.up = new Cesium.Cartesian3(0.0, 0.0, 1.0);
          viewer.camera.right = new Cesium.Cartesian3(0.0, -1.0, 0.0);
  
          viewer.scene.postUpdate.addEventListener(function (scene, time) {
            if(viewer.clock.shouldAnimate) {
              viewer.scene.screenSpaceCameraController.enableInputs = false;
              const position = entity.position.getValue(time);
              if (!Cesium.defined(position)) {
                return;
              }
              let transform;
              if (!Cesium.defined(entity.orientation)) {
                transform = Cesium.Transforms.eastNorthUpToFixedFrame(position);
              }
              const offset = Cesium.Cartesian3.clone(viewer.camera.position);
              const direction = Cesium.Cartesian3.clone(viewer.camera.direction);
              const up = Cesium.Cartesian3.clone(viewer.camera.up);
              viewer.camera.lookAtTransform(transform);
              Cesium.Cartesian3.clone(offset, viewer.camera.position);
              Cesium.Cartesian3.clone(direction, viewer.camera.direction);
              Cesium.Cartesian3.clone(up, viewer.camera.up);
              Cesium.Cartesian3.cross(direction, up, viewer.camera.right);
            } else {
              viewer.scene.postUpdate._listeners.pop();
              viewer.entities.remove(entity);
              viewer.clock.clockRange = 0;
              viewer.clock.multiplier = 1;
              viewer.clock.currentTime = Cesium.JulianDate.fromDate(new Date());
              viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY);
              viewer.camera.flyTo({
                destination: Cesium.Cartesian3.fromDegrees(
                  114.21918297929119,
                  22.237495624660887,
                  4999.9999999995025
                ),
                orientation: {
                  heading: 6.283185307179586,
                  pitch: -0.5251224807670001,
                  roll: 6.283185307179585,
                }
              });
            }
          })
        }
      })
    } else {
      viewer.clock.shouldAnimate = false;
      viewer.scene.screenSpaceCameraController.enableInputs = true;
    }
  }
