/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/data/access/DBClientManager.ts":
/*!********************************************!*\
  !*** ./src/data/access/DBClientManager.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DBClientManager)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _getDBClientOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDBClientOptions */ \"./src/data/access/getDBClientOptions.ts\");\n\n\nclass DBClientManager {\n    constructor() {\n        this.client = null;\n    }\n    static getInstance() {\n        if (!DBClientManager.instance) {\n            DBClientManager.instance = new DBClientManager();\n        }\n        return DBClientManager.instance;\n    }\n    getClient() {\n        if (!this.client) {\n            throw new Error('Please connect.');\n        }\n        return this.client;\n    }\n    async connect() {\n        this.client = new pg__WEBPACK_IMPORTED_MODULE_0__.Client((0,_getDBClientOptions__WEBPACK_IMPORTED_MODULE_1__.getDBClientOptions)());\n        await this.client.connect();\n    }\n    ;\n    async disconnect() {\n        if (!this.client) {\n            return;\n        }\n        await this.client.end();\n        this.client = null;\n    }\n    ;\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9hY2Nlc3MvREJDbGllbnRNYW5hZ2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL2RhdGEvYWNjZXNzL0RCQ2xpZW50TWFuYWdlci50cz8zN2JmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudCB9IGZyb20gJ3BnJztcbmltcG9ydCB7IGdldERCQ2xpZW50T3B0aW9ucyB9IGZyb20gJy4vZ2V0REJDbGllbnRPcHRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgREJDbGllbnRNYW5hZ2VyIHtcbiAgICBwcml2YXRlIGNsaWVudDogQ2xpZW50O1xuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBudWxsO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCFEQkNsaWVudE1hbmFnZXIuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIERCQ2xpZW50TWFuYWdlci5pbnN0YW5jZSA9IG5ldyBEQkNsaWVudE1hbmFnZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gREJDbGllbnRNYW5hZ2VyLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGdldENsaWVudCgpIDogQ2xpZW50IHtcbiAgICAgICAgaWYgKCF0aGlzLmNsaWVudCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgY29ubmVjdC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnQ7XG4gICAgfVxuXG4gICAgYXN5bmMgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5jbGllbnQgPSBuZXcgQ2xpZW50KGdldERCQ2xpZW50T3B0aW9ucygpKTtcbiAgICAgICAgYXdhaXQgdGhpcy5jbGllbnQuY29ubmVjdCgpO1xuICAgIH07XG5cbiAgICBhc3luYyBkaXNjb25uZWN0KCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xpZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgYXdhaXQgdGhpcy5jbGllbnQuZW5kKCk7XG4gICAgICAgIHRoaXMuY2xpZW50ID0gbnVsbDtcbiAgICB9O1xufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/access/DBClientManager.ts\n");

/***/ }),

/***/ "./src/data/access/getDBClientOptions.ts":
/*!***********************************************!*\
  !*** ./src/data/access/getDBClientOptions.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDBClientOptions\": () => (/* binding */ getDBClientOptions)\n/* harmony export */ });\nconst getDBClientOptions = () => {\n    const { PG_HOST, PG_PORT, PG_DATABASE, PG_USERNAME, PG_PASSWORD, } = process.env;\n    return {\n        host: PG_HOST,\n        port: parseInt(PG_PORT, 10),\n        database: PG_DATABASE,\n        user: PG_USERNAME,\n        password: PG_PASSWORD,\n        ssl: {\n            rejectUnauthorized: false,\n        },\n        connectionTimeoutMillis: 5000,\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZGF0YS9hY2Nlc3MvZ2V0REJDbGllbnRPcHRpb25zLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL2RhdGEvYWNjZXNzL2dldERCQ2xpZW50T3B0aW9ucy50cz9mM2I4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENsaWVudENvbmZpZyB9IGZyb20gJ3BnJztcblxuZXhwb3J0IGNvbnN0IGdldERCQ2xpZW50T3B0aW9uczogKCkgPT4gQ2xpZW50Q29uZmlnID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgUEdfSE9TVCxcbiAgICAgICAgUEdfUE9SVCxcbiAgICAgICAgUEdfREFUQUJBU0UsXG4gICAgICAgIFBHX1VTRVJOQU1FLFxuICAgICAgICBQR19QQVNTV09SRCxcbiAgICB9ID0gcHJvY2Vzcy5lbnY7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBob3N0OiBQR19IT1NULFxuICAgICAgICBwb3J0OiBwYXJzZUludChQR19QT1JULCAxMCksXG4gICAgICAgIGRhdGFiYXNlOiBQR19EQVRBQkFTRSxcbiAgICAgICAgdXNlcjogUEdfVVNFUk5BTUUsXG4gICAgICAgIHBhc3N3b3JkOiBQR19QQVNTV09SRCxcbiAgICAgICAgc3NsOiB7XG4gICAgICAgIHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3Rpb25UaW1lb3V0TWlsbGlzOiA1MDAwLFxuICAgIH07XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7O0FBRUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/data/access/getDBClientOptions.ts\n");

/***/ }),

