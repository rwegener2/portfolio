## Highlights


## Visual Highlights


## Background Info


## Opening tiffs
* rasterio based on GDAL and has many drivers.  Not all raster data (netCDF4) can be opened with rasterio

## Sidenote #1: the context manager
Without getting into the nitty gritty the context manager refers to using this syntax to open a file:

For a more in depth explanation check out this article:
https://jeffknupp.com/blog/2016/03/07/python-with-context-managers/

## Sidenote #2: TIFF vs. GeoTIFF - referencing pixels in space
* Tiff is a raster image format — can be used for any old raster (pixel)-based image
* A raster is fundamentally just pixels but it is the affine that moves us from pixels to coordinates — because of this height and width are in pixels
* The tif file format is already set up to include tags — a GeoTIFF includes additional tags that geolocate the image, or place it at a particular place in space.  These extra tags include map projections, crs, ellipsoids, and datums
* It is also possible to have just a regular tif and an accompanying .tfw world file that provides a similar purpose to the embedded georeferencing information in a geotiff, but it is often nicer to have all the information in the same file
https://en.wikipedia.org/wiki/GeoTIFF
http://manifold.net/doc/mfd9/tif,_tiff,_geotiff.htm

## How data is stored - the dataset reader object vs. the actual data
[Key image — how the dataset reader fits with all the other data stored in the file]

General data inspecting
* Count, height, width, transform, nodata value, other metadata

Reading data
* Reading the whole band
* Indexing for a certain value

Quick Toe-tip into affine
* Synax of converting between row, col and lat, lon

What to do with the actual data?
* Anything you can do to a numpy array you can do to the data
    * Turn all the pixels above a value to 1 and the others to 0
    * Get max/min/standard deviation/mean of raster values (but watch out for nodata)
* More advanced
    * Clip the data

Writing out data


Code snippet for beginner project
* Download DSM, open it, look at max, min, mean heights, create binary 0 below value 1 above, save binary output
