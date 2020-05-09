(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-encuesta-encuesta-module~pages-inicio-inicio-module~pages-pedido-pedido-module~pages-z~ebdeb88c"],{

/***/ "./node_modules/@agm/core/fesm2015/agm-core.js":
/*!*****************************************************!*\
  !*** ./node_modules/@agm/core/fesm2015/agm-core.js ***!
  \*****************************************************/
/*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ɵa, ɵb, ɵc, ɵd, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function() { return AgmBicyclingLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCircle", function() { return AgmCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function() { return AgmCoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function() { return AgmDataLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function() { return AgmFitBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function() { return AgmGeocoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function() { return AgmInfoWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function() { return AgmKmlLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMap", function() { return AgmMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmMarker", function() { return AgmMarker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolygon", function() { return AgmPolygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolyline", function() { return AgmPolyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function() { return AgmPolylineIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function() { return AgmPolylinePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmRectangle", function() { return AgmRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function() { return AgmTransitLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleManager", function() { return CircleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlPosition", function() { return ControlPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayerManager", function() { return DataLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function() { return FitBoundsAccessor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function() { return GeocoderLocationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function() { return GeocoderStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function() { return GoogleMapsAPIWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function() { return GoogleMapsScriptProtocol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function() { return InfoWindowManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function() { return KmlLayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function() { return LAZY_MAPS_API_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerManager", function() { return LayerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function() { return LazyMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTypeId", function() { return MapTypeId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function() { return MapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerManager", function() { return MarkerManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function() { return NoOpMapsAPILoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolygonManager", function() { return PolygonManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineManager", function() { return PolylineManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectangleManager", function() { return RectangleManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function() { return ScaleControlStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function() { return ZoomControlStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return FitBoundsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return coreDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DocumentRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return BROWSER_GLOBALS_PROVIDERS; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let MapsAPILoader = class MapsAPILoader {
};
MapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MapsAPILoader);

/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
let GoogleMapsAPIWrapper = class GoogleMapsAPIWrapper {
    constructor(_loader, _zone) {
        this._loader = _loader;
        this._zone = _zone;
        this._map =
            new Promise((resolve) => { this._mapResolver = resolve; });
    }
    createMap(el, mapOptions) {
        return this._zone.runOutsideAngular(() => {
            return this._loader.load().then(() => {
                const map = new google.maps.Map(el, mapOptions);
                this._mapResolver(map);
                return;
            });
        });
    }
    setMapOptions(options) {
        return this._zone.runOutsideAngular(() => {
            this._map.then((m) => { m.setOptions(options); });
        });
    }
    /**
     * Creates a google map marker with the map context
     */
    createMarker(options = {}, addToMap = true) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                if (addToMap) {
                    options.map = map;
                }
                return new google.maps.Marker(options);
            });
        });
    }
    createInfoWindow(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(() => { return new google.maps.InfoWindow(options); });
        });
    }
    /**
     * Creates a google.map.Circle for the current map.
     */
    createCircle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                if (typeof options.strokePosition === 'string') {
                    options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                }
                options.map = map;
                return new google.maps.Circle(options);
            });
        });
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                options.map = map;
                return new google.maps.Rectangle(options);
            });
        });
    }
    createPolyline(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                let line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
            });
        });
    }
    createPolygon(options) {
        return this._zone.runOutsideAngular(() => {
            return this.getNativeMap().then((map) => {
                let polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
            });
        });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then(m => {
                let data = new google.maps.Data(options);
                data.setMap(m);
                return data;
            });
        });
    }
    /**
     * Creates a TransitLayer instance for a map
     * @param {TransitLayerOptions} options - used for setting layer options
     * @returns {Promise<TransitLayer>} a new transit layer object
     */
    createTransitLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                let newLayer = new google.maps.TransitLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
            });
        });
    }
    /**
     * Creates a BicyclingLayer instance for a map
     * @param {BicyclingLayerOptions} options - used for setting layer options
     * @returns {Promise<BicyclingLayer>} a new bicycling layer object
     */
    createBicyclingLayer(options) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => {
                let newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
            });
        });
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng, polygon) {
        return google.maps.geometry.poly.containsLocation(latLng, polygon);
    }
    subscribeToMapEvent(eventName) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._map.then((m) => {
                m.addListener(eventName, (arg) => { this._zone.run(() => observer.next(arg)); });
            });
        });
    }
    clearInstanceListeners() {
        return this._zone.runOutsideAngular(() => {
            this._map.then((map) => {
                google.maps.event.clearInstanceListeners(map);
            });
        });
    }
    setCenter(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setCenter(latLng));
        });
    }
    getZoom() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getZoom());
        });
    }
    getBounds() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getBounds());
        });
    }
    getMapTypeId() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getMapTypeId());
        });
    }
    setZoom(zoom) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.setZoom(zoom));
        });
    }
    getCenter() {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.getCenter());
        });
    }
    panTo(latLng) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panTo(latLng));
        });
    }
    panBy(x, y) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panBy(x, y));
        });
    }
    fitBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.fitBounds(latLng, padding));
        });
    }
    panToBounds(latLng, padding) {
        return this._zone.runOutsideAngular(() => {
            return this._map.then((map) => map.panToBounds(latLng, padding));
        });
    }
    /**
     * Returns the native Google Maps Map instance. Be careful when using this instance directly.
     */
    getNativeMap() { return this._map; }
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName) {
        return this._map.then((m) => google.maps.event.trigger(m, eventName));
    }
};
GoogleMapsAPIWrapper.ctorParameters = () => [
    { type: MapsAPILoader },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], GoogleMapsAPIWrapper);

/**
 * This class manages Transit and Bicycling Layers for a Google Map instance.
 */
let LayerManager = class LayerManager {
    constructor(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    /**
     * Adds a transit layer to a map instance.
     * @param {AgmTransitLayer} layer - a TransitLayer object
     * @param {TransitLayerOptions} options - TransitLayerOptions options
     * @returns void
     */
    addTransitLayer(layer, options) {
        const newLayer = this._wrapper.createTransitLayer(options);
        this._layers.set(layer, newLayer);
    }
    /**
     * Adds a bicycling layer to a map instance.
     * @param {AgmBicyclingLayer} layer - a bicycling layer object
     * @param {BicyclingLayerOptions} options - BicyclingLayer options
     * @returns void
     */
    addBicyclingLayer(layer, options) {
        const newLayer = this._wrapper.createBicyclingLayer(options);
        this._layers.set(layer, newLayer);
    }
    /**
     * Deletes a map layer
     * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
     * @returns  Promise<void>
     */
    deleteLayer(layer) {
        return this._layers.get(layer).then(currentLayer => {
            currentLayer.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Hide/Show a google map layer
     * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
     * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
     * @returns Promise<void>
     */
    toggleLayerVisibility(layer, options) {
        return this._layers.get(layer).then(currentLayer => {
            if (!options.visible) {
                currentLayer.setMap(null);
                return;
            }
            else {
                return this._wrapper.getNativeMap().then((map) => {
                    currentLayer.setMap(map);
                });
            }
        });
    }
};
LayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper }
];
LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])
], LayerManager);

let layerId = 0;
/*
 * This directive adds a bicycling layer to a google map instance
 * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
 * */
let AgmBicyclingLayer = class AgmBicyclingLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * Hide/show bicycling layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addBicyclingLayer(this, { visible: this.visible });
        this._addedToManager = true;
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, { visible: changes['visible'].currentValue });
        }
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmBicyclingLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
};
AgmBicyclingLayer.ctorParameters = () => [
    { type: LayerManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmBicyclingLayer.prototype, "visible", void 0);
AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-bicycling-layer',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])
], AgmBicyclingLayer);

let CircleManager = class CircleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._circles = new Map();
    }
    addCircle(circle) {
        this._circles.set(circle, this._apiWrapper.createCircle({
            center: { lat: circle.latitude, lng: circle.longitude },
            clickable: circle.clickable,
            draggable: circle.draggable,
            editable: circle.editable,
            fillColor: circle.fillColor,
            fillOpacity: circle.fillOpacity,
            radius: circle.radius,
            strokeColor: circle.strokeColor,
            strokeOpacity: circle.strokeOpacity,
            strokePosition: circle.strokePosition,
            strokeWeight: circle.strokeWeight,
            visible: circle.visible,
            zIndex: circle.zIndex,
        }));
    }
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle) {
        return this._circles.get(circle).then((c) => {
            c.setMap(null);
            this._circles.delete(circle);
        });
    }
    setOptions(circle, options) {
        return this._circles.get(circle).then((c) => {
            if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
            }
            c.setOptions(options);
        });
    }
    getBounds(circle) {
        return this._circles.get(circle).then((c) => c.getBounds());
    }
    getCenter(circle) {
        return this._circles.get(circle).then((c) => c.getCenter());
    }
    getRadius(circle) {
        return this._circles.get(circle).then((c) => c.getRadius());
    }
    setCenter(circle) {
        return this._circles.get(circle).then((c) => { return c.setCenter({ lat: circle.latitude, lng: circle.longitude }); });
    }
    setEditable(circle) {
        return this._circles.get(circle).then((c) => { return c.setEditable(circle.editable); });
    }
    setDraggable(circle) {
        return this._circles.get(circle).then((c) => { return c.setDraggable(circle.draggable); });
    }
    setVisible(circle) {
        return this._circles.get(circle).then((c) => { return c.setVisible(circle.visible); });
    }
    setRadius(circle) {
        return this._circles.get(circle).then((c) => { return c.setRadius(circle.radius); });
    }
    getNativeCircle(circle) {
        return this._circles.get(circle);
    }
    createEventObservable(eventName, circle) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            let listener = null;
            this._circles.get(circle).then((c) => {
                listener = c.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
};
CircleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], CircleManager);

var AgmCircle_1;
let AgmCircle = AgmCircle_1 = class AgmCircle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Circle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this circle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this circle by dragging the control points shown at
         * the center and around the circumference of the circle. Defaults to false.
         */
        this.editable = false;
        /**
         * The radius in meters on the Earth's surface.
         */
        this.radius = 0;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this circle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the circle's center is changed.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the circle.
         */
        this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the circle.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the circle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the circle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the circle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the circle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on circle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the circle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle's radius is changed.
         */
        this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the circle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._circleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addCircle(this);
        this._circleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._circleAddedToManager) {
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._manager.setCenter(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        if (changes['radius']) {
            this._manager.setRadius(this);
        }
        this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmCircle_1._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        let events = new Map();
        events.set('center_changed', this.centerChange);
        events.set('click', this.circleClick);
        events.set('dblclick', this.circleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragstart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('radius_changed', this.radiusChange);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager.createEventObservable(eventName, this).subscribe((value) => {
                switch (eventName) {
                    case 'radius_changed':
                        this._manager.getRadius(this).then((radius) => eventEmitter.emit(radius));
                        break;
                    case 'center_changed':
                        this._manager.getCenter(this).then((center) => eventEmitter.emit({ lat: center.lat(), lng: center.lng() }));
                        break;
                    default:
                        eventEmitter.emit({ coords: { lat: value.latLng.lat(), lng: value.latLng.lng() } });
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(function (s) { s.unsubscribe(); });
        this._eventSubscriptions = null;
        this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() { return this._manager.getBounds(this); }
    getCenter() { return this._manager.getCenter(this); }
};
AgmCircle._mapOptions = [
    'fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight',
    'visible', 'zIndex', 'clickable',
];
AgmCircle.ctorParameters = () => [
    { type: CircleManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmCircle.prototype, "latitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmCircle.prototype, "longitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmCircle.prototype, "clickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmCircle.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmCircle.prototype, "editable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmCircle.prototype, "fillColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmCircle.prototype, "fillOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmCircle.prototype, "radius", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmCircle.prototype, "strokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmCircle.prototype, "strokeOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmCircle.prototype, "strokePosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmCircle.prototype, "strokeWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmCircle.prototype, "visible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmCircle.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "centerChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "circleClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "circleDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "drag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "dragEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "dragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "mouseDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "mouseMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "mouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "mouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "mouseUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "radiusChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmCircle.prototype, "rightClick", void 0);
AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-circle',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])
], AgmCircle);

/**
 * Manages all Data Layers for a Google Map instance.
 */
let DataLayerManager = class DataLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new Data Layer to the map.
     */
    addDataLayer(layer) {
        const newLayer = this._wrapper.createDataLayer({
            style: layer.style,
        })
            .then(d => {
            if (layer.geoJson) {
                this.getDataFeatures(d, layer.geoJson).then(features => d.features = features);
            }
            return d;
        });
        this._layers.set(layer, newLayer);
    }
    deleteDataLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    updateGeoJson(layer, geoJson) {
        this._layers.get(layer).then(l => {
            l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);
                if (index > -1) {
                    l.features.splice(index, 1);
                }
            });
            this.getDataFeatures(l, geoJson).then(features => l.features = features);
        });
    }
    setDataOptions(layer, options) {
        this._layers.get(layer).then(l => {
            l.setControlPosition(options.controlPosition);
            l.setControls(options.controls);
            l.setDrawingMode(options.drawingMode);
            l.setStyle(options.style);
        });
    }
    /**
     * Creates a Google Maps event listener for the given DataLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._layers.get(layer).then((d) => {
                d.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    /**
     * Extract features from a geoJson using google.maps Data Class
     * @param d : google.maps.Data class instance
     * @param geoJson : url or geojson object
     */
    getDataFeatures(d, geoJson) {
        return new Promise((resolve, reject) => {
            if (typeof geoJson === 'object') {
                try {
                    const features = d.addGeoJson(geoJson);
                    resolve(features);
                }
                catch (e) {
                    reject(e);
                }
            }
            else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
            }
            else {
                reject(`Impossible to extract features from geoJson: wrong argument type`);
            }
        });
    }
};
DataLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], DataLayerManager);

var AgmDataLayer_1;
let layerId$1 = 0;
/**
 * AgmDataLayer enables the user to add data layers to the map.
 *
 * ### Example
 * ```typescript
 * import { Component } from 'angular2/core';
 * import { AgmMap, AgmDataLayer } from
 * 'angular-google-maps/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  directives: [AgmMap, AgmDataLayer],
 *  styles: [`
 *    .agm-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
 * 	  </agm-data-layer>
 * </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = -25.274449;
 *   lng: number = 133.775060;
 *   zoom: number = 5;
 *
 * clicked(clickEvent) {
 *    console.log(clickEvent);
 *  }
 *
 *  styleFunc(feature) {
 *    return ({
 *      clickable: false,
 *      fillColor: feature.getProperty('color'),
 *      strokeWeight: 1
 *    });
 *  }
 *
 *  geoJsonObject: Object = {
 *    "type": "FeatureCollection",
 *    "features": [
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "G",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "71"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
 *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
 *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
 *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
 *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
 *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
 *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
 *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "red",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
 *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
 *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
 *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
 *            ],
 *            [
 *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
 *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "o",
 *          "color": "yellow",
 *          "rank": "15",
 *          "ascii": "111"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
 *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
 *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
 *              [132.71, -25.64], [131.87, -25.76]
 *            ],
 *            [
 *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
 *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "g",
 *          "color": "blue",
 *          "rank": "7",
 *          "ascii": "103"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
 *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
 *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
 *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
 *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
 *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
 *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
 *            ],
 *            [
 *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
 *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "l",
 *          "color": "green",
 *          "rank": "12",
 *          "ascii": "108"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
 *            ]
 *          ]
 *        }
 *      },
 *      {
 *        "type": "Feature",
 *        "properties": {
 *          "letter": "e",
 *          "color": "red",
 *          "rank": "5",
 *          "ascii": "101"
 *        },
 *        "geometry": {
 *          "type": "Polygon",
 *          "coordinates": [
 *            [
 *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
 *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
 *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
 *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
 *              [144.31, -28.26], [144.14, -27.41]
 *            ],
 *            [
 *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
 *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
 *            ]
 *          ]
 *        }
 *      }
 *    ]
 *  };
 * }
 * ```
 */
let AgmDataLayer = AgmDataLayer_1 = class AgmDataLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$1++).toString();
        this._subscriptions = [];
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * The geoJson to be displayed
         */
        this.geoJson = null;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addDataLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmDataLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteDataLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        var geoJsonChange = changes['geoJson'];
        if (geoJsonChange) {
            this._manager.updateGeoJson(this, geoJsonChange.currentValue);
        }
        let dataOptions = {};
        AgmDataLayer_1._dataOptionsAttributes.forEach(k => dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : this[k]);
        this._manager.setDataOptions(this, dataOptions);
    }
};
AgmDataLayer._dataOptionsAttributes = ['style'];
AgmDataLayer.ctorParameters = () => [
    { type: DataLayerManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmDataLayer.prototype, "layerClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmDataLayer.prototype, "geoJson", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)
], AgmDataLayer.prototype, "style", void 0);
AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-data-layer',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])
], AgmDataLayer);

/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
class FitBoundsAccessor {
}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
let FitBoundsService = class FitBoundsService {
    constructor(loader) {
        this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
        this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
        this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(() => this._includeInBounds$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(time => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time)))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(includeInBounds => this._generateBounds(includeInBounds)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
    }
    _generateBounds(includeInBounds) {
        const bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(b => bounds.extend(b));
        return bounds;
    }
    addToBounds(latLng) {
        const id = this._createIdentifier(latLng);
        if (this._includeInBounds$.value.has(id)) {
            return;
        }
        const map = this._includeInBounds$.value;
        map.set(id, latLng);
        this._includeInBounds$.next(map);
    }
    removeFromBounds(latLng) {
        const map = this._includeInBounds$.value;
        map.delete(this._createIdentifier(latLng));
        this._includeInBounds$.next(map);
    }
    changeFitBoundsChangeSampleTime(timeMs) {
        this._boundsChangeSampleTime$.next(timeMs);
    }
    getBounds$() {
        return this.bounds$;
    }
    _createIdentifier(latLng) {
        return `${latLng.lat}+${latLng.lng}`;
    }
};
FitBoundsService.ctorParameters = () => [
    { type: MapsAPILoader }
];
FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])
], FitBoundsService);

/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 * @example
 * <agm-marker [agmFitBounds]="true"></agm-marker>
 */
let AgmFitBounds = class AgmFitBounds {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
        this._fitBoundsAccessor = _fitBoundsAccessor;
        this._fitBoundsService = _fitBoundsService;
        /**
         * If the value is true, the element gets added to the bounds of the map.
         * Default: true.
         */
        this.agmFitBounds = true;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._latestFitBoundsDetails = null;
    }
    /**
     * @internal
     */
    ngOnChanges() {
        this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
        this._fitBoundsAccessor
            .getFitBoundsDetails$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$))
            .subscribe(details => this._updateBounds(details));
    }
    /*
     Either the location changed, or visible status changed.
     Possible state changes are
     invisible -> visible
     visible -> invisible
     visible -> visible (new location)
    */
    _updateBounds(newFitBoundsDetails) {
        // either visibility will change, or location, so remove the old one anyway
        if (this._latestFitBoundsDetails) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            // don't set latestFitBoundsDetails to null, because we can toggle visibility from
            // true -> false -> true, in which case we still need old value cached here
        }
        if (newFitBoundsDetails) {
            this._latestFitBoundsDetails = newFitBoundsDetails;
        }
        if (!this._latestFitBoundsDetails) {
            return;
        }
        if (this.agmFitBounds === true) {
            this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
        this._destroyed$.next();
        this._destroyed$.complete();
        if (this._latestFitBoundsDetails !== null) {
            this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
    }
};
AgmFitBounds.ctorParameters = () => [
    { type: FitBoundsAccessor, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: FitBoundsService }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmFitBounds.prototype, "agmFitBounds", void 0);
AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[agmFitBounds]',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor,
        FitBoundsService])
], AgmFitBounds);

let MarkerManager = class MarkerManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markers = new Map();
    }
    convertAnimation(uiAnim) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (uiAnim === null) {
                return null;
            }
            else {
                return this._mapsWrapper.getNativeMap().then(() => google.maps.Animation[uiAnim]);
            }
        });
    }
    deleteMarker(marker) {
        const m = this._markers.get(marker);
        if (m == null) {
            // marker already deleted
            return Promise.resolve();
        }
        return m.then((m) => {
            return this._zone.run(() => {
                m.setMap(null);
                this._markers.delete(marker);
            });
        });
    }
    updateMarkerPosition(marker) {
        return this._markers.get(marker).then((m) => m.setPosition({ lat: marker.latitude, lng: marker.longitude }));
    }
    updateTitle(marker) {
        return this._markers.get(marker).then((m) => m.setTitle(marker.title));
    }
    updateLabel(marker) {
        return this._markers.get(marker).then((m) => { m.setLabel(marker.label); });
    }
    updateDraggable(marker) {
        return this._markers.get(marker).then((m) => m.setDraggable(marker.draggable));
    }
    updateIcon(marker) {
        return this._markers.get(marker).then((m) => m.setIcon(marker.iconUrl));
    }
    updateOpacity(marker) {
        return this._markers.get(marker).then((m) => m.setOpacity(marker.opacity));
    }
    updateVisible(marker) {
        return this._markers.get(marker).then((m) => m.setVisible(marker.visible));
    }
    updateZIndex(marker) {
        return this._markers.get(marker).then((m) => m.setZIndex(marker.zIndex));
    }
    updateClickable(marker) {
        return this._markers.get(marker).then((m) => m.setClickable(marker.clickable));
    }
    updateAnimation(marker) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const m = yield this._markers.get(marker);
            m.setAnimation(yield this.convertAnimation(marker.animation));
        });
    }
    addMarker(marker) {
        const markerPromise = new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this._mapsWrapper.createMarker({
                position: { lat: marker.latitude, lng: marker.longitude },
                label: marker.label,
                draggable: marker.draggable,
                icon: marker.iconUrl,
                opacity: marker.opacity,
                visible: marker.visible,
                zIndex: marker.zIndex,
                title: marker.title,
                clickable: marker.clickable,
                animation: yield this.convertAnimation(marker.animation),
            }).then(resolve);
        }));
        this._markers.set(marker, markerPromise);
    }
    getNativeMarker(marker) {
        return this._markers.get(marker);
    }
    createEventObservable(eventName, marker) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._markers.get(marker).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
};
MarkerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], MarkerManager);

let InfoWindowManager = class InfoWindowManager {
    constructor(_mapsWrapper, _zone, _markerManager) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._markerManager = _markerManager;
        this._infoWindows = new Map();
    }
    deleteInfoWindow(infoWindow) {
        const iWindow = this._infoWindows.get(infoWindow);
        if (iWindow == null) {
            // info window already deleted
            return Promise.resolve();
        }
        return iWindow.then((i) => {
            return this._zone.run(() => {
                i.close();
                this._infoWindows.delete(infoWindow);
            });
        });
    }
    setPosition(infoWindow) {
        return this._infoWindows.get(infoWindow).then((i) => i.setPosition({
            lat: infoWindow.latitude,
            lng: infoWindow.longitude,
        }));
    }
    setZIndex(infoWindow) {
        return this._infoWindows.get(infoWindow)
            .then((i) => i.setZIndex(infoWindow.zIndex));
    }
    open(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => {
            if (infoWindow.hostMarker != null) {
                return this._markerManager.getNativeMarker(infoWindow.hostMarker).then((marker) => {
                    return this._mapsWrapper.getNativeMap().then((map) => w.open(map, marker));
                });
            }
            return this._mapsWrapper.getNativeMap().then((map) => w.open(map));
        });
    }
    close(infoWindow) {
        return this._infoWindows.get(infoWindow).then((w) => w.close());
    }
    setOptions(infoWindow, options) {
        return this._infoWindows.get(infoWindow).then((i) => i.setOptions(options));
    }
    addInfoWindow(infoWindow) {
        const options = {
            content: infoWindow.content,
            maxWidth: infoWindow.maxWidth,
            zIndex: infoWindow.zIndex,
            disableAutoPan: infoWindow.disableAutoPan,
        };
        if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
            options.position = { lat: infoWindow.latitude, lng: infoWindow.longitude };
        }
        const infoWindowPromise = this._mapsWrapper.createInfoWindow(options);
        this._infoWindows.set(infoWindow, infoWindowPromise);
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable(eventName, infoWindow) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._infoWindows.get(infoWindow).then((i) => {
                i.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
};
InfoWindowManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: MarkerManager }
];
InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        MarkerManager])
], InfoWindowManager);

var AgmInfoWindow_1;
let infoWindowId = 0;
/**
 * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <agm-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </agm-info-window>
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmInfoWindow = AgmInfoWindow_1 = class AgmInfoWindow {
    constructor(_infoWindowManager, _el) {
        this._infoWindowManager = _infoWindowManager;
        this._el = _el;
        /**
         * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
         */
        this.isOpen = false;
        /**
         * Emits an event when the info window is closed.
         */
        this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._infoWindowAddedToManager = false;
        this._id = (infoWindowId++).toString();
    }
    ngOnInit() {
        this.content = this._el.nativeElement.querySelector('.agm-info-window-content');
        this._infoWindowManager.addInfoWindow(this);
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._infoWindowAddedToManager) {
            return;
        }
        if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' &&
            typeof this.longitude === 'number') {
            this._infoWindowManager.setPosition(this);
        }
        if (changes['zIndex']) {
            this._infoWindowManager.setZIndex(this);
        }
        if (changes['isOpen']) {
            this._updateOpenState();
        }
        this._setInfoWindowOptions(changes);
    }
    _registerEventListeners() {
        this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
            this.isOpen = false;
            this.infoWindowClose.emit();
        });
    }
    _updateOpenState() {
        this.isOpen ? this.open() : this.close();
    }
    _setInfoWindowOptions(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */
    open() { return this._infoWindowManager.open(this); }
    /**
     * Closes the info window.
     */
    close() {
        return this._infoWindowManager.close(this).then(() => { this.infoWindowClose.emit(); });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmInfoWindow-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() { this._infoWindowManager.deleteInfoWindow(this); }
};
AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
AgmInfoWindow.ctorParameters = () => [
    { type: InfoWindowManager },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmInfoWindow.prototype, "latitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmInfoWindow.prototype, "longitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmInfoWindow.prototype, "disableAutoPan", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmInfoWindow.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmInfoWindow.prototype, "maxWidth", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmInfoWindow.prototype, "isOpen", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmInfoWindow.prototype, "infoWindowClose", void 0);
AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'agm-info-window',
        template: `<div class='agm-info-window-content'>
      <ng-content></ng-content>
    </div>
  `
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AgmInfoWindow);

/**
 * Manages all KML Layers for a Google Map instance.
 */
let KmlLayerManager = class KmlLayerManager {
    constructor(_wrapper, _zone) {
        this._wrapper = _wrapper;
        this._zone = _zone;
        this._layers = new Map();
    }
    /**
     * Adds a new KML Layer to the map.
     */
    addKmlLayer(layer) {
        const newLayer = this._wrapper.getNativeMap().then(m => {
            return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex,
            });
        });
        this._layers.set(layer, newLayer);
    }
    setOptions(layer, options) {
        this._layers.get(layer).then(l => l.setOptions(options));
    }
    deleteKmlLayer(layer) {
        this._layers.get(layer).then(l => {
            l.setMap(null);
            this._layers.delete(layer);
        });
    }
    /**
     * Creates a Google Maps event listener for the given KmlLayer as an Observable
     */
    createEventObservable(eventName, layer) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._layers.get(layer).then((m) => {
                m.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
};
KmlLayerManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], KmlLayerManager);

var AgmKmlLayer_1;
let layerId$2 = 0;
let AgmKmlLayer = AgmKmlLayer_1 = class AgmKmlLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$2++).toString();
        this._subscriptions = [];
        /**
         * If true, the layer receives mouse events. Default value is true.
         */
        this.clickable = true;
        /**
         * By default, the input map is centered and zoomed to the bounding box of the contents of the
         * layer.
         * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
         * were never set.
         */
        this.preserveViewport = false;
        /**
         * Whether to render the screen overlays. Default true.
         */
        this.screenOverlays = true;
        /**
         * Suppress the rendering of info windows when layer features are clicked.
         */
        this.suppressInfoWindows = false;
        /**
         * The URL of the KML document to display.
         */
        this.url = null;
        /**
         * The z-index of the layer.
         */
        this.zIndex = null;
        /**
         * This event is fired when a feature in the layer is clicked.
         */
        this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layers default viewport has changed.
         */
        this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the KML layer has finished loading.
         * At this point it is safe to read the status property to determine if the layer loaded
         * successfully.
         */
        this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addKmlLayer(this);
        this._addedToManager = true;
        this._addEventListeners();
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    }
    _updatePolygonOptions(changes) {
        const options = Object.keys(changes)
            .filter(k => AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _addEventListeners() {
        const listeners = [
            { name: 'click', handler: (ev) => this.layerClick.emit(ev) },
            { name: 'defaultviewport_changed', handler: () => this.defaultViewportChange.emit() },
            { name: 'status_changed', handler: () => this.statusChange.emit() },
        ];
        listeners.forEach((obj) => {
            const os = this._manager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmKmlLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteKmlLayer(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach(s => s.unsubscribe());
    }
};
AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];
AgmKmlLayer.ctorParameters = () => [
    { type: KmlLayerManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmKmlLayer.prototype, "clickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmKmlLayer.prototype, "preserveViewport", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmKmlLayer.prototype, "screenOverlays", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmKmlLayer.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmKmlLayer.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmKmlLayer.prototype, "layerClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmKmlLayer.prototype, "statusChange", void 0);
AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-kml-layer',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])
], AgmKmlLayer);

function createMVCEventObservable(array) {
    const eventNames = ['insert_at', 'remove_at', 'set_at'];
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])((handler) => eventNames.map(evName => array.addListener(evName, (index, previous) => handler.apply(array, [{ 'newArr': array.getArray(), evName, index, previous }]))), (_handler, evListeners) => evListeners.forEach(evListener => evListener.remove()));
}
class MvcArrayMock {
    constructor() {
        this.vals = [];
        this.listeners = {
            'remove_at': [],
            'insert_at': [],
            'set_at': [],
        };
    }
    clear() {
        for (let i = this.vals.length - 1; i >= 0; i--) {
            this.removeAt(i);
        }
    }
    getArray() {
        return [...this.vals];
    }
    getAt(i) {
        return this.vals[i];
    }
    getLength() {
        return this.vals.length;
    }
    insertAt(i, elem) {
        this.vals.splice(i, 0, elem);
        this.listeners.insert_at.map(listener => listener(i));
    }
    pop() {
        const deleted = this.vals.pop();
        this.listeners.remove_at.map(listener => listener(this.vals.length, deleted));
        return deleted;
    }
    push(elem) {
        this.vals.push(elem);
        this.listeners.insert_at.map(listener => listener(this.vals.length - 1));
        return this.vals.length;
    }
    removeAt(i) {
        const deleted = this.vals.splice(i, 1)[0];
        this.listeners.remove_at.map(listener => listener(i, deleted));
        return deleted;
    }
    setAt(i, elem) {
        const deleted = this.vals[i];
        this.vals[i] = elem;
        this.listeners.set_at.map(listener => listener(i, deleted));
    }
    forEach(callback) {
        this.vals.forEach(callback);
    }
    addListener(eventName, handler) {
        const listenerArr = this.listeners[eventName];
        listenerArr.push(handler);
        return {
            remove: () => {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
            },
        };
    }
}