/***/ "./src/functions/createProduct/handler.ts":
/*!************************************************!*\
  !*** ./src/functions/createProduct/handler.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createProduct\": () => (/* binding */ createProduct),\n/* harmony export */   \"main\": () => (/* binding */ main)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @libs/apiGateway */ \"./src/libs/apiGateway.ts\");\n/* harmony import */ var _services_productService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/productService */ \"./src/services/productService.ts\");\n/* harmony import */ var _libs_lambda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @libs/lambda */ \"./src/libs/lambda.ts\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/logger */ \"./src/utils/logger.ts\");\n/* harmony import */ var _middy_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @middy/validator */ \"@middy/validator\");\n/* harmony import */ var _middy_validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_middy_validator__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _product_shema__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-shema */ \"./src/functions/createProduct/product-shema.ts\");\n\n\n\n\n\n\n\nconst createProduct = async (event) => {\n    try {\n        const product = await _services_productService__WEBPACK_IMPORTED_MODULE_2__.default.create(event.body);\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)(product, 201);\n    }\n    catch (e) {\n        _utils_logger__WEBPACK_IMPORTED_MODULE_4__.logger.error({ message: e?.message, error: e });\n        return (0,_libs_apiGateway__WEBPACK_IMPORTED_MODULE_1__.formatJSONResponse)({\n            message: `Something went wrong during creation...`\n        }, 500);\n    }\n};\nconst main = (0,_libs_lambda__WEBPACK_IMPORTED_MODULE_3__.middyfy)(createProduct).use(_middy_validator__WEBPACK_IMPORTED_MODULE_5___default()({\n    inputSchema: _product_shema__WEBPACK_IMPORTED_MODULE_6__.default,\n    ajvOptions: {\n        messages: true\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVByb2R1Y3QvaGFuZGxlci50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlUHJvZHVjdC9oYW5kbGVyLnRzP2ZhZmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXInO1xuXG5pbXBvcnQgeyBmb3JtYXRKU09OUmVzcG9uc2UsIFZhbGlkYXRlZEV2ZW50QVBJR2F0ZXdheVByb3h5RXZlbnQgfSBmcm9tICdAbGlicy9hcGlHYXRld2F5JztcbmltcG9ydCBwcm9kdWN0U2VydmljZSBmcm9tICdAc2VydmljZXMvcHJvZHVjdFNlcnZpY2UnO1xuaW1wb3J0IHsgbWlkZHlmeSB9IGZyb20gJ0BsaWJzL2xhbWJkYSc7XG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAdXRpbHMvbG9nZ2VyJztcbmltcG9ydCB2YWxpZGF0b3IgZnJvbSAnQG1pZGR5L3ZhbGlkYXRvcic7XG5pbXBvcnQgcHJvZHVjdFNjaGVtYSBmcm9tICcuL3Byb2R1Y3Qtc2hlbWEnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvZHVjdDogVmFsaWRhdGVkRXZlbnRBUElHYXRld2F5UHJveHlFdmVudDx0eXBlb2YgcHJvZHVjdFNjaGVtYT4gPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9kdWN0ID0gYXdhaXQgcHJvZHVjdFNlcnZpY2UuY3JlYXRlKGV2ZW50LmJvZHkpO1xuXG4gICAgcmV0dXJuIGZvcm1hdEpTT05SZXNwb25zZShwcm9kdWN0LCAyMDEpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nZ2VyLmVycm9yKHsgbWVzc2FnZTogZT8ubWVzc2FnZSwgZXJyb3I6IGUgfSk7XG5cbiAgICByZXR1cm4gZm9ybWF0SlNPTlJlc3BvbnNlKFxuICAgICAge1xuICAgICAgICBtZXNzYWdlOiBgU29tZXRoaW5nIHdlbnQgd3JvbmcgZHVyaW5nIGNyZWF0aW9uLi4uYFxuICAgICAgfSxcbiAgICAgIDUwMFxuICAgICk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBtYWluID0gbWlkZHlmeShjcmVhdGVQcm9kdWN0KS51c2UodmFsaWRhdG9yKHtcbiAgaW5wdXRTY2hlbWE6IHByb2R1Y3RTY2hlbWEsXG4gIGFqdk9wdGlvbnM6IHtcbiAgICBtZXNzYWdlczogdHJ1ZVxuICB9XG59KSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/createProduct/handler.ts\n");

