## Highlights
* This article looks at converting between shapefiles, geojsons, and wkts
* You can convert any of the 3 vector filetypes to any of the others by opening your file as a shapely object first
* shapfiles and geojsons can store information about features (shape with properties, not just the geometry), while wkts only store geometry information.  If you have a feature object you can convert directly from a geojson to a shapefile and vice versa using fiona
* Geopandas is also an option for converting, but I tend to use it only if I want to use the geodataframe, not as a generic method for converting

## Visual Highlights
* converting overview
* shapely conversion quick reference
* fiona conversion quick reference
* gpd conversion quick reference

## What you should know first
Features vs. geometries (if not clear link to other article!)

## A Brief Overview of the filetypes
* Shapefile
* Geojson feature + geojson geometry
* WKT is not specific to geometries, it is something general I need to read more about before I keep writing
* shapely object


## Overview of Conversions
<!-- Graphic with no code; all three methods (shapely, fiona, gpd) -->

<!-- Starting with: 
* geojson in a .json document (give example json)
* shapely object in python (created using classes)
* wkt/wkb as string or text file (example text)
* shapefile as, well shapefile (link to download?)

End with the same as starting, so need to cover:
* writing to json (w/pretty formatting)
* writing to text file
* writing to shapefile -->

## Converting VIA Shapely


# Getting things into shapely
## Geojson feature —> shapely
```
from shapely.geometry import shape
import json

with open('sagrada_familia.json', 'r') as f:
    geojson_obj = json.load(f)

geojson_obj = {
  "type": "Feature",
  "geometry": {
    "type": "Point",
    "coordinates": [2.1744, 41.4036]
  },
  "properties": {
    "name": "La Sagrada Familia"
  }
}

shapely_obj = shape(geojson_obj['geometry'])
```

## Wkt/wkb —> shapely
```
import shapely.wkt

wkt_obj = 'POINT (2.1744 41.4036)'
shapely_obj = shapely.wkt.loads(wkt_obj)
```

## Shapefile —> shapely
Because shapefiles can hold several features you can extract several shapely objects from them.
Getting just one:
```
import fiona
filepath = '/Users/rachelwegener/data/viper_validation/downtownsf/aois/aois.shp'

with fiona.open(filepath, 'r') as src:
    for geojson_feature in src:
        print('new feature', geojson_feature)
        shapely_obj = shape(geojson_feature['geometry'])
```
A list of geojsons or shapely objects:
```
import fiona
filepath = '/Users/rachelwegener/data/viper_validation/downtownsf/aois/aois.shp'

shapely_shapes = []
geojson_shapes = []
with fiona.open(filepath, 'r') as src:
    for geojson_feature in src:
        print('new feature', geojson_feature)
        geojson_shapes.append(geojson_feature)
        shapely_obj = shape(geojson_feature['geometry'])
        shapely_shapes.append(shapely_obj)
```

# Getting things out of shapely
## Shapely —> geojson
```
from shapely.geometry import mapping
new_geojson = {'type': 'Feature', 'properties': {'name': 'La Sagrada Familia'}, 'geometry': mapping(shapely_obj)}

with open('new_geojson.json', 'w') as f:
    json.dump(new_geojson, f)

```
*TODO play more with getting the saved geojson to be pretty*
* Point out that mapping and shape are opposites of eachother

## Shapely —> wkt/wkb
```
wkt_obj = shapely_obj.wkt
wkb_obj = shapely_obj.wkb
```

## Shapely —> shapefile

https://gis.stackexchange.com/questions/52705/how-to-write-shapely-geometries-to-shapefiles

# Extra fiona Drivers
```
import fiona
print(fiona.supported_drivers)
```

## Going directly from geojson -> shapefile and vice versa
```
from fiona.crs import from_epsg
schema = {'geometry': 'Point',
          'properties': {'name': 'str'}}

with fiona.open('your_shapefile.shp', 'w', crs=from_epsg(3857), driver='ESRI Shapefile', schema=schema) as src:
    src.write(geojson_obj)

# TODO Question: Will it always get written as a feature collection?
with fiona.open('orthis.geojson', 'w', crs=from_epsg(3857), driver='GeoJSON', schema=schema) as src:
    src.write(geojson_obj)


with fiona.open('sagrada_familia.json', 'r') as src:
    for feature in src:
        print(feature)
```
