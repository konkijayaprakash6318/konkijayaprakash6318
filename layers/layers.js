var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_buildings_1 = new ol.format.GeoJSON();
var features_buildings_1 = format_buildings_1.readFeatures(json_buildings_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_1.addFeatures(features_buildings_1);
var lyr_buildings_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_1, 
                style: style_buildings_1,
                popuplayertitle: "buildings",
                interactive: true,
                title: '<img src="styles/legend/buildings_1.png" /> buildings'
            });
var format_roads_2 = new ol.format.GeoJSON();
var features_roads_2 = format_roads_2.readFeatures(json_roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_roads_2.addFeatures(features_roads_2);
var lyr_roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_roads_2, 
                style: style_roads_2,
                popuplayertitle: "roads",
                interactive: true,
                title: '<img src="styles/legend/roads_2.png" /> roads'
            });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_3, 
                style: style_points_3,
                popuplayertitle: "points",
                interactive: true,
                title: '<img src="styles/legend/points_3.png" /> points'
            });

lyr_OSMStandard_0.setVisible(true);lyr_buildings_1.setVisible(true);lyr_roads_2.setVisible(true);lyr_points_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_buildings_1,lyr_roads_2,lyr_points_3];
lyr_buildings_1.set('fieldAliases', {'id': 'id', });
lyr_roads_2.set('fieldAliases', {'id': 'id', });
lyr_points_3.set('fieldAliases', {'id': 'id', });
lyr_buildings_1.set('fieldImages', {'id': '', });
lyr_roads_2.set('fieldImages', {'id': '', });
lyr_points_3.set('fieldImages', {'id': '', });
lyr_buildings_1.set('fieldLabels', {'id': 'no label', });
lyr_roads_2.set('fieldLabels', {'id': 'no label', });
lyr_points_3.set('fieldLabels', {'id': 'no label', });
lyr_points_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});