/***/ }),

/***/ "./src/functions/createProduct/product-shema.ts":
/*!******************************************************!*\
  !*** ./src/functions/createProduct/product-shema.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    type: 'object',\n    properties: {\n        body: {\n            type: 'object',\n            properties: {\n                title: { type: 'string', minLength: 10 },\n                description: { type: 'string', minLength: 5 },\n                count: { type: 'integer', minimum: 0 },\n                price: { type: 'integer', minimum: 1 },\n                imgUrl: { type: 'string' },\n                ram: { type: 'integer', minimum: 1 },\n                storage: { type: 'string' },\n                display: { type: 'string' }\n            },\n            required: ['title', 'description', 'count', 'price'],\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZVByb2R1Y3QvcHJvZHVjdC1zaGVtYS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb2R1Y3Qtc2VydmljZS8uL3NyYy9mdW5jdGlvbnMvY3JlYXRlUHJvZHVjdC9wcm9kdWN0LXNoZW1hLnRzP2RhMTUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xuICB0eXBlOiAnb2JqZWN0JyxcbiAgcHJvcGVydGllczoge1xuICAgIGJvZHk6IHtcbiAgICAgIHR5cGU6ICdvYmplY3QnLFxuICAgICAgcHJvcGVydGllczoge1xuICAgICAgICB0aXRsZTogeyB0eXBlOiAnc3RyaW5nJywgbWluTGVuZ3RoOiAxMCB9LFxuICAgICAgICBkZXNjcmlwdGlvbjogeyB0eXBlOiAnc3RyaW5nJywgbWluTGVuZ3RoOiA1IH0sXG4gICAgICAgIGNvdW50OiB7IHR5cGU6ICdpbnRlZ2VyJywgbWluaW11bTogMCB9LFxuICAgICAgICBwcmljZTogeyB0eXBlOiAnaW50ZWdlcicsIG1pbmltdW06IDEgfSxcbiAgICAgICAgaW1nVXJsOiB7IHR5cGU6ICdzdHJpbmcnIH0sXG4gICAgICAgIHJhbTogeyB0eXBlOiAnaW50ZWdlcicsICBtaW5pbXVtOiAxIH0sXG4gICAgICAgIHN0b3JhZ2U6IHsgdHlwZTogJ3N0cmluZycgfSxcbiAgICAgICAgZGlzcGxheTogeyB0eXBlOiAnc3RyaW5nJyB9XG4gICAgICB9LFxuICAgICAgcmVxdWlyZWQ6IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAnY291bnQnLCAncHJpY2UnXSxcbiAgICB9XG4gIH1cbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/createProduct/product-shema.ts\n");

/***/ }),

