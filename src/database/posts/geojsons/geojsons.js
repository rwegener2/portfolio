import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function GeojsonPost() {
    return (
        <div>
            <Link to="formatting#Wrapping Up">Section three</Link>

            <h2>In A Nutshell 🌰</h2>
            <h4>Main Points</h4> 
            <ol>
                <li>GeoJSONs are an extension of the JSON file format.  In addition to the formatting defined by JSON, a geoJSON adds additional standards for storing spatial data.  GeoJSONs are not specific to any one programming langauge.</li>

                <li>GeoJSONs can represent:</li>

                <table className="table">
                <tr>
                    <th>Concept</th>
                    <th>Object Type</th>
                </tr>
                <tr>
                    <td>generic shape</td>
                    <td>Geometry</td>
                </tr>
                <tr>
                    <td>geometry with some properties</td>
                    <td>Feature</td>
                </tr>
                <tr>
                    <td>group of features</td>
                    <td>FeatureCollection</td>
                </tr>
                </table>

                <p>Each type of object requires a different set of keys for the key-value pairs</p>

                <li>There are 6 geometry types (point, multipoint, linestring, multilinestring, polygon, multipolygon) plus a GeometryCollection (a list of a combination of the above).  These geometry types can be organized into Features or FeatureCollections.</li>
            </ol>

            <h4>Visual Highlights</h4>
            <p>Links to some of the key graphics on this page:</p>

            <ul>
                <li>geometry types</li>
                <li>essential geojson keys</li>
            </ul>

            <h2>Good to Know Before you Go</h2>
            <p>Skip to main content</p>
            <ul>
                <li>JSON objects</li>
            </ul>

            <h4>Quick Background: JSON objects</h4>
            

            <p>The basis of a geoJSON is a JSON object.  JSONs are a widely used way of storing and sending data.  They look like this:</p>

            <img src={require("/Users/rwegener/repos/personal/blog/src/database/posts/geojsons/assets/example_json.png")} width="400" alt="im a json"/>

            <p>If you are familiar with Python you will notice it looks a lot like a dictionary.  JSON format data does fit really well into the dictionary syntax of Python.  Python dictionaries and JSONs are still different things, however.  JSONs aren't language specific and one benefit of JSON is that it can be used to store data in a way that is not tied to any particular programming language.  This makes storing and sharing data more flexible.</p>

            <p>The two key data concepts that JSONs are built on are:</p>

            <ol>
                <li>key/value pairs</li>
                <li>lists or arrays</li>
            </ol>

            <p>If you aren't familiar with these things I invite you to familiarize yourself.  I happen to like <a href="https://developers.squarespace.com/what-is-json">this article</a>, if you want to start there.</p> 

            <p>So, while all the nity gritty details of JSON aren't that important, to continue reading you should feel comfortable with me saying that JSON objects are a standard for storing data as key value pairs.</p>

            <h2>From JSON to GeoJSON</h2>
            <p>Now enter geojsons.  Here is an example:</p>

            <img src={require("/Users/rwegener/repos/personal/blog/src/database/posts/geojsons/assets/example_geojson.png")} width="400" alt="im an geojson"/>

            <p>We just took the regular JSON from above and made it a GeoJSON by giving it spatial information.  Really, everything about the object above totally conforms to JSON standards.  It is contained in curly brackets, strings are always marked by double quotations, elements are separated by commas, and so on.</p>
                
            <p>What has happened though is that geoJSONs have added rules for spatial data.  There must be a type key.  That entry has only 3 possible values.  Geometries are entered as coordinates in longitude, latitude order.  There is a whole document describing these conventions <a href="https://tools.ietf.org/html/rfc7946">here</a>.  <strike>In this post we are going to look at some of the big conventions that aid in understanding geojsons and how they represent real objects in space.</strike></p>

            <h2>Getting Real: What GeoJSONs Represent</h2>

            <p>While thus far we have talked about geojsons using rather dispassionate phrases such as "file format" and "encoding standard", we need to remember that at it's core a geojson is a way of storing information about some thing that exists in reality (or at least is a representation of reality in our minds :inception-top:).</p>
            
            <p>Whether your geojson holds information about a road network, a school building footprint, or just some oblong shape, it is using letters, numbers, and symbols to store data about a real place.  In the case of the geojson there are three big picture ideas that can be represented:</p>

            {/* ![Objects represented by GeoJSONs](./assets/representing_geojsons.png) */}

            <p>We can see in the image that there are three entities that a geojson can represent - geometries, features, and featurecollections, and that the complexity of the object increases in that order. </p>

            <p><b>Geometries</b> are shapes, but we don't know anything else about that thing other than it's shape</p>

            <p><b>Features</b> are geometries with attributes, or descriptors</p>

            <p><b>FeatureCollections</b> are many features bundled together in a neat little geojson basket</p>

            <h2>Types of Geometries</h2>

            <p>Geojsons fundamentally tell us about geometry.  In geojson-land there are 6 types geometry: Point, MulitPoint, LineString, MultiLineString, Polygon, and MultiPolygon.  Put another way, there are the three fundamental GIS objects - Point, LineString, and Polygon - plus the “multi” versions of each of those - MultiPoint, MultiLineString, and MultiPolygon.  The “multi” version of each object is simply a group of more than 1 of that object (I'll be calling them Multi-Objects from here on out).</p>

            {/* ![GeoJSON geometry types](./assets/geojson_geometry_types.png) */}

            <p>The shape of the object in a GeoJSON is listed under the "geometry" key.  It has two required keys beneath that: "type" and "coordinates".  There are rules about the way in which you type coordinates, such as that they should be in longitude, latitude order and that each coordiante should be contained in square brackets and seperated by commas.  If you want the nitty gritty on that you can dive into the docs.  Personally I never worry too much about those details because I almost never generate geoJSONs myself, since lots of softwares will generate them for you.</p>

            <p>Some more examples of geojson geometries:</p>

            {/* ![Objects represented by GeoJSONs with Example](./assets/representing_geojsons_examples.png) */}

            **Can you add properties to a geometry?**

            <h4>The Odd 7th Cousin - GeometryCollection</h4>

            <p>GeometryCollections.  They are a great extension on the geometry construct, but don't fit squarely into any category.  I think of them as a type of geometry -- a type of geometry where you can have a mix.  In the absence of a GeometryCollection type in order to get a geojson with mixed datatypes you would need to make a FeatureCollection.  That would be a group of features each with it's own unique ids and properties associated with it.  Where the GeometryCollection comes in is that it allows you to create a group of geometries that all share the same properties.  You could have for example a dataset of gyms in the area and the scale of you map means that you want some of the smaller ones to be represented as points and the larger ones to be represented as polygons.  If you didn't need properties specific to each location you could just put them all in a GeometryCollection and call it a day.</p>

            <h4>Organizing the Keys</h4>
            {/* <!-- Image pulling together all the different keys and their types of objects they connect to -->
            ![Relationships between Objects with Keys](./assets/type_relationships.png) */}

            * Other keys are possible, these are the ones formally specifed.  Type + geometry/features are the only two required ones, and properties is really common (check that info)
            * You probably can and it would still be valid JSON but does a shapefile open them as attributes if they aren't in properties?

            <h4>GeometryCollection vs. FeatureCollection vs. Multi-Objects</h4>



            <h2>Wrapping Up</h2>

            https://macwright.org/2013/07/26/geojsonio.html

            <ul>
            <li>There are also 3D geometries and TopoJSONs</li>
            <li>Some of this feels very specific, but Geometries, Features, and FeatureCollection are common concepts across GIS so this information is not wasted uniquely on GeoJSON objects</li>
            </ul>
        </div>
    )
}

export default GeojsonPost;