let PolygonManager = class PolygonManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polygons = new Map();
    }
    addPolygon(path) {
        const polygonPromise = this._mapsWrapper.createPolygon({
            clickable: path.clickable,
            draggable: path.draggable,
            editable: path.editable,
            fillColor: path.fillColor,
            fillOpacity: path.fillOpacity,
            geodesic: path.geodesic,
            paths: path.paths,
            strokeColor: path.strokeColor,
            strokeOpacity: path.strokeOpacity,
            strokeWeight: path.strokeWeight,
            visible: path.visible,
            zIndex: path.zIndex,
        });
        this._polygons.set(path, polygonPromise);
    }
    updatePolygon(polygon) {
        const m = this._polygons.get(polygon);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => this._zone.run(() => { l.setPaths(polygon.paths); }));
    }
    setPolygonOptions(path, options) {
        return this._polygons.get(path).then((l) => { l.setOptions(options); });
    }
    deletePolygon(paths) {
        const m = this._polygons.get(paths);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polygons.delete(paths);
            });
        });
    }
    getPath(polygon) {
        return this._polygons.get(polygon)
            .then((polygon) => polygon.getPath().getArray());
    }
    getPaths(polygon) {
        return this._polygons.get(polygon)
            .then((polygon) => polygon.getPaths().getArray().map((p) => p.getArray()));
    }
    createEventObservable(eventName, path) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._polygons.get(path).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(agmPolygon) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const polygon = yield this._polygons.get(agmPolygon);
            const paths = polygon.getPaths();
            const pathsChanges$ = createMVCEventObservable(paths);
            return pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ newArr: paths.getArray() }), // in order to subscribe to them all
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(parentMVEvent => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(... // rest parameter
            parentMVEvent.newArr.map((chMVC, index) => createMVCEventObservable(chMVC)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(chMVCEvent => ({ parentMVEvent, chMVCEvent, pathIndex: index })))))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ parentMVEvent, chMVCEvent: null, pathIndex: null }))), // start the merged ob with an event signinifing change to parent
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(({ parentMVEvent, chMVCEvent, pathIndex }) => {
                let retVal;
                if (!chMVCEvent) {
                    retVal = {
                        newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
                        eventName: parentMVEvent.evName,
                        index: parentMVEvent.index,
                    };
                    if (parentMVEvent.previous) {
                        retVal.previous = parentMVEvent.previous.getArray();
                    }
                }
                else {
                    retVal = {
                        newArr: parentMVEvent.newArr.map(subArr => subArr.getArray().map(latLng => latLng.toJSON())),
                        pathIndex,
                        eventName: chMVCEvent.evName,
                        index: chMVCEvent.index,
                    };
                    if (chMVCEvent.previous) {
                        retVal.previous = chMVCEvent.previous;
                    }
                }
                return retVal;
            }));
        });
    }
};
PolygonManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], PolygonManager);

var PolylineManager_1;
let PolylineManager = PolylineManager_1 = class PolylineManager {
    constructor(_mapsWrapper, _zone) {
        this._mapsWrapper = _mapsWrapper;
        this._zone = _zone;
        this._polylines = new Map();
    }
    static _convertPoints(line) {
        const path = line._getPoints().map((point) => {
            return { lat: point.latitude, lng: point.longitude };
        });
        return path;
    }
    static _convertPath(path) {
        const symbolPath = google.maps.SymbolPath[path];
        if (typeof symbolPath === 'number') {
            return symbolPath;
        }
        else {
            return path;
        }
    }
    static _convertIcons(line) {
        const icons = line._getIcons().map(agmIcon => ({
            fixedRotation: agmIcon.fixedRotation,
            offset: agmIcon.offset,
            repeat: agmIcon.repeat,
            icon: {
                anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                fillColor: agmIcon.fillColor,
                fillOpacity: agmIcon.fillOpacity,
                path: PolylineManager_1._convertPath(agmIcon.path),
                rotation: agmIcon.rotation,
                scale: agmIcon.scale,
                strokeColor: agmIcon.strokeColor,
                strokeOpacity: agmIcon.strokeOpacity,
                strokeWeight: agmIcon.strokeWeight,
            },
        }));
        // prune undefineds;
        icons.forEach(icon => {
            Object.entries(icon).forEach(([key, val]) => {
                if (typeof val === 'undefined') {
                    delete icon[key];
                }
            });
            if (typeof icon.icon.anchor.x === 'undefined' ||
                typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
            }
        });
        return icons;
    }
    addPolyline(line) {
        const polylinePromise = this._mapsWrapper.getNativeMap()
            .then(() => [PolylineManager_1._convertPoints(line),
            PolylineManager_1._convertIcons(line)])
            .then(([path, icons]) => this._mapsWrapper.createPolyline({
            clickable: line.clickable,
            draggable: line.draggable,
            editable: line.editable,
            geodesic: line.geodesic,
            strokeColor: line.strokeColor,
            strokeOpacity: line.strokeOpacity,
            strokeWeight: line.strokeWeight,
            visible: line.visible,
            zIndex: line.zIndex,
            path: path,
            icons: icons,
        }));
        this._polylines.set(line, polylinePromise);
    }
    updatePolylinePoints(line) {
        const path = PolylineManager_1._convertPoints(line);
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => { return this._zone.run(() => { l.setPath(path); }); });
    }
    updateIconSequences(line) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this._mapsWrapper.getNativeMap();
            const icons = PolylineManager_1._convertIcons(line);
            const m = this._polylines.get(line);
            if (m == null) {
                return;
            }
            return m.then(l => this._zone.run(() => l.setOptions({ icons: icons })));
        });
    }
    setPolylineOptions(line, options) {
        return this._polylines.get(line).then((l) => { l.setOptions(options); });
    }
    deletePolyline(line) {
        const m = this._polylines.get(line);
        if (m == null) {
            return Promise.resolve();
        }
        return m.then((l) => {
            return this._zone.run(() => {
                l.setMap(null);
                this._polylines.delete(line);
            });
        });
    }
    getMVCPath(agmPolyline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const polyline = yield this._polylines.get(agmPolyline);
            return polyline.getPath();
        });
    }
    getPath(agmPolyline) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return (yield this.getMVCPath(agmPolyline)).getArray();
        });
    }
    createEventObservable(eventName, line) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this._polylines.get(line).then((l) => {
                l.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
        });
    }
    createPathEventObservable(line) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mvcPath = yield this.getMVCPath(line);
            return createMVCEventObservable(mvcPath);
        });
    }
};
PolylineManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], PolylineManager);

let RectangleManager = class RectangleManager {
    constructor(_apiWrapper, _zone) {
        this._apiWrapper = _apiWrapper;
        this._zone = _zone;
        this._rectangles = new Map();
    }
    addRectangle(rectangle) {
        this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
            bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            },
            clickable: rectangle.clickable,
            draggable: rectangle.draggable,
            editable: rectangle.editable,
            fillColor: rectangle.fillColor,
            fillOpacity: rectangle.fillOpacity,
            strokeColor: rectangle.strokeColor,
            strokeOpacity: rectangle.strokeOpacity,
            strokePosition: rectangle.strokePosition,
            strokeWeight: rectangle.strokeWeight,
            visible: rectangle.visible,
            zIndex: rectangle.zIndex,
        }));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            r.setMap(null);
            this._rectangles.delete(rectangle);
        });
    }
    setOptions(rectangle, options) {
        return this._rectangles.get(rectangle).then((r) => r.setOptions(options));
    }
    getBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => r.getBounds());
    }
    setBounds(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west,
            });
        });
    }
    setEditable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setEditable(rectangle.editable);
        });
    }
    setDraggable(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setDraggable(rectangle.draggable);
        });
    }
    setVisible(rectangle) {
        return this._rectangles.get(rectangle).then((r) => {
            return r.setVisible(rectangle.visible);
        });
    }
    createEventObservable(eventName, rectangle) {
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create((observer) => {
            let listener = null;
            this._rectangles.get(rectangle).then((r) => {
                listener = r.addListener(eventName, (e) => this._zone.run(() => observer.next(e)));
            });
            return () => {
                if (listener !== null) {
                    listener.remove();
                }
            };
        });
    }
};
RectangleManager.ctorParameters = () => [
    { type: GoogleMapsAPIWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], RectangleManager);

var AgmMap_1;
/**
 * AgmMap renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `agm-map`.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmMap = AgmMap_1 = class AgmMap {
    constructor(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
        this._elem = _elem;
        this._mapsWrapper = _mapsWrapper;
        this._platformId = _platformId;
        this._fitBoundsService = _fitBoundsService;
        this._zone = _zone;
        /**
         * The longitude that defines the center of the map.
         */
        this.longitude = 0;
        /**
         * The latitude that defines the center of the map.
         */
        this.latitude = 0;
        /**
         * The zoom level of the map. The default zoom level is 8.
         */
        this.zoom = 8;
        /**
         * Enables/disables if map is draggable.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = true;
        /**
         * Enables/disables zoom and center on double click. Enabled by default.
         */
        this.disableDoubleClickZoom = false;
        /**
         * Enables/disables all default UI of the Google map. Please note: When the map is created, this
         * value cannot get updated.
         */
        this.disableDefaultUI = false;
        /**
         * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
         */
        this.scrollwheel = true;
        /**
         * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
         * enabled by default.
         */
        this.keyboardShortcuts = true;
        /**
         * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
         * modes, these styles will only apply to labels and geometry.
         */
        this.styles = [];
        /**
         * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
         * used to
         * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
         */
        this.usePanning = false;
        /**
         * Sets the viewport to contain the given bounds.
         * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
         */
        this.fitBounds = false;
        /**
         * The initial enabled/disabled state of the Scale control. This is disabled by default.
         */
        this.scaleControl = false;
        /**
         * The initial enabled/disabled state of the Map type control.
         */
        this.mapTypeControl = false;
        /**
         * The initial enabled/disabled state of the Pan control.
         */
        this.panControl = false;
        /**
         * The initial enabled/disabled state of the Rotate control.
         */
        this.rotateControl = false;
        /**
         * The initial enabled/disabled state of the Fullscreen control.
         */
        this.fullscreenControl = false;
        /**
         * The map mapTypeId. Defaults to 'roadmap'.
         */
        this.mapTypeId = 'roadmap';
        /**
         * When false, map icons are not clickable. A map icon represents a point of interest,
         * also known as a POI. By default map icons are clickable.
         */
        this.clickableIcons = true;
        /**
         * A map icon represents a point of interest, also known as a POI.
         * When map icons are clickable by default, an info window is displayed.
         * When this property is set to false, the info window will not be shown but the click event
         * will still fire
         */
        this.showDefaultInfoWindow = true;
        /**
         * This setting controls how gestures on the map are handled.
         * Allowed values:
         * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
         * - 'greedy'      (All touch gestures pan or zoom the map.)
         * - 'none'        (The map cannot be panned or zoomed by user gestures.)
         * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
         */
        this.gestureHandling = 'auto';
        /**
         * Controls the automatic switching behavior for the angle of incidence of
         * the map. The only allowed values are 0 and 45. The value 0 causes the map
         * to always use a 0° overhead view regardless of the zoom level and
         * viewport. The value 45 causes the tilt angle to automatically switch to
         * 45 whenever 45° imagery is available for the current zoom level and
         * viewport, and switch back to 0 whenever 45° imagery is not available
         * (this is the default behavior). 45° imagery is only available for
         * satellite and hybrid map types, within some locations, and at some zoom
         * levels. Note: getTilt returns the current tilt angle, not the value
         * specified by this option. Because getTilt and this option refer to
         * different things, do not bind() the tilt property; doing so may yield
         * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
         */
        this.tilt = 0;
        this._observableSubscriptions = [];
        /**
         * This event emitter gets emitted when the user clicks on the map (but not when they click on a
         * marker or infoWindow).
         */
        this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user right-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user double-clicks on the map (but not when they click
         * on a marker or infoWindow).
         */
        this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter is fired when the map center changes.
         */
        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the viewport bounds have changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the mapTypeId property changes.
         */
        this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the map becomes idle after panning or zooming.
         */
        this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the zoom level has changed.
         */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the google map is fully initialized.
         * You get the google.maps.Map instance as a result of this EventEmitter.
         */
        this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the visible tiles have finished loading.
         */
        this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** @internal */
    ngOnInit() {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
            // The code is running on the server, do nothing
            return;
        }
        // todo: this should be solved with a new component and a viewChild decorator
        const container = this._elem.nativeElement.querySelector('.agm-map-container-inner');
        this._initMapInstance(container);
    }
    _initMapInstance(el) {
        this._mapsWrapper.createMap(el, {
            center: { lat: this.latitude || 0, lng: this.longitude || 0 },
            zoom: this.zoom,
            minZoom: this.minZoom,
            maxZoom: this.maxZoom,
            controlSize: this.controlSize,
            disableDefaultUI: this.disableDefaultUI,
            disableDoubleClickZoom: this.disableDoubleClickZoom,
            scrollwheel: this.scrollwheel,
            backgroundColor: this.backgroundColor,
            draggable: this.draggable,
            draggableCursor: this.draggableCursor,
            draggingCursor: this.draggingCursor,
            keyboardShortcuts: this.keyboardShortcuts,
            styles: this.styles,
            zoomControl: this.zoomControl,
            zoomControlOptions: this.zoomControlOptions,
            streetViewControl: this.streetViewControl,
            streetViewControlOptions: this.streetViewControlOptions,
            scaleControl: this.scaleControl,
            scaleControlOptions: this.scaleControlOptions,
            mapTypeControl: this.mapTypeControl,
            mapTypeControlOptions: this.mapTypeControlOptions,
            panControl: this.panControl,
            panControlOptions: this.panControlOptions,
            rotateControl: this.rotateControl,
            rotateControlOptions: this.rotateControlOptions,
            fullscreenControl: this.fullscreenControl,
            fullscreenControlOptions: this.fullscreenControlOptions,
            mapTypeId: this.mapTypeId,
            clickableIcons: this.clickableIcons,
            gestureHandling: this.gestureHandling,
            tilt: this.tilt,
            restriction: this.restriction,
        })
            .then(() => this._mapsWrapper.getNativeMap())
            .then(map => this.mapReady.emit(map));
        // register event listeners
        this._handleMapCenterChange();
        this._handleMapZoomChange();
        this._handleMapMouseEvents();
        this._handleBoundsChange();
        this._handleMapTypeIdChange();
        this._handleTilesLoadedEvent();
        this._handleIdleEvent();
    }
    /** @internal */
    ngOnDestroy() {
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
        // remove all listeners from the map instance
        this._mapsWrapper.clearInstanceListeners();
        if (this._fitBoundsSubscription) {
            this._fitBoundsSubscription.unsubscribe();
        }
    }
    /* @internal */
    ngOnChanges(changes) {
        this._updateMapOptionsChanges(changes);
        this._updatePosition(changes);
    }
    _updateMapOptionsChanges(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach((k) => { options[k] = changes[k].currentValue; });
        this._mapsWrapper.setMapOptions(options);
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
        // Note: When we would trigger the resize event and show the map in the same turn (which is a
        // common case for triggering a resize event), then the resize event would not
        // work (to show the map), so we trigger the event in a timeout.
        return new Promise((resolve) => {
            setTimeout(() => {
                return this._mapsWrapper.triggerMapEvent('resize').then(() => {
                    if (recenter) {
                        this.fitBounds != null ? this._fitBounds() : this._setCenter();
                    }
                    resolve();
                });
            });
        });
    }
    _updatePosition(changes) {
        if (changes['latitude'] == null && changes['longitude'] == null &&
            !changes['fitBounds']) {
            // no position update needed
            return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
            this._fitBounds();
            return;
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        this._setCenter();
    }
    _setCenter() {
        let newCenter = {
            lat: this.latitude,
            lng: this.longitude,
        };
        if (this.usePanning) {
            this._mapsWrapper.panTo(newCenter);
        }
        else {
            this._mapsWrapper.setCenter(newCenter);
        }
    }
    _fitBounds() {
        switch (this.fitBounds) {
            case true:
                this._subscribeToFitBoundsUpdates();
                break;
            case false:
                if (this._fitBoundsSubscription) {
                    this._fitBoundsSubscription.unsubscribe();
                }
                break;
            default:
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);
        }
    }
    _subscribeToFitBoundsUpdates() {
        this._zone.runOutsideAngular(() => {
            this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => {
                this._zone.run(() => this._updateBounds(b, this.fitBoundsPadding));
            });
        });
    }
    _updateBounds(bounds, padding) {
        if (!bounds) {
            return;
        }
        if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
            const newBounds = new google.maps.LatLngBounds();
            newBounds.union(bounds);
            bounds = newBounds;
        }
        if (this.usePanning) {
            this._mapsWrapper.panToBounds(bounds, padding);
            return;
        }
        this._mapsWrapper.fitBounds(bounds, padding);
    }
    _isLatLngBoundsLiteral(bounds) {
        return bounds != null && bounds.extend === undefined;
    }
    _handleMapCenterChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
            this._mapsWrapper.getCenter().then((center) => {
                this.latitude = center.lat();
                this.longitude = center.lng();
                this.centerChange.emit({ lat: this.latitude, lng: this.longitude });
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleBoundsChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
            this._mapsWrapper.getBounds().then((bounds) => { this.boundsChange.emit(bounds); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapTypeIdChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
            this._mapsWrapper.getMapTypeId().then((mapTypeId) => { this.mapTypeIdChange.emit(mapTypeId); });
        });
        this._observableSubscriptions.push(s);
    }
    _handleMapZoomChange() {
        const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
            this._mapsWrapper.getZoom().then((z) => {
                this.zoom = z;
                this.zoomChange.emit(z);
            });
        });
        this._observableSubscriptions.push(s);
    }
    _handleIdleEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => { this.idle.emit(void 0); });
        this._observableSubscriptions.push(s);
    }
    _handleTilesLoadedEvent() {
        const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
        this._observableSubscriptions.push(s);
    }
    _handleMapMouseEvents() {
        const events = [
            { name: 'click', emitter: this.mapClick },
            { name: 'rightclick', emitter: this.mapRightClick },
            { name: 'dblclick', emitter: this.mapDblClick },
        ];
        events.forEach((e) => {
            const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe((event) => {
                let value = {
                    coords: {
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                    },
                    placeId: event.placeId,
                };
                // the placeId will be undefined in case the event was not an IconMouseEvent (google types)
                if (value.placeId && !this.showDefaultInfoWindow) {
                    event.stop();
                }
                e.emitter.emit(value);
            });
            this._observableSubscriptions.push(s);
        });
    }
};
/**
 * Map option attributes that can change over time
 */
AgmMap._mapOptionsAttributes = [
    'disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor',
    'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl',
    'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom',
    'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions',
    'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions',
    'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction',
];
AgmMap.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: GoogleMapsAPIWrapper },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
    { type: FitBoundsService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "longitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "latitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "zoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMap.prototype, "minZoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMap.prototype, "maxZoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMap.prototype, "controlSize", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "disableDoubleClickZoom", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "disableDefaultUI", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "scrollwheel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMap.prototype, "backgroundColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMap.prototype, "draggableCursor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMap.prototype, "draggingCursor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "keyboardShortcuts", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmMap.prototype, "zoomControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "zoomControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], AgmMap.prototype, "styles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "usePanning", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmMap.prototype, "streetViewControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "streetViewControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "fitBounds", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "fitBoundsPadding", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "scaleControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "scaleControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "mapTypeControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "mapTypeControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "panControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "panControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "rotateControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "rotateControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "fullscreenControl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "fullscreenControlOptions", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMap.prototype, "mapTypeId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "clickableIcons", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "showDefaultInfoWindow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMap.prototype, "gestureHandling", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "tilt", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMap.prototype, "restriction", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "mapClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "mapRightClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "mapDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "centerChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "boundsChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "mapTypeIdChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "idle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "zoomChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "mapReady", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMap.prototype, "tilesLoaded", void 0);
AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'agm-map',
        providers: [
            CircleManager,
            DataLayerManager,
            DataLayerManager,
            FitBoundsService,
            GoogleMapsAPIWrapper,
            InfoWindowManager,
            KmlLayerManager,
            LayerManager,
            MarkerManager,
            PolygonManager,
            PolylineManager,
            RectangleManager,
        ],
        host: {
            // todo: deprecated - we will remove it with the next version
            '[class.sebm-google-map-container]': 'true',
        },
        template: `
              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>
              <div class='agm-map-content'>
                <ng-content></ng-content>
              </div>
  `,
        styles: [`
    .agm-map-container-inner {
      width: inherit;
      height: inherit;
    }
    .agm-map-content {
      display:none;
    }
  `]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        GoogleMapsAPIWrapper,
        Object,
        FitBoundsService,
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
], AgmMap);

