# Representing Features with Geojsons - A Conceptual Overview

<!--
Keeping it Short and Sweet (small cupcake)
Main Take-a-ways (person with sack)
Straight to the Point (archery target)

 -->
## The Highlights (TL;DR)
* GeoJSONs are an extension of the JSON file format.  In addition to the formatting defined by JSON, a geoJSON adds additional standards for storing spatial data.  They are not specific to any one programming langauge and data stored in JSON/GeoJSON format can be easily saved and stored.  

* GeoJSONs can represent either:
	- a generic shape (a Geometry object)
	- a geometry with some properties (a Feature object)
	- a group of features (a FeatureCollection object)

	Each type of representation requires a different set of keys for the key-value pairs

* There are 6 geometry types (point, multipoint, linestring, multilinestring, polygon, multipolygon) plus a GeometryCollection (a list of a combination of the above).  These geometry types can be organized into Features or FeatureCollections.

## Visual Highlights
<!-- Links to the most involved graphics -->
* geometry types
* essential geojson keys

<!-- 
Square One/Square Zero (foundation graphic?)
Launching Pad (ball bouncing off trampline graphic)
Background Knowledege ()
Foundation (foundation of a house)
Getting up to Speed (racecar)
Jumping In (Pool)
-->
## Background: JSON objects
To lay the foundation for a geojson, it is may help to first briefly touch on the good old garden variety JSON.  JSONs are  really a way of storing data.  They look like this:

![JSONexample](./assets/example_json.png =500x)
<!-- <img src="/Users/rachelwegener/blog/posts/geojsons/example_json.png", width="400"> -->

If you are familiar with Python you will notice it looks a lot like a dictionary.  JSON format data does fit really well into the dictionary syntax of Python.  Python dictionaries and JSONs are still different things, however.  JSONs aren't language specific and an advantage of JSON is that it can be used to store data in a way that is not tied to any particular programming language.  This makes storing and sharing data easier.  This is in contrast to a Python dictionary.  A Python dictionary exists in memory in a format interpretable mainly by Python, and not any other program or language. You could pickle it, but it would still not be in a very universally recognizable format (You couldn’t load a pickle object into a GIS system, for example). If you were to convert that dictionary to a JSON, however, you would be in much better shape.  

The two key data concepts that it is built on are: 

1. key/value pairs
2. lists or arrays

I'm not going to do a deep dive of those ideas here, since I want to focus more on what a geojson adds to the json party, but if you are interested certainly go browse google.  I happen to like [this article](https://developers.squarespace.com/what-is-json), if you want to start there.  

In short, while all the nity gritty details of JSON aren't that important, to continue reading you should feel comfortable with me saying that JSON objects are a standard for storing data as key value pairs.

## Enter the _GeoJSON_
Now enter geojsons.  Here is an example:

![geoJSONexample](./assets/example_geojson.png =500x)

We just took the regular JSON from above and made it a GeoJSON by giving it spatial information.  If you are familiar with JSONs you’ll notice that it looks a lot like a regular JSON.  Really everything about the object above totally conforms to JSON standards.  It is contained in curly brackets, strings are always marked by double quotations, elements are separated by commas, and so on.  What has happened though is that we have added rules like these for spatial data.  There must be a type key.  That entry has only 3 possible values.  Geometries are entered as coordinates in longitude, latitude order.  There is a whole document describing these conventions [here]().  In this post we are going to look at some of the big conventions that aid in understanding geojsons and how they represent real objects in space.

## Getting Real: What GeoJSONs Represent

While thus far we have talked about geojsons using rather dispassionate phrases such as "file format" and "encoding standard", we need to remember that at it's core a geojson is a way of storing information about some thing that exists in reality (or at least is a representation of reality in our minds :inception-top:).  Whether your geojson holds information about a road network, a middle school building footprint, or just some oblong shape, it is using letters, numbers, and symbols to store data about a real place.  In the case of the geojson there are three big picture ideas that can be represented:

![Objects represented by GeoJSONs](./assets/representing_geojsons.png)

We can see in the image that there are three entities that a geojson can represent - geometries, features, and featurecollections, and that the complexity of the object inreases in that order.  

**Geometries** are shapes, but we don't know anything else about that thing other than it's shape

**Features** are geometries with attributes, or descriptors

**FeatureCollections** are many features bundled together in a neat little geojson basket


## Types of Geometries

Geojsons fundamentally tell us about geometry.  In geojson-land there are 6 types geometry: Point, MulitPoint, LineString, MultiLineString, Polygon, and MultiPolygon.  Put another way, there are the three fundamental GIS objects - Point, LineString, and Polygon - plus the “multi” versions of each of those - MultiPoint, MultiLineString, and MultiPolygon.  The “multi” version of each object is simply a group of more than 1 of that object (I'll be calling them Multi-Objects from here on out).

![GeoJSON geometry types](./assets/geojson_geometry_types.png)

The shape of the object in a GeoJSON is listed under the "geometry" key.  It has two required keys beneath that: "type" and "coordinates".  There are rules about the way in which you type coordinates, such as that they should be in longitude, latitude order and that each coordiante should be contained in square brackets and seperated by commas.  If you want the nitty gritty on that you can dive into the docs.  Personally I never worry too much about those details because I almost never generate geoJSONs myself, since lots of softwares will generate them for you.

Some more examples of geojson geometries:

![Objects represented by GeoJSONs with Example](./assets/representing_geojsons_examples.png)

**Can you add properties to a geometry?**

#### The Odd 7th Cousin - GeometryCollection

GeometryCollections.  They are a great extension on the geometry construct, but don't fit squarely into any category.  I think of them as a type of geometry -- a type of geometry where you can have a mix.  In the absence of a GeometryCollection type in order to get a geojson with mixed datatypes you would need to make a FeatureCollection.  That would be a group of features each with it's own unique ids and properties associated with it.  Where the GeometryCollection comes in is that it allows you to create a group of geometries that all share the same properties.  You could have for example a dataset of gyms in the area and the scale of you map means that you want some of the smaller ones to be represented as points and the larger ones to be represented as polygons.  If you didn't need properties specific to each location you could just put them all in a GeometryCollection and call it a day.


#### Organizing the Keys
<!-- Image pulling together all the different keys and their types of objects they connect to -->
![Relationships between Objects with Keys](./assets/type_relationships.png)

* Other keys are possible, these are the ones formally specifed.  Type + geometry/features are the only two required ones, and properties is really common (check that info)
* You probably can and it would still be valid JSON but does a shapefile open them as attributes if they aren't in properties?

#### GeometryCollection vs. FeatureCollection vs. Multi-Objects



#### Wrapping Up

https://macwright.org/2013/07/26/geojsonio.html

* There are also 3D geometries and TopoJSONs
* Some of this feels very specific, but Geometries, Features, and FeatureCollection are common concepts across GIS so this information is not wasted uniquely on GeoJSON objects

