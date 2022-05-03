const mapContainer = document.getElementById("map");

const marker = new kakao.maps.Marker({
  position: new kakao.maps.LatLng(37.56111192802683, 126.94927186218958),
});

const mapOption = {
  center: new kakao.maps.LatLng(37.56111192802683, 126.94927186218958),
  level: 6,
  marker,
};

export const map = new kakao.maps.Map(mapContainer, mapOption);

marker.setMap(map);