var AgmMarker_1;
let markerId = 0;
/**
 * AgmMarker renders a map marker inside a {@link AgmMap}.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *      </agm-marker>
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmMarker = AgmMarker_1 = class AgmMarker {
    constructor(_markerManager) {
        this._markerManager = _markerManager;
        /**
         * If true, the marker can be dragged. Default value is false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If true, the marker is visible
         */
        this.visible = true;
        /**
         * Whether to automatically open the child info window when the marker is clicked.
         */
        this.openInfoWindow = true;
        /**
         * The marker's opacity between 0.0 and 1.0.
         */
        this.opacity = 1;
        /**
         * All markers are displayed on the map in order of their zIndex, with higher values displaying in
         * front of markers with lower values. By default, markers are displayed according to their
         * vertical position on screen, with lower markers appearing in front of markers further up the
         * screen.
         */
        this.zIndex = 1;
        /**
         * If true, the marker can be clicked. Default value is true.
         */
        // tslint:disable-next-line:no-input-rename
        this.clickable = true;
        /**
         * This event is fired when the marker's animation property changes.
         *
         * @memberof AgmMarker
         */
        this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the marker.
         */
        this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks twice on the marker.
         */
        this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user rightclicks on the marker.
         */
        this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the marker.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the marker.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the marker.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses over the marker.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user mouses outside the marker.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** @internal */
        this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this._markerAddedToManger = false;
        this._observableSubscriptions = [];
        this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this._id = (markerId++).toString();
    }
    /* @internal */
    ngAfterContentInit() {
        this.handleInfoWindowUpdate();
        this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    handleInfoWindowUpdate() {
        if (this.infoWindow.length > 1) {
            throw new Error('Expected no more than one info window.');
        }
        this.infoWindow.forEach(marker => {
            marker.hostMarker = this;
        });
    }
    /** @internal */
    ngOnChanges(changes) {
        if (typeof this.latitude === 'string') {
            this.latitude = Number(this.latitude);
        }
        if (typeof this.longitude === 'string') {
            this.longitude = Number(this.longitude);
        }
        if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
            return;
        }
        if (!this._markerAddedToManger) {
            this._markerManager.addMarker(this);
            this._updateFitBoundsDetails();
            this._markerAddedToManger = true;
            this._addEventListeners();
            return;
        }
        if (changes['latitude'] || changes['longitude']) {
            this._markerManager.updateMarkerPosition(this);
            this._updateFitBoundsDetails();
        }
        if (changes['title']) {
            this._markerManager.updateTitle(this);
        }
        if (changes['label']) {
            this._markerManager.updateLabel(this);
        }
        if (changes['draggable']) {
            this._markerManager.updateDraggable(this);
        }
        if (changes['iconUrl']) {
            this._markerManager.updateIcon(this);
        }
        if (changes['opacity']) {
            this._markerManager.updateOpacity(this);
        }
        if (changes['visible']) {
            this._markerManager.updateVisible(this);
        }
        if (changes['zIndex']) {
            this._markerManager.updateZIndex(this);
        }
        if (changes['clickable']) {
            this._markerManager.updateClickable(this);
        }
        if (changes['animation']) {
            this._markerManager.updateAnimation(this);
        }
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this._fitBoundsDetails$.asObservable();
    }
    _updateFitBoundsDetails() {
        this._fitBoundsDetails$.next({ latLng: { lat: this.latitude, lng: this.longitude } });
    }
    _addEventListeners() {
        const cs = this._markerManager.createEventObservable('click', this).subscribe(() => {
            if (this.openInfoWindow) {
                this.infoWindow.forEach(infoWindow => infoWindow.open());
            }
            this.markerClick.emit(this);
        });
        this._observableSubscriptions.push(cs);
        const dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(() => {
            this.markerDblClick.emit(null);
        });
        this._observableSubscriptions.push(dcs);
        const rc = this._markerManager.createEventObservable('rightclick', this).subscribe(() => {
            this.markerRightClick.emit(null);
        });
        this._observableSubscriptions.push(rc);
        const ds = this._markerManager.createEventObservable('dragstart', this)
            .subscribe((e) => {
            this.dragStart.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(ds);
        const d = this._markerManager.createEventObservable('drag', this)
            .subscribe((e) => {
            this.drag.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(d);
        const de = this._markerManager.createEventObservable('dragend', this)
            .subscribe((e) => {
            this.dragEnd.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(de);
        const mover = this._markerManager.createEventObservable('mouseover', this)
            .subscribe((e) => {
            this.mouseOver.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mover);
        const mout = this._markerManager.createEventObservable('mouseout', this)
            .subscribe((e) => {
            this.mouseOut.emit({ coords: { lat: e.latLng.lat(), lng: e.latLng.lng() } });
        });
        this._observableSubscriptions.push(mout);
        const anChng = this._markerManager.createEventObservable('animation_changed', this)
            .subscribe(() => {
            this.animationChange.emit(this.animation);
        });
        this._observableSubscriptions.push(anChng);
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return 'AgmMarker-' + this._id.toString(); }
    /** @internal */
    ngOnDestroy() {
        this._markerManager.deleteMarker(this);
        // unsubscribe all registered observable subscriptions
        this._observableSubscriptions.forEach((s) => s.unsubscribe());
    }
};
AgmMarker.ctorParameters = () => [
    { type: MarkerManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMarker.prototype, "latitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmMarker.prototype, "longitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMarker.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "label", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMarker.prototype, "iconUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "visible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "openInfoWindow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "opacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "clickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmMarker.prototype, "animation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmMarker.prototype, "animationChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "markerClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "markerDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "markerRightClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "dragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "drag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "dragEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "mouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmMarker.prototype, "mouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AgmMarker.prototype, "infoWindow", void 0);
AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-marker',
        providers: [
            { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmMarker_1) },
        ],
        inputs: [
            'latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl',
            'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation',
        ],
        outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut'],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])
], AgmMarker);

var AgmPolygon_1;
/**
 * AgmPolygon renders a polygon on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    agm-map {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polygon [paths]="paths">
 *      </agm-polygon>
 *    </agm-map>
 *  `
 * })
 * export class MyMapCmp {
 *   lat: number = 0;
 *   lng: number = 0;
 *   zoom: number = 10;
 *   paths: Array<LatLngLiteral> = [
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ]
 *   // Nesting paths will create a hole where they overlap;
 *   nestedPaths: Array<Array<LatLngLiteral>> = [[
 *     { lat: 0,  lng: 10 },
 *     { lat: 0,  lng: 20 },
 *     { lat: 10, lng: 20 },
 *     { lat: 10, lng: 10 },
 *     { lat: 0,  lng: 10 }
 *   ], [
 *     { lat: 0, lng: 15 },
 *     { lat: 0, lng: 20 },
 *     { lat: 5, lng: 20 },
 *     { lat: 5, lng: 15 },
 *     { lat: 0, lng: 15 }
 *   ]]
 * }
 * ```
 */
let AgmPolygon = AgmPolygon_1 = class AgmPolygon {
    constructor(_polygonManager) {
        this._polygonManager = _polygonManager;
        /**
         * Indicates whether this Polygon handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic
         * property defines the mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control
         * points shown at the vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will
         * follow the curvature of the Earth. When false, edges of the polygon are
         * rendered as straight lines in screen space. Note that the shape of a
         * geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * The ordered sequence of coordinates that designates a closed loop.
         * Unlike polylines, a polygon may consist of one or more paths.
         *  As a result, the paths property may specify one or more arrays of
         * LatLng coordinates. Paths are closed automatically; do not repeat the
         * first vertex of the path as the last vertex. Simple polygons may be
         * defined using a single array of LatLngs. More complex polygons may
         * specify an array of arrays. Any simple arrays are converted into Arrays.
         * Inserting or removing LatLngs from the Array will automatically update
         * the polygon on the map.
         */
        this.paths = [];
        /**
         * This event is fired when the DOM click event is fired on the Polygon.
         */
        this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polygon.
         */
        this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polygon.
         */
        this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polygon.
         */
        this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polygon.
         */
        this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polygon.
         */
        this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polygon.
         */
        this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseout.
         */
        this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polygon mouseover.
         */
        this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polygon
         */
        this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polygon is right-clicked on.
         */
        this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polygon first path changes.
         */
        this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polygonAddedToManager = false;
        this._subscriptions = [];
    }
    /** @internal */
    ngAfterContentInit() {
        if (!this._polygonAddedToManager) {
            this._init();
        }
    }
    ngOnChanges(changes) {
        if (!this._polygonAddedToManager) {
            this._init();
            return;
        }
        this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
    _init() {
        this._polygonManager.addPolygon(this);
        this._polygonAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.polyClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.polyDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.polyDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.polyDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.polyDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.polyMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.polyMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.polyMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.polyMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.polyMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.polyRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polygonManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polygonManager.createPathEventObservable(this)
            .then(paths$ => {
            const os = paths$.subscribe(pathEvent => this.polyPathsChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    _updatePolygonOptions(changes) {
        return Object.keys(changes)
            .filter(k => AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1)
            .reduce((obj, k) => {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polygonManager.deletePolygon(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
    getPath() {
        return this._polygonManager.getPath(this);
    }
    getPaths() {
        return this._polygonManager.getPaths(this);
    }
};
AgmPolygon._polygonOptionsAttributes = [
    'clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map',
    'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable',
    'editable', 'visible',
];
AgmPolygon.ctorParameters = () => [
    { type: PolygonManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolygon.prototype, "clickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolygon.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolygon.prototype, "editable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolygon.prototype, "fillColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolygon.prototype, "fillOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolygon.prototype, "geodesic", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], AgmPolygon.prototype, "paths", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolygon.prototype, "strokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolygon.prototype, "strokeOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolygon.prototype, "strokeWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmPolygon.prototype, "visible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolygon.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyDrag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyDragEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyDragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyMouseDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyMouseMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyMouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyMouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyMouseUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolygon.prototype, "polyRightClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolygon.prototype, "polyPathsChange", void 0);
AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polygon',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])
], AgmPolygon);

/**
 * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
 * or custom icons either along the entire line, or in a specific part of it.
 * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
 *
 * ### Example
 * ```html
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
 *          </agm-icon-sequence>
 *      </agm-polyline>
 *    </agm-map>
 * ```
 *
 * @export
 * @class AgmPolylineIcon
 */
let AgmPolylineIcon = class AgmPolylineIcon {
    ngOnInit() {
        if (this.path == null) {
            throw new Error('Icon Sequence path is required');
        }
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], AgmPolylineIcon.prototype, "fixedRotation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolylineIcon.prototype, "offset", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolylineIcon.prototype, "repeat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "anchorX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "anchorY", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolylineIcon.prototype, "fillColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "fillOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolylineIcon.prototype, "path", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "rotation", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "scale", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolylineIcon.prototype, "strokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylineIcon.prototype, "strokeWeight", void 0);
AgmPolylineIcon = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: 'agm-polyline agm-icon-sequence' })
], AgmPolylineIcon);

var AgmPolylinePoint_1;
/**
 * AgmPolylinePoint represents one element of a polyline within a  {@link
 * AgmPolyline}
 */
let AgmPolylinePoint = AgmPolylinePoint_1 = class AgmPolylinePoint {
    constructor() {
        /**
         * This event emitter gets emitted when the position of the point changed.
         */
        this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes['latitude'] || changes['longitude']) {
            const position = {
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude,
            };
            this.positionChanged.emit(position);
        }
    }
    /** @internal */
    getFitBoundsDetails$() {
        return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({ lat: this.latitude, lng: this.longitude }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(position => ({ latLng: position })));
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylinePoint.prototype, "latitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolylinePoint.prototype, "longitude", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolylinePoint.prototype, "positionChanged", void 0);
AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polyline-point',
        providers: [
            { provide: FitBoundsAccessor, useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => AgmPolylinePoint_1) },
        ],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AgmPolylinePoint);

var AgmPolyline_1;
let polylineId = 0;
/**
 * AgmPolyline renders a polyline on a {@link AgmMap}
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    .agm-map-container {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <agm-polyline>
 *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
 *          </agm-polyline-point>
 *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
 *          </agm-polyline-point>
 *      </agm-polyline>
 *    </agm-map>
 *  `
 * })
 * ```
 */
let AgmPolyline = AgmPolyline_1 = class AgmPolyline {
    constructor(_polylineManager) {
        this._polylineManager = _polylineManager;
        /**
         * Indicates whether this Polyline handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this shape over the map. The geodesic property defines the
         * mode of dragging. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this shape by dragging the control points shown at the
         * vertices and on each segment. Defaults to false.
         */
        this.editable = false;
        /**
         * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
         * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
         * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
         * are maintained relative to the surface of the earth. Defaults to false.
         */
        this.geodesic = false;
        /**
         * Whether this polyline is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the DOM click event is fired on the Polyline.
         */
        this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM dblclick event is fired on the Polyline.
         */
        this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the polyline.
         */
        this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the polyline.
         */
        this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the polyline.
         */
        this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the Polyline.
         */
        this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the Polyline.
         */
        this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseout.
         */
        this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on Polyline mouseover.
         */
        this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired whe the DOM mouseup event is fired on the Polyline
         */
        this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the Polyline is right-clicked on.
         */
        this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired after Polyline's path changes.
         */
        this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._polylineAddedToManager = false;
        this._subscriptions = [];
        this._id = (polylineId++).toString();
    }
    /** @internal */
    ngAfterContentInit() {
        if (this.points.length) {
            this.points.forEach((point) => {
                const s = point.positionChanged.subscribe(() => { this._polylineManager.updatePolylinePoints(this); });
                this._subscriptions.push(s);
            });
        }
        if (!this._polylineAddedToManager) {
            this._init();
        }
        const pointSub = this.points.changes.subscribe(() => this._polylineManager.updatePolylinePoints(this));
        this._subscriptions.push(pointSub);
        this._polylineManager.updatePolylinePoints(this);
        const iconSub = this.iconSequences.changes.subscribe(() => this._polylineManager.updateIconSequences(this));
        this._subscriptions.push(iconSub);
    }
    ngOnChanges(changes) {
        if (!this._polylineAddedToManager) {
            this._init();
            return;
        }
        let options = {};
        const optionKeys = Object.keys(changes).filter(k => AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1);
        optionKeys.forEach(k => options[k] = changes[k].currentValue);
        this._polylineManager.setPolylineOptions(this, options);
    }
    getPath() {
        return this._polylineManager.getPath(this);
    }
    _init() {
        this._polylineManager.addPolyline(this);
        this._polylineAddedToManager = true;
        this._addEventListeners();
    }
    _addEventListeners() {
        const handlers = [
            { name: 'click', handler: (ev) => this.lineClick.emit(ev) },
            { name: 'dblclick', handler: (ev) => this.lineDblClick.emit(ev) },
            { name: 'drag', handler: (ev) => this.lineDrag.emit(ev) },
            { name: 'dragend', handler: (ev) => this.lineDragEnd.emit(ev) },
            { name: 'dragstart', handler: (ev) => this.lineDragStart.emit(ev) },
            { name: 'mousedown', handler: (ev) => this.lineMouseDown.emit(ev) },
            { name: 'mousemove', handler: (ev) => this.lineMouseMove.emit(ev) },
            { name: 'mouseout', handler: (ev) => this.lineMouseOut.emit(ev) },
            { name: 'mouseover', handler: (ev) => this.lineMouseOver.emit(ev) },
            { name: 'mouseup', handler: (ev) => this.lineMouseUp.emit(ev) },
            { name: 'rightclick', handler: (ev) => this.lineRightClick.emit(ev) },
        ];
        handlers.forEach((obj) => {
            const os = this._polylineManager.createEventObservable(obj.name, this).subscribe(obj.handler);
            this._subscriptions.push(os);
        });
        this._polylineManager.createPathEventObservable(this).then((ob$) => {
            const os = ob$.subscribe(pathEvent => this.polyPathChange.emit(pathEvent));
            this._subscriptions.push(os);
        });
    }
    /** @internal */
    _getPoints() {
        if (this.points) {
            return this.points.toArray();
        }
        return [];
    }
    _getIcons() {
        if (this.iconSequences) {
            return this.iconSequences.toArray();
        }
        return [];
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    ngOnDestroy() {
        this._polylineManager.deletePolyline(this);
        // unsubscribe all registered observable subscriptions
        this._subscriptions.forEach((s) => s.unsubscribe());
    }
};
AgmPolyline._polylineOptionsAttributes = [
    'draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight',
    'zIndex',
];
AgmPolyline.ctorParameters = () => [
    { type: PolylineManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolyline.prototype, "clickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolyline.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolyline.prototype, "editable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolyline.prototype, "geodesic", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmPolyline.prototype, "strokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolyline.prototype, "strokeOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolyline.prototype, "strokeWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolyline.prototype, "visible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmPolyline.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineDrag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineDragEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineDragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineMouseDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineMouseMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineMouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineMouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineMouseUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmPolyline.prototype, "lineRightClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmPolyline.prototype, "polyPathChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AgmPolyline.prototype, "points", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AgmPolyline.prototype, "iconSequences", void 0);
AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-polyline',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])
], AgmPolyline);

var AgmRectangle_1;
let AgmRectangle = AgmRectangle_1 = class AgmRectangle {
    constructor(_manager) {
        this._manager = _manager;
        /**
         * Indicates whether this Rectangle handles mouse events. Defaults to true.
         */
        this.clickable = true;
        /**
         * If set to true, the user can drag this rectangle over the map. Defaults to false.
         */
        // tslint:disable-next-line:no-input-rename
        this.draggable = false;
        /**
         * If set to true, the user can edit this rectangle by dragging the control points shown at
         * the center and around the circumference of the rectangle. Defaults to false.
         */
        this.editable = false;
        /**
         * The stroke position. Defaults to CENTER.
         * This property is not supported on Internet Explorer 8 and earlier.
         */
        this.strokePosition = 'CENTER';
        /**
         * The stroke width in pixels.
         */
        this.strokeWeight = 0;
        /**
         * Whether this rectangle is visible on the map. Defaults to true.
         */
        this.visible = true;
        /**
         * This event is fired when the rectangle's is changed.
         */
        this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event emitter gets emitted when the user clicks on the rectangle.
         */
        this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is repeatedly fired while the user drags the rectangle.
         */
        this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user stops dragging the rectangle.
         */
        this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the user starts dragging the rectangle.
         */
        this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousedown event is fired on the rectangle.
         */
        this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mousemove event is fired on the rectangle.
         */
        this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseout.
         */
        this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired on rectangle mouseover.
         */
        this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the DOM mouseup event is fired on the rectangle.
         */
        this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
         * This event is fired when the rectangle is right-clicked on.
         */
        this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._rectangleAddedToManager = false;
        this._eventSubscriptions = [];
    }
    /** @internal */
    ngOnInit() {
        this._manager.addRectangle(this);
        this._rectangleAddedToManager = true;
        this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
        if (!this._rectangleAddedToManager) {
            return;
        }
        if (changes['north'] ||
            changes['east'] ||
            changes['south'] ||
            changes['west']) {
            this._manager.setBounds(this);
        }
        if (changes['editable']) {
            this._manager.setEditable(this);
        }
        if (changes['draggable']) {
            this._manager.setDraggable(this);
        }
        if (changes['visible']) {
            this._manager.setVisible(this);
        }
        this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
        let options = {};
        let optionKeys = Object.keys(changes).filter(k => AgmRectangle_1._mapOptions.indexOf(k) !== -1);
        optionKeys.forEach(k => {
            options[k] = changes[k].currentValue;
        });
        if (optionKeys.length > 0) {
            this._manager.setOptions(this, options);
        }
    }
    _registerEventListeners() {
        let events = new Map();
        events.set('bounds_changed', this.boundsChange);
        events.set('click', this.rectangleClick);
        events.set('dblclick', this.rectangleDblClick);
        events.set('drag', this.drag);
        events.set('dragend', this.dragEnd);
        events.set('dragStart', this.dragStart);
        events.set('mousedown', this.mouseDown);
        events.set('mousemove', this.mouseMove);
        events.set('mouseout', this.mouseOut);
        events.set('mouseover', this.mouseOver);
        events.set('mouseup', this.mouseUp);
        events.set('rightclick', this.rightClick);
        events.forEach((eventEmitter, eventName) => {
            this._eventSubscriptions.push(this._manager
                .createEventObservable(eventName, this)
                .subscribe(value => {
                switch (eventName) {
                    case 'bounds_changed':
                        this._manager.getBounds(this).then(bounds => eventEmitter.emit({
                            north: bounds.getNorthEast().lat(),
                            east: bounds.getNorthEast().lng(),
                            south: bounds.getSouthWest().lat(),
                            west: bounds.getSouthWest().lng(),
                        }));
                        break;
                    default:
                        eventEmitter.emit({
                            coords: { lat: value.latLng.lat(), lng: value.latLng.lng() },
                        });
                }
            }));
        });
    }
    /** @internal */
    ngOnDestroy() {
        this._eventSubscriptions.forEach(function (s) {
            s.unsubscribe();
        });
        this._eventSubscriptions = null;
        this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
        return this._manager.getBounds(this);
    }
};
AgmRectangle._mapOptions = [
    'fillColor',
    'fillOpacity',
    'strokeColor',
    'strokeOpacity',
    'strokePosition',
    'strokeWeight',
    'visible',
    'zIndex',
    'clickable',
];
AgmRectangle.ctorParameters = () => [
    { type: RectangleManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "north", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "east", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "south", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "west", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmRectangle.prototype, "clickable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmRectangle.prototype, "draggable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmRectangle.prototype, "editable", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmRectangle.prototype, "fillColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "fillOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmRectangle.prototype, "strokeColor", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "strokeOpacity", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], AgmRectangle.prototype, "strokePosition", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmRectangle.prototype, "strokeWeight", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmRectangle.prototype, "visible", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], AgmRectangle.prototype, "zIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "boundsChange", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "rectangleClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "rectangleDblClick", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "drag", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "dragEnd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "dragStart", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "mouseDown", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "mouseMove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "mouseOut", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "mouseOver", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "mouseUp", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AgmRectangle.prototype, "rightClick", void 0);
AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-rectangle',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])
], AgmRectangle);

let layerId$3 = 0;
/*
 * This directive adds a transit layer to a google map instance
 * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
 * */
let AgmTransitLayer = class AgmTransitLayer {
    constructor(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId$3++).toString();
        /**
         * Hide/show transit layer
         */
        this.visible = true;
    }
    ngOnInit() {
        if (this._addedToManager) {
            return;
        }
        this._manager.addTransitLayer(this, { visible: this.visible });
        this._addedToManager = true;
    }
    ngOnChanges(changes) {
        if (!this._addedToManager) {
            return;
        }
        if (changes['visible'] != null) {
            this._manager.toggleLayerVisibility(this, { visible: changes['visible'].currentValue });
        }
    }
    /** @internal */
    id() { return this._id; }
    /** @internal */
    toString() { return `AgmTransitLayer-${this._id.toString()}`; }
    /** @internal */
    ngOnDestroy() {
        this._manager.deleteLayer(this);
    }
};
AgmTransitLayer.ctorParameters = () => [
    { type: LayerManager }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], AgmTransitLayer.prototype, "visible", void 0);
AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: 'agm-transit-layer',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])
], AgmTransitLayer);

var google$1;
var SymbolPath;
(function (SymbolPath) {
    SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
    SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
    SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
    SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
    SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
})(SymbolPath || (SymbolPath = {}));
/**
 * Identifiers used to specify the placement of controls on the map. Controls are
 * positioned relative to other controls in the same layout position. Controls that
 * are added first are positioned closer to the edge of the map.
 */
var ControlPosition;
(function (ControlPosition) {
    ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
    ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
    ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
    ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
    ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
    ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
    ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
    ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
    ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
    ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
    ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
    ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
})(ControlPosition || (ControlPosition = {}));
var MapTypeId;
(function (MapTypeId) {
    /** This map type displays a transparent layer of major streets on satellite images. */
    MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
    /** This map type displays a normal street map. */
    MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
    /** This map type displays satellite images. */
    MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
    /** This map type displays maps with physical features such as terrain and vegetation. */
    MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
})(MapTypeId || (MapTypeId = {}));
var MapTypeControlStyle;
(function (MapTypeControlStyle) {
    MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
    MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
    MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
})(MapTypeControlStyle || (MapTypeControlStyle = {}));
var ScaleControlStyle;
(function (ScaleControlStyle) {
    ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
})(ScaleControlStyle || (ScaleControlStyle = {}));
var ZoomControlStyle;
(function (ZoomControlStyle) {
    ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
    ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
    ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
})(ZoomControlStyle || (ZoomControlStyle = {}));
var GeocoderLocationType;
(function (GeocoderLocationType) {
    GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
    GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
    GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
    GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
})(GeocoderLocationType || (GeocoderLocationType = {}));
var GeocoderStatus;
(function (GeocoderStatus) {
    GeocoderStatus["ERROR"] = "ERROR";
    GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
    GeocoderStatus["OK"] = "OK";
    GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
    GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
    GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
    GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
})(GeocoderStatus || (GeocoderStatus = {}));

let AgmGeocoder = class AgmGeocoder {
    constructor(loader) {
        const connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](subscriber => {
            loader.load().then(() => subscriber.next());
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => this._createGeocoder()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
        connectableGeocoder$.connect(); // ignore the subscription
        // since we will remain subscribed till application exits
        this.geocoder$ = connectableGeocoder$;
    }
    geocode(request) {
        return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((geocoder) => this._getGoogleResults(geocoder, request)));
    }
    _getGoogleResults(geocoder, request) {
        const geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
        return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(([results, status]) => {
            if (status === GeocoderStatus.OK) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
        }));
    }
    _createGeocoder() {
        return new google.maps.Geocoder();
    }
};
AgmGeocoder.ctorParameters = () => [
    { type: MapsAPILoader }
];
AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function AgmGeocoder_Factory() { return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(MapsAPILoader)); }, token: AgmGeocoder, providedIn: "root" });
AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])
], AgmGeocoder);

class WindowRef {
    getNativeWindow() { return window; }
}
class DocumentRef {
    getNativeDocument() { return document; }
}
const BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];

var GoogleMapsScriptProtocol;
(function (GoogleMapsScriptProtocol) {
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
    GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
})(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
/**
 * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
 * LazyMapsAPILoaderConfig}.
 */
const LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');
let LazyMapsAPILoader = class LazyMapsAPILoader extends MapsAPILoader {
    constructor(config = null, w, d, localeId) {
        super();
        this.localeId = localeId;
        this._SCRIPT_ID = 'agmGoogleMapsApiScript';
        this.callbackName = `agmLazyMapsAPILoader`;
        this._config = config || {};
        this._windowRef = w;
        this._documentRef = d;
    }
    load() {
        const window = this._windowRef.getNativeWindow();
        if (window.google && window.google.maps) {
            // Google maps already loaded on the page.
            return Promise.resolve();
        }
        if (this._scriptLoadingPromise) {
            return this._scriptLoadingPromise;
        }
        // this can happen in HMR situations or Stackblitz.io editors.
        const scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);
        if (scriptOnPage) {
            this._assignScriptLoadingPromise(scriptOnPage);
            return this._scriptLoadingPromise;
        }
        const script = this._documentRef.getNativeDocument().createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = this._SCRIPT_ID;
        script.src = this._getScriptSrc(this.callbackName);
        this._assignScriptLoadingPromise(script);
        this._documentRef.getNativeDocument().body.appendChild(script);
        return this._scriptLoadingPromise;
    }
    _assignScriptLoadingPromise(scriptElem) {
        this._scriptLoadingPromise = new Promise((resolve, reject) => {
            this._windowRef.getNativeWindow()[this.callbackName] = () => {
                resolve();
            };
            scriptElem.onerror = (error) => {
                reject(error);
            };
        });
    }
    _getScriptSrc(callbackName) {
        let protocolType = (this._config && this._config.protocol) || GoogleMapsScriptProtocol.HTTPS;
        let protocol;
        switch (protocolType) {
            case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;
            case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;
            case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
        }
        const hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        const queryParams = {
            v: this._config.apiVersion || 'quarterly',
            callback: callbackName,
            key: this._config.apiKey,
            client: this._config.clientId,
            channel: this._config.channel,
            libraries: this._config.libraries,
            region: this._config.region,
            language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null,
        };
        const params = Object.keys(queryParams)
            .filter((k) => queryParams[k] != null)
            .filter((k) => {
            // remove empty arrays
            return !Array.isArray(queryParams[k]) ||
                (Array.isArray(queryParams[k]) && queryParams[k].length > 0);
        })
            .map((k) => {
            // join arrays as comma seperated strings
            let i = queryParams[k];
            if (Array.isArray(i)) {
                return { key: k, value: i.join(',') };
            }
            return { key: k, value: queryParams[k] };
        })
            .map((entry) => {
            return `${entry.key}=${entry.value}`;
        })
            .join('&');
        return `${protocol}//${hostAndPath}?${params}`;
    }
};
LazyMapsAPILoader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LAZY_MAPS_API_CONFIG,] }] },
    { type: WindowRef },
    { type: DocumentRef },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],] }] }
];
LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])
], LazyMapsAPILoader);

/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
class NoOpMapsAPILoader {
    load() {
        if (!window.google || !window.google.maps) {
            throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
        }
        return Promise.resolve();
    }
}

// exported map types

var AgmCoreModule_1;
/**
 * @internal
 */
function coreDirectives() {
    return [
        AgmBicyclingLayer,
        AgmCircle,
        AgmDataLayer,
        AgmFitBounds,
        AgmInfoWindow,
        AgmKmlLayer,
        AgmMap,
        AgmMarker,
        AgmPolygon,
        AgmPolyline,
        AgmPolylineIcon,
        AgmPolylinePoint,
        AgmRectangle,
        AgmTransitLayer,
    ];
}
/**
 * The angular-google-maps core module. Contains all Directives/Services/Pipes
 * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
 */
let AgmCoreModule = AgmCoreModule_1 = class AgmCoreModule {
    /**
     * Please use this method when you register the module at the root level.
     */
    static forRoot(lazyMapsAPILoaderConfig) {
        return {
            ngModule: AgmCoreModule_1,
            providers: [
                ...BROWSER_GLOBALS_PROVIDERS, { provide: MapsAPILoader, useClass: LazyMapsAPILoader },
                { provide: LAZY_MAPS_API_CONFIG, useValue: lazyMapsAPILoaderConfig },
            ],
        };
    }
};
AgmCoreModule = AgmCoreModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({ declarations: coreDirectives(), exports: coreDirectives() })
], AgmCoreModule);

// main modules

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=agm-core.js.map


/***/ }),

/***/ "./node_modules/angular-star-rating/esm2015/angular-star-rating.js":
/*!*************************************************************************!*\
  !*** ./node_modules/angular-star-rating/esm2015/angular-star-rating.js ***!
  \*************************************************************************/
