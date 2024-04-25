
async function configInit() {
    let cesiumViewer = new Cesium.Viewer("cesiumContainer", {
        requestRenderMode: true,
        baseLayerPicker: false,
        fullscreenButton: false,
        vrButton: false,
        geocoder: false,
        homeButton: false,
        sceneModePicker: false,
        selectionIndicator: false,
        timeline: false,
        animation: false,
        navigationHelpButton: false,
        navigationInstructionsInitiallyVisible: false,
        terrainProvider: await Cesium.createWorldTerrainAsync()
    });

    cesiumViewer.scene.primitives.add(await Cesium.Cesium3DTileset.fromUrl(
        'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/infr_l3_bf_nt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    ));

    cesiumViewer.scene.primitives.add(await Cesium.Cesium3DTileset.fromUrl(
        'https://data.map.gov.hk/api/3d-data/3dtiles/3dbit00_bf/infr_l3_bf_rt/tileset.json?key=34b1fa2e4fe24dcd80838c9a30d9d89b'
    ));

    cesiumViewer.camera.flyTo({
        destination: Cesium.Cartesian3.fromDegrees(
            114.1277, 22.352734, 39000,
        ),
        orientation: {
            heading: 0,
            roll: 0,
        },
        duration: 0,
    });
}
window.onload = async function() {
    await configInit();
};