/***/ "./src/libs/apiGateway.ts":
/*!********************************!*\
  !*** ./src/libs/apiGateway.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formatJSONResponse\": () => (/* binding */ formatJSONResponse)\n/* harmony export */ });\nconst headers = {\n    'Access-Control-Allow-Origin': '*',\n    'Access-Control-Allow-Credentials': true\n};\nconst formatJSONResponse = (response, statusCode = 200) => {\n    return {\n        statusCode,\n        headers,\n        body: JSON.stringify(response)\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9hcGlHYXRld2F5LnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL2xpYnMvYXBpR2F0ZXdheS50cz82MjUxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQVBJR2F0ZXdheVByb3h5RXZlbnQsIEFQSUdhdGV3YXlQcm94eVJlc3VsdCwgSGFuZGxlciB9IGZyb20gJ2F3cy1sYW1iZGEnO1xuaW1wb3J0IHR5cGUgeyBGcm9tU2NoZW1hIH0gZnJvbSAnanNvbi1zY2hlbWEtdG8tdHMnO1xuXG50eXBlIFZhbGlkYXRlZEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gT21pdDxBUElHYXRld2F5UHJveHlFdmVudCwgJ2JvZHknPiAmIHtcbiAgYm9keTogRnJvbVNjaGVtYTxTPjtcbn07XG5leHBvcnQgdHlwZSBWYWxpZGF0ZWRFdmVudEFQSUdhdGV3YXlQcm94eUV2ZW50PFM+ID0gSGFuZGxlcjxcbiAgVmFsaWRhdGVkQVBJR2F0ZXdheVByb3h5RXZlbnQ8Uz4sXG4gIEFQSUdhdGV3YXlQcm94eVJlc3VsdFxuPjtcblxuY29uc3QgaGVhZGVycyA9IHtcbiAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6ICcqJyxcbiAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LUNyZWRlbnRpYWxzJzogdHJ1ZVxufTtcblxuZXhwb3J0IGNvbnN0IGZvcm1hdEpTT05SZXNwb25zZSA9IChyZXNwb25zZSwgc3RhdHVzQ29kZSA9IDIwMCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHN0YXR1c0NvZGUsXG4gICAgaGVhZGVycyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXNwb25zZSlcbiAgfTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/libs/apiGateway.ts\n");

/***/ }),

/***/ "./src/libs/lambda.ts":
/*!****************************!*\
  !*** ./src/libs/lambda.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"middyfy\": () => (/* binding */ middyfy)\n/* harmony export */ });\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @middy/core */ \"@middy/core\");\n/* harmony import */ var _middy_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_middy_core__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middy/http-json-body-parser */ \"@middy/http-json-body-parser\");\n/* harmony import */ var _middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _middy_input_output_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @middy/input-output-logger */ \"@middy/input-output-logger\");\n/* harmony import */ var _middy_input_output_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_middy_input_output_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @middy/http-error-handler */ \"@middy/http-error-handler\");\n/* harmony import */ var _middy_http_error_handler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_middy_http_error_handler__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _middleware_DBConnectMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middleware/DBConnectMiddleware */ \"./src/libs/middleware/DBConnectMiddleware.ts\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utils/logger */ \"./src/utils/logger.ts\");\n\n\n\n\n\n\nconst middyfy = (handler) => {\n    return _middy_core__WEBPACK_IMPORTED_MODULE_0___default()(handler)\n        .use(_middy_http_json_body_parser__WEBPACK_IMPORTED_MODULE_1___default()())\n        .use(_middy_input_output_logger__WEBPACK_IMPORTED_MODULE_2___default()({ logger: _utils_logger__WEBPACK_IMPORTED_MODULE_5__.logger.info.bind(_utils_logger__WEBPACK_IMPORTED_MODULE_5__.logger) }))\n        .use(_middy_http_error_handler__WEBPACK_IMPORTED_MODULE_3___default()({\n        logger: _utils_logger__WEBPACK_IMPORTED_MODULE_5__.logger.error.bind(_utils_logger__WEBPACK_IMPORTED_MODULE_5__.logger),\n        fallbackMessage: 'Error during execution',\n    }))\n        .use((0,_middleware_DBConnectMiddleware__WEBPACK_IMPORTED_MODULE_4__.dbConnectMiddleware)());\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9sYW1iZGEudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UvLi9zcmMvbGlicy9sYW1iZGEudHM/NmIyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWlkZHkgZnJvbSAnQG1pZGR5L2NvcmUnO1xuaW1wb3J0IG1pZGR5SnNvbkJvZHlQYXJzZXIgZnJvbSAnQG1pZGR5L2h0dHAtanNvbi1ib2R5LXBhcnNlcic7XG5pbXBvcnQgaW5wdXRPdXRwdXRMb2dnZXIgZnJvbSAnQG1pZGR5L2lucHV0LW91dHB1dC1sb2dnZXInO1xuaW1wb3J0IGh0dHBFcnJvckhhbmRsZXIgZnJvbSAnQG1pZGR5L2h0dHAtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQgeyBkYkNvbm5lY3RNaWRkbGV3YXJlIH0gZnJvbSAnLi9taWRkbGV3YXJlL0RCQ29ubmVjdE1pZGRsZXdhcmUnO1xuaW1wb3J0IHsgbG9nZ2VyIH0gZnJvbSAnQHV0aWxzL2xvZ2dlcic7XG5cbmV4cG9ydCBjb25zdCBtaWRkeWZ5ID0gKGhhbmRsZXIpID0+IHtcbiAgcmV0dXJuIG1pZGR5KGhhbmRsZXIpXG4gICAgICAgICAgLnVzZShtaWRkeUpzb25Cb2R5UGFyc2VyKCkpXG4gICAgICAgICAgLnVzZShpbnB1dE91dHB1dExvZ2dlcih7IGxvZ2dlcjogbG9nZ2VyLmluZm8uYmluZChsb2dnZXIpIH0pKVxuICAgICAgICAgIC51c2UoXG4gICAgICAgICAgICBodHRwRXJyb3JIYW5kbGVyKHtcbiAgICAgICAgICAgICAgbG9nZ2VyOiBsb2dnZXIuZXJyb3IuYmluZChsb2dnZXIpLFxuICAgICAgICAgICAgICBmYWxsYmFja01lc3NhZ2U6ICdFcnJvciBkdXJpbmcgZXhlY3V0aW9uJyxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICAgIC51c2UoZGJDb25uZWN0TWlkZGxld2FyZSgpKTtcblxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/libs/lambda.ts\n");