/*! exports provided: StarRatingConfig, StarRatingUtils, StarRating, StarRatingConfigService, StarRatingComponent, StarRatingControlComponent, StarRatingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingConfig", function() { return StarRatingConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingUtils", function() { return StarRatingUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRating", function() { return StarRating; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingConfigService", function() { return StarRatingConfigService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingComponent", function() { return StarRatingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingControlComponent", function() { return StarRatingControlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarRatingModule", function() { return StarRatingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRatingConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRatingUtils {
    /**
     * @param {?} numOfStars
     * @return {?}
     */
    static getStarsArray(numOfStars) {
        let /** @type {?} */ stars = [];
        for (let /** @type {?} */ i = 0; i < numOfStars; i++) {
            stars.push(i + 1);
        }
        return stars;
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    static getHalfStarVisible(rating) {
        return Math.abs(rating % 1) > 0;
    }
    /**
     * @param {?} rating
     * @param {?} numOfStars
     * @param {?=} staticColor
     * @return {?}
     */
    static getColor(rating, numOfStars, staticColor) {
        rating = rating || 0;
        //if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }
        //calculate size of smallest fraction
        let /** @type {?} */ fractionSize = numOfStars / 3;
        //apply color by fraction
        let /** @type {?} */ color = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }
        return color;
    }
    /**
     * @param {?} eventCode
     * @return {?}
     */
    static isDigitKeyEventCode(eventCode) {
        return eventCode.indexOf('Digit') === 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRating {
    /**
     * @param {?} value
     * @return {?}
     */
    set rating(value) {
        this.setRating(value);
    }
    /**
     * @return {?}
     */
    get showHalfStars() {
        return this._showHalfStars;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set showHalfStars(value) {
        this._showHalfStars = !!value;
        //update halfStarVisible
        this.setHalfStarVisible();
    }
    /**
     * @return {?}
     */
    get id() {
        return this._id;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set id(value) {
        this._id = value || '';
    }
    /**
     * @return {?}
     */
    get focus() {
        return this._focus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set focus(value) {
        this._focus = !!value;
    }
    /**
     * @return {?}
     */
    get labelText() {
        return this._labelText;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelText(value) {
        this._labelText = value;
    }
    /**
     * @return {?}
     */
    get labelPosition() {
        return this._labelPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelPosition(value) {
        this._labelPosition = value || this.config.labelPosition;
    }
    /**
     * @return {?}
     */
    get labelVisible() {
        return this._labelVisible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set labelVisible(value) {
        this._labelVisible = !!value;
    }
    /**
     * @return {?}
     */
    get hoverEnabled() {
        return this._hoverEnabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hoverEnabled(value) {
        this._hoverEnabled = value !== undefined ? !!value : false;
    }
    /**
     * @return {?}
     */
    get staticColor() {
        return this._staticColor || this.config.staticColor || undefined;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set staticColor(value) {
        this._staticColor = value;
        //update color.
        this.setColor();
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._direction;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set direction(value) {
        this._direction = value || undefined;
    }
    /**
     * @return {?}
     */
    get numOfStars() {
        return this._numOfStars;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set numOfStars(value) {
        this._numOfStars = value > 0 ? value : this.config.numOfStars;
        //update stars array
        this.stars = StarRatingUtils.getStarsArray(this.numOfStars);
        //update color
        this.setColor();
    }
    /**
     * @return {?}
     */
    get hoverRating() {
        return this._hoverRating;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hoverRating(value) {
        this._hoverRating = value > 0 ? value : 0;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set speed(value) {
        this._speed = value || this.config.speed;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size || this.config.size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set size(value) {
        this._size = value;
    }
    /**
     * @return {?}
     */
    get starType() {
        return this._starType || this.config.starType;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set starType(value) {
        this._starType = value;
    }
    /**
     * @return {?}
     */
    get space() {
        return this._space;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set space(value) {
        this._space = value;
    }
    /**
     * @return {?}
     */
    get readOnly() {
        return this._readOnly;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set readOnly(value) {
        this._readOnly = !!value;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._disabled;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = !!value;
    }
    /**
     * @return {?}
     */
    get step() {
        return this._step;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set step(value) {
        this._step = value > 0 ? value : 1;
    }
    /**
     * @return {?}
     */
    get rating() {
        return this._rating;
    }
    /**
     * setRating
     * I use a setter function instead of a set method to enable overrides for this function.
     * @param {?} value
     * @return {?}
     */
    setRating(value) {
        //validate and apply newRating
        let /** @type {?} */ newRating = 0;
        if (value >= 0 && value <= this.numOfStars) {
            newRating = value;
        }
        //limit max value to max number of stars
        if (value > this.numOfStars) {
            newRating = this.numOfStars;
        }
        this._rating = newRating;
        //update ratingAsInteger. rating parsed to int for the value-[n] modifier
        this.ratingAsInteger = parseInt(this._rating.toString(), 10);
        //update halfStarsVisible
        this.setHalfStarVisible();
        //update calculated Color
        this.setColor();
    }
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        //set default ctrl props
        this.classEmpty = this.config.classEmpty;
        this.classHalf = this.config.classHalf;
        this.classFilled = this.config.classFilled;
        this.pathEmpty = this.config.svgPathEmpty;
        this.pathHalf = this.config.svgPathHalf;
        this.pathFilled = this.config.svgPathFilled;
        //set default Component Inputs
        if ('getColor' in this.config &&
            typeof this.config.getColor === 'function') {
            this.getColor = this.config.getColor;
        }
        if ('getHalfStarVisible' in this.config &&
            typeof this.config.getHalfStarVisible === 'function') {
            this.getHalfStarVisible = this.config.getHalfStarVisible;
        }
        this.numOfStars = this.config.numOfStars;
        this.rating = 0;
        this.step = 1;
    }
    /**
     * @return {?}
     */
    svgVisible() {
        return this.starType === 'svg';
    }
    /**
     * @return {?}
     */
    interactionPossible() {
        return !this.readOnly && !this.disabled;
    }
    /**
     * @param {?=} useHoverValue
     * @return {?}
     */
    setColor(useHoverValue = false) {
        //check if custom function is given
        const /** @type {?} */ ratingValue = useHoverValue ? this.hoverRating : this.rating;
        if (typeof this.getColor === 'function') {
            this.color = this.getColor(ratingValue, this.numOfStars, this.staticColor);
        }
        else {
            this.color = StarRatingUtils.getColor(ratingValue, this.numOfStars, this.staticColor);
        }
    }
    /**
     * @return {?}
     */
    setHalfStarVisible() {
        //update halfStarVisible
        if (this.showHalfStars) {
            //check if custom function is given
            if (typeof this.getHalfStarVisible === 'function') {
                this.halfStarVisible = this.getHalfStarVisible(this.rating);
            }
            else {
                this.halfStarVisible = StarRatingUtils.getHalfStarVisible(this.rating);
            }
        }
        else {
            this.halfStarVisible = false;
        }
    }
    /**
     * @return {?}
     */
    getComponentClassNames() {
        const /** @type {?} */ classNames = [];
        classNames.push(this.rating ? 'value-' + this.ratingAsInteger : 'value-0');
        classNames.push(this.halfStarVisible ? 'half' : '');
        classNames.push(this.hoverEnabled ? 'hover' : '');
        const /** @type {?} */ hoverRating = this.hoverRating
            ? 'hover-' + this.hoverRating
            : 'hover-0';
        classNames.push(this.hoverEnabled ? hoverRating : '');
        classNames.push(this.space ? 'space-' + this.space : '');
        classNames.push(this.labelPosition ? 'label-' + this.labelPosition : '');
        classNames.push(this.color ? 'color-' + this.color : '');
        classNames.push(this.starType ? 'star-' + this.starType : '');
        classNames.push(this.speed);
        classNames.push(this.size);
        classNames.push(this.readOnly ? 'read-only' : '');
        classNames.push(this.disabled ? 'disabled' : '');
        classNames.push(this.direction ? 'direction-' + this.direction : '');
        return classNames.join(' ');
    }
    /**
     * @return {?}
     */
    increment() {
        //increment to next higher step
        const /** @type {?} */ absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating + (absDiff > 0 ? this.step - absDiff : this.step);
    }
    /**
     * @return {?}
     */
    decrement() {
        //decrement to next lower step
        const /** @type {?} */ absDiff = Math.abs(this.rating % this.step);
        this.rating = this.rating - (absDiff > 0 ? absDiff : this.step);
    }
    /**
     * @return {?}
     */
    reset() {
        this.rating = 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the StarRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the star ratings used in the application.
 */
class StarRatingConfigService {
    constructor() {
        this._classEmpty = 'default-star-empty-icon';
        this._classHalf = 'default-star-half-icon';
        this._classFilled = 'default-star-filled-icon';
        this._numOfStars = 5;
        this._size = 'medium';
        this._labelPosition = 'left';
        this._speed = 'noticeable';
        this._starType = 'svg';
        this._assetsPath = 'assets/images/';
        this._svgPath = this.assetsPath + 'star-rating.icons.svg';
        this._svgEmptySymbolId = 'star-empty';
        this._svgHalfSymbolId = 'star-half';
        this._svgFilledSymbolId = 'star-filled';
        this._svgPathEmpty = this.svgPath + '#' + this.svgEmptySymbolId;
        this._svgPathHalf = this.svgPath + '#' + this.svgHalfSymbolId;
        this._svgPathFilled = this.svgPath + '#' + this.svgFilledSymbolId;
    }
    /**
     * @return {?}
     */
    get classEmpty() {
        return this._classEmpty;
    }
    /**
     * @param {?} classEmpty
     * @return {?}
     */
    set classEmpty(classEmpty) {
        this._classEmpty = classEmpty;
    }
    /**
     * @return {?}
     */
    get classHalf() {
        return this._classHalf;
    }
    /**
     * @param {?} classHalf
     * @return {?}
     */
    set classHalf(classHalf) {
        this._classHalf = classHalf;
    }
    /**
     * @return {?}
     */
    get classFilled() {
        return this._classFilled;
    }
    /**
     * @param {?} classFilled
     * @return {?}
     */
    set classFilled(classFilled) {
        this._classFilled = classFilled;
    }
    /**
     * @return {?}
     */
    get numOfStars() {
        return this._numOfStars;
    }
    /**
     * @param {?} numOfStars
     * @return {?}
     */
    set numOfStars(numOfStars) {
        this._numOfStars = numOfStars;
    }
    /**
     * @return {?}
     */
    get size() {
        return this._size;
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set size(size) {
        this._size = size;
    }
    /**
     * @return {?}
     */
    get staticColor() {
        return this._staticColor;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set staticColor(value) {
        this._staticColor = value;
    }
    /**
     * @return {?}
     */
    get labelPosition() {
        return this._labelPosition;
    }
    /**
     * @param {?} labelPosition
     * @return {?}
     */
    set labelPosition(labelPosition) {
        this._labelPosition = labelPosition;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @param {?} speed
     * @return {?}
     */
    set speed(speed) {
        this._speed = speed;
    }
    /**
     * @return {?}
     */
    get starType() {
        return this._starType;
    }
    /**
     * @param {?} starType
     * @return {?}
     */
    set starType(starType) {
        this._starType = starType;
    }
    /**
     * @return {?}
     */
    get assetsPath() {
        return this._assetsPath;
    }
    /**
     * @param {?} assetsPath
     * @return {?}
     */
    set assetsPath(assetsPath) {
        this._assetsPath = assetsPath;
    }
    /**
     * @return {?}
     */
    get svgPath() {
        return this._svgPath;
    }
    /**
     * @param {?} svgPath
     * @return {?}
     */
    set svgPath(svgPath) {
        this._svgPath = svgPath;
    }
    /**
     * @return {?}
     */
    get svgEmptySymbolId() {
        return this._svgEmptySymbolId;
    }
    /**
     * @param {?} svgEmptySymbolId
     * @return {?}
     */
    set svgEmptySymbolId(svgEmptySymbolId) {
        this._svgEmptySymbolId = svgEmptySymbolId;
    }
    /**
     * @return {?}
     */
    get svgHalfSymbolId() {
        return this._svgHalfSymbolId;
    }
    /**
     * @param {?} svgHalfSymbolId
     * @return {?}
     */
    set svgHalfSymbolId(svgHalfSymbolId) {
        this._svgHalfSymbolId = svgHalfSymbolId;
    }
    /**
     * @return {?}
     */
    get svgFilledSymbolId() {
        return this._svgFilledSymbolId;
    }
    /**
     * @param {?} svgFilledSymbolId
     * @return {?}
     */
    set svgFilledSymbolId(svgFilledSymbolId) {
        this._svgFilledSymbolId = svgFilledSymbolId;
    }
    /**
     * @return {?}
     */
    get svgPathEmpty() {
        return this._svgPathEmpty;
    }
    /**
     * @param {?} svgPathEmpty
     * @return {?}
     */
    set svgPathEmpty(svgPathEmpty) {
        this._svgPathEmpty = svgPathEmpty;
    }
    /**
     * @return {?}
     */
    get svgPathHalf() {
        return this._svgPathHalf;
    }
    /**
     * @param {?} svgPathHalf
     * @return {?}
     */
    set svgPathHalf(svgPathHalf) {
        this._svgPathHalf = svgPathHalf;
    }
    /**
     * @return {?}
     */
    get svgPathFilled() {
        return this._svgPathFilled;
    }
    /**
     * @param {?} svgPathFilled
     * @return {?}
     */
    set svgPathFilled(svgPathFilled) {
        this._svgPathFilled = svgPathFilled;
    }
    /**
     * @param {?} rating
     * @param {?} numOfStars
     * @param {?=} staticColor
     * @return {?}
     */
    getColor(rating, numOfStars, staticColor) {
        rating = rating || 0;
        // if a fix color is set use this one
        if (staticColor) {
            return staticColor;
        }
        // calculate size of smallest fraction
        const /** @type {?} */ fractionSize = numOfStars / 3;
        // apply color by fraction
        let /** @type {?} */ color = 'default';
        if (rating > 0) {
            color = 'negative';
        }
        if (rating > fractionSize) {
            color = 'ok';
        }
        if (rating > fractionSize * 2) {
            color = 'positive';
        }
        return color;
    }
    /**
     * @param {?} rating
     * @return {?}
     */
    getHalfStarVisible(rating) {
        return Math.abs(rating % 1) > 0;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StarRatingComponent extends StarRating {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
        //Outputs
        this.starClickChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoverRatingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnClick($event) {
        if (this.starClickChange) {
            this.starClickChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnRatingChange($event) {
        if (this.ratingChange) {
            this.ratingChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnHover($event) {
        if (this.hoverRatingChange) {
            this.hoverRatingChange.emit($event);
        }
    }
    /**
     * ACCESSIBILITY *
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (!this.interactionPossible()) {
            return;
        }
        const /** @type {?} */ handlers = {
            //Decrement
            Minus: () => this.decrement(),
            ArrowDown: () => this.decrement(),
            ArrowLeft: () => this.decrement(),
            //Increment
            Plus: () => this.increment(),
            ArrowRight: () => this.increment(),
            ArrowUp: () => this.increment(),
            //Reset
            Backspace: () => this.reset(),
            Delete: () => this.reset(),
            Digit0: () => this.reset()
        };
        const /** @type {?} */ handleDigits = (eventCode) => {
            const /** @type {?} */ dStr = 'Digit';
            const /** @type {?} */ digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
            this.rating = digit;
        };
        if (handlers[event['code']] ||
            StarRatingUtils.isDigitKeyEventCode(event['code'])) {
            if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
                handleDigits(event['code']);
            }
            else {
                handlers[event['code']]();
            }
            event.preventDefault();
            event.stopPropagation();
        }
    }
    /**
     * @param {?=} rating
     * @return {?}
     */
    onStarHover(rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
        //update calculated Color
        this.setColor(true);
        //fire onHoverRatingChange event
        const /** @type {?} */ $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRating(value) {
        const /** @type {?} */ initValue = this.rating;
        super.setRating(value);
        //if value changed trigger valueAccessor events and outputs
        if (initValue !== this.rating) {
            const /** @type {?} */ $event = { rating: this.rating };
            this.saveOnRatingChange($event);
        }
    }
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param {?} rating
     * @return {?}
     */
    onStarClicked(rating) {
        //fire onClick event
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        const /** @type {?} */ onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    }
}
StarRatingComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'star-rating',
                inputs: [
                    'getHalfStarVisible',
                    'getColor',
                    'showHalfStars',
                    'hoverEnabled',
                    'rating',
                    'step',
                    'disabled',
                    'readOnly',
                    'space',
                    'starType',
                    'size',
                    'speed',
                    'numOfStars',
                    'direction',
                    'staticColor',
                    'labelPosition',
                    'labelText',
                    'id'
                ],
                outputs: ['starClickChange', 'ratingChange', 'hoverRatingChange'],
                styles: [],
                template: `<div id="{{id}}"
  class="rating {{getComponentClassNames()}}"
  tabindex="0"
  (keydown)="onKeyDown($event)"
  (mouseleave)="onStarHover(0)">
    <div *ngIf="labelText" class="label-value">{{labelText}}</div>
    <div class="star-container">
        <div class="star"
          (mouseenter)="onStarHover(star)"
          *ngFor="let star of stars"
          (click)="onStarClicked(star)">
            <i *ngIf="!svgVisible()" class="star-empty {{classEmpty}}"></i>
            <i *ngIf="!svgVisible()" class="star-half {{classHalf}}"></i>
            <i *ngIf="!svgVisible()" class="star-filled {{classFilled}}"></i>
            <svg *ngIf="svgVisible()" class="star-empty">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathEmpty"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-half">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathHalf"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-filled">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathFilled"></use>
            </svg>
        </div>
    </div>
</div>
`
            },] },
];
/** @nocollapse */
StarRatingComponent.ctorParameters = () => [
    { type: StarRatingConfigService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const STAR_RATING_CONTROL_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => StarRatingControlComponent),
    multi: true
};
class StarRatingControlComponent extends StarRating {
    /**
     * @param {?} config
     */
    constructor(config) {
        super(config);
        //Outputs
        this.starClickChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ratingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hoverRatingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onModelChangeRegistered = false;
        this.onTouchRegistered = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnClick($event) {
        if (this.starClickChange) {
            this.starClickChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnRatingChange($event) {
        if (this.ratingChange) {
            this.ratingChange.emit($event);
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    saveOnHover($event) {
        if (this.hoverRatingChange) {
            this.hoverRatingChange.emit($event);
        }
    }
    /**
     * @return {?}
     */
    saveOnTouch() {
        if (this.onTouchRegistered) {
            this.onTouch();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    saveOnModelChange(value) {
        if (this.onModelChangeRegistered) {
            this.onModelChange(value);
        }
    }
    /**
     * ACCESSIBILITY *
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        if (!this.interactionPossible()) {
            return;
        }
        const /** @type {?} */ handlers = {
            //Decrement
            Minus: () => this.decrement(),
            ArrowDown: () => this.decrement(),
            ArrowLeft: () => this.decrement(),
            //Increment
            Plus: () => this.increment(),
            ArrowRight: () => this.increment(),
            ArrowUp: () => this.increment(),
            //Reset
            Backspace: () => this.reset(),
            Delete: () => this.reset(),
            Digit0: () => this.reset()
        };
        const /** @type {?} */ handleDigits = (eventCode) => {
            const /** @type {?} */ dStr = 'Digit';
            const /** @type {?} */ digit = parseInt(eventCode.substr(dStr.length, eventCode.length - 1), 10);
            this.rating = digit;
        };
        if (handlers[event['code']] ||
            StarRatingUtils.isDigitKeyEventCode(event['code'])) {
            if (StarRatingUtils.isDigitKeyEventCode(event['code'])) {
                handleDigits(event['code']);
            }
            else {
                handlers[event['code']]();
            }
            event.preventDefault();
            event.stopPropagation();
        }
        this.saveOnTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focus = false;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focus = true;
        event.preventDefault();
        event.stopPropagation();
        this.saveOnTouch();
    }
    /**
     * @param {?=} rating
     * @return {?}
     */
    onStarHover(rating) {
        if (!this.interactionPossible() || !this.hoverEnabled) {
            return;
        }
        this.hoverRating = rating ? parseInt(rating.toString(), 10) : 0;
        //fire onHoverRatingChange event
        const /** @type {?} */ $event = { hoverRating: this.hoverRating };
        this.saveOnHover($event);
    }
    /**
     * Form Control - ControlValueAccessor implementation*
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this.rating = obj;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
        this.onModelChangeRegistered = true;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
        this.onTouchRegistered = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setRating(value) {
        const /** @type {?} */ initValue = this.rating;
        super.setRating(value);
        //if value changed trigger valueAccessor events and outputs
        if (initValue !== this.rating) {
            const /** @type {?} */ $event = { rating: this.rating };
            this.saveOnRatingChange($event);
            this.saveOnModelChange(this.rating);
        }
    }
    /**
     * onStarClicked
     *
     * Is fired when a star is clicked. And updated the rating value.
     * This function returns if the disabled or readOnly
     * property is set. If provided it emits the onClick event
     * handler with the actual rating value.
     *
     * @param {?} rating
     * @return {?}
     */
    onStarClicked(rating) {
        //fire onClick event
        if (!this.interactionPossible()) {
            return;
        }
        this.rating = rating;
        const /** @type {?} */ onClickEventObject = {
            rating: this.rating
        };
        this.saveOnClick(onClickEventObject);
    }
}
StarRatingControlComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'star-rating-control',
                providers: [STAR_RATING_CONTROL_ACCESSOR],
                inputs: [
                    'getHalfStarVisible',
                    'getColor',
                    'showHalfStars',
                    'hoverEnabled',
                    'rating',
                    'step',
                    'disabled',
                    'readOnly',
                    'space',
                    'starType',
                    'size',
                    'speed',
                    'numOfStars',
                    'direction',
                    'staticColor',
                    'labelPosition',
                    'labelText',
                    'id'
                ],
                outputs: ['starClickChange', 'ratingChange', 'hoverRatingChange'],
                styles: [],
                template: `<div id="{{id}}"
  class="rating {{getComponentClassNames()}}"
  tabindex="0"
  (keydown)="onKeyDown($event)"
  (blur)="onBlur($event)"
  (focus)="onFocus($event)"
  (mouseleave)="onStarHover(0)">
    <div *ngIf="labelText" class="label-value">{{labelText}}</div>
    <div class="star-container">
        <div class="star"
          (mouseenter)="onStarHover(star)"
          *ngFor="let star of stars"
          (click)="onStarClicked(star)">
            <i *ngIf="!svgVisible()" class="star-empty {{classEmpty}}"></i>
            <i *ngIf="!svgVisible()" class="star-half {{classHalf}}"></i>
            <i *ngIf="!svgVisible()" class="star-filled {{classFilled}}"></i>
            <svg *ngIf="svgVisible()" class="star-empty">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathEmpty"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-half">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathHalf"></use>
            </svg>
            <svg *ngIf="svgVisible()" class="star-filled">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" [attr.xlink:href]="pathFilled"></use>
            </svg>
        </div>
    </div>
</div>
`
            },] },
];
/** @nocollapse */
StarRatingControlComponent.ctorParameters = () => [
    { type: StarRatingConfigService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const DECLARATIONS = [
    StarRatingComponent,
    StarRatingControlComponent
];
const EXPORTS = [DECLARATIONS];
class StarRatingModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: StarRatingModule,
            providers: [
                StarRatingConfigService
            ]
        };
    }
    /**
     * @return {?}
     */
    static forChild() {
        return {
            ngModule: StarRatingModule,
            providers: []
        };
    }
}
StarRatingModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                declarations: [DECLARATIONS],
                exports: [EXPORTS]
            },] },
];
/** @nocollapse */
StarRatingModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=angular-star-rating.js.map


/***/ }),

/***/ "./node_modules/geolocation-utils/lib/convert.js":
/*!*******************************************************!*\
  !*** ./node_modules/geolocation-utils/lib/convert.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.degToRad = degToRad;
exports.radToDeg = radToDeg;
exports.knotsToMeterPerSecond = knotsToMeterPerSecond;
exports.meterPerSecondToKnots = meterPerSecondToKnots;
exports.knotsToKmPerHour = knotsToKmPerHour;
exports.kmPerHourToKnots = kmPerHourToKnots;
/**
 * Convert an angle in degrees into an angle in radians
 * @param {number} angle   An angle in degrees
 * @return {number} Returns an angle in radians
 */
function degToRad(angle) {
  return angle * Math.PI / 180;
}

/**
 * Convert an angle in radians into an angle in degrees
 * @param {number} angle  An angle in radians
 * @return {number} Returns an angle in degrees
 */
function radToDeg(angle) {
  return angle * 180 / Math.PI;
}

/**
 * Convert a speed in knots into a speed in meter per second
 * 1 knot is 0.514444 m/s
 * @param {number} knots 
 * @return {number} Returns speed in m/s
 */
function knotsToMeterPerSecond(knots) {
  return knots * 0.514444;
}

/**
 * Convert a speed in meter per second into a speed in knots
 * 1 knot is 0.514444 m/s
 * @param {number} knots 
 * @return {number} Returns speed in m/s
 */
function meterPerSecondToKnots(meterPerSecond) {
  return meterPerSecond / 0.514444;
}

/**
 * Convert a speed in knots into a speed in kilometer per hour
 * 1 knot is 1.852 kilometer per hour
 * @param {number} knots   A speed in knots
 * @return {number} Returns speed in km/h
 */
function knotsToKmPerHour(knots) {
  return knots * 1.852;
}

/**
 * Convert a speed in kilometer per hour into a speed in knots
 * 1 knot is 1.852 kilometer per hour
 * @param {number} kmPerHour   A speed in km/h
 * @return {number} Returns speed in knots
 */
function kmPerHourToKnots(kmPerHour) {
  return kmPerHour / 1.852;
}

/***/ }),

/***/ "./node_modules/geolocation-utils/lib/cpa.js":
/*!***************************************************!*\
  !*** ./node_modules/geolocation-utils/lib/cpa.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpa = cpa;
exports.cpaTime = cpaTime;
exports.cpaDistance = cpaDistance;

var _geo = __webpack_require__(/*! ./geo */ "./node_modules/geolocation-utils/lib/geo.js");

var _convert = __webpack_require__(/*! ./convert */ "./node_modules/geolocation-utils/lib/convert.js");

var EPSILON = 1e-8;

/**
 * Calculate the CPA (closest point of approach) for two tracks
 *
 *     !!!MINT THE UNITS (ALL SI) !!!
 *
 * - Position of the tracks is a longitude/latitude
 * - Speed is in meters per second
 * - Heading is an angle in degrees
 * - Returned time is in seconds
 * - Returned distance is in meters
 *
 * Note: this function calculates a cheap, linear approximation of CPA
 *
 * Source: http://geomalgorithms.com/a07-_distance.html
 *
 * @param {LocationHeadingSpeed} track1
 * @param {LocationHeadingSpeed} track2
 * @return {TimeDistance}  Returns an object with time (s) and distance (m)
 */
function cpa(track1, track2) {
  var _headingDistanceTo = (0, _geo.headingDistanceTo)(track1.location, track2.location),
      distance = _headingDistanceTo.distance,
      heading = _headingDistanceTo.heading;

  var dx = distance * Math.sin((0, _convert.degToRad)(heading));
  var dy = distance * Math.cos((0, _convert.degToRad)(heading));

  var tr1 = {
    position: {
      x: 0,
      y: 0
    },
    vector: {
      x: track1.speed * Math.sin((0, _convert.degToRad)(track1.heading)),
      y: track1.speed * Math.cos((0, _convert.degToRad)(track1.heading))
    }
  };

  var tr2 = {
    position: {
      x: dx,
      y: dy
    },
    vector: {
      x: track2.speed * Math.sin((0, _convert.degToRad)(track2.heading)),
      y: track2.speed * Math.cos((0, _convert.degToRad)(track2.heading))
    }
  };

  return {
    time: cpaTime(tr1, tr2), // seconds
    distance: cpaDistance(tr1, tr2) // meters
  };
}

/**
 * Compute the time of CPA for two tracks
 * @param {{position: {x, y}, vector: {x, y}}} tr1
 * @param {{position: {x, y}, vector: {x, y}}} tr2
 * @return {number} The time at which the two tracks are closest in seconds
 * @private
 */
function cpaTime(tr1, tr2) {
  var dv = subtract(tr1.vector, tr2.vector);

  var dv2 = dot(dv, dv);
  if (dv2 < EPSILON) {
    // the  tracks are almost parallel
    return 0; // any time is ok. Use time 0.
  }

  var w0 = subtract(tr1.position, tr2.position);
  return -dot(w0, dv) / dv2; // time of CPA
}

/**
 * Compute the distance at CPA for two tracks
 * @param {{position: {x, y}, vector: {x, y}}} tr1
 * @param {{position: {x, y}, vector: {x, y}}} tr2
 * @return {number} The distance for which the two tracks are closest
 * @private
 */
function cpaDistance(tr1, tr2) {
  var time = cpaTime(tr1, tr2);
  var p1 = add(tr1.position, times(time, tr1.vector));
  var p2 = add(tr2.position, times(time, tr2.vector));

  return distance(p1, p2); // distance at CPA
}

function dot(u, v) {
  return u.x * v.x + u.y * v.y;
}

function add(u, v) {
  return {
    x: u.x + v.x,
    y: u.y + v.y
  };
}

function times(factor, v) {
  return {
    x: factor * v.x,
    y: factor * v.y
  };
}

function subtract(u, v) {
  return {
    x: u.x - v.x,
    y: u.y - v.y
  };
}

function distance(u, v) {
  return norm(subtract(u, v));
}

function norm(v) {
  return Math.sqrt(dot(v, v));
}

/***/ }),

/***/ "./node_modules/geolocation-utils/lib/geo.js":
/*!***************************************************!*\
  !*** ./node_modules/geolocation-utils/lib/geo.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EARTH_RADIUS = undefined;
exports.isEqual = isEqual;
exports.isLatLon = isLatLon;
exports.isLatLng = isLatLng;
exports.isLatitudeLongitude = isLatitudeLongitude;
exports.isLonLatTuple = isLonLatTuple;
exports.getLocationType = getLocationType;
exports.createLocation = createLocation;
exports.toLatLon = toLatLon;
exports.toLatLng = toLatLng;
exports.toLatitudeLongitude = toLatitudeLongitude;
exports.toLonLatTuple = toLonLatTuple;
exports.getLongitude = getLongitude;
exports.getLatitude = getLatitude;
exports.moveTo = moveTo;
exports.headingDistanceTo = headingDistanceTo;
exports.headingTo = headingTo;
exports.distanceTo = distanceTo;
exports.insideBoundingBox = insideBoundingBox;
exports.insidePolygon = insidePolygon;
exports.insideCircle = insideCircle;
exports.normalizeHeading = normalizeHeading;
exports.normalizeLatitude = normalizeLatitude;
exports.normalizeLongitude = normalizeLongitude;
exports.normalizeLocation = normalizeLocation;
exports.average = average;
exports.getBoundingBox = getBoundingBox;

var _pointInPolygon = __webpack_require__(/*! point-in-polygon */ "./node_modules/point-in-polygon/index.js");

var _pointInPolygon2 = _interopRequireDefault(_pointInPolygon);

var _convert = __webpack_require__(/*! ./convert */ "./node_modules/geolocation-utils/lib/convert.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var EARTH_RADIUS = exports.EARTH_RADIUS = 6378137; // Earth's radius in meters

/**
 * Test whether two locations are equal or approximately equal
 * @param {Location} location1     A location in any of the supported location formats
 * @param {Location} location2     A location in any of the supported location formats
 * @param {number} [epsilon=0]     The maximum absolute difference between the
 *                                 two latitudes and between the two longitudes.
 *                                 Use for example 1e-12 to get rid of round-off errors.
 *                                 The epsilon value itself is included.
 *                                 Optional, default value is 0.
 */
function isEqual(location1, location2) {
  var epsilon = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

  return location1 && location2 ? Math.abs(getLatitude(location1) - getLatitude(location2)) <= epsilon && Math.abs(getLongitude(location1) - getLongitude(location2)) <= epsilon : false;
}

/**
 * Test whether an object is an object containing numeric properties `lat` and `lon`
 * @param {*} object Anything
 * @param {boolean} Returns true when object is of type LatLon
 */
function isLatLon(object) {
  return !!object && typeof object.lat === 'number' && typeof object.lon === 'number';
}

/**
 * Test whether an object is an object containing numeric properties `lat` and `lng`
 * @param {*} object Anything
 * @param {boolean} Returns true when object is of type LatLng
 */
function isLatLng(object) {
  return !!object && typeof object.lat === 'number' && typeof object.lng === 'number';
}

/**
 * Test whether an object is an object containing numeric properties `latitude` and `longitude`
 * @param {*} object Anything
 * @param {boolean} Returns true when object is of type LatitudeLongitude
 */
function isLatitudeLongitude(object) {
  return !!object && typeof object.latitude === 'number' && typeof object.longitude === 'number';
}

/**
 * Test whether an object is an array containing two numbers (longitude and latitude)
 * 
 * IMPORTANT: this function cannot see the difference between an array with lat/lon
 *            or an array with lon/lat numbers. It assumes an order lon/lat.
 * 
 * @param {*} object Anything
 * @param {boolean} Returns true when object is of type LonLatTuple
 */
function isLonLatTuple(object) {
  return Array.isArray(object) && typeof object[0] === 'number' && typeof object[1] === 'number';
}

/**
 * Get the type of a location object
 * @param {Location} location
 * @return {string} Returns the type of the location object
 *                  Recognized types: 'LonLatTuple', 'LatLon', 'LatLng', 'LatitudeLongitude'
 */
function getLocationType(location) {
  if (isLonLatTuple(location)) {
    return 'LonLatTuple';
  }

  if (isLatLon(location)) {
    return 'LatLon';
  }

  if (isLatLng(location)) {
    return 'LatLng';
  }

  if (isLatitudeLongitude(location)) {
    return 'LatitudeLongitude';
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Create a location object of a specific type
 * @param {number} latitude
 * @param {number} longitude
 * @param {string} type  Available types: 'LonLatTuple', 'LatLon', 'LatLng', 'LatitudeLongitude'
 */
function createLocation(latitude, longitude, type) {
  if (type === 'LonLatTuple') {
    return [longitude, latitude];
  }

  if (type === 'LatLon') {
    return { lat: latitude, lon: longitude };
  }

  if (type === 'LatLng') {
    return { lat: latitude, lng: longitude };
  }

  if (type === 'LatitudeLongitude') {
    return { latitude: latitude, longitude: longitude };
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Convert a location into an object with properties `lat` and `lon`
 * @param {Location} location
 * @returns {LatLon}
 */
function toLatLon(location) {
  if (isLonLatTuple(location)) {
    return {
      lat: location[1],
      lon: location[0]
    };
  }

  if (isLatLon(location)) {
    return {
      lat: location.lat,
      lon: location.lon
    };
  }

  if (isLatLng(location)) {
    return {
      lat: location.lat,
      lon: location.lng
    };
  }

  if (isLatitudeLongitude(location)) {
    return {
      lat: location.latitude,
      lon: location.longitude
    };
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Convert a location into an object with properties `lat` and `lng`
 * @param {Location} location
 * @returns {LatLng}
 */
function toLatLng(location) {
  if (isLonLatTuple(location)) {
    return {
      lat: location[1],
      lng: location[0]
    };
  }

  if (isLatLon(location)) {
    return {
      lat: location.lat,
      lng: location.lon
    };
  }

  if (isLatLng(location)) {
    return {
      lat: location.lat,
      lng: location.lng
    };
  }

  if (isLatitudeLongitude(location)) {
    return {
      lat: location.latitude,
      lng: location.longitude
    };
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Convert a location into an object with properties `latitude` and `longitude`
 * @param {Location} location
 * @returns {LatitudeLongitude}
 */
function toLatitudeLongitude(location) {
  if (isLonLatTuple(location)) {
    return {
      latitude: location[1],
      longitude: location[0]
    };
  }

  if (isLatLon(location)) {
    return {
      latitude: location.lat,
      longitude: location.lon
    };
  }

  if (isLatLng(location)) {
    return {
      latitude: location.lat,
      longitude: location.lng
    };
  }

  if (isLatitudeLongitude(location)) {
    return {
      latitude: location.latitude,
      longitude: location.longitude
    };
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Convert a location into a tuple `[longitude, latitude]`, as used in the geojson standard
 * 
 * Note that for example Leaflet uses a tuple `[latitude, longitude]` instead, be careful!
 * 
 * @param {Location} location
 * @returns {LonLatTuple}
 */
function toLonLatTuple(location) {
  if (isLonLatTuple(location)) {
    return [location[0], location[1]];
  }

  if (isLatLon(location)) {
    return [location.lon, location.lat];
  }

  if (isLatLng(location)) {
    return [location.lng, location.lat];
  }

  if (isLatitudeLongitude(location)) {
    return [location.longitude, location.latitude];
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Get the longitude of a location
 * @param {Location} location
 * @return {number} Returns the longitude
 */
function getLongitude(location) {
  if (isLonLatTuple(location)) {
    return location[0];
  }

  if (isLatLon(location)) {
    return location.lon;
  }

  if (isLatLng(location)) {
    return location.lng;
  }

  if (isLatitudeLongitude(location)) {
    return location.longitude;
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Get the latitude of a location object or array
 * @param {Location} location
 * @return {number} Returns the latitude
 */
function getLatitude(location) {
  if (isLonLatTuple(location)) {
    return location[1];
  }

  if (isLatLon(location)) {
    return location.lat;
  }

  if (isLatLng(location)) {
    return location.lat;
  }

  if (isLatitudeLongitude(location)) {
    return location.latitude;
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Move to a new location from a start location, heading, and distance
 *
 * This is a rough estimation.
 *
 * Source: 
 * 
 *   http://gis.stackexchange.com/questions/2951/algorithm-for-offsetting-a-latitude-longitude-by-some-amount-of-meters
 * 
 * @param {Location} from             Start location
 * @param {HeadingDistance} headingDistance   An object with property `heading` in degrees and `distance` in meters
 * @return {Location} Returns the moved location
 */
function moveTo(from, headingDistance) {
  // TODO: improve precision of this function moveTo
  var lat = getLatitude(from);
  var lon = getLongitude(from);
  var heading = headingDistance.heading,
      distance = headingDistance.distance;


  var dLat = distance * Math.cos((0, _convert.degToRad)(heading)) / EARTH_RADIUS;
  var dLon = distance * Math.sin((0, _convert.degToRad)(heading)) / (EARTH_RADIUS * Math.cos((0, _convert.degToRad)(lat)));

  return createLocation(lat + (0, _convert.radToDeg)(dLat), lon + (0, _convert.radToDeg)(dLon), getLocationType(from));
}

/**
 * Calculate the heading and distance between two locations
 *
 * Sources:
 * 
 *   http://www.movable-type.co.uk/scripts/latlong.html
 *   http://mathforum.org/library/drmath/view/55417.html
 * 
 * @param {Location} from   Start location
 * @param {Location} to     End location
 * @return {HeadingDistance}  Returns an object with `heading` in degrees and `distance` in meters
 */
function headingDistanceTo(from, to) {
  var fromLat = getLatitude(from);
  var fromLon = getLongitude(from);
  var toLat = getLatitude(to);
  var toLon = getLongitude(to);

  var lat1 = (0, _convert.degToRad)(fromLat);
  var lat2 = (0, _convert.degToRad)(toLat);
  var dlat = (0, _convert.degToRad)(toLat - fromLat);
  var dlon = (0, _convert.degToRad)(toLon - fromLon);

  var a = Math.sin(dlat / 2) * Math.sin(dlat / 2) + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) * Math.sin(dlon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var distance = EARTH_RADIUS * c;

  var y = Math.sin(dlon) * Math.cos(lat2);
  var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dlon);
  var heading = (0, _convert.radToDeg)(Math.atan2(y, x));

  return { distance: distance, heading: heading };
}

/**
 * Calculate the heading from one location to another location
 * @param {Location} center 
 * @param {Location} location 
 * @return {number} Returns an heading in degrees
 */
function headingTo(center, location) {
  return headingDistanceTo(center, location).heading;
}

/**
 * Calculate the distance between two locations
 * @param {Location} center 
 * @param {Location} location 
 * @return {number} Returns the distance in meters
 */
function distanceTo(center, location) {
  return headingDistanceTo(center, location).distance;
}

/**
 * Test whether a location lies inside a given bounding box.
 * @param {Location} location
 * @param {BoundingBox} boundingBox
 *            A bounding box containing a top left and bottom right location.
 *            The order doesn't matter.
 * @return {boolean} Returns true when the location is inside the bounding box
 *                   or on the edge.
 */
function insideBoundingBox(location, boundingBox) {
  var lat = getLatitude(location);
  var lon = getLongitude(location);

  var topLeftLon = getLongitude(boundingBox.topLeft);
  var topLeftLat = getLatitude(boundingBox.topLeft);
  var bottomRightLon = getLongitude(boundingBox.bottomRight);
  var bottomRightLat = getLatitude(boundingBox.bottomRight);

  var minLat = Math.min(topLeftLat, bottomRightLat);
  var maxLat = Math.max(topLeftLat, bottomRightLat);
  var minLon = Math.min(topLeftLon, bottomRightLon);
  var maxLon = Math.max(topLeftLon, bottomRightLon);

  return lon >= minLon && lon <= maxLon && lat >= minLat && lat <= maxLat;
}

/**
 * Test whether a location lies inside a given polygon
 * @param {Location} location 
 * @param {Location[]} polygon  
 * @return {boolean} Returns true when the location is inside the bounding box
 *                   or on the edge.
 */
function insidePolygon(location, polygon) {
  if (!polygon || !Array.isArray(polygon)) {
    throw new TypeError('Invalid polygon. Array with locations expected');
  }
  if (polygon.length === 0) {
    throw new TypeError('Invalid polygon. Non-empty Array expected');
  }

  return (0, _pointInPolygon2.default)(toLonLatTuple(location), polygon.map(toLonLatTuple));
}

/**
 * Test whether a location lies inside a circle with certain radius
 * @param {Location} location 
 * @param {Location} center 
 * @param {number} radius    A radius in meters
 * @return {boolean} Returns true when the location lies inside or 
 *                   on the edge of the circle
 */
function insideCircle(location, center, radius) {
  return distanceTo(center, location) <= radius;
}

/**
 * Normalize an heading into the range [0, 360)
 * @param {number} heading   An heading in degrees
 * @return {number} Returns the normalized heading (degrees)
 */
function normalizeHeading(heading) {
  var normalized = heading % 360;

  if (normalized < 0) {
    normalized += 360;
  }

  if (normalized >= 360) {
    normalized -= 360;
  }

  return normalized;
}

/**
 * Normalize a latitude into the range [-90, 90] (upper and lower bound included)
 * 
 * See https://stackoverflow.com/questions/13368525/modulus-to-limit-latitude-and-longitude-values
 * 
 * @param {number} latitude 
 * @return {number} Returns the normalized latitude
 */
function normalizeLatitude(latitude) {
  return Math.asin(Math.sin(latitude / 180 * Math.PI)) * (180 / Math.PI);
}
/**
 * Normalize a longitude into the range (-180, 180] (lower bound excluded, upper bound included)
 * 
 * @param {number} longitude 
 * @return {number} Returns the normalized longitude
 */
function normalizeLongitude(longitude) {
  var normalized = longitude % 360;

  if (normalized > 180) {
    normalized -= 360;
  }

  if (normalized <= -180) {
    normalized += 360;
  }

  return normalized;
}

/**
 * Normalize the longitude and latitude of a location.
 * Latitude will be in the range [-90, 90] (upper and lower bound included)
 * Lontitude will be in the range (-180, 180] (lower bound excluded, upper bound included)
 * @param {Location} location 
 * @return {Location} Returns the normalized location
 */
function normalizeLocation(location) {
  if (isLonLatTuple(location)) {
    return [normalizeLongitude(location[0]), normalizeLatitude(location[1])];
  }

  if (isLatLon(location)) {
    return {
      lat: normalizeLatitude(location.lat),
      lon: normalizeLongitude(location.lon)
    };
  }

  if (isLatLng(location)) {
    return {
      lat: normalizeLatitude(location.lat),
      lng: normalizeLongitude(location.lng)
    };
  }

  if (isLatitudeLongitude(location)) {
    return {
      latitude: normalizeLatitude(location.latitude),
      longitude: normalizeLongitude(location.longitude)
    };
  }

  throw new Error('Unknown location format ' + JSON.stringify(location));
}

/**
 * Calculate the average of a list with locations
 * @param {Location[]} locations 
 * @return {Location} Returns the average location or null when the list is empty
 *                    Location has the same structure as the first location from
 *                    the input array.
 */
function average(locations) {
  if (!Array.isArray(locations) || locations.length === 0) {
    return null;
  }

  var first = locations[0];
  var latitude = avg(locations.map(getLatitude));
  var longitude = avg(locations.map(getLongitude));

  return createLocation(latitude, longitude, getLocationType(first));
}

/**
 * Get the bounding box of a list with locations
 * @param {Locations[]} locations
 * @param {number} [margin]   Optional margin in meters. Zero by default.
 * @return {BoundingBox} Returns a bounding box described by it's top left 
 *                       and bottom right location
 */
function getBoundingBox(locations) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!Array.isArray(locations) || locations.length === 0) {
    return {
      topLeft: null,
      bottomRight: null
    };
  }

  var type = getLocationType(locations[0]);
  var topLeftLat = Math.max.apply(Math, _toConsumableArray(locations.map(getLatitude)));
  var topLeftLon = Math.min.apply(Math, _toConsumableArray(locations.map(getLongitude)));
  var bottomRightLat = Math.min.apply(Math, _toConsumableArray(locations.map(getLatitude)));
  var bottomRightLon = Math.max.apply(Math, _toConsumableArray(locations.map(getLongitude)));

  var topLeft = createLocation(topLeftLat, topLeftLon, type);
  var bottomRight = createLocation(bottomRightLat, bottomRightLon, type);

  if (margin === null || margin === 0) {
    // no margin
    return { topLeft: topLeft, bottomRight: bottomRight };
  } else {
    // add a margin in meters
    var distance = Math.SQRT2 * margin;
    return {
      topLeft: moveTo(topLeft, { heading: 315, distance: distance }),
      bottomRight: moveTo(bottomRight, { heading: 135, distance: distance })
    };
  }
}

/**
 * Calculate the average of a list with numbers
 * @param {number[]} values 
 * @return {number}
 */
function avg(values) {
  return sum(values) / values.length;
}

/**
 * calculate the sum of a list with numbers
 * @param {number[]} values 
 * @return {number} Returns the sum
 */
function sum(values) {
  return values.reduce(function (a, b) {
    return a + b;
  }, 0);
}

/***/ }),

/***/ "./node_modules/geolocation-utils/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/geolocation-utils/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _convert = __webpack_require__(/*! ./convert */ "./node_modules/geolocation-utils/lib/convert.js");

Object.keys(_convert).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _convert[key];
    }
  });
});

var _geo = __webpack_require__(/*! ./geo */ "./node_modules/geolocation-utils/lib/geo.js");

Object.keys(_geo).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _geo[key];
    }
  });
});

var _cpa = __webpack_require__(/*! ./cpa */ "./node_modules/geolocation-utils/lib/cpa.js");

Object.defineProperty(exports, 'cpa', {
  enumerable: true,
  get: function get() {
    return _cpa.cpa;
  }
});

/***/ }),

/***/ "./node_modules/point-in-polygon/index.js":
/*!************************************************!*\
  !*** ./node_modules/point-in-polygon/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    
    var x = point[0], y = point[1];
    
    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];
        
        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    return inside;
};


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/agregar-direccion/agregar-direccion.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/agregar-direccion/agregar-direccion.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"form-group\">\n    <label>Enter address</label>\n    <input type=\"text\" class=\"form-control\">\n</div> -->\n\n<!-- <h5>Address: {{address}}</h5> -->\n<!-- <div>Latitude: {{latitude}}</div>\n<div>Longitude: {{longitude}}</div>  -->\n<div class=\"bg-warning pt-3 pr-3 pl-3 p-1\">\n    <p class=\"fs-13\">Indique la direccion exacta de entrega. <strong>Se tomara como referencia el punto que especifica en el mapa.</strong></p>\n</div>\n<div>\n    <form [formGroup]=\"registerForm\">\n        <div class=\"w-100\">\n            <div class=\"p-3\">                                \n                <mat-form-field class=\"w-100\">\n                    <input matInput class=\"input-headline\" placeholder=\"Direccion\" formControlName=\"direccion\" [(ngModel)]=\"dataCliente.direccion\" (keydown.enter)=\"$event.preventDefault()\" (keyup)=\"checkDireccion(search.value)\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" type=\"text\" #search id=\"search\">\n                </mat-form-field>            \n                <mat-form-field class=\"w-100\">\n                    <input matInput class=\"input-headline\" placeholder=\"Referencia / piso / oficina\" formControlName=\"referencia\" [(ngModel)]=\"dataCliente.referencia\">\n                </mat-form-field>\n\n                <div hidden=\"true\">\n                    <mat-form-field class=\"w-100\">\n                        <input matInput class=\"input-headline\" placeholder=\"Referencia / piso / oficina\" formControlName=\"longitude\" [(ngModel)]=\"longitude\">\n                    </mat-form-field>\n                    <mat-form-field class=\"w-100\">\n                        <input matInput class=\"input-headline\" placeholder=\"Referencia / piso / oficina\" formControlName=\"latitude\" [(ngModel)]=\"latitude\">\n                    </mat-form-field>\n                </div>\n            \n\n            <!-- mapa -->\n                <div class=\"border\">\n                    <agm-map \n                        [latitude]=\"latitude\" \n                        [longitude]=\"longitude\"\n                        [zoom]=\"zoom\" >\n                        <agm-marker \n                            [latitude]=\"latitude\" \n                            [longitude]=\"longitude\"\n                            [markerDraggable]=\"true\"\n                            (dragEnd)=\"markerDragEnd($event)\"\n                            >\n                        </agm-marker>\n                    </agm-map>                \n                </div>\n\n            </div>\n\n            <!-- mapa -->\n            </div>            \n        </form>\n        \n        <div class=\"p-3\">\n            <p class=\"fw-600 fs-13\">Esta es la dirección de mi:</p>\n            <!-- <mat-radio-group aria-label=\"Select an option\" class=\"fs-13\" [(ngModel)]=\"dataCliente.titulo\"> -->\n            <mat-radio-group class=\"fs-13\" [(ngModel)]=\"dataCliente.titulo\" #radioGroup=\"matRadioGroup\">                \n                <mat-radio-button class=\"pr-3\" checked value=\"Casa\">Casa</mat-radio-button>\n                <mat-radio-button class=\"pr-3\" value=\"Trabajo\">Trabajo</mat-radio-button>\n                <mat-radio-button class=\"pr-3\" value=\"Novi@\">Novi@</mat-radio-button>\n                <mat-radio-button class=\"pr-3\" value=\"Otro\">Otro</mat-radio-button>\n            </mat-radio-group>            \n        </div>\n        \n\n\n        <div class=\"text-center pb-3\">\n\n            <button mat-flat-button mat-dialog-close class=\"mr-3\">\n                <i class=\"fa fa-arrow-left\"></i>\n                Atras\n            </button>\n\n\n            <button mat-flat-button \n                color=\"primary\" \n                [disabled]=\"!registerForm.valid || loader > 0 || !isDireccionValid\"\n                (click)=\"saveDireccion()\"\n                >        \n                <ng-container *ngIf=\"loader === 0; then thenTemplate; else elseTemplate\"></ng-container>\n                <ng-template #thenTemplate>            \n                    Listo Guardar\n                </ng-template>\n                <ng-template #elseTemplate>\n                    <ng-container *ngIf=\"loader === 1; else elseTemplateHecho\">\n                        <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\n                        Guardando ...\n                    </ng-container>\n                    <ng-template #elseTemplateHecho>\n                        <i class=\"fa fa-check\"></i>\n                        Hecho\n                    </ng-template>                    \n                </ng-template>\n                \n            </button> \n            \n            <p *ngIf=\"!isDireccionValid\" class=\"fw-600 text-danger fs-15\">El servicio no esta disponible en esta ubicación.</p>                \n            \n            \n        </div>  \n    \n    \n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/comp-calificacion/comp-calificacion.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/comp-calificacion/comp-calificacion.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- aquien califica -->\n\n<ng-container *ngIf=\"countFin > 0; else msjAgradece\">\n    <div class=\"text-center\">\n        <div *ngIf=\"dataCalificado.showTitulo\">\n            <span class=\"fw-600 fs-13 text-secondary\"> {{ dataCalificado.titulo }} </span>\n        </div>\n        \n        <div *ngIf=\"dataCalificado.showNombre\">\n            <span class=\"fs-15\">{{ dataCalificado.nombre }}</span>\n            <br><br>\n        </div>    \n    </div>\n    \n    <star-rating\n        [starType]=\"'svg'\" \n        size=\"large\" \n        speed=\"slow\"\n        (ratingChange)=\"onRatingChange($event)\"\n        ></star-rating>\n</ng-container>\n\n<ng-template #msjAgradece>\n    <div class=\"text-center fs-18 fw-100\">\n        <span> Muchas gracias, su calificación se tomara en cuenta.</span>\n        <hr>\n        <button mat-flat-button color=\"primary\" mat-dialog-close>Ok</button>\n    </div>    \n</ng-template>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"_miPedido\" class=\"w-100 div-resumen-pedido\">\n    <div *ngFor=\"let tpc of _miPedido.tipoconsumo\" class=\"xCursor\">\n        <ng-container *ngIf=\"tpc.count_items_seccion > 0\">\n            <div class=\"div-plr titulo-tpc\">                        \n                <span>Detalle del pedido</span>\n                <div class=\"countItem countTpc\">{{tpc.count_items_seccion}}</div>\n            </div>\n            <div *ngFor=\"let seccion of tpc.secciones\">\n                <ng-container *ngIf=\"seccion.count_items > 0\">\n                    <div class=\"div-plr titulo-seccion\">\n                        <span>{{seccion.des | titlecase}}</span>\n                        <div class=\"countItem countSeccion\">{{seccion.count_items}}</div>\n                    </div>                            \n                    <ul class=\"w-100\">\n                        <div *ngFor=\"let item of seccion.items\">\n                            <ng-container *ngIf=\"item.cantidad_seleccionada > 0\">\n                                <!-- <div class=\"d-flex\"> -->\n                                <!-- <div>\n                                    <img class=\"img-thumbnail img-carta\" src=\"{{url_img}}{{item.img}}\" width=\"65px\" alt=\"{{item.img}}\">\n                                </div> -->\n                                <!-- <div class=\"w-100\"> -->\n                                <li class=\"d-flex div-plr li-item\" matRipple [matRippleColor]=\"rippleColor\">\n                                    <div class=\"pr-2 fw-100\">{{item.cantidad_seleccionada | number: '2.'}}</div>\n                                    <div class=\"w-100 fw-100\">{{item.des | lowercase}}  <span [hidden]=\"!item.indicaciones\">( {{item.indicaciones}} )</span></div>\n                                    <div class=\"fw-100\">{{item.precio_print | number:'0.2' }}</div>\n                                </li>\n                                    <!-- subitems -->\n                                    <ng-container *ngIf=\"item.subitems_view\">                                                \n                                        <div>\n                                            <ul class=\"w-100\">                                                        \n                                                <!-- <div *ngFor=\"let subitem of item.subitems_view\">                   -->\n                                                        <!-- (click)=\"openDlgSubItem(tpc, seccion, item, subitem)\"                                       -->\n                                                    <li class=\"d-flex div-plr li-item fw-100 fs-12 text-secondary subitem-content-resumen\" *ngFor=\"let subitem of item.subitems_view\" matRipple [matRippleColor]=\"rippleColorSubItem\">\n                                                        <!-- <div class=\"w-100 d-flex\"> -->\n                                                            <div class=\"d-flex w-100 pl-4\">                                                                        \n                                                                    {{subitem.cantidad_seleccionada | number: '2.'}} {{subitem.des}}                                                                            \n                                                            </div>\n\n                                                            <div class=\"fs-11 text-right\" style=\"width: 45px;\" [hidden]=\"subitem.precio === 0\">\n                                                                + {{subitem.precio | number:'0.2' }}\n                                                            </div>                                                                    \n                                                        <!-- </div> -->\n                                                    </li>\n                                                <!-- </div> -->\n                                            </ul>\n                                        </div>\n                                    </ng-container>\n                                <!-- </div> -->\n                                <!-- </div>                                        -->\n                            </ng-container>                            \n                        </div>\n                    </ul>            \n                </ng-container>\n            </div>\n        </ng-container>\n    </div>    \n\n    <!-- subtotales -->    \n    <div class=\"div-total\">\n        <ul class=\"w-100 ul-total\">\n            <li class=\"d-flex div-plr li-item\" *ngFor=\"let item of _arrSubtotales\" matRipple\n            [matRippleColor]=\"rippleColor\">\n            <div class=\"w-100\">{{item.descripcion | titlecase}}</div>\n            <div>{{item.importe | number:'0.2' }}</div>\n            </li>\n        </ul>\n    </div>                    \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex content-propina\" >\n    <div matRipple class=\"item-propina\" \n        [ngClass]=\"{'propina-selected': item.checked}\" \n        (click)=\"itemCheck(item)\"\n        *ngFor=\"let item of listPropina\">{{ item.descripcion }}</div>    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/confirmar-delivery/confirmar-delivery.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/confirmar-delivery/confirmar-delivery.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"text-left h-100\">\n    <div *ngIf=\"!isRecojoLocalCheked\" class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\">\n        <span class=\"fw-100 fs-12 text-secondary\">Direccion de entrega:</span>\n        <p class=\"m-0 fs-14\">\n            <strong>{{direccionCliente.titulo}}</strong> <br> {{direccionCliente.direccion}}\n        </p>   \n    </div>\n\n    <!-- recojo en el local -->\n    <div [hidden]=\"!isAceptaRecojoLocal\" matRipple class=\"border-bottom m-0 p-3\" [matRippleColor]=\"rippleColor\">\n        <mat-checkbox labelPosition=\"before\" [(ngModel)]=\"isRecojoLocalCheked\" (change)=\"recalcularTotales()\">\n            <i class=\"fa fa-home pr-2\" aria-hidden=\"true\"></i> \n            <span class=\"mr-1\" [ngClass]=\"{'fw-600': isRecojoLocalCheked}\">Paso a recoger en el Local</span>            \n        </mat-checkbox>\n    </div>\n\n    <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\">\n        <!-- <span class=\"fw-100 fs-12 text-secondary\">Hora de entrega:</span> -->            \n        <p class=\"m-0\"><i class=\"fa fa-clock-o pr-2\"></i><span class=\"fs-14\"> Tiempo de entrega: {{infoEstablecimiento.tiempo_aprox_entrega}}</span></p>\n    </div>\n\n    <!-- telefono -->\n    <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"openDialogsendSMS()\">                \n        <span class=\"text-danger fs-12 fw-100\" [hidden]=\"this.infoToken.telefono.length >= 5\">Es necesario el numero de su telefono</span>        \n        <p class=\"m-0 fs-14\">Telefono: <strong>{{ infoToken.telefono }}</strong></p>\n        <span class=\"fw-100 fs-12 text-secondary\" [hidden]=\"this.infoToken.telefono.length >= 5\">Añade un número de teléfono para que podamos contactarte e informarte de tu pedido.</span>        \n    </div>\n    <!-- telefono -->\n\n    <!-- facturacion -->\n    <div class=\"border-bottom m-0 p-3 d-flex justify-content-between\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"openDialogTipoComprobnate()\">\n        <p class=\"m-0 fs-14\">Comprobante: <strong>{{tipoComprobanteSelected.descripcion}}</strong></p>\n        <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n    </div>\n    <!-- facturacion -->\n\n    <!-- metodo de pago -->\n    <div class=\"border-bottom m-0 p-3\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"openDialogMetodoPago()\">\n        <div class=\"d-flex justify-content-between\">\n            <p class=\"m-0 fs-14\">Metodo de pago: <strong>{{metodoPagoSelected.descripcion}}</strong></p>\n            <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n        </div>\n        <span class=\"fw-100 fs-12 text-danger\" [hidden]=\"this.metodoPagoSelected.idtipo_pago\">Especifique un metodo de pago.</span>    \n    </div>\n    <!-- metodo de pago -->\n\n    <!-- propina -->\n    <div *ngIf=\"!isRecojoLocalCheked\" class=\"m-0 p-3 d-flex justify-content-between\">\n        <span class=\"m-0 fs-14\">Propina: <i class=\"fa fa-question-circle\" matTooltip=\"El 100% va para el repartidor\"></i> </span> \n        <app-comp-propina-delivery [listSubtotales]=\"_listSubtotales\"></app-comp-propina-delivery>\n        <!-- <i class=\"fa fa-question-circle\" aria-hidden=\"true\"></i> -->\n    </div>\n    <!-- propina -->\n\n    <!-- dato importante o nombre de contacto si es solidaridad -->\n    <div class=\"p-3\">\n        <span *ngIf=\"isComercioSolidaridad\" class=\"text-info\">Importante: especifique persona o datos de contacto.</span>\n        <mat-form-field class=\"w-100\">\n            <input matInput [placeholder]=\"titleInputDatoAdicional\" [required]=\"isComercioSolidaridad\" [(ngModel)]=\"valInputDatoAdicianal\">\n        </mat-form-field>\n    </div>\n    <!-- dato importante o nombre de contacto si es solidaridad -->\n    \n\n    <div class=\"m-0 p-3\">        \n        <!-- <div class=\"row\"> -->\n            <!-- subtotales -->    \n            <div class=\"div-total w-100\">\n                <ul class=\"w-100 ul-total\">\n                    <li class=\"d-flex div-plr li-item\" *ngFor=\"let item of _listSubtotales\" matRipple\n                    [matRippleColor]=\"rippleColor\">\n                    <div class=\"w-100\">{{item.descripcion | titlecase}}</div>\n                    <div>{{item.importe | number:'0.2' }}</div>\n                    </li>\n                </ul>\n            </div>        \n            <div class=\"pb-2 text-right\">\n                <span class=\"text-danger fs-12 fw-100\" [hidden]=\"isValidForm\">Importe minimo S/. {{montoMinimoPedido | number:'.2'}}</span>\n            </div>\n            <br>\n        <!-- </div> -->\n    </div>    \n    <br><br>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/datos-delivery/datos-delivery.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/datos-delivery/datos-delivery.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"text-center\">\n    <p class=\"fw-100 fs-20\">Datos del Delivery</p>\n  </div>\n\n  \n\n      <!-- recojo en el local -->\n      <div [hidden]=\"!isAceptaRecojoLocal\" matRipple class=\"border-bottom m-0 text-left\">\n        <mat-checkbox labelPosition=\"before\" [(ngModel)]=\"isRecojoLocalCheked\" (change)=\"recalcularTotales()\">\n            <i class=\"fa fa-home pr-2\" aria-hidden=\"true\"></i> \n            <span class=\"mr-1\" [ngClass]=\"{'fw-600': isRecojoLocalCheked}\">Cliente pasa a recoger en el Local</span>            \n        </mat-checkbox>\n    </div>\n\n\n  <form [formGroup]=\"myForm\">\n    <div class=\"w-100\">      \n\n      <!-- <i title=\"Cerrar Sesion\" class=\"fa fa-search\" aria-hidden=\"true\"></i> -->\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"DNI\" type=\"number\" formControlName=\"dni\" (keyup.enter)=\"buscarDNI()\" required>\n        <button mat-icon-button matSuffix (click)=\"buscarDNI()\">            \n            <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n        </button>\n      </mat-form-field>\n      <div class=\"w-100\">\n        <mat-progress-bar style=\"bottom: 20px;\" [hidden]=\"!loadConsulta\" mode=\"indeterminate\"></mat-progress-bar>\n      </div>\n\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"Nombre y apellidos\" formControlName=\"nombre\" required>\n      </mat-form-field>\n\n      <!-- <span class=\"text-info fs-13 fw-600\">Es necesario seleccionar una opcion de la lista</span>\n      <button (click)=\"openDialogDireccion()\">seleccionar direccion</button>\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"Direccion\" formControlName=\"direccion\"         \n        required>\n      </mat-form-field> -->\n\n\n      <!-- direccion -->\n      <div *ngIf=\"!isRecojoLocalCheked\" class=\"border-bottom m-0 pl-0 pr-3 pt-3 pb-3 text-left\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"openDialogDireccion()\">\n        <span class=\"fw-100 fs-12 text-secondary\">Direccion de entrega:</span>\n        <p class=\"m-0 fs-14\">\n            <strong>{{direccionCliente.titulo}}</strong> <br> {{direccionCliente.direccion}}\n        </p>   \n      </div>\n\n\n\n      <!-- metodo de pago -->\n      <div *ngIf=\"!isRecojoLocalCheked\" class=\"border-bottom m-0 pl-0 pr-3 pt-3 pb-3 d-flex justify-content-between\" matRipple [matRippleColor]=\"rippleColor\" (click)=\"openDialogMetodoPago()\">\n        <p class=\"m-0 fs-14\">Metodo de pago: <strong>{{metodoPagoSelected.descripcion}}</strong></p>\n        <i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i>\n      </div>\n    <!-- metodo de pago -->\n\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"Telefono\" formControlName=\"telefono\" required>\n      </mat-form-field>\n\n      <!-- <mat-form-field class=\"w-100\">\n        <input type=\"number\" matInput placeholder=\"Paga con\" formControlName=\"paga_con\" required>\n      </mat-form-field> -->\n\n      <mat-form-field class=\"w-100\">\n        <input matInput placeholder=\"Dato Adicional\" formControlName=\"dato_adicional\">\n      </mat-form-field>\n    </div>\n  </form>\n\n\n  <div class=\"m-0\">        \n    <!-- <div class=\"row\"> -->\n        <!-- subtotales -->    \n        <div class=\"div-total border-0 w-100\">\n            <ul class=\"w-100 ul-total\">\n                <li class=\"d-flex div-plr li-item\" *ngFor=\"let item of _listSubtotales\" matRipple\n                [matRippleColor]=\"rippleColor\">\n                <div class=\"w-100\">{{item.descripcion | titlecase}}</div>\n                <div>{{item.importe | number:'0.2' }}</div>\n                </li>\n            </ul>\n        </div>        \n        <!-- <div class=\"pb-2 text-right\">\n            <span class=\"text-danger fs-12 fw-100\" [hidden]=\"isValidForm\">Importe minimo S/. {{montoMinimoPedido | number:'.2'}}</span>\n        </div> -->\n        <!-- <br> -->\n    <!-- </div> -->\n  </div> \n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-calificacion/dialog-calificacion.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/dialog-calificacion/dialog-calificacion.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-3\">\n    <app-comp-calificacion [dataCalificado] = \"_dataCalificado\"></app-comp-calificacion>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n    <p class=\"fs-18 fw- m-0\">Metodo de pago</p>\n    <span class=\"fs-11 text-info\">Por favor, en cuanto sea posible seleccione un metodo de pago sin contacto (Tarjeta o Yape).</span>\n    <hr>\n    <div class=\"xoption w-100\" matRipple *ngFor=\"let subitem of listMetodoPago\">\n        <mat-checkbox \n            class=\"w-100\"\n            (change)=\"chageItem(subitem)\" \n            [(ngModel)]=\"subitem.checked\"             \n        >\n            <div class=\"w-100 d-flex\">\n                <span>{{subitem.descripcion}} </span>                \n            </div>\n        </mat-checkbox>                        \n    </div>    \n    <ng-container *ngIf=\"isMontoVisible\">\n        <hr>\n        <span class=\"text-danger fs-12 fw-100\">indique con cuanto pagara:</span>        \n        <mat-form-field class=\"w-100\">\n            <input type=\"number\" matInput \n            placeholder=\"Paga con\" \n            [(ngModel)]=\"importeIndicado\"\n            (keyup) = \"verificarImporte(importe.value)\" \n            #importe required>\n        </mat-form-field>\n    </ng-container>\n    <hr>\n\n\n    <div class=\"text-center\">\n        <button \n            mat-flat-button color=\"primary\"\n            [disabled]=\"!formValid\"\n            (click)=\"cerrarDlg()\">Listo</button>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"isShowAddDireccion\">\n    <p class=\"fs-14 fw-600 pl-3 pt-3\">Direccion de entrega:</p>\n    <hr>\n    <app-seleccionar-direccion (direccionSelected)=\"setDireccion($event)\" [idClienteBuscar]=\"_idClienteBuscar\"></app-seleccionar-direccion>\n    <br>\n    <div class=\"text-center\">\n        <button mat-flat-button mat-dialog-close class=\"mr-3\">\n            <i class=\"fa fa-arrow-left\"></i>\n            Atras\n        </button>\n\n        <button mat-flat-button \n        color=\"primary\" \n        (click)=\"showAddDireccion()\"\n        > \n            <i class=\"fa fa-plus\"></i>\n            Agregar Direccion\n        </button>\n    </div>\n    <br>\n</div>\n\n<div [hidden]=\"!isShowAddDireccion\">\n    <app-agregar-direccion (saveDireccionOk)=\"setDireccion($event)\" [isGuardarDireccion]=\"isGuardarDireccion\" ></app-agregar-direccion>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.html ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n    <p class=\"fs-18 fw-600\">Tipo de Comprobante</p>\n    <hr>\n    <div class=\"xoption w-100\" matRipple *ngFor=\"let subitem of listTipoComprobante\">\n        <mat-checkbox \n            class=\"w-100\"\n            (change)=\"chageItem(subitem)\" \n            [(ngModel)]=\"subitem.checked\"             \n        >\n            <div class=\"w-100 d-flex\">\n                <span>{{subitem.descripcion}} </span>                \n            </div>\n        </mat-checkbox>                        \n    </div>    \n    <ng-container> \n        <mat-form-field class=\"w-100\">\n            <input type=\"number\" matInput \n            placeholder=\"DNI / RUC\" \n            [(ngModel)]=\"datosComprobante.dni\"            \n            >\n        </mat-form-field>\n\n        <mat-form-field class=\"w-100\">\n            <input type=\"text\" matInput \n            placeholder=\"Indicacion adicional\" \n            [(ngModel)]=\"datosComprobante.otro\"\n            >\n        </mat-form-field>\n    </ng-container>    \n\n    <div class=\"text-center\">\n        <span class=\"fs-12 fw-100 text-info\">Verifique que los datos sean correctos.</span>        \n        <br>\n        <button \n            mat-flat-button color=\"primary\"\n            (click)=\"cerrarDlg()\">Listo</button>\n    </div>\n    \n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-4\">\n    <div>\n        <p class=\"fs-14 fw-600\"><i class=\"fa fa-arrow-left pr-2\" (click)=\"cerrarDlg()\"></i> Numero de telefono:</p>\n    </div>\n\n    <mat-form-field class=\"w-100\">\n        <input type=\"number\" matInput \n        placeholder=\"Telefono\" \n        (keyup) = \"verificarNum(telefono.value)\" \n        [value] = \"data.numberphone\"\n        #telefono required>\n    </mat-form-field>\n    <p *ngIf=\"isNumberSuccess ===2 \" class=\"text-danger\">Número no valido.</p>\n    <br>\n    <button \n        mat-flat-button color=\"primary\"\n        [disabled]=\"!isValidForm\"\n        (click)=\"sendSMS()\"        \n        *ngIf=\"!isSendSMS\"\n    >\n        Verificar telefono\n    </button>\n    \n</div>\n<hr>\n<div class=\"p-4\" *ngIf=\"isSendSMS\">\n    <p class=\"text-success fs-600\">Recibiras un mensaje de texto. Escribelo el codigo aqui:</p>\n    <mat-form-field class=\"w-100\">\n        <input type=\"number\" matInput \n        placeholder=\"Codigo\" #txtCodigo>\n    </mat-form-field>\n    <br>\n    <button \n        mat-flat-button color=\"primary\"        \n        (click)=\"verificarCodigoSMS(txtCodigo.value)\"   \n        [disabled]=\"loader !== 0 && loader !== 3\"\n    >\n        <ng-container *ngIf=\"loader === 0 || loader === 3; else elseTemplate\">\n            Verificar Codigo\n        </ng-container>\n        <ng-template #elseTemplate>\n            <ng-container *ngIf=\"loader === 1; else elseTemplateHecho\">\n                <i class=\"fa fa-spinner fa-spin fa-fw\"></i>\n                Verificando ...\n            </ng-container>\n            <ng-template #elseTemplateHecho>\n                <i class=\"fa fa-check\"></i>\n                Hecho\n            </ng-template> \n        </ng-template>            \n    </button>\n    <p *ngIf=\"loader > 0 && !isVerificacionOk\" class=\"text-danger fw-600\">Codigo ingresado incorrecto.</p>\n</div>\n<!-- <hr> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/encuesta-opcion/encuesta-opcion.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/encuesta-opcion/encuesta-opcion.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let option of ListOption\">    \n    <div class=\"divBtn text-center\" (click)=\"xNextPregunta(option)\">        \n        <div class=\"op\">\n            <img src=\"assets/images/encuesta-img/{{option.img}}\" class=\"btnIco\" alt=\"btnOption\">            \n            <span>{{option.descripcion}}</span>            \n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/item-comercio/item-comercio.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/item-comercio/item-comercio.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-comercio pb-2 text-left\" matRipple (click)=\"_itemSelected()\">\n    <mat-card>\n    <div class=\"content-img-comercio\">\n        <img class=\"img-comercio\" src=\"{{imgComercio}}\" alt=\"\">\n    </div>\n    <div >\n        <div class=\"div-info-comercio\">\n            <p class=\"fw-600 fs-18\">{{itemEstablecimiento.nombre | titlecase}}</p>\n            <p class=\"fs-13\" *ngIf=\"itemEstablecimiento.eslogan.length > 0\">{{itemEstablecimiento.eslogan | titlecase}}</p>\n            <p class=\"fw-100 fs-12\">{{itemEstablecimiento.sub_categoria}}</p>\n        </div>\n        <hr>\n        <div class=\"d-flex div-sub-info-comercio\">\n            <ng-container *ngIf=\"!isCerrado; else elseTemplate\">\n                            \n                    <div>\n                        <i class=\"fa fa-clock-o\"></i>\n                        10 - 15 min\n                    </div>\n                    <div>\n                        <i class=\"fa fa-bicycle\"></i>\n                        S/.{{ itemEstablecimiento.c_servicio | number: '0.2'}}\n                    </div>\n                    <!-- <div>5.0</div>             -->\n\n            </ng-container>\n            <ng-template #elseTemplate>\n                \n                <div class=\"div-cerrado\">\n                    <p>Cerrado Ahora</p>\n                    <!-- <p class=\"fs-15 fw-600\">Abre: {{itemEstablecimiento.hora_ini}} {{amPm}}</p> -->\n                </div>\n\n            </ng-template>\n            \n            \n        </div>\n    </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/mapa-solo/mapa-solo.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/mapa-solo/mapa-solo.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"border\">\n    <agm-map appDirectionsMapDirective [showDirection]=\"displayDirections\"\n            [origin]=\"origin\"\n            [destination]=\"destination\"\n\n            [zoom]=\"zoom\"\n            [disableDefaultUI]=\"false\"\n            [zoomControl]=\"false\">\n\n        <agm-marker\n                [latitude]=\"destination.latitude\"\n                [longitude]=\"destination.longitude\"\n                [iconUrl]='{\"url\": \"./assets/images/placeholder.png\", \"scaledSize\": {\"height\": 30, \"width\": 30}}'\n                >\n        </agm-marker>\n\n        <agm-marker\n                [latitude]=\"origin.latitude\"\n                [longitude]=\"origin.longitude\"\n                [iconUrl]='{\"url\": \"./assets/images/delivery-man.png\", \"scaledSize\": {\"height\": 25, \"width\": 25}}'\n                >\n        </agm-marker>\n    </agm-map>\n</div>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"m-header\">\n        Marcelo\n    </div>\n    <div>\n        <ul>\n            <li>Informacion Personal</li>\n            <li>Mis Pedidos</li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n    <li class=\"li-item\" *ngFor=\"let item of listDirecciones\" matRipple (click)=\"selected(item)\">\n        <div class=\"p-3\">\n            <p class=\"fw-600 fs-14\">{{item.titulo}}</p>\n            <p class=\"fw-100 fs-13\">{{item.direccion}}</p>\n        </div>\n    </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/rxjs/internal/InnerSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/InnerSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var InnerSubscriber = (function (_super) {
    __extends(InnerSubscriber, _super);
    function InnerSubscriber(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber.prototype._next = function (value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber.prototype._error = function (error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber.prototype._complete = function () {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber;
}(Subscriber_1.Subscriber));
exports.InnerSubscriber = InnerSubscriber;
//# sourceMappingURL=InnerSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/OuterSubscriber.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/OuterSubscriber.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var OuterSubscriber = (function (_super) {
    __extends(OuterSubscriber, _super);
    function OuterSubscriber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber.prototype.notifyError = function (error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber.prototype.notifyComplete = function (innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber;
}(Subscriber_1.Subscriber));
exports.OuterSubscriber = OuterSubscriber;
//# sourceMappingURL=OuterSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Scheduler.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/Scheduler.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler = (function () {
    function Scheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler.now = function () { return Date.now(); };
    return Scheduler;
}());
exports.Scheduler = Scheduler;
//# sourceMappingURL=Scheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/throttle.js":
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/throttle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var OuterSubscriber_1 = __webpack_require__(/*! ../OuterSubscriber */ "./node_modules/rxjs/internal/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__(/*! ../util/subscribeToResult */ "./node_modules/rxjs/internal/util/subscribeToResult.js");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) { config = exports.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleOperator(durationSelector, config.leading, config.trailing)); };
}
exports.throttle = throttle;
var ThrottleOperator = (function () {
    function ThrottleOperator(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator;
}());
var ThrottleSubscriber = (function (_super) {
    __extends(ThrottleSubscriber, _super);
    function ThrottleSubscriber(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber.prototype._next = function (value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) {
                this.send();
            }
            else {
                this.throttle(value);
            }
        }
    };
    ThrottleSubscriber.prototype.send = function () {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = null;
    };
    ThrottleSubscriber.prototype.throttle = function (value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) {
            this.add(this._throttled = subscribeToResult_1.subscribeToResult(this, duration));
        }
    };
    ThrottleSubscriber.prototype.tryDurationSelector = function (value) {
        try {
            return this.durationSelector(value);
        }
        catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber.prototype.throttlingDone = function () {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) {
            _throttled.unsubscribe();
        }
        this._throttled = null;
        if (_trailing) {
            this.send();
        }
    };
    ThrottleSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.throttlingDone();
    };
    ThrottleSubscriber.prototype.notifyComplete = function () {
        this.throttlingDone();
    };
    return ThrottleSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=throttle.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/operators/throttleTime.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/operators/throttleTime.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var async_1 = __webpack_require__(/*! ../scheduler/async */ "./node_modules/rxjs/internal/scheduler/async.js");
var throttle_1 = __webpack_require__(/*! ./throttle */ "./node_modules/rxjs/internal/operators/throttle.js");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = async_1.async; }
    if (config === void 0) { config = throttle_1.defaultThrottleConfig; }
    return function (source) { return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing)); };
}
exports.throttleTime = throttleTime;
var ThrottleTimeOperator = (function () {
    function ThrottleTimeOperator(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator;
}());
var ThrottleTimeSubscriber = (function (_super) {
    __extends(ThrottleTimeSubscriber, _super);
    function ThrottleTimeSubscriber(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber.prototype._next = function (value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
        else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
            if (this.leading) {
                this.destination.next(value);
            }
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber.prototype._complete = function () {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        }
        else {
            this.destination.complete();
        }
    };
    ThrottleTimeSubscriber.prototype.clearThrottle = function () {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber;
}(Subscriber_1.Subscriber));
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}
//# sourceMappingURL=throttleTime.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/Action.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/Action.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription_1.Subscription));
exports.Action = Action;
//# sourceMappingURL=Action.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncAction.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncAction.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Action_1 = __webpack_require__(/*! ./Action */ "./node_modules/rxjs/internal/scheduler/Action.js");
var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype._unsubscribe = function () {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    };
    return AsyncAction;
}(Action_1.Action));
exports.AsyncAction = AsyncAction;
//# sourceMappingURL=AsyncAction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/AsyncScheduler.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Scheduler_1 = __webpack_require__(/*! ../Scheduler */ "./node_modules/rxjs/internal/Scheduler.js");
var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler_1.Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, function () {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== _this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return _super.prototype.schedule.call(this, work, delay, state);
        }
    };
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler_1.Scheduler));
exports.AsyncScheduler = AsyncScheduler;
//# sourceMappingURL=AsyncScheduler.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/scheduler/async.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/scheduler/async.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AsyncAction_1 = __webpack_require__(/*! ./AsyncAction */ "./node_modules/rxjs/internal/scheduler/AsyncAction.js");
var AsyncScheduler_1 = __webpack_require__(/*! ./AsyncScheduler */ "./node_modules/rxjs/internal/scheduler/AsyncScheduler.js");
exports.async = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
//# sourceMappingURL=async.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (!!result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (!!result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    subscriber.complete();
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = iterator.next();
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToResult.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToResult.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InnerSubscriber_1 = __webpack_require__(/*! ../InnerSubscriber */ "./node_modules/rxjs/internal/InnerSubscriber.js");
var subscribeTo_1 = __webpack_require__(/*! ./subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, destination) {
    if (destination === void 0) { destination = new InnerSubscriber_1.InnerSubscriber(outerSubscriber, outerValue, outerIndex); }
    if (destination.closed) {
        return undefined;
    }
    if (result instanceof Observable_1.Observable) {
        return result.subscribe(destination);
    }
    return subscribeTo_1.subscribeTo(result)(destination);
}
exports.subscribeToResult = subscribeToResult;
//# sourceMappingURL=subscribeToResult.js.map

/***/ }),

/***/ "./src/app/componentes/agregar-direccion/agregar-direccion.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/agregar-direccion/agregar-direccion.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 300px;\r\n}\r\n\r\n\r\n.input-headline {\r\n    font-size: 13px;\r\n    line-height: 13px;\r\n    /* font-weight: 400; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdyZWdhci1kaXJlY2Npb24vYWdyZWdhci1kaXJlY2Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZ3JlZ2FyLWRpcmVjY2lvbi9hZ3JlZ2FyLWRpcmVjY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuLmlucHV0LWhlYWRsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgLyogZm9udC13ZWlnaHQ6IDQwMDsgKi9cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/agregar-direccion/agregar-direccion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/agregar-direccion/agregar-direccion.component.ts ***!
  \******************************************************************************/
/*! exports provided: AgregarDireccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgregarDireccionComponent", function() { return AgregarDireccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/verify-auth-client.service */ "./src/app/shared/services/verify-auth-client.service.ts");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var src_app_modelos_delivery_direccion_cliente_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modelos/delivery.direccion.cliente.model */ "./src/app/modelos/delivery.direccion.cliente.model.ts");
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ "./src/app/shared/services/mipedido.service.ts");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");









