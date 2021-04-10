document.addEventListener("DOMContentLoaded", () => {
  let map = L.map("map").setView([43.994590, 18.170955], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 22,
    minZoom: 11,
    zoom: 17,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  let southWest = L.latLng(44.098283, 18.04755),
    northEast = L.latLng(43.937512, 18.258143);
  let bounds = L.latLngBounds(southWest, northEast);

  map.setMaxBounds(bounds);
  map.on("drag", function () {
    map.panInsideBounds(bounds, { animate: true });
  });

  L.marker([43.995776, 18.171092])
    .addTo(map)
    .bindPopup("Come and meet us in person.")
    .openPopup();

  let lineThrough = document.querySelectorAll(".line-through");
  lineThrough.forEach((line) => {
    line.innerHTML = line.parentElement.firstElementChild.innerHTML;
    line.classList.add(line.parentElement.firstElementChild.classList[1]);
  });
});
