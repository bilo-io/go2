# Go2

A mobile-friendly journey planning tool, to help you get from A to B.

## The project techstack

|The thing|... and what it is for|
|:--------|:-----------|
|[Node (v6)](https://nodejs.org)|a javascript runtime that uses an event-driven, non-blocking I/O model - (**npm** is the package manager for node)|
|[React](https://facebook.github.io/react/)|a view layer for dynamic web apps|
|[Webpack](https://webpack.github.io)|a module bundler for javascript projects|
|[Leaflet](http://leafletjs.com/)|open-source JavaScript library for mobile-friendly interactive maps|

## Usage

### Install & Run

- `https://github.com/bilo-io/go2`
- `cd ./go2`
- `npm install`
- `npm start`

Locally, the webapp is served on [http://localhost:2001](http://localhost:2001)

### Example Requests:

- Journey with ID:
    - [http://localhost:2007/journeys/3dhNOH97WUq_taeKAW2gqA](http://localhost:2007/journeys/3dhNOH97WUq_taeKAW2gqA)
- Journey with `destination` (lat,lon):
    - [http://localhost:2007/journeys?destination=-33.960709,18.376146&index=2](http://localhost:2007/journeys?destination=-33.960709,18.376146&index=2)
- Search for address:
    - [http://localhost:2007/search](http://localhost:2007/search)

>NOTE: adding the `index={integer}` parameter automatically opens itineraries (index ranges from from 0 - 4, inclusive);