let AgregarDireccionComponent = class AgregarDireccionComponent {
    constructor(formBuilder, mapsAPILoader, ngZone, verifyClientService, crudService, miPedidoService, inforTokenService) {
        this.formBuilder = formBuilder;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.verifyClientService = verifyClientService;
        this.crudService = crudService;
        this.miPedidoService = miPedidoService;
        this.inforTokenService = inforTokenService;
        this.loader = 0;
        this.isGuardarDireccion = true;
        this.dataMaps = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.saveDireccionOk = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDireccionValid = true; // si esta dentro de la zona de atencion
    }
    ngOnInit() {
        this.dataCliente = new src_app_modelos_delivery_direccion_cliente_model__WEBPACK_IMPORTED_MODULE_6__["DeliveryDireccionCliente"]();
        this.loadForm();
        // this.setCurrentLocation();
        // load Places Autocomplete
        this.mapsAPILoader.load().then(() => {
            this.setCurrentLocation();
            this.geoCoder = new google.maps.Geocoder;
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address'],
                componentRestrictions: { country: 'pe' }
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    // get the place result
                    const place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    this.latitude = place.geometry.location.lat();
                    this.longitude = place.geometry.location.lng();
                    this.zoom = 15;
                    this.getAddress(this.latitude, this.longitude);
                });
            });
        });
    }
    setCurrentLocation() {
        // se pide la direccion desde el comercio // registrar pedido
        if (this.inforTokenService.getInfoUs().isCliente === false) {
            this.dataInfoSede = this.miPedidoService.objDatosSede.datossede[0];
            this.latitude = this.dataInfoSede.latitude;
            this.longitude = this.dataInfoSede.longitude;
            return;
        }
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                this.zoom = 16;
                this.getAddress(this.latitude, this.longitude);
            });
        }
    }
    markerDragEnd($event) {
        // console.log($event);
        this.latitude = $event.coords.lat;
        this.longitude = $event.coords.lng;
        this.getAddress(this.latitude, this.longitude);
    }
    getAddress(latitude, longitude) {
        // this.isDireccionValid = true;
        this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
            // console.log(results);
            // console.log(status);
            if (status === 'OK') {
                if (results[0]) {
                    this.zoom = 15;
                    this.address = results[0].formatted_address;
                    this.dataCliente.direccion = this.address;
                    this.dataMapa = results[0];
                    // si es usuario comercio valida la direccion del cliente
                    if (!this.inforTokenService.getInfoUs().isCliente) {
                        const codigo_postal = this.searchTypeMap('postal_code');
                        if (codigo_postal !== this.dataInfoSede.codigo_postal) {
                            this.isDireccionValid = false;
                            // window.alert('El servicio no esta disponible en esta ubicacion');
                        }
                        else {
                            this.isDireccionValid = true;
                        }
                    }
                }
                else {
                    window.alert('No results found');
                }
            }
            else {
                window.alert('Geocoder failed due to: ' + status);
            }
            // console.log('this.dataCliente', this.dataCliente);
            // console.log('this.dataMapa', this.dataMapa);
        });
    }
    loadForm() {
        this.registerForm = this.formBuilder.group({
            direccion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            referencia: [this.dataCliente.referencia, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            longitude: [this.longitude, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            latitude: [this.latitude, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            titulo: this.dataCliente.titulo || ''
        });
        this.registerForm.statusChanges.subscribe(res => {
            if (res === 'VALID') {
                this.guardarDireccion();
            }
        });
    }
    checkDireccion(value) {
        if (value.trim() === '') {
            this.longitude = null;
            this.latitude = null;
        }
    }
    guardarDireccion() {
        if (!this.isDireccionValid) {
            // window.alert('El servicio no esta disponible en esta ubicacion');
            return;
        }
        // this.loader = 1;
        this.dataCliente.idcliente = this.verifyClientService.getDataClient().idcliente;
        this.dataCliente.longitude = this.longitude;
        this.dataCliente.latitude = this.latitude;
        // this.dataCliente.referencia =
        this.dataCliente.ciudad = this.searchTypeMap('locality');
        this.dataCliente.provincia = this.searchTypeMap('administrative_area_level_2');
        this.dataCliente.departamento = this.searchTypeMap('administrative_area_level_1');
        this.dataCliente.pais = this.searchTypeMap('country');
        this.dataCliente.codigo = this.searchTypeMap('postal_code');
        // this.dataCliente.isvalid = true;
        // this.dataMaps.emit(this.dataCliente);
        // console.log('this.dataMapa', this.dataMapa);
        //
        // console.log(data);
        // console.log(this.dataCliente);
        // guardar cambios
        // this.crudService.postFree(this.dataCliente, 'cliente', 'new-direccion', false)
        //   .subscribe((res: any) => {
        //     setTimeout(() => {
        //       this.loader = 2;
        //     }, 1000);
        //     console.log(res);
        //   });
    }
    saveDireccion() {
        this.loader = 1;
        if (!this.isGuardarDireccion) { // si no guarda retorna solo la direccion //
            this.loader = 2;
            this.dataCliente.idcliente_pwa_direccion = null;
            this.saveDireccionOk.emit(this.dataCliente);
            return;
        }
        this.crudService.postFree(this.dataCliente, 'cliente', 'new-direccion', false)
            .subscribe((res) => {
            setTimeout(() => {
                this.loader = 2;
                setTimeout(() => {
                    this.dataCliente.idcliente_pwa_direccion = res.data[0].idcliente_pwa_direccion;
                    this.saveDireccionOk.emit(this.dataCliente);
                }, 500);
            }, 1000);
            // console.log(res);
        });
    }
    searchTypeMap(search) {
        let rpt = '';
        this.dataMapa.address_components.map((x) => {
            x.types.map((t) => {
                if (t === search) {
                    rpt = x.long_name;
                    return rpt;
                }
            });
        });
        return rpt;
    }
};
AgregarDireccionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_4__["VerifyAuthClientService"] },
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_5__["CrudHttpService"] },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_7__["MipedidoService"] },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__["InfoTockenService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], AgregarDireccionComponent.prototype, "searchElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerForm', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AgregarDireccionComponent.prototype, "myForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AgregarDireccionComponent.prototype, "isGuardarDireccion", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AgregarDireccionComponent.prototype, "dataMaps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], AgregarDireccionComponent.prototype, "saveDireccionOk", void 0);
AgregarDireccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agregar-direccion',
        template: __webpack_require__(/*! raw-loader!./agregar-direccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/agregar-direccion/agregar-direccion.component.html"),
        styles: [__webpack_require__(/*! ./agregar-direccion.component.css */ "./src/app/componentes/agregar-direccion/agregar-direccion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _agm_core__WEBPACK_IMPORTED_MODULE_2__["MapsAPILoader"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"],
        src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_4__["VerifyAuthClientService"],
        src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_5__["CrudHttpService"],
        src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_7__["MipedidoService"],
        src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_8__["InfoTockenService"]])
], AgregarDireccionComponent);



/***/ }),

/***/ "./src/app/componentes/comp-calificacion/comp-calificacion.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/componentes/comp-calificacion/comp-calificacion.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rating {\r\n    outline: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY29tcC1jYWxpZmljYWNpb24vY29tcC1jYWxpZmljYWNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2NvbXAtY2FsaWZpY2FjaW9uL2NvbXAtY2FsaWZpY2FjaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmF0aW5nIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/comp-calificacion/comp-calificacion.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/comp-calificacion/comp-calificacion.component.ts ***!
  \******************************************************************************/
/*! exports provided: CompCalificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompCalificacionComponent", function() { return CompCalificacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/datos.calificado.model */ "./src/app/modelos/datos.calificado.model.ts");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");




let CompCalificacionComponent = class CompCalificacionComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.countFin = 2;
        this.intervalConteo = null;
    }
    ngOnInit() {
    }
    onRatingChange($event) {
        // console.log('calificacion', $event);
        this.dataCalificado.calificacion = $event.rating;
        if (this.dataCalificado.showMsjTankyou) {
            this.countFin = 2;
            this.cuentaRegresivaCalificacion();
        }
    }
    // despues que califica cuenta 2 segundo para guardar
    cuentaRegresivaCalificacion() {
        if (this.countFin <= 0) {
            this.intervalConteo = null;
            this.guardarCalificacion();
        }
        else {
            this.conteoFinEncuesta();
        }
    }
    conteoFinEncuesta() {
        this.intervalConteo = setTimeout(() => {
            this.countFin--;
            this.cuentaRegresivaCalificacion();
        }, 1000);
    }
    guardarCalificacion() {
        const _data = {
            dataCalificacion: this.dataCalificado
        };
        this.crudService.postFree(_data, 'delivery', 'calificar-servicio', false)
            .subscribe(res => console.log(res));
    }
};
CompCalificacionComponent.ctorParameters = () => [
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_modelos_datos_calificado_model__WEBPACK_IMPORTED_MODULE_2__["DatosCalificadoModel"])
], CompCalificacionComponent.prototype, "dataCalificado", void 0);
CompCalificacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-calificacion',
        template: __webpack_require__(/*! raw-loader!./comp-calificacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/comp-calificacion/comp-calificacion.component.html"),
        styles: [__webpack_require__(/*! ./comp-calificacion.component.css */ "./src/app/componentes/comp-calificacion/comp-calificacion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]])
], CompCalificacionComponent);



/***/ }),

/***/ "./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-plr {\r\n    padding-left: 7px;\r\n    padding-right: 7px;\r\n}\r\n\r\n.div-content-all {\r\n    top: 0px;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n}\r\n\r\n.titulo-tpc {\r\n    background: #424242;\r\n    color: #e0e0e0;\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n}\r\n\r\n.titulo-seccion {\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    background: blanchedalmond;\r\n}\r\n\r\n.li-item {\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n\r\n.div-total {\r\n    border-top: 2px dashed #9e9e9e;\r\n}\r\n\r\n.ul-total li:last-child{\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n}\r\n\r\n.countItem {\r\n    padding: 4px 7px 4px 7px;\r\n    border-radius: 90%;\r\n    line-height: 1;\r\n    font-size: 12px;\r\n    margin-top: 2px;\r\n}\r\n\r\n.countTpc{\r\n    float: right;\r\n    background: #212121;\r\n    color: #bdbdbd;\r\n}\r\n\r\n.countSeccion {\r\n  float: right;\r\n  color: #616161;\r\n  background: #ffcc80;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY29tcC1wZWRpZG8tZGV0YWxsZS9jb21wLXBlZGlkby1kZXRhbGxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLHdCQUFnQjtJQUFoQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGNBQWM7RUFDZCxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jb21wLXBlZGlkby1kZXRhbGxlL2NvbXAtcGVkaWRvLWRldGFsbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtcGxyIHtcclxuICAgIHBhZGRpbmctbGVmdDogN3B4O1xyXG4gICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG59XHJcblxyXG4uZGl2LWNvbnRlbnQtYWxsIHtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG5cclxuLnRpdHVsby10cGMge1xyXG4gICAgYmFja2dyb3VuZDogIzQyNDI0MjtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50aXR1bG8tc2VjY2lvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcclxuICAgIGJhY2tncm91bmQ6IGJsYW5jaGVkYWxtb25kO1xyXG59XHJcblxyXG4ubGktaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG4uZGl2LXRvdGFsIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgIzllOWU5ZTtcclxufVxyXG5cclxuLnVsLXRvdGFsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4uY291bnRJdGVtIHtcclxuICAgIHBhZGRpbmc6IDRweCA3cHggNHB4IDdweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDkwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59XHJcblxyXG4uY291bnRUcGN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG4gICAgY29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuXHJcbi5jb3VudFNlY2Npb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogIzYxNjE2MTtcclxuICBiYWNrZ3JvdW5kOiAjZmZjYzgwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CompPedidoDetalleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPedidoDetalleComponent", function() { return CompPedidoDetalleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ "./src/app/shared/services/mipedido.service.ts");




let CompPedidoDetalleComponent = class CompPedidoDetalleComponent {
    constructor(crudService, miPedidoService) {
        this.crudService = crudService;
        this.miPedidoService = miPedidoService;
    }
    ngOnInit() {
        this.loadPedido();
    }
    loadPedido() {
        // console.log('infoPedido componente', this.infoPedido);
        const _data = {
            mesa: 0,
            idsede: this.infoPedido.idsede,
            idorg: this.infoPedido.idorg,
            idpedido: this.infoPedido.idpedido
        };
        this.crudService.postFree(_data, 'pedido', 'lacuenta-zona-delivery', false)
            .subscribe(res => {
            // console.log('lacuenta-zona-delivery', res);
            this._miPedido = this.miPedidoService.darFormatoPedido(res);
            // obtener subtotales bd
            this.crudService.postFree(_data, 'pedido', 'lacuenta-pedido-totales', false)
                .subscribe(arrTotal => {
                this._arrSubtotales = arrTotal.data;
            });
            // console.log('this._arrSubtotales', this._arrSubtotales);
            // console.log('this.elPedido', this._miPedido);
        });
    }
};
CompPedidoDetalleComponent.ctorParameters = () => [
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"] },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_3__["MipedidoService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CompPedidoDetalleComponent.prototype, "infoPedido", void 0);
CompPedidoDetalleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-pedido-detalle',
        template: __webpack_require__(/*! raw-loader!./comp-pedido-detalle.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.html"),
        styles: [__webpack_require__(/*! ./comp-pedido-detalle.component.css */ "./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_2__["CrudHttpService"],
        src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_3__["MipedidoService"]])
], CompPedidoDetalleComponent);



/***/ }),

/***/ "./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.item-propina {\r\n    padding: 5px;\r\n    border: 1px solid;\r\n    border-radius: 5px;\r\n    font-size: 12px;\r\n    background-color: white;\r\n    margin-left: 5px;\r\n}\r\n\r\n.propina-selected {\r\n    background-color: black;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY29tcC1wcm9waW5hLWRlbGl2ZXJ5L2NvbXAtcHJvcGluYS1kZWxpdmVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9jb21wLXByb3BpbmEtZGVsaXZlcnkvY29tcC1wcm9waW5hLWRlbGl2ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLml0ZW0tcHJvcGluYSB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLnByb3BpbmEtc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CompPropinaDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompPropinaDeliveryComponent", function() { return CompPropinaDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");



let CompPropinaDeliveryComponent = class CompPropinaDeliveryComponent {
    constructor(infoTokenService) {
        this.infoTokenService = infoTokenService;
    }
    set listSubtotales(val) {
        this._listSubtotales = val;
    }
    ngOnInit() {
        this.loadPropina();
        this.propinaSelected = this.infoTokenService.infoUsToken.propina;
    }
    loadPropina() {
        this.listPropina = [];
        this.listPropina.push({ 'idpropina': 1, 'value': 0, 'descripcion': 'S/. 0', 'checked': true });
        this.listPropina.push({ 'idpropina': 2, 'value': 1, 'descripcion': 'S/. 1', 'checked': false });
        this.listPropina.push({ 'idpropina': 3, 'value': 2, 'descripcion': 'S/. 2', 'checked': false });
        this.listPropina.push({ 'idpropina': 4, 'value': 3, 'descripcion': 'S/. 3', 'checked': false });
        this.listPropina.push({ 'idpropina': 5, 'value': 5, 'descripcion': 'S/. 5', 'checked': false });
    }
    itemCheck(item) {
        this.listPropina.map(x => x.checked = false);
        item.checked = true;
        // agregar a subtotales
        const rowTotal = this._listSubtotales[this._listSubtotales.length - 1];
        let rowPropina = this._listSubtotales.filter(x => x.id === -3)[0];
        if (!rowPropina) {
            rowPropina = {};
            rowPropina.id = -3;
            rowPropina.descripcion = 'Propina';
            rowPropina.esImpuesto = 0;
            rowPropina.visible = false;
            rowPropina.quitar = false;
            rowPropina.tachado = false;
            rowPropina.visible_cpe = false;
            rowPropina.importe = parseFloat(item.value.toString()).toFixed(2);
            this._listSubtotales.pop();
            this._listSubtotales.push(rowPropina);
            rowTotal.importe = this.getTotalSubtotales();
            this._listSubtotales.push(rowTotal);
        }
        else {
            rowPropina.importe = parseFloat(item.value.toString()).toFixed(2);
            rowTotal.importe = this.getTotalSubtotales();
        }
        // agregar al local
        localStorage.setItem('sys::st', btoa(JSON.stringify(this._listSubtotales)));
        this.infoTokenService.setPropina(item);
    }
    // optienen el importe total despues de agregrar la propina
    getTotalSubtotales() {
        return this._listSubtotales.filter(x => x.descripcion !== 'TOTAL').map((x) => parseFloat(x.importe)).reduce((a, b) => a + b, 0);
    }
};
CompPropinaDeliveryComponent.ctorParameters = () => [
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], CompPropinaDeliveryComponent.prototype, "listSubtotales", null);
CompPropinaDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comp-propina-delivery',
        template: __webpack_require__(/*! raw-loader!./comp-propina-delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.html"),
        styles: [__webpack_require__(/*! ./comp-propina-delivery.component.css */ "./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]])
], CompPropinaDeliveryComponent);



/***/ }),

/***/ "./src/app/componentes/componentes.module.ts":
/*!***************************************************!*\
  !*** ./src/app/componentes/componentes.module.ts ***!
  \***************************************************/
/*! exports provided: ComponentesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentesModule", function() { return ComponentesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _datos_delivery_datos_delivery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datos-delivery/datos-delivery.component */ "./src/app/componentes/datos-delivery/datos-delivery.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/material/material.module */ "./src/app/core/material/material.module.ts");
/* harmony import */ var _shared_directivas_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/directivas/debounce-click.directive */ "./src/app/shared/directivas/debounce-click.directive.ts");
/* harmony import */ var _encuesta_opcion_encuesta_opcion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./encuesta-opcion/encuesta-opcion.component */ "./src/app/componentes/encuesta-opcion/encuesta-opcion.component.ts");
/* harmony import */ var _agregar_direccion_agregar_direccion_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./agregar-direccion/agregar-direccion.component */ "./src/app/componentes/agregar-direccion/agregar-direccion.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");
/* harmony import */ var _item_comercio_item_comercio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./item-comercio/item-comercio.component */ "./src/app/componentes/item-comercio/item-comercio.component.ts");
/* harmony import */ var _seleccionar_direccion_seleccionar_direccion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./seleccionar-direccion/seleccionar-direccion.component */ "./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.ts");
/* harmony import */ var _confirmar_delivery_confirmar_delivery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./confirmar-delivery/confirmar-delivery.component */ "./src/app/componentes/confirmar-delivery/confirmar-delivery.component.ts");
/* harmony import */ var _menu_lateral_cliente_menu_lateral_cliente_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-lateral-cliente/menu-lateral-cliente.component */ "./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.ts");
/* harmony import */ var _dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog-metodo-pago/dialog-metodo-pago.component */ "./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.ts");
/* harmony import */ var _dialog_verificar_telefono_dialog_verificar_telefono_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dialog-verificar-telefono/dialog-verificar-telefono.component */ "./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.ts");
/* harmony import */ var _dialog_tipo_comprobante_dialog_tipo_comprobante_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog-tipo-comprobante/dialog-tipo-comprobante.component */ "./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.ts");
/* harmony import */ var _comp_propina_delivery_comp_propina_delivery_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./comp-propina-delivery/comp-propina-delivery.component */ "./src/app/componentes/comp-propina-delivery/comp-propina-delivery.component.ts");
/* harmony import */ var _mapa_solo_mapa_solo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mapa-solo/mapa-solo.component */ "./src/app/componentes/mapa-solo/mapa-solo.component.ts");
/* harmony import */ var _shared_directivas_directions_map_directive_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/directivas/directions-map-directive.directive */ "./src/app/shared/directivas/directions-map-directive.directive.ts");
/* harmony import */ var _comp_pedido_detalle_comp_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comp-pedido-detalle/comp-pedido-detalle.component */ "./src/app/componentes/comp-pedido-detalle/comp-pedido-detalle.component.ts");
/* harmony import */ var _comp_calificacion_comp_calificacion_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./comp-calificacion/comp-calificacion.component */ "./src/app/componentes/comp-calificacion/comp-calificacion.component.ts");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm2015/angular-star-rating.js");
/* harmony import */ var _dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog-calificacion/dialog-calificacion.component */ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.ts");
/* harmony import */ var _dialog_select_direccion_dialog_select_direccion_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dialog-select-direccion/dialog-select-direccion.component */ "./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.ts");








// import { DialogUbicacionComponent } from './dialog-ubicacion/dialog-ubicacion.component';














// import { DialogDesicionComponent } from './dialog-desicion/dialog-desicion.component';
// import { DialogSelectDireccionComponent } from './dialog-select-direccion/dialog-select-direccion.component';