/***/ }),

/***/ "./src/libs/middleware/DBConnectMiddleware.ts":
/*!****************************************************!*\
  !*** ./src/libs/middleware/DBConnectMiddleware.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dbConnectMiddleware\": () => (/* binding */ dbConnectMiddleware)\n/* harmony export */ });\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utils/logger */ \"./src/utils/logger.ts\");\n/* harmony import */ var _data_access_DBClientManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @data/access/DBClientManager */ \"./src/data/access/DBClientManager.ts\");\n\n\nconst dbConnectMiddleware = (dbClientManager = _data_access_DBClientManager__WEBPACK_IMPORTED_MODULE_1__.default.getInstance()) => ({\n    before: async () => {\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.logger.info({ message: 'Start connection to DB' });\n        await dbClientManager.connect();\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.logger.info({ message: 'Successfully connected to DB' });\n    },\n    after: async () => {\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.logger.info({ message: 'Start disconnection from DB' });\n        await dbClientManager.disconnect();\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.logger.info({ message: 'Successfully disconnected from DB' });\n    },\n    onError: async () => {\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.logger.error({ message: 'Start disconnection from DB due to error' });\n        await dbClientManager.disconnect();\n        _utils_logger__WEBPACK_IMPORTED_MODULE_0__.logger.error({ message: 'Successfully disconnected from DB due to error' });\n    },\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGlicy9taWRkbGV3YXJlL0RCQ29ubmVjdE1pZGRsZXdhcmUudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UvLi9zcmMvbGlicy9taWRkbGV3YXJlL0RCQ29ubmVjdE1pZGRsZXdhcmUudHM/OGQ4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdAdXRpbHMvbG9nZ2VyJztcbmltcG9ydCBtaWRkeSBmcm9tICdAbWlkZHkvY29yZSdcbmltcG9ydCBEQkNsaWVudE1hbmFnZXIgZnJvbSAnQGRhdGEvYWNjZXNzL0RCQ2xpZW50TWFuYWdlcic7XG5cbmV4cG9ydCBjb25zdCBkYkNvbm5lY3RNaWRkbGV3YXJlOiBtaWRkeS5NaWRkbGV3YXJlPERCQ2xpZW50TWFuYWdlcj4gPSAoXG4gICAgZGJDbGllbnRNYW5hZ2VyID0gREJDbGllbnRNYW5hZ2VyLmdldEluc3RhbmNlKClcbikgPT4gKHtcbiAgICBiZWZvcmU6IGFzeW5jICgpID0+IHtcbiAgICAgICAgbG9nZ2VyLmluZm8oeyBtZXNzYWdlOiAnU3RhcnQgY29ubmVjdGlvbiB0byBEQicgfSk7XG4gICAgICAgIGF3YWl0IGRiQ2xpZW50TWFuYWdlci5jb25uZWN0KCk7XG4gICAgICAgIGxvZ2dlci5pbmZvKHsgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBjb25uZWN0ZWQgdG8gREInIH0pO1xuICAgIH0sXG4gICAgYWZ0ZXI6IGFzeW5jICgpID0+IHtcbiAgICAgICAgbG9nZ2VyLmluZm8oeyBtZXNzYWdlOiAnU3RhcnQgZGlzY29ubmVjdGlvbiBmcm9tIERCJyB9KTtcbiAgICAgICAgYXdhaXQgZGJDbGllbnRNYW5hZ2VyLmRpc2Nvbm5lY3QoKVxuICAgICAgICBsb2dnZXIuaW5mbyh7IG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgZGlzY29ubmVjdGVkIGZyb20gREInIH0pO1xuICAgIH0sXG4gICAgb25FcnJvcjogYXN5bmMgKCkgPT4ge1xuICAgICAgICBsb2dnZXIuZXJyb3IoeyBtZXNzYWdlOiAnU3RhcnQgZGlzY29ubmVjdGlvbiBmcm9tIERCIGR1ZSB0byBlcnJvcicgfSk7XG4gICAgICAgIGF3YWl0IGRiQ2xpZW50TWFuYWdlci5kaXNjb25uZWN0KClcbiAgICAgICAgbG9nZ2VyLmVycm9yKHsgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBkaXNjb25uZWN0ZWQgZnJvbSBEQiBkdWUgdG8gZXJyb3InIH0pO1xuICAgIH0sXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/libs/middleware/DBConnectMiddleware.ts\n");

/***/ }),

/***/ "./src/services/productService.ts":
/*!****************************************!*\
  !*** ./src/services/productService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProductService\": () => (/* binding */ ProductService),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _data_access_DBClientManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data/access/DBClientManager */ \"./src/data/access/DBClientManager.ts\");\n\nclass ProductService {\n    constructor() {\n        this.clientManager = _data_access_DBClientManager__WEBPACK_IMPORTED_MODULE_0__.default.getInstance();\n    }\n    static getInstance() {\n        if (!ProductService.instance) {\n            ProductService.instance = new ProductService();\n        }\n        return ProductService.instance;\n    }\n    async getAll() {\n        const { rows: products } = await this.clientManager.getClient().query('SELECT products.*, stocks.count FROM products INNER JOIN stocks ON stocks.product_id = products.id');\n        return products;\n    }\n    async getById(id) {\n        const { rows: [product] } = await this.clientManager.getClient().query('SELECT products.*, stocks.count FROM products INNER JOIN stocks ON stocks.product_id = products.id WHERE id = $1', [id]);\n        return product;\n    }\n    async create(data) {\n        const client = this.clientManager.getClient();\n        try {\n            await client.query('BEGIN');\n            const { rows: [insertedProduct] } = await client.query('INSERT INTO products(title, description, price, \"imgUrl\", ram, storage, display) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING id', [data.title, data.description, data.price, data.imgUrl, data.ram, data.storage, data.display]);\n            await client.query('INSERT INTO stocks(product_id, count) VALUES ($1, $2)', [insertedProduct.id, data.count]);\n            await client.query('COMMIT');\n            return {\n                id: insertedProduct.id,\n                ...data\n            };\n        }\n        catch (e) {\n            await client.query('ROLLBACK');\n            throw e;\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductService.getInstance());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcHJvZHVjdFNlcnZpY2UudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9kdWN0LXNlcnZpY2UvLi9zcmMvc2VydmljZXMvcHJvZHVjdFNlcnZpY2UudHM/MjM4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgREJDbGllbnRNYW5hZ2VyIGZyb20gJ0BkYXRhL2FjY2Vzcy9EQkNsaWVudE1hbmFnZXInO1xuaW1wb3J0IElTZXJ2aWNlIGZyb20gJy4vSVNlcnZpY2UnO1xuaW1wb3J0IElQcm9kdWN0IGZyb20gJ0BkYXRhL2ludGVyZmFjZXMvSVByb2R1Y3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFNlcnZpY2UgaW1wbGVtZW50cyBJU2VydmljZTxJUHJvZHVjdD4ge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogSVNlcnZpY2U8SVByb2R1Y3Q+O1xuICBwcml2YXRlIGNsaWVudE1hbmFnZXIgOiBEQkNsaWVudE1hbmFnZXI7XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNsaWVudE1hbmFnZXIgPSBEQkNsaWVudE1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBJU2VydmljZTxJUHJvZHVjdD4ge1xuICAgIGlmICghUHJvZHVjdFNlcnZpY2UuaW5zdGFuY2UpIHtcbiAgICAgIFByb2R1Y3RTZXJ2aWNlLmluc3RhbmNlID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9kdWN0U2VydmljZS5pbnN0YW5jZTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbCgpOiBQcm9taXNlPElQcm9kdWN0W10+IHtcbiAgICBjb25zdCB7IHJvd3M6IHByb2R1Y3RzfSA9IGF3YWl0IHRoaXMuY2xpZW50TWFuYWdlci5nZXRDbGllbnQoKS5xdWVyeShcbiAgICAgICdTRUxFQ1QgcHJvZHVjdHMuKiwgc3RvY2tzLmNvdW50IEZST00gcHJvZHVjdHMgSU5ORVIgSk9JTiBzdG9ja3MgT04gc3RvY2tzLnByb2R1Y3RfaWQgPSBwcm9kdWN0cy5pZCcsXG4gICAgKTtcblxuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxuXG4gIGFzeW5jIGdldEJ5SWQoaWQ6IHN0cmluZyk6IFByb21pc2U8SVByb2R1Y3Q+IHtcbiAgICBjb25zdCB7IHJvd3M6IFsgcHJvZHVjdCBdIH0gPSBhd2FpdCB0aGlzLmNsaWVudE1hbmFnZXIuZ2V0Q2xpZW50KCkucXVlcnkoXG4gICAgICAnU0VMRUNUIHByb2R1Y3RzLiosIHN0b2Nrcy5jb3VudCBGUk9NIHByb2R1Y3RzIElOTkVSIEpPSU4gc3RvY2tzIE9OIHN0b2Nrcy5wcm9kdWN0X2lkID0gcHJvZHVjdHMuaWQgV0hFUkUgaWQgPSAkMScsXG4gICAgICBbaWRdLFxuICAgICk7XG5cbiAgICByZXR1cm4gcHJvZHVjdDtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZShkYXRhOiBPbWl0PElQcm9kdWN0LCAnaWQnPik6IFByb21pc2U8SVByb2R1Y3Q+IHtcbiAgICBjb25zdCBjbGllbnQgPSB0aGlzLmNsaWVudE1hbmFnZXIuZ2V0Q2xpZW50KCk7XG5cbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2xpZW50LnF1ZXJ5KCdCRUdJTicpO1xuXG4gICAgICBjb25zdCB7IHJvd3M6IFsgaW5zZXJ0ZWRQcm9kdWN0IF19ID0gYXdhaXQgY2xpZW50LnF1ZXJ5KFxuICAgICAgICAnSU5TRVJUIElOVE8gcHJvZHVjdHModGl0bGUsIGRlc2NyaXB0aW9uLCBwcmljZSwgXCJpbWdVcmxcIiwgcmFtLCBzdG9yYWdlLCBkaXNwbGF5KSBWQUxVRVMoJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcpIFJFVFVSTklORyBpZCcsXG4gICAgICAgIFtkYXRhLnRpdGxlLCBkYXRhLmRlc2NyaXB0aW9uLCBkYXRhLnByaWNlLCBkYXRhLmltZ1VybCwgZGF0YS5yYW0sIGRhdGEuc3RvcmFnZSwgIGRhdGEuZGlzcGxheV1cbiAgICAgICk7XG5cbiAgICAgIGF3YWl0IGNsaWVudC5xdWVyeShcbiAgICAgICAgJ0lOU0VSVCBJTlRPIHN0b2Nrcyhwcm9kdWN0X2lkLCBjb3VudCkgVkFMVUVTICgkMSwgJDIpJyxcbiAgICAgICAgW2luc2VydGVkUHJvZHVjdC5pZCwgZGF0YS5jb3VudF1cbiAgICAgICk7XG5cbiAgICAgIGF3YWl0IGNsaWVudC5xdWVyeSgnQ09NTUlUJyk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBpbnNlcnRlZFByb2R1Y3QuaWQsXG4gICAgICAgIC4uLmRhdGFcbiAgICAgIH07XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYXdhaXQgY2xpZW50LnF1ZXJ5KCdST0xMQkFDSycpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdFNlcnZpY2UuZ2V0SW5zdGFuY2UoKTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFJQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/productService.ts\n");

