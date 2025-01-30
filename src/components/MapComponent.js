import * as ymaps3 from "ymaps3";

export async function initMap(longitude, latitude) {
  await ymaps3.ready;
  const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  const mapElement = document.getElementById("map");

  if (mapElement.map) {
    mapElement.map.update({
      location: {
        center: [longitude, latitude],
        zoom: 10,
      },
    });
  } else {
    const map = new YMap(mapElement, {
      location: {
        center: [longitude, latitude],
        zoom: 10,
      },
    });
    map.addChild(new YMapDefaultSchemeLayer());
    mapElement.map = map;
  }
}
