var viewer = new Cesium.Viewer('cesiumContainer');

viewer.camera.flyTo({
  destination : Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, 5050)
});