let ComponentesModule = class ComponentesModule {
};
ComponentesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _datos_delivery_datos_delivery_component__WEBPACK_IMPORTED_MODULE_3__["DatosDeliveryComponent"],
            _shared_directivas_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__["DebounceClickDirective"],
            _shared_directivas_directions_map_directive_directive__WEBPACK_IMPORTED_MODULE_19__["DirectionsMapDirectiveDirective"],
            _encuesta_opcion_encuesta_opcion_component__WEBPACK_IMPORTED_MODULE_7__["EncuestaOpcionComponent"],
            _agregar_direccion_agregar_direccion_component__WEBPACK_IMPORTED_MODULE_8__["AgregarDireccionComponent"],
            _item_comercio_item_comercio_component__WEBPACK_IMPORTED_MODULE_10__["ItemComercioComponent"],
            _seleccionar_direccion_seleccionar_direccion_component__WEBPACK_IMPORTED_MODULE_11__["SeleccionarDireccionComponent"],
            _confirmar_delivery_confirmar_delivery_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmarDeliveryComponent"],
            _menu_lateral_cliente_menu_lateral_cliente_component__WEBPACK_IMPORTED_MODULE_13__["MenuLateralClienteComponent"],
            _dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_14__["DialogMetodoPagoComponent"],
            _dialog_verificar_telefono_dialog_verificar_telefono_component__WEBPACK_IMPORTED_MODULE_15__["DialogVerificarTelefonoComponent"],
            _dialog_tipo_comprobante_dialog_tipo_comprobante_component__WEBPACK_IMPORTED_MODULE_16__["DialogTipoComprobanteComponent"],
            _comp_propina_delivery_comp_propina_delivery_component__WEBPACK_IMPORTED_MODULE_17__["CompPropinaDeliveryComponent"],
            _mapa_solo_mapa_solo_component__WEBPACK_IMPORTED_MODULE_18__["MapaSoloComponent"],
            _comp_pedido_detalle_comp_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_20__["CompPedidoDetalleComponent"],
            _comp_calificacion_comp_calificacion_component__WEBPACK_IMPORTED_MODULE_21__["CompCalificacionComponent"],
            _dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_23__["DialogCalificacionComponent"],
            _dialog_select_direccion_dialog_select_direccion_component__WEBPACK_IMPORTED_MODULE_24__["DialogSelectDireccionComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _core_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyAknWQFyVH1RpR2OAL0vRTHTapaIpfKSqo',
                libraries: ['places']
            }),
            angular_star_rating__WEBPACK_IMPORTED_MODULE_22__["StarRatingModule"].forRoot()
        ],
        exports: [
            _datos_delivery_datos_delivery_component__WEBPACK_IMPORTED_MODULE_3__["DatosDeliveryComponent"],
            _shared_directivas_debounce_click_directive__WEBPACK_IMPORTED_MODULE_6__["DebounceClickDirective"],
            _encuesta_opcion_encuesta_opcion_component__WEBPACK_IMPORTED_MODULE_7__["EncuestaOpcionComponent"],
            _agregar_direccion_agregar_direccion_component__WEBPACK_IMPORTED_MODULE_8__["AgregarDireccionComponent"],
            _item_comercio_item_comercio_component__WEBPACK_IMPORTED_MODULE_10__["ItemComercioComponent"],
            _seleccionar_direccion_seleccionar_direccion_component__WEBPACK_IMPORTED_MODULE_11__["SeleccionarDireccionComponent"],
            _confirmar_delivery_confirmar_delivery_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmarDeliveryComponent"],
            _dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_14__["DialogMetodoPagoComponent"],
            _dialog_verificar_telefono_dialog_verificar_telefono_component__WEBPACK_IMPORTED_MODULE_15__["DialogVerificarTelefonoComponent"],
            _dialog_tipo_comprobante_dialog_tipo_comprobante_component__WEBPACK_IMPORTED_MODULE_16__["DialogTipoComprobanteComponent"],
            _comp_propina_delivery_comp_propina_delivery_component__WEBPACK_IMPORTED_MODULE_17__["CompPropinaDeliveryComponent"],
            _mapa_solo_mapa_solo_component__WEBPACK_IMPORTED_MODULE_18__["MapaSoloComponent"],
            _comp_pedido_detalle_comp_pedido_detalle_component__WEBPACK_IMPORTED_MODULE_20__["CompPedidoDetalleComponent"],
            _comp_calificacion_comp_calificacion_component__WEBPACK_IMPORTED_MODULE_21__["CompCalificacionComponent"],
            _dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_23__["DialogCalificacionComponent"],
            _dialog_select_direccion_dialog_select_direccion_component__WEBPACK_IMPORTED_MODULE_24__["DialogSelectDireccionComponent"]
            // DialogDesicionComponent
        ],
        entryComponents: [
            _dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_14__["DialogMetodoPagoComponent"],
            _dialog_verificar_telefono_dialog_verificar_telefono_component__WEBPACK_IMPORTED_MODULE_15__["DialogVerificarTelefonoComponent"],
            _dialog_tipo_comprobante_dialog_tipo_comprobante_component__WEBPACK_IMPORTED_MODULE_16__["DialogTipoComprobanteComponent"],
            _dialog_calificacion_dialog_calificacion_component__WEBPACK_IMPORTED_MODULE_23__["DialogCalificacionComponent"],
            _dialog_select_direccion_dialog_select_direccion_component__WEBPACK_IMPORTED_MODULE_24__["DialogSelectDireccionComponent"]
            // DialogDesicionComponent
        ]
    })
], ComponentesModule);



/***/ }),

/***/ "./src/app/componentes/confirmar-delivery/confirmar-delivery.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/confirmar-delivery/confirmar-delivery.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-total {\r\n    border-top: 2px dashed #9e9e9e;\r\n}\r\n\r\n.ul-total li:last-child{\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n}\r\n\r\n.li-item {\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY29uZmlybWFyLWRlbGl2ZXJ5L2NvbmZpcm1hci1kZWxpdmVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY29uZmlybWFyLWRlbGl2ZXJ5L2NvbmZpcm1hci1kZWxpdmVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi10b3RhbCB7XHJcbiAgICBib3JkZXItdG9wOiAycHggZGFzaGVkICM5ZTllOWU7XHJcbn1cclxuXHJcbi51bC10b3RhbCBsaTpsYXN0LWNoaWxke1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmxpLWl0ZW0ge1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UwZTBlMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/confirmar-delivery/confirmar-delivery.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/confirmar-delivery/confirmar-delivery.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConfirmarDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmarDeliveryComponent", function() { return ConfirmarDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ "./src/app/shared/services/establecimiento.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog-metodo-pago/dialog-metodo-pago.component */ "./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.ts");
/* harmony import */ var _dialog_verificar_telefono_dialog_verificar_telefono_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog-verificar-telefono/dialog-verificar-telefono.component */ "./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.ts");
/* harmony import */ var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/verify-auth-client.service */ "./src/app/shared/services/verify-auth-client.service.ts");
/* harmony import */ var _dialog_tipo_comprobante_dialog_tipo_comprobante_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-tipo-comprobante/dialog-tipo-comprobante.component */ "./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.ts");






// import { CrudHttpService } from 'src/app/shared/services/crud-http.service';



let ConfirmarDeliveryComponent = class ConfirmarDeliveryComponent {
    constructor(infoTokenService, verifyClientService, establecimientoService, dialog, dialogTelefono, dialogTipoComprobante
    // private crudService: CrudHttpService
    ) {
        this.infoTokenService = infoTokenService;
        this.verifyClientService = verifyClientService;
        this.establecimientoService = establecimientoService;
        this.dialog = dialog;
        this.dialogTelefono = dialogTelefono;
        this.dialogTipoComprobante = dialogTipoComprobante;
        this.isRecojoLocalCheked = false;
        this.isAceptaRecojoLocal = true;
        this.isValidForm = false;
        this.rippleColor = 'rgb(255,238,88, 0.3)';
        this.montoMinimoPedido = 10; // monto minimo del pedido
        // return for printer
        this.resData = {
            idcliente: '',
            dni: '',
            nombre: '',
            f_nac: '',
            direccion: '',
            telefono: '',
            paga_con: '',
            dato_adicional: '',
            referencia: '',
            tipoComprobante: {},
            importeTotal: 0,
            metodoPago: {},
            propina: {},
            direccionEnvioSelected: {},
            establecimiento: {},
            subTotales: {},
            pasoRecoger: false
        };
        this.isComercioSolidaridad = false;
        this.titleInputDatoAdicional = 'Dato importante';
        this.valInputDatoAdicianal = '';
        this.isHabilitadoTarjeta = true; // comercios no afiliado no se acepta tarjeta por la comision que cobran, algunos comercios tambien pueden especificar que no desean pagos con tarjeta
        this.isReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataDelivery = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    set listSubtotales(val) {
        this._listSubtotales = val;
        this.loadData();
    }
    ngOnInit() {
        this.loadData();
        const _datosEstablecieminto = this.establecimientoService.get();
        this.montoMinimoPedido = _datosEstablecieminto.pwa_delivery_importe_min;
        this.tipoComprobanteSelected = this.infoTokenService.infoUsToken.tipoComprobante;
        this.propinaSelected = this.infoTokenService.infoUsToken.propina;
        this.isComercioSolidaridad = _datosEstablecieminto.pwa_delivery_comercio_solidaridad === 1;
        this.titleInputDatoAdicional = this.isComercioSolidaridad ? 'Contacto' : 'Algún dato importante?';
    }
    loadData() {
        // metodo de pago
        this.isHabilitadoTarjeta = this.establecimientoService.get().pwa_delivery_acepta_tarjeta === 1;
        this.metodoPagoSelected = this.infoTokenService.setIniMetodoPagoSegunFiltro(this.isHabilitadoTarjeta);
        // direccion de entrega
        this.infoToken = this.infoTokenService.getInfoUs();
        this.direccionCliente = this.infoToken.direccionEnvioSelected;
        // console.log('info cliente from confirmacion', this.infoToken);
        // establecimiento seleccionado
        this.infoEstablecimiento = this.establecimientoService.get();
        this.isAceptaRecojoLocal = this.infoEstablecimiento.pwa_delivery_habilitar_recojo_local === 1;
        // console.log('this.infoEstablecimiento', this.infoEstablecimiento);
        this.resData.telefono = this.infoToken.telefono;
        this.isValidForm = this.infoToken.telefono ? this.infoToken.telefono.length >= 5 ? true : false : false;
        this.isValidForm = !this.metodoPagoSelected.idtipo_pago ? false : this.isValidForm;
        if (this.isValidForm) {
            setTimeout(() => {
                this.verificarNum(this.infoToken.telefono);
            }, 500);
        }
    }
    verificarNum(telefono) {
        // this.isValidForm = telefono.trim().length >= 5 ? true : false;
        // this.isValidForm = !this.metodoPagoSelected.idtipo_pago ? false : this.isValidForm;
        // this.isReady.emit(this.isValidForm);
        this.resData.telefono = telefono;
        this.verificarFormValid();
        this.propinaSelected = this.infoTokenService.infoUsToken.propina;
        // const importeTotal = parseInt(this._listSubtotales[0].importe, 0);
        const importeTotal = this._listSubtotales[this._listSubtotales.length - 1].importe;
        if (this.isValidForm) {
            this.resData.nombre = this.infoToken.nombres;
            this.resData.direccion = this.infoToken.direccionEnvioSelected.direccion;
            this.resData.referencia = this.infoToken.direccionEnvioSelected.referencia;
            this.resData.direccionEnvioSelected = this.infoToken.direccionEnvioSelected;
            this.resData.idcliente = this.infoToken.idcliente.toString();
            this.resData.paga_con = this.metodoPagoSelected.descripcion + '  ' + this.metodoPagoSelected.importe || '';
            this.resData.telefono = telefono;
            this.resData.metodoPago = this.metodoPagoSelected;
            this.resData.tipoComprobante = this.tipoComprobanteSelected;
            this.resData.establecimiento = this.infoEstablecimiento;
            this.resData.importeTotal = importeTotal;
            this.resData.subTotales = this._listSubtotales;
            this.resData.propina = this.propinaSelected;
            this.infoToken.telefono = telefono;
            this.infoTokenService.setTelefono(telefono);
            this.resData.pasoRecoger = this.isRecojoLocalCheked;
            this.resData.dato_adicional = this.valInputDatoAdicianal;
            // this.infoTokenService.set();
            this.dataDelivery.emit(this.resData);
        }
        this.verificarMontoMinimo();
    }
    verificarMontoMinimo() {
        // const importeTotal = parseInt(this._listSubtotales[0].importe, 0);
        const importeTotal = this._listSubtotales[this._listSubtotales.length - 1].importe;
        this.resData.importeTotal = importeTotal;
        // this.isValidForm = importeTotal >= this.montoMinimoPedido && this.isValidForm ? true : false;
        // this.isReady.emit(this.isValidForm);
        this.verificarFormValid();
        this.propinaSelected = this.infoTokenService.infoUsToken.propina;
        if (this.isValidForm) {
            this.resData.nombre = this.infoToken.nombres;
            this.resData.direccion = this.infoToken.direccionEnvioSelected.direccion;
            this.resData.referencia = this.infoToken.direccionEnvioSelected.referencia;
            this.resData.direccionEnvioSelected = this.infoToken.direccionEnvioSelected;
            this.resData.idcliente = this.infoToken.idcliente.toString();
            this.resData.paga_con = this.metodoPagoSelected.descripcion + '  ' + this.metodoPagoSelected.importe || '';
            this.resData.telefono = this.infoToken.telefono;
            this.resData.metodoPago = this.metodoPagoSelected;
            this.resData.tipoComprobante = this.tipoComprobanteSelected;
            this.resData.establecimiento = this.infoEstablecimiento;
            this.resData.propina = this.propinaSelected;
            this.resData.importeTotal = importeTotal;
            this.resData.subTotales = this._listSubtotales;
            this.resData.pasoRecoger = this.isRecojoLocalCheked;
            this.resData.dato_adicional = this.valInputDatoAdicianal;
            // this.infoToken.telefono = telefono;
            // this.infoTokenService.setTelefono(telefono);
            this.infoTokenService.set();
            this.dataDelivery.emit(this.resData);
        }
    }
    verificarFormValid() {
        this.isValidForm = this.resData.telefono.trim().length >= 5 ? true : false;
        this.isValidForm = this.resData.importeTotal >= this.montoMinimoPedido && this.isValidForm ? true : false;
        this.isValidForm = !this.metodoPagoSelected.idtipo_pago ? false : this.isValidForm;
        this.isReady.emit(this.isValidForm);
    }
    openDialogMetodoPago() {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        _dialogConfig.width = '380px';
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = {
            importeTotalPagar: this._listSubtotales[this._listSubtotales.length - 1].importe
        };
        const dialogLoading = this.dialog.open(_dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_5__["DialogMetodoPagoComponent"], _dialogConfig);
        dialogLoading.afterClosed().subscribe((result) => {
            this.metodoPagoSelected = result;
            this.verificarFormValid();
            // this.isValidForm = !this.metodoPagoSelected.idtipo_pago ? false : this.isValidForm;
            // console.log(result);
            this.verificarMontoMinimo();
        });
    }
    openDialogTipoComprobnate() {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        _dialogConfig.width = '380px';
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        const dialogTpC = this.dialogTipoComprobante.open(_dialog_tipo_comprobante_dialog_tipo_comprobante_component__WEBPACK_IMPORTED_MODULE_8__["DialogTipoComprobanteComponent"], _dialogConfig);
        dialogTpC.afterClosed().subscribe((result) => {
            this.tipoComprobanteSelected = result;
        });
    }
    openDialogsendSMS() {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        // _dialogConfig.panelClass = 'my-full-screen-dialog';
        _dialogConfig.panelClass = ['my-dialog-orden-detalle', 'my-dialog-scrool'];
        _dialogConfig.data = {
            idcliente: this.infoTokenService.infoUsToken.idcliente,
            numberphone: '+51934746830'
        };
        const dialogRefTelefono = this.dialogTelefono.open(_dialog_verificar_telefono_dialog_verificar_telefono_component__WEBPACK_IMPORTED_MODULE_6__["DialogVerificarTelefonoComponent"], _dialogConfig);
        dialogRefTelefono.afterClosed().subscribe((result) => {
            this.isValidForm = result.verificado;
            if (result.verificado) {
                this.infoToken.telefono = result.numberphone;
                this.infoTokenService.setTelefono(result.numberphone);
                this.verifyClientService.setTelefono(result.numberphone);
            }
            this.verificarMontoMinimo();
            // console.log(result);
        });
    }
    // cuando el recojo es en el local
    recalcularTotales() {
        if (this.isRecojoLocalCheked) {
            // propina se vielve 0
            this.propinaSelected = { 'idpropina': 1, 'value': 0, 'descripcion': 'S/. 0', 'checked': true };
            this.infoTokenService.setPropina(this.propinaSelected);
            // recalcular subtotales
            // lista temporal para back
            this._listSubtotalesTmp = JSON.parse(JSON.stringify(this._listSubtotales));
            const rowTotal = this._listSubtotales[this._listSubtotales.length - 1];
            this._listSubtotales = this._listSubtotales.filter(x => {
                const _idTp = isNaN(parseInt(x.id, 0)) ? 1 : x.id;
                if (_idTp >= 0 && x.descripcion !== 'TOTAL' && x.descripcion.toUpperCase() !== 'ENTREGA') {
                    return x;
                }
            });
            const _subtotal = this._listSubtotales.map((x) => parseFloat(x.importe)).reduce((a, b) => a + b, 0);
            rowTotal.importe = _subtotal;
            this._listSubtotales.push(rowTotal);
        }
        else {
            this._listSubtotales = this._listSubtotalesTmp;
        }
        console.log('this._listSubtotales', this._listSubtotales);
        localStorage.setItem('sys::st', btoa(JSON.stringify(this._listSubtotales)));
        this.infoTokenService.setPasoRecoger(this.isRecojoLocalCheked);
        this.verificarMontoMinimo();
    }
};
ConfirmarDeliveryComponent.ctorParameters = () => [
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] },
    { type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_7__["VerifyAuthClientService"] },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_3__["EstablecimientoService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ConfirmarDeliveryComponent.prototype, "listSubtotales", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConfirmarDeliveryComponent.prototype, "isReady", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ConfirmarDeliveryComponent.prototype, "dataDelivery", void 0);
ConfirmarDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirmar-delivery',
        template: __webpack_require__(/*! raw-loader!./confirmar-delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/confirmar-delivery/confirmar-delivery.component.html"),
        styles: [__webpack_require__(/*! ./confirmar-delivery.component.css */ "./src/app/componentes/confirmar-delivery/confirmar-delivery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"],
        src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_7__["VerifyAuthClientService"],
        src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_3__["EstablecimientoService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        // private crudService: CrudHttpService
    ])
], ConfirmarDeliveryComponent);



/***/ }),

/***/ "./src/app/componentes/datos-delivery/datos-delivery.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/componentes/datos-delivery/datos-delivery.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div-total {\r\n    border-top: 2px dashed #9e9e9e;\r\n}\r\n\r\n.ul-total li:last-child{\r\n    font-size: 20px;\r\n    font-weight: 800;\r\n}\r\n\r\n.li-item {\r\n    padding-top: 6px;\r\n    padding-bottom: 6px;\r\n    border-top: 1px solid #e0e0e0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZGF0b3MtZGVsaXZlcnkvZGF0b3MtZGVsaXZlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RhdG9zLWRlbGl2ZXJ5L2RhdG9zLWRlbGl2ZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGl2LXRvdGFsIHtcclxuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgIzllOWU5ZTtcclxufVxyXG5cclxuLnVsLXRvdGFsIGxpOmxhc3QtY2hpbGR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubGktaXRlbSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/datos-delivery/datos-delivery.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/datos-delivery/datos-delivery.component.ts ***!
  \************************************************************************/
/*! exports provided: DatosDeliveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosDeliveryComponent", function() { return DatosDeliveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _dialog_select_direccion_dialog_select_direccion_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog-select-direccion/dialog-select-direccion.component */ "./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.ts");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/mipedido.service */ "./src/app/shared/services/mipedido.service.ts");
/* harmony import */ var _dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog-metodo-pago/dialog-metodo-pago.component */ "./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.ts");
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ "./src/app/shared/services/establecimiento.service.ts");
/* harmony import */ var src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/calc-distancia.service */ "./src/app/shared/services/calc-distancia.service.ts");











// import { MapsAPILoader } from '@agm/core';
let DatosDeliveryComponent = class DatosDeliveryComponent {
    constructor(fb, crudService, dialogDireccion, infoTokenService, miPedidoService, dialog, establecimientoService, calcDistanceService
    // private mapsAPILoader: MapsAPILoader,
    // private ngZone: NgZone,
    ) {
        this.fb = fb;
        this.crudService = crudService;
        this.dialogDireccion = dialogDireccion;
        this.infoTokenService = infoTokenService;
        this.miPedidoService = miPedidoService;
        this.dialog = dialog;
        this.establecimientoService = establecimientoService;
        this.calcDistanceService = calcDistanceService;
        this.changeStatus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isValid = false;
        this.loadConsulta = false;
        this.isNuevoCliente = false; // si es nuevo cliente manda a guardar
        this.direccionCliente = {};
        this.isRecojoLocalCheked = false;
        this.isAceptaRecojoLocal = true;
        // latitude: number;
        // longitude: number;
        // address = '';
        // dataMapa: any;
        // private geoCoder;
        // return for printer
        this.resData = {
            idcliente: '',
            dni: '',
            nombre: '',
            f_nac: '',
            direccion: '',
            telefono: '',
            paga_con: '',
            dato_adicional: '',
            referencia: '',
            tipoComprobante: {},
            importeTotal: 0,
            metodoPago: {},
            propina: {},
            direccionEnvioSelected: {},
            establecimiento: {},
            subTotales: {},
            pasoRecoger: false,
            buscarRepartidor: true,
            isFromComercio: 1 // el pedido esta yendo desde el comercio
        };
        this.importeTota = 0;
    }
    set listSubtotales(val) {
        this._listSubtotales = val;
    }
    ngOnInit() {
        this.direccionCliente = {
            titulo: 'Seleccione una direccion',
            direccion: '',
            referencia: ''
        };
        this.infoTokenService.setIniMetodoPago('Efectivo');
        this.metodoPagoSelected = this.infoTokenService.infoUsToken.metodoPago;
        // this.dateInfoSede = this.miPedidoService.objDatosSede.datossede[0];
        this.dirEstablecimiento = this.establecimientoService.get();
        //  this.dateInfoSede.pwa_delivery_habilitar_recojo_local
        this.isAceptaRecojoLocal = this.establecimientoService.establecimiento.pwa_delivery_habilitar_recojo_local === 1;
        this.myForm = this.fb.group({
            idcliente: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            dni: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            nombre: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            f_nac: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            // direccion: new FormControl('', [Validators.required]),
            telefono: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            // paga_con: new FormControl('', [Validators.required]),
            dato_adicional: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.myForm.statusChanges.subscribe(res => {
            this.isValid = res === 'VALID' ? true : false;
            // const dataEmit = {
            //   formIsValid: isValid,
            //   isNuevoCliente: this.isNuevoCliente,
            //   formData: this.myForm.value,
            //   direccionMapsSave: this.direccionCliente // direccion guardar en el cliente
            // };
            // setear respuest
            // console.log('form delivery', dataEmit);
            this.setearData();
            // this.changeStatus.emit(dataEmit);
        });
    }
    setearData() {
        this.isValid = this.myForm.status === 'VALID' ? true : false;
        this.resData.idcliente = this.myForm.controls.idcliente.value || null;
        this.resData.dni = this.myForm.controls.dni.value;
        this.resData.nombre = this.myForm.controls.nombre.value;
        this.resData.f_nac = this.myForm.controls.f_nac.value;
        // this.resData.direccion = this.myForm.controls.direccion.value.toString();
        this.resData.telefono = this.myForm.controls.telefono.value;
        // this.resData.paga_con = this.myForm.controls.paga_con.value.toString();
        this.resData.importeTotal = this.getTotalPedido();
        this.resData.paga_con = this.metodoPagoSelected.descripcion + '  ' + this.metodoPagoSelected.importe || '';
        this.resData.dato_adicional = this.myForm.controls.dato_adicional.value;
        this.resData.metodoPago = this.metodoPagoSelected;
        this.resData.tipoComprobante = this.infoTokenService.getInfoUs().tipoComprobante;
        this.resData.direccionEnvioSelected = this.direccionCliente;
        this.resData.referencia = this.direccionCliente.referencia;
        this.resData.direccion = this.direccionCliente.direccion;
        this.resData.subTotales = this._listSubtotales;
        this.resData.propina = this.infoTokenService.getInfoUs().propina;
        this.resData.pasoRecoger = this.isRecojoLocalCheked;
        this.resData.buscarRepartidor = this.establecimientoService.establecimiento.pwa_delivery_servicio_propio === 0;
        // this.resData.establecimiento = this.infoEstablecimiento;
        // console.log('this.resData emit', this.resData);
        if (!this.direccionCliente.codigo && !this.isRecojoLocalCheked) {
            this.isValid = false;
        }
        const dataEmit = {
            formIsValid: this.isValid,
            isNuevoCliente: this.isNuevoCliente,
            formData: this.resData,
            direccionMapsSave: this.direccionCliente // direccion guardar en el cliente
        };
        this.changeStatus.emit(dataEmit);
    }
    buscarDNI() {
        const datos = {
            documento: this.myForm.controls.dni.value
        };
        this.loadConsulta = true;
        this.isNuevoCliente = false;
        this.limpiarForm(datos.documento);
        // primero consultamos en la bd
        this.crudService.postFree(datos, 'service', 'consulta-dni-ruc')
            .subscribe((res) => {
            // console.log(res);
            const _datosBd = res.data;
            if (res.success && _datosBd.length > 0) {
                this.myForm.controls.idcliente.patchValue(_datosBd[0].idcliente);
                this.myForm.controls.nombre.patchValue(_datosBd[0].nombres);
                this.myForm.controls.f_nac.patchValue(_datosBd[0].f_nac);
                // this.myForm.controls.direccion.patchValue(_datosBd[0].direccion);
                this.myForm.controls.telefono.patchValue(_datosBd[0].telefono);
                this.loadConsulta = false;
                this.isNuevoCliente = false;
            }
            else {
                this.crudService.getConsultaRucDni('dni', datos.documento)
                    .subscribe((_res) => {
                    if (_res.success) {
                        const _datos = _res.data;
                        const _nombre = `${_datos.names} ${_datos.first_name} ${_datos.last_name}`;
                        this.myForm.controls.idcliente.patchValue(0);
                        this.myForm.controls.nombre.patchValue(_nombre);
                        this.myForm.controls.f_nac.patchValue(_datos.date_of_birthday);
                        this.isNuevoCliente = true;
                    }
                    else {
                        this.limpiarForm(datos.documento);
                    }
                    this.loadConsulta = false;
                });
            }
        });
    }
    limpiarForm(dni) {
        this.myForm.reset();
        this.myForm.controls.dni.patchValue(dni);
    }
    openDialogDireccion() {
        // const dialogConfig = new MatDialogConfig();
        const dialogRef = this.dialogDireccion.open(_dialog_select_direccion_dialog_select_direccion_component__WEBPACK_IMPORTED_MODULE_5__["DialogSelectDireccionComponent"], {
            // panelClass: 'my-full-screen-dialog',
            panelClass: ['my-dialog-orden-detalle', 'my-dialog-scrool'],
            data: {
                isGuardar: false,
                isFromComercio: true,
                idClienteBuscar: this.resData.idcliente
            }
        });
        dialogRef.afterClosed().subscribe(data => {
            if (!data) {
                return;
            }
            // console.log('data dialog', data);
            this.direccionCliente = data;
            // esto para poder guardar en el procedure
            this.direccionCliente.idcliente_pwa_direccion = this.direccionCliente.idcliente_pwa_direccion === null ? 0 : this.direccionCliente.idcliente_pwa_direccion;
            this.calcDistanceService.calculateRoute(data, this.dirEstablecimiento);
            // recalcular
            setTimeout(() => {
                // console.log('this.dirEstablecimiento', this.dirEstablecimiento);
                this.establecimientoService.set(this.dirEstablecimiento);
                const _arrSubtotales = this.miPedidoService.getArrSubTotales(this.dirEstablecimiento.rulesSubTotales);
                localStorage.setItem('sys::st', btoa(JSON.stringify(_arrSubtotales)));
                this._listSubtotales = _arrSubtotales;
                // console.log('_arrSubtotales', _arrSubtotales);
                this.setearData();
            }, 600);
        });
    }
    // cuando el recojo es en el local
    recalcularTotales() {
        if (this.isRecojoLocalCheked) {
            // propina se vielve 0
            // this.propinaSelected = {'idpropina': 1, 'value': 0 , 'descripcion': 'S/. 0', 'checked': true};
            // this.infoTokenService.setPropina(this.propinaSelected);
            // recalcular subtotales
            // lista temporal para back
            this._listSubtotalesTmp = JSON.parse(JSON.stringify(this._listSubtotales));
            const rowTotal = this._listSubtotales[this._listSubtotales.length - 1];
            this._listSubtotales = this._listSubtotales.filter(x => x.id >= 0 && x.descripcion !== 'TOTAL');
            const _subtotal = this._listSubtotales.map((x) => parseFloat(x.importe)).reduce((a, b) => a + b, 0);
            rowTotal.importe = _subtotal;
            this._listSubtotales.push(rowTotal);
        }
        else {
            this._listSubtotales = this._listSubtotalesTmp;
        }
        // console.log('this._listSubtotales', this._listSubtotales);
        localStorage.setItem('sys::st', btoa(JSON.stringify(this._listSubtotales)));
        this.infoTokenService.setPasoRecoger(this.isRecojoLocalCheked);
        this.setearData();
        // this.verificarMontoMinimo();
    }
    openDialogMetodoPago() {
        const _dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        _dialogConfig.width = '380px';
        _dialogConfig.disableClose = true;
        _dialogConfig.hasBackdrop = true;
        _dialogConfig.data = {
            importeTotalPagar: this._listSubtotales[this._listSubtotales.length - 1].importe,
            excluirId: 2 // id exlcluir
        };
        const dialogLoading = this.dialog.open(_dialog_metodo_pago_dialog_metodo_pago_component__WEBPACK_IMPORTED_MODULE_8__["DialogMetodoPagoComponent"], _dialogConfig);
        dialogLoading.afterClosed().subscribe((result) => {
            this.metodoPagoSelected = result;
            // console.log(result);
            // this.verificarMontoMinimo();
            this.setearData();
        });
    }
    getTotalPedido() {
        return this._listSubtotales[this._listSubtotales.length - 1].importe;
    }
};
DatosDeliveryComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_6__["InfoTockenService"] },
    { type: src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_7__["MipedidoService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_9__["EstablecimientoService"] },
    { type: src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_10__["CalcDistanciaService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], DatosDeliveryComponent.prototype, "searchElementRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DatosDeliveryComponent.prototype, "changeStatus", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], DatosDeliveryComponent.prototype, "listSubtotales", null);
DatosDeliveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-datos-delivery',
        template: __webpack_require__(/*! raw-loader!./datos-delivery.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/datos-delivery/datos-delivery.component.html"),
        styles: [__webpack_require__(/*! ./datos-delivery.component.css */ "./src/app/componentes/datos-delivery/datos-delivery.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_6__["InfoTockenService"],
        src_app_shared_services_mipedido_service__WEBPACK_IMPORTED_MODULE_7__["MipedidoService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_9__["EstablecimientoService"],
        src_app_shared_services_calc_distancia_service__WEBPACK_IMPORTED_MODULE_10__["CalcDistanciaService"]
        // private mapsAPILoader: MapsAPILoader,
        // private ngZone: NgZone,
    ])
], DatosDeliveryComponent);



/***/ }),

/***/ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/componentes/dialog-calificacion/dialog-calificacion.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy1jYWxpZmljYWNpb24vZGlhbG9nLWNhbGlmaWNhY2lvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/dialog-calificacion/dialog-calificacion.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DialogCalificacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogCalificacionComponent", function() { return DialogCalificacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let DialogCalificacionComponent = class DialogCalificacionComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this._dataCalificado = data.dataCalificado;
    }
    ngOnInit() {
    }
};
DialogCalificacionComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogCalificacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-calificacion',
        template: __webpack_require__(/*! raw-loader!./dialog-calificacion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-calificacion/dialog-calificacion.component.html"),
        styles: [__webpack_require__(/*! ./dialog-calificacion.component.css */ "./src/app/componentes/dialog-calificacion/dialog-calificacion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
], DialogCalificacionComponent);



/***/ }),

/***/ "./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy1tZXRvZG8tcGFnby9kaWFsb2ctbWV0b2RvLXBhZ28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.ts ***!
  \********************************************************************************/
/*! exports provided: DialogMetodoPagoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMetodoPagoComponent", function() { return DialogMetodoPagoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/establecimiento.service */ "./src/app/shared/services/establecimiento.service.ts");





let DialogMetodoPagoComponent = class DialogMetodoPagoComponent {
    constructor(dialogRef, data, infoTokenService, establecimientoService) {
        this.dialogRef = dialogRef;
        this.infoTokenService = infoTokenService;
        this.establecimientoService = establecimientoService;
        this.isMontoVisible = false;
        this.formValid = false;
        this.isHabilitadoYape = true;
        this.isHabilitadoTarjeta = true; // comercios no afiliado no se acepta tarjeta por la comision que cobran, algunos comercios tambien pueden especificar que no desean pagos con tarjeta
        this.isComercioSolidaridad = false;
        this.importeValid = false;
        this.importeTotal = parseFloat(data.importeTotalPagar);
        this.idExluir = data.excluirId;
    }
    ngOnInit() {
        this.isHabilitadoYape = this.establecimientoService.get().pwa_delivery_acepta_yape === 1;
        this.isHabilitadoTarjeta = this.establecimientoService.get().pwa_delivery_acepta_tarjeta === 1;
        this.isComercioSolidaridad = this.establecimientoService.get().pwa_delivery_comercio_solidaridad === 1;
        this.loadMetodoPago();
        this.itemSelected = this.infoTokenService.infoUsToken.metodoPago;
        this.verificarMetodoInit();
    }
    loadMetodoPago() {
        this.listMetodoPago = [];
        this.listMetodoPago.push({ 'idtipo_pago': 2, 'descripcion': 'Tarjeta', 'checked': true, visible: this.isHabilitadoTarjeta });
        this.listMetodoPago.push({ 'idtipo_pago': 3, 'descripcion': 'Yape', 'checked': false, visible: this.isHabilitadoYape });
        this.listMetodoPago.push({ 'idtipo_pago': 1, 'descripcion': 'Efectivo', 'checked': false, visible: true });
        this.validaCociones();
        // console.log(this.listMetodoPago);
    }
    validaCociones() {
        // exlucion -- mayormente tarjeta cuando el comercio hace pedido delivery
        if (this.idExluir) {
            this.listMetodoPago = this.listMetodoPago.filter(m => m.idtipo_pago !== this.idExluir).map(m => m);
        }
        // if ( !this.isHabilitadoYape ) {
        //   this.listMetodoPago = this.listMetodoPago.filter(m => m.idtipo_pago !== 3 ).map(m => m);
        // }
        // exclui metodos de pago no habilitados
        this.listMetodoPago = this.listMetodoPago.filter(m => m.visible).map(m => m);
        // si es comercio solidario solo tarjeta
        if (this.isComercioSolidaridad) {
            this.listMetodoPago = this.listMetodoPago.filter(m => m.idtipo_pago === 2).map(m => m);
        }
    }
    verificarMetodoInit() {
        if (this.itemSelected.idtipo_pago === 1) {
            this.isMontoVisible = true;
            this.importeIndicado = this.itemSelected.importe.toString();
            this.verificarImporte(this.importeIndicado);
        }
        this.listMetodoPago.map(x => {
            x.checked = x.idtipo_pago === this.itemSelected.idtipo_pago ? true : false;
        });
        this.verificarValidForm();
    }
    chageItem(item) {
        this.listMetodoPago.map(x => x.checked = false);
        this.isMontoVisible = false;
        this.importeValid = false;
        this.importeIndicado = '';
        item.checked = true;
        this.itemSelected = item;
        if (item.idtipo_pago === 1) {
            this.isMontoVisible = true;
        }
        this.verificarValidForm();
    }
    verificarImporte(importe) {
        this.importeValid = parseFloat(importe) >= this.importeTotal;
        this.importeIndicado = importe;
        this.itemSelected.importe = this.importeIndicado;
        this.verificarValidForm();
    }
    verificarValidForm() {
        this.formValid = this.itemSelected.idtipo_pago !== 1 ? true : this.importeValid;
        console.log('verificado pago', this.formValid);
    }
    cerrarDlg() {
        this.infoTokenService.setMetodoPago(this.itemSelected);
        this.dialogRef.close(this.itemSelected);
    }
};
DialogMetodoPagoComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"] },
    { type: src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_4__["EstablecimientoService"] }
];
DialogMetodoPagoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-metodo-pago',
        template: __webpack_require__(/*! raw-loader!./dialog-metodo-pago.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.html"),
        styles: [__webpack_require__(/*! ./dialog-metodo-pago.component.css */ "./src/app/componentes/dialog-metodo-pago/dialog-metodo-pago.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_3__["InfoTockenService"],
        src_app_shared_services_establecimiento_service__WEBPACK_IMPORTED_MODULE_4__["EstablecimientoService"]])
], DialogMetodoPagoComponent);



/***/ }),

/***/ "./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy1zZWxlY3QtZGlyZWNjaW9uL2RpYWxvZy1zZWxlY3QtZGlyZWNjaW9uLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DialogSelectDireccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogSelectDireccionComponent", function() { return DialogSelectDireccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/listen-status.service */ "./src/app/shared/services/listen-status.service.ts");




let DialogSelectDireccionComponent = class DialogSelectDireccionComponent {
    constructor(dialogRef, listenService, data) {
        this.dialogRef = dialogRef;
        this.listenService = listenService;
        this.isShowAddDireccion = false;
        this.isGuardarDireccion = true;
        this.isGuardarDireccion = data ? data.isGuardar : true;
        this._idClienteBuscar = data ? data.idClienteBuscar : null;
    }
    ngOnInit() {
    }
    setDireccion($event) {
        // console.log($event);
        this.direccionSelected = $event;
        this.listenService.setChangeDireccionDelivery(this.direccionSelected);
        this.cerrarDlg();
    }
    showAddDireccion() {
        this.isShowAddDireccion = true;
    }
    cerrarDlg() {
        this.dialogRef.close(this.direccionSelected);
    }
};
DialogSelectDireccionComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogSelectDireccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-select-direccion',
        template: __webpack_require__(/*! raw-loader!./dialog-select-direccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.html"),
        styles: [__webpack_require__(/*! ./dialog-select-direccion.component.css */ "./src/app/componentes/dialog-select-direccion/dialog-select-direccion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
        src_app_shared_services_listen_status_service__WEBPACK_IMPORTED_MODULE_3__["ListenStatusService"], Object])
], DialogSelectDireccionComponent);



/***/ }),

/***/ "./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy10aXBvLWNvbXByb2JhbnRlL2RpYWxvZy10aXBvLWNvbXByb2JhbnRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DialogTipoComprobanteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTipoComprobanteComponent", function() { return DialogTipoComprobanteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/info-token.service */ "./src/app/shared/services/info-token.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");




let DialogTipoComprobanteComponent = class DialogTipoComprobanteComponent {
    constructor(dialogRef, infoTokenService) {
        this.dialogRef = dialogRef;
        this.infoTokenService = infoTokenService;
        this.datosComprobante = {
            dni: '',
            otro: ''
        };
    }
    ngOnInit() {
        this.loadTipoComprobante();
        this.itemSelected = this.infoTokenService.infoUsToken.tipoComprobante;
        this.datosComprobante.dni = this.itemSelected.dni;
        this.datosComprobante.otro = this.itemSelected.otro_dato;
        this.verificarComprobanteInit();
    }
    loadTipoComprobante() {
        this.listTipoComprobante = [];
        this.listTipoComprobante.push({ 'idtipo_comprobante': 1, 'descripcion': 'Boleta', 'checked': true });
        this.listTipoComprobante.push({ 'idtipo_comprobante': 2, 'descripcion': 'Factura', 'checked': false });
        console.log(this.listTipoComprobante);
    }
    verificarComprobanteInit() {
        this.listTipoComprobante.map(x => {
            x.checked = x.idtipo_comprobante === this.itemSelected.idtipo_comprobante ? true : false;
        });
    }
    chageItem(item) {
        this.listTipoComprobante.map(x => x.checked = false);
        item.checked = true;
        this.itemSelected = item;
    }
    cerrarDlg() {
        this.itemSelected.dni = this.datosComprobante.dni;
        this.itemSelected.otro_dato = this.datosComprobante.otro;
        this.infoTokenService.setTipoComprobante(this.itemSelected);
        this.dialogRef.close(this.itemSelected);
    }
};
DialogTipoComprobanteComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"] }
];
DialogTipoComprobanteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-tipo-comprobante',
        template: __webpack_require__(/*! raw-loader!./dialog-tipo-comprobante.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.html"),
        styles: [__webpack_require__(/*! ./dialog-tipo-comprobante.component.css */ "./src/app/componentes/dialog-tipo-comprobante/dialog-tipo-comprobante.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
        src_app_shared_services_info_token_service__WEBPACK_IMPORTED_MODULE_2__["InfoTockenService"]])
], DialogTipoComprobanteComponent);



/***/ }),

/***/ "./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2RpYWxvZy12ZXJpZmljYXItdGVsZWZvbm8vZGlhbG9nLXZlcmlmaWNhci10ZWxlZm9uby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DialogVerificarTelefonoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogVerificarTelefonoComponent", function() { return DialogVerificarTelefonoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");




let DialogVerificarTelefonoComponent = class DialogVerificarTelefonoComponent {
    constructor(dialogRef, data, crudService) {
        this.dialogRef = dialogRef;
        this.crudService = crudService;
        this.isValidForm = false;
        this.isSendSMS = false;
        this.isNumberSuccess = 0;
        this.loader = 0;
        this.isVerificacionOk = false;
        this.data = data;
    }
    ngOnInit() {
    }
    sendSMS() {
        this.isSendSMS = true;
        this.isNumberSuccess = 0;
        this.crudService.postSMS(this.data, 'delivery', 'send-sms-confirmation', true)
            .subscribe(res => {
            this.isNumberSuccess = res.msj ? 1 : 2;
            this.isSendSMS = res.msj;
            this.isValidForm = false;
        });
    }
    verificarCodigoSMS(val) {
        this.loader = 1;
        // this.isVerificacionOk = true;
        const _dataCod = {
            codigo: val
        };
        this.crudService.postFree(_dataCod, 'delivery', 'verificar-codigo-sms', false)
            .subscribe(res => {
            this.isVerificacionOk = res.data[0] ? true : false;
            setTimeout(() => {
                this.loader = this.isVerificacionOk ? 2 : 3;
                this.data.verificado = this.isVerificacionOk;
                // this.loader = 2;s
                console.log(res);
                setTimeout(() => {
                    this.cerrarDlg();
                }, 1000);
            }, 1000);
        });
    }
    verificarNum(telefono) {
        this.isValidForm = telefono.trim().length >= 5 ? true : false;
        this.data.numberphone = telefono;
        this.data.verificado = false;
    }
    cerrarDlg() {
        this.dialogRef.close(this.data);
    }
};
DialogVerificarTelefonoComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] }
];
DialogVerificarTelefonoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-verificar-telefono',
        template: __webpack_require__(/*! raw-loader!./dialog-verificar-telefono.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.html"),
        styles: [__webpack_require__(/*! ./dialog-verificar-telefono.component.css */ "./src/app/componentes/dialog-verificar-telefono/dialog-verificar-telefono.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"]])
], DialogVerificarTelefonoComponent);



/***/ }),

/***/ "./src/app/componentes/encuesta-opcion/encuesta-opcion.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/componentes/encuesta-opcion/encuesta-opcion.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnIco {\r\n    opacity: 0.7;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    /* width: 112px; */\r\n    transition: transform .2s; /* Animation */\r\n}\r\n\r\n.btnIco:hover {\r\n    transform: scale(1.2);\r\n    opacity: 1;\r\n}\r\n\r\n.divBtn {\r\n    display: grid;\r\n}\r\n\r\n.divBtn span {\r\n    color: #757575;\r\n}\r\n\r\n.op {\r\n    text-align: center;    \r\n    line-height: 1;\r\n}\r\n\r\n.op img {\r\n    width: 65px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvZW5jdWVzdGEtb3BjaW9uL2VuY3Vlc3RhLW9wY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QixFQUFFLGNBQWM7QUFDN0M7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2VuY3Vlc3RhLW9wY2lvbi9lbmN1ZXN0YS1vcGNpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5JY28ge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC8qIHdpZHRoOiAxMTJweDsgKi9cclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG59XHJcblxyXG4uYnRuSWNvOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi5kaXZCdG4ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuLmRpdkJ0biBzcGFuIHtcclxuICAgIGNvbG9yOiAjNzU3NTc1O1xyXG59XHJcblxyXG4ub3Age1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxuICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcblxyXG4ub3AgaW1nIHtcclxuICAgIHdpZHRoOiA2NXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/encuesta-opcion/encuesta-opcion.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/encuesta-opcion/encuesta-opcion.component.ts ***!
  \**************************************************************************/
/*! exports provided: EncuestaOpcionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncuestaOpcionComponent", function() { return EncuestaOpcionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EncuestaOpcionComponent = class EncuestaOpcionComponent {
    constructor() {
        this.NextPregunta = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    xNextPregunta(item) {
        setTimeout(() => {
            this.NextPregunta.emit(item);
        }, 300);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EncuestaOpcionComponent.prototype, "ListOption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], EncuestaOpcionComponent.prototype, "NextPregunta", void 0);
EncuestaOpcionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-encuesta-opcion',
        template: __webpack_require__(/*! raw-loader!./encuesta-opcion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/encuesta-opcion/encuesta-opcion.component.html"),
        styles: [__webpack_require__(/*! ./encuesta-opcion.component.css */ "./src/app/componentes/encuesta-opcion/encuesta-opcion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], EncuestaOpcionComponent);



/***/ }),

/***/ "./src/app/componentes/item-comercio/item-comercio.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/componentes/item-comercio/item-comercio.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content-comercio {\r\n    width: 335px;\r\n    margin: 5px;\r\n}\r\n\r\n.content-img-comercio {\r\n    border: 1px solid lightgray;\r\n    border-radius: 2px;\r\n    text-align: center;\r\n}\r\n\r\n.img-comercio {\r\n    max-width: 100%;\r\n    /* max-width: 330px; */\r\n    height: 115px;\r\n}\r\n\r\n.div-info-comercio {\r\n    padding-top: 15px;\r\n    margin: 0px;\r\n    line-height: 0.35em;\r\n}\r\n\r\n.div-sub-info-comercio{\r\n    /* background: #eeeeee; */\r\n    margin-top: -15px;\r\n}\r\n\r\n.div-sub-info-comercio div {\r\n    border-radius: 2px;    \r\n    font-size: 13px;\r\n    padding: 5px;    \r\n    padding-right: 15px;\r\n}\r\n\r\n.div-cerrado {\r\n    width: 100%;\r\n    background: lavenderblush;\r\n    margin-top: -200px;\r\n    opacity: 0.6;\r\n    text-align: center;    \r\n\r\n    \r\n}\r\n\r\n.div-cerrado p {\r\n    /* font-size: 25px;\r\n    font-weight: 800;\r\n    width: 100%;\r\n    top: 10%;\r\n    position: relative; */\r\n\r\n    font-size: 18px;\r\n    /* font-weight: 800; */\r\n    width: 100%;\r\n    top: 30%;\r\n    position: relative;\r\n    margin: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvaXRlbS1jb21lcmNpby9pdGVtLWNvbWVyY2lvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSTs7Ozt5QkFJcUI7O0lBRXJCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvaXRlbS1jb21lcmNpby9pdGVtLWNvbWVyY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1jb21lcmNpbyB7XHJcbiAgICB3aWR0aDogMzM1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG5cclxuLmNvbnRlbnQtaW1nLWNvbWVyY2lvIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmltZy1jb21lcmNpbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDMzMHB4OyAqL1xyXG4gICAgaGVpZ2h0OiAxMTVweDtcclxufVxyXG5cclxuLmRpdi1pbmZvLWNvbWVyY2lvIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMC4zNWVtO1xyXG59XHJcblxyXG4uZGl2LXN1Yi1pbmZvLWNvbWVyY2lve1xyXG4gICAgLyogYmFja2dyb3VuZDogI2VlZWVlZTsgKi9cclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG59XHJcblxyXG4uZGl2LXN1Yi1pbmZvLWNvbWVyY2lvIGRpdiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7ICAgIFxyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogNXB4OyAgICBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5kaXYtY2VycmFkbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6IGxhdmVuZGVyYmx1c2g7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjAwcHg7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG5cclxuICAgIFxyXG59XHJcblxyXG4uZGl2LWNlcnJhZG8gcCB7XHJcbiAgICAvKiBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cclxuXHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAvKiBmb250LXdlaWdodDogODAwOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/item-comercio/item-comercio.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/componentes/item-comercio/item-comercio.component.ts ***!
  \**********************************************************************/
/*! exports provided: ItemComercioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComercioComponent", function() { return ItemComercioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modelos_delivery_establecimiento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modelos/delivery.establecimiento */ "./src/app/modelos/delivery.establecimiento.ts");
/* harmony import */ var src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/config/config.const */ "./src/app/shared/config/config.const.ts");




let ItemComercioComponent = class ItemComercioComponent {
    constructor() {
        this.isCerrado = false;
        this.amPm = 'AM';
        this.imgComercio = '';
        this.itemSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.isCerrado = this.itemEstablecimiento.cerrado === 1 ? true : false;
        this.amPm = this.itemEstablecimiento.hora_ini ? parseInt(this.itemEstablecimiento.hora_ini.split(':')[0], 0) > 12 ? 'PM' : 'AM' : '';
        this.imgComercio = src_app_shared_config_config_const__WEBPACK_IMPORTED_MODULE_3__["URL_IMG_COMERCIO"] + this.itemEstablecimiento.pwa_delivery_img;
    }
    _itemSelected() {
        if (this.isCerrado) {
            return;
        }
        this.itemSelected.emit(this.itemEstablecimiento);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_modelos_delivery_establecimiento__WEBPACK_IMPORTED_MODULE_2__["DeliveryEstablecimiento"])
], ItemComercioComponent.prototype, "itemEstablecimiento", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ItemComercioComponent.prototype, "itemSelected", void 0);
ItemComercioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-item-comercio',
        template: __webpack_require__(/*! raw-loader!./item-comercio.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/item-comercio/item-comercio.component.html"),
        styles: [__webpack_require__(/*! ./item-comercio.component.css */ "./src/app/componentes/item-comercio/item-comercio.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ItemComercioComponent);



/***/ }),

/***/ "./src/app/componentes/mapa-solo/mapa-solo.component.css":
/*!***************************************************************!*\
  !*** ./src/app/componentes/mapa-solo/mapa-solo.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 230px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWFwYS1zb2xvL21hcGEtc29sby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21hcGEtc29sby9tYXBhLXNvbG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/mapa-solo/mapa-solo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/mapa-solo/mapa-solo.component.ts ***!
  \**************************************************************/
/*! exports provided: MapaSoloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapaSoloComponent", function() { return MapaSoloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapaSoloComponent = class MapaSoloComponent {
    constructor() {
        this.displayDirections = true;
        this.zoom = 20;
    }
    ngOnInit() {
        this.zoom = 20;
        console.log('origin from solo mapa', this.origin);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapaSoloComponent.prototype, "origin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], MapaSoloComponent.prototype, "destination", void 0);
MapaSoloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mapa-solo',
        template: __webpack_require__(/*! raw-loader!./mapa-solo.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/mapa-solo/mapa-solo.component.html"),
        styles: [__webpack_require__(/*! ./mapa-solo.component.css */ "./src/app/componentes/mapa-solo/mapa-solo.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MapaSoloComponent);



/***/ }),

/***/ "./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL21lbnUtbGF0ZXJhbC1jbGllbnRlL21lbnUtbGF0ZXJhbC1jbGllbnRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.ts ***!
  \************************************************************************************/
/*! exports provided: MenuLateralClienteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuLateralClienteComponent", function() { return MenuLateralClienteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuLateralClienteComponent = class MenuLateralClienteComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuLateralClienteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-lateral-cliente',
        template: __webpack_require__(/*! raw-loader!./menu-lateral-cliente.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.html"),
        styles: [__webpack_require__(/*! ./menu-lateral-cliente.component.css */ "./src/app/componentes/menu-lateral-cliente/menu-lateral-cliente.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuLateralClienteComponent);



/***/ }),

/***/ "./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.li-item {\r\n    border-bottom: solid 1px lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvc2VsZWNjaW9uYXItZGlyZWNjaW9uL3NlbGVjY2lvbmFyLWRpcmVjY2lvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvc2VsZWNjaW9uYXItZGlyZWNjaW9uL3NlbGVjY2lvbmFyLWRpcmVjY2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5saS1pdGVtIHtcclxuICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBsaWdodGdyYXk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.ts ***!
  \**************************************************************************************/
/*! exports provided: SeleccionarDireccionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeleccionarDireccionComponent", function() { return SeleccionarDireccionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/verify-auth-client.service */ "./src/app/shared/services/verify-auth-client.service.ts");
/* harmony import */ var src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/crud-http.service */ "./src/app/shared/services/crud-http.service.ts");




let SeleccionarDireccionComponent = class SeleccionarDireccionComponent {
    constructor(crudService, verifyClientService) {
        this.crudService = crudService;
        this.verifyClientService = verifyClientService;
        this.direccionSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.infoClienteLogueado = this.verifyClientService.getDataClient();
        this.idClienteDirecciones = this.idClienteBuscar ? this.idClienteBuscar : this.infoClienteLogueado.idcliente;
        // console.log(this.infoClienteLogueado);
        this.loadDireccion();
    }
    loadDireccion() {
        const _dataClientDir = {
            idcliente: this.idClienteDirecciones
        };
        // console.log(_dataClientDir);
        this.crudService.postFree(_dataClientDir, 'delivery', 'get-direccion-cliente', false)
            .subscribe((res) => {
            // console.log('direcciones', res);
            this.listDirecciones = res.data;
            if (this.idClienteBuscar) {
                return;
            }
            // si solo hay una direccion selecciona
            if (this.listDirecciones.length === 1 && this.infoClienteLogueado.direccionEnvioSelected === null) {
                this.direccionSelected.emit(this.listDirecciones[0]);
            }
        });
    }
    selected(item) {
        this.direccionSelected.emit(item);
    }
};
SeleccionarDireccionComponent.ctorParameters = () => [
    { type: src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"] },
    { type: src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], SeleccionarDireccionComponent.prototype, "direccionSelected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], SeleccionarDireccionComponent.prototype, "idClienteBuscar", void 0);
SeleccionarDireccionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seleccionar-direccion',
        template: __webpack_require__(/*! raw-loader!./seleccionar-direccion.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.html"),
        styles: [__webpack_require__(/*! ./seleccionar-direccion.component.css */ "./src/app/componentes/seleccionar-direccion/seleccionar-direccion.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_crud_http_service__WEBPACK_IMPORTED_MODULE_3__["CrudHttpService"],
        src_app_shared_services_verify_auth_client_service__WEBPACK_IMPORTED_MODULE_2__["VerifyAuthClientService"]])
], SeleccionarDireccionComponent);



/***/ }),

/***/ "./src/app/modelos/datos.calificado.model.ts":
/*!***************************************************!*\
  !*** ./src/app/modelos/datos.calificado.model.ts ***!
  \***************************************************/
/*! exports provided: DatosCalificadoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatosCalificadoModel", function() { return DatosCalificadoModel; });
class DatosCalificadoModel {
}


/***/ }),

/***/ "./src/app/modelos/delivery.direccion.cliente.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/modelos/delivery.direccion.cliente.model.ts ***!
  \*************************************************************/
/*! exports provided: DeliveryDireccionCliente */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryDireccionCliente", function() { return DeliveryDireccionCliente; });
class DeliveryDireccionCliente {
}


/***/ }),

/***/ "./src/app/shared/directivas/debounce-click.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directivas/debounce-click.directive.ts ***!
  \***************************************************************/
/*! exports provided: DebounceClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebounceClickDirective", function() { return DebounceClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/throttleTime */ "./node_modules/rxjs/internal/operators/throttleTime.js");
/* harmony import */ var rxjs_internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_3__);



// import { debounceTime } from 'rxjs/internal/operators/debounceTime';

let DebounceClickDirective = class DebounceClickDirective {
    constructor() {
        this.debounceTime = 500;
        this.debounceClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.clicks = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.subscription = this.clicks.pipe(Object(rxjs_internal_operators_throttleTime__WEBPACK_IMPORTED_MODULE_3__["throttleTime"])(this.debounceTime)).subscribe((e) => {
            this.debounceClick.emit(e);
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    clickEvent(event) {
        event.preventDefault();
        event.stopPropagation();
        this.clicks.next(event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DebounceClickDirective.prototype, "debounceTime", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DebounceClickDirective.prototype, "debounceClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DebounceClickDirective.prototype, "clickEvent", null);
DebounceClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDebounceClick]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], DebounceClickDirective);



/***/ }),

/***/ "./src/app/shared/directivas/directions-map-directive.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/directivas/directions-map-directive.directive.ts ***!
  \*************************************************************************/
/*! exports provided: DirectionsMapDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectionsMapDirectiveDirective", function() { return DirectionsMapDirectiveDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm2015/agm-core.js");



let DirectionsMapDirectiveDirective = class DirectionsMapDirectiveDirective {
    // We inject AGM's google maps api wrapper that handles the communication with the Google Maps Javascript
    constructor(gmapsApi) {
        this.gmapsApi = gmapsApi;
    }
    ngOnInit() {
        this.drawDirectionsRoute();
    }
    drawDirectionsRoute() {
        this.gmapsApi.getNativeMap().then(map => {
            if (!this.directionsRenderer) {
                // if you already have a marker at the coordinate location on the map, use suppressMarkers option
                // suppressMarkers prevents google maps from automatically adding a marker for you
                this.directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers: true });
            }
            const directionsRenderer = this.directionsRenderer;
            if (this.showDirection && this.destination) {
                const directionsService = new google.maps.DirectionsService;
                directionsRenderer.setMap(map);
                directionsService.route({
                    origin: { lat: this.origin.latitude, lng: this.origin.longitude },
                    destination: { lat: this.destination.latitude, lng: this.destination.longitude },
                    waypoints: [],
                    optimizeWaypoints: true,
                    travelMode: 'DRIVING'
                }, (response, status) => {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                        // If you'll like to display an info window along the route
                        // middleStep is used to estimate the midpoint on the route where the info window will appear
                        // const middleStep = (response.routes[0].legs[0].steps.length / 2).toFixed();
                        // const infowindow2 = new google.maps.InfoWindow();
                        // infowindow2.setContent(`${response.routes[0].legs[0].distance.text} <br> ${response.routes[0].legs[0].duration.text}  `);
                        // infowindow2.setPosition(response.routes[0].legs[0].steps[middleStep].end_location);
                        // infowindow2.open(map);
                    }
                    else {
                        console.log('Directions request failed due to ' + status);
                    }
                });
            }
        });
    }
    ngOnChanges(changes) {
        console.log('changes directiva', changes.origin);
        if (changes.origin || changes.showDirection) {
            // this checks if the show directions input changed, if so the directions are removed
            // else we redraw the directions
            if (changes.showDirection && !changes.showDirection.currentValue) {
                if (this.directionsRenderer !== undefined) { // check this value is not undefined
                    this.directionsRenderer.setDirections({ routes: [] });
                    return;
                }
            }
            else {
                this.drawDirectionsRoute();
            }
        }
    }
};
DirectionsMapDirectiveDirective.ctorParameters = () => [
    { type: _agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DirectionsMapDirectiveDirective.prototype, "origin", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DirectionsMapDirectiveDirective.prototype, "destination", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], DirectionsMapDirectiveDirective.prototype, "showDirection", void 0);
DirectionsMapDirectiveDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDirectionsMapDirective]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"]])
], DirectionsMapDirectiveDirective);



/***/ }),

/***/ "./src/app/shared/services/calc-distancia.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/calc-distancia.service.ts ***!
  \***********************************************************/
/*! exports provided: CalcDistanciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalcDistanciaService", function() { return CalcDistanciaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var geolocation_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! geolocation-utils */ "./node_modules/geolocation-utils/lib/index.js");
/* harmony import */ var geolocation_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(geolocation_utils__WEBPACK_IMPORTED_MODULE_2__);



let CalcDistanciaService = class CalcDistanciaService {
    constructor() {
        this.directionsService = new google.maps.DirectionsService();
        // private directionsDisplay = new google.maps.DirectionsRenderer();
        this.origin = {};
        this.destination = {};
    }
    calculateRoute(dirCliente, dirEstablecimiento) {
        let c_servicio = dirEstablecimiento.c_minimo;
        const c_km = dirEstablecimiento.c_km; // costo x km adicional
        // cordenadas
        this.origin = {
            lat: dirCliente.latitude, lng: dirCliente.longitude
        };
        this.destination = {
            lat: dirEstablecimiento.latitude, lng: dirEstablecimiento.longitude
        };
        const request = {
            origin: this.origin,
            destination: this.destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        let km = 0;
        this.directionsService.route(request, (result, status) => {
            if (status === 'OK') {
                // this.directionsRenderer.setDirections(result);
                km = result.routes[0].legs[0].distance.value;
                dirEstablecimiento.distancia_km = (km / 1000).toFixed(2);
                km = parseInt((km / 1000).toFixed(), 0);
                if (km > 1) {
                    c_servicio = ((km - 1) * c_km) + c_servicio;
                    dirEstablecimiento.c_servicio = c_servicio;
                    // return c_servicio;
                }
                // console.log('km calc', km);
                // console.log(result.routes[0].legs[0]);
                // console.log('c_servicio', c_servicio);
                // console.log('dirEstablecimiento', dirEstablecimiento);
                // return c_servicio;
                // callback(c_servicio);
            }
        });
        // si tiene repartidores propios y no esta suscrito al servicio de calcular distancia
        if (dirEstablecimiento.pwa_delivery_servicio_propio === 1 && dirEstablecimiento.pwa_delivery_hablitar_calc_costo_servicio === 0) {
            c_servicio = 0;
        }
        setTimeout(() => {
            dirEstablecimiento.c_servicio = c_servicio;
            return c_servicio;
        }, 500);
        dirEstablecimiento.c_servicio = c_servicio;
        return c_servicio;
    }
    // regla x km adicional
    reglaKm() {
    }
    // retorna true si esta cerca
    calcDistancia(coordOrigen, coordDetino) {
        const center = { lat: coordDetino.latitude, lon: coordDetino.longitude };
        const radius = 75; // meters
        return Object(geolocation_utils__WEBPACK_IMPORTED_MODULE_2__["insideCircle"])({ lat: coordOrigen.latitude, lon: coordOrigen.longitude }, center, radius); // false
    }
};
CalcDistanciaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], CalcDistanciaService);



/***/ })

}]);
//# sourceMappingURL=default~pages-encuesta-encuesta-module~pages-inicio-inicio-module~pages-pedido-pedido-module~pages-z~ebdeb88c-es2015.js.map