/***/ }),

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logger\": () => (/* binding */ logger)\n/* harmony export */ });\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! winston */ \"winston\");\n/* harmony import */ var winston__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(winston__WEBPACK_IMPORTED_MODULE_0__);\n\nconst logger = winston__WEBPACK_IMPORTED_MODULE_0__.createLogger({\n    format: winston__WEBPACK_IMPORTED_MODULE_0__.format.json(),\n    transports: [\n        new winston__WEBPACK_IMPORTED_MODULE_0__.transports.Console()\n    ],\n    exceptionHandlers: [\n        new winston__WEBPACK_IMPORTED_MODULE_0__.transports.Console()\n    ],\n    exitOnError: false\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbG9nZ2VyLnRzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvZHVjdC1zZXJ2aWNlLy4vc3JjL3V0aWxzL2xvZ2dlci50cz84ZDZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHdpbnN0b24gZnJvbSAnd2luc3Rvbic7XG5cbmNvbnN0IGxvZ2dlcjogd2luc3Rvbi5Mb2dnZXIgPSB3aW5zdG9uLmNyZWF0ZUxvZ2dlcih7XG4gICAgZm9ybWF0OiB3aW5zdG9uLmZvcm1hdC5qc29uKCksXG4gICAgdHJhbnNwb3J0czogW1xuICAgICAgICBuZXcgd2luc3Rvbi50cmFuc3BvcnRzLkNvbnNvbGUoKVxuICAgIF0sXG4gICAgZXhjZXB0aW9uSGFuZGxlcnM6IFtcbiAgICAgICAgbmV3IHdpbnN0b24udHJhbnNwb3J0cy5Db25zb2xlKClcbiAgICBdLFxuICAgIGV4aXRPbkVycm9yOiBmYWxzZVxufSk7XG5cbmV4cG9ydCB7XG4gICAgbG9nZ2VyLFxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/logger.ts\n");

/***/ }),

/***/ "@middy/core":
/*!******************************!*\
  !*** external "@middy/core" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@middy/core");;

/***/ }),

/***/ "@middy/http-error-handler":
/*!********************************************!*\
  !*** external "@middy/http-error-handler" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-error-handler");;

/***/ }),

/***/ "@middy/http-json-body-parser":
/*!***********************************************!*\
  !*** external "@middy/http-json-body-parser" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@middy/http-json-body-parser");;

/***/ }),

/***/ "@middy/input-output-logger":
/*!*********************************************!*\
  !*** external "@middy/input-output-logger" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@middy/input-output-logger");;

/***/ }),

/***/ "@middy/validator":
/*!***********************************!*\
  !*** external "@middy/validator" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@middy/validator");;

/***/ }),

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");;

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");;

/***/ }),

/***/ "winston":
/*!**************************!*\
  !*** external "winston" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("winston");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/createProduct/handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;