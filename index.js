var mapContainer = $("#map")[0];

var map = new AMap.Map(mapContainer, {
  center: [117.270705, 31.86183],
  layers: [ //使用多个图层
    AMap.createDefaultLayer()
  ],
  zooms: [4, 18], //设置地图级别范围
  zoom: 13
});

var marker = new AMap.Marker({
  // icon: 'images/safe.png',
  position: new AMap.LngLat(117.270705, 31.86183), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
  title: 'ISun',
});

map.add(marker);
