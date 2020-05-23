import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function VectorConversionPost() {
    return (
        <div>
            <h1>Converting Vector Files in Python</h1>
            <h2>In A Nutshell 🌰</h2>
            <h4>Main Points</h4>
            <ol>
                <li>This article looks at converting between shapefiles, geojsons, and wkts</li>
                <li>You can convert any of the 3 vector filetypes to any of the others by opening your file as a shapely object first</li>
                <li>shapfiles and geojsons can store information about features (shape with properties, not just the geometry), while wkts only store geometry information.  If you have a feature object you can convert directly from a geojson to a shapefile and vice versa using fiona</li>
                <li>Geopandas is also an option for converting, but I tend to use it only if I want to use the geodataframe, not as a generic method for converting</li>
            </ol>
            <h4>Visual Highlights</h4>
            <p>Links to some of the key graphics on this page:</p>
            <ul>
                <li>converting overview</li>
            </ul>

            <h2>Good to Know Before you Go</h2>
            <p>Skip to main content</p>
            <ul>
                <li>Features vs. geometries</li>
            </ul>

            <h4>Quick Background: Features vs. geometries</h4>
            <h4>Quick Background: A Brief Overview of the filetypes</h4>
            <h5>Shapefile</h5>
            <h5>Geojson feature + geojson geometry</h5>
            <h5>WKT</h5>

            <h2>IO Libraries</h2>
            <p>fiona, json (maybe gpd)</p>

            <h2>The Centerpiece: Shapely</h2>
            <p>--Graphic w/o code</p>
            <p>It would be cool to wait until my React skills a 1000x better so I could make basically a clickable reference image</p>

            <h2>Reference Code: Opening a file as Shapley objects</h2>
            <h3>Geojson feature —> shapely</h3>
            <SyntaxHighlighter language="python" style={docco}>
            {`
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
            `}
            </SyntaxHighlighter>

            <h3>Wkt/wkb —> shapely</h3>
            <SyntaxHighlighter language="python" style={docco}>
            {`
            import shapely.wkt

            wkt_obj = 'POINT (2.1744 41.4036)'
            shapely_obj = shapely.wkt.loads(wkt_obj)
            `}
            </SyntaxHighlighter>


            <h3>Shapefile —> shapely</h3>
            <p>Because shapefiles can hold several features you can extract several shapely objects from them.</p>
            <p>Getting just one:</p>
            <SyntaxHighlighter language="python" style={docco}>
            {`
            import fiona
            filepath = '/Users/rachelwegener/data/viper_validation/downtownsf/aois/aois.shp'
            
            with fiona.open(filepath, 'r') as src:
                for geojson_feature in src:
                    print('new feature', geojson_feature)
                    shapely_obj = shape(geojson_feature['geometry'])
            `}
            </SyntaxHighlighter>
            <p>A list of geojsons or shapely objects:</p>
            <SyntaxHighlighter language="python" style={docco}>
            {`
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
            `}
            </SyntaxHighlighter>

            <h2>Reference Code: Saving a file from Shapley objects</h2>
            <h3>Shapely —> geojson</h3>
            <SyntaxHighlighter language="python" style={docco}>
            {`
            from shapely.geometry import mapping
            new_geojson = {'type': 'Feature', 'properties': {'name': 'La Sagrada Familia'}, 'geometry': mapping(shapely_obj)}
            
            with open('new_geojson.json', 'w') as f:
                json.dump(new_geojson, f)
            `}
            </SyntaxHighlighter>
            <p>TODO play more with getting the saved geojson to be pretty</p>
            <p>Point out that mapping and shape are opposites of eachother</p>

            <h3>Shapely —> wkt/wkb</h3>
            <SyntaxHighlighter language="python" style={docco}>
            {`
            wkt_obj = shapely_obj.wkt
            wkb_obj = shapely_obj.wkb
            `}
            </SyntaxHighlighter>

            <h3>Shapely —> shapefile</h3>
            <p>https://gis.stackexchange.com/questions/52705/how-to-write-shapely-geometries-to-shapefiles</p>

            <h2>Skipping the Middle of the Circle</h2>
            <h3>Going directly from geojson -> shapefile and vice versa</h3>
            <SyntaxHighlighter language="python" style={docco}>
            {`
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
            `}
            </SyntaxHighlighter>
        </div>
        )
    }

export default VectorConversionPost;
