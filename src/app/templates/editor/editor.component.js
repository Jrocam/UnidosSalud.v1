"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@covalent/core");
var NUMBER_FORMAT = function (v) { return v.value; };
var DECIMAL_FORMAT = function (v) { return v.value.toFixed(2); };
var data_1 = require("./data");
var EditorTemplateComponent = (function () {
    function EditorTemplateComponent(_titleService, _dataTableService) {
        this._titleService = _titleService;
        this._dataTableService = _dataTableService;
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = '';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Sales';
        this.autoScale = true;
        this.colorScheme = {
            domain: ['#9575CD', '#4FC3F7', '#4DD0E1', '#4DB6AC', '#66BB6A', '#9CCC65'],
        };
        // Datatable
        this.columns = [
            { name: 'name', label: 'Product' },
            { name: 'type', label: 'Type' },
            { name: 'usage', label: 'CPU Time (m)', numeric: true, format: NUMBER_FORMAT },
            { name: 'users', label: 'Users (K)', numeric: true, format: DECIMAL_FORMAT },
            { name: 'load', label: 'load (%)', numeric: true, format: NUMBER_FORMAT },
            { name: 'time', label: 'time (h)', numeric: true, format: DECIMAL_FORMAT },
            { name: 'quota', label: 'Quota (%)', numeric: true, format: NUMBER_FORMAT },
            { name: 'sessions', label: 'Sessions', numeric: true, format: NUMBER_FORMAT },
            { name: 'containers', label: 'Containers', numeric: true, format: NUMBER_FORMAT },
        ];
        this.data = [
            {
                'name': 'Ingest',
                'type': 'container',
                'usage': { 'value': 159.0 },
                'users': { 'value': 6.0 },
                'load': { 'value': 24.0 },
                'time': { 'value': 4.0 },
                'quota': { 'value': 87.0 },
                'sessions': { 'value': 14.0 },
                'containers': { 'value': 1.0 },
            }, {
                'name': 'Containers',
                'type': 'container',
                'usage': { 'value': 237.0 },
                'users': { 'value': 9.0 },
                'load': { 'value': 37.0 },
                'time': { 'value': 4.3 },
                'quota': { 'value': 129.0 },
                'sessions': { 'value': 8.0 },
                'containers': { 'value': 1.0 },
            }, {
                'name': 'Computer Engines',
                'type': 'hardware',
                'usage': { 'value': 262.0 },
                'users': { 'value': 16.0 },
                'load': { 'value': 24.0 },
                'time': { 'value': 6.0 },
                'quota': { 'value': 337.0 },
                'sessions': { 'value': 6.0 },
                'containers': { 'value': 7.0 },
            }, {
                'name': 'Memory',
                'type': 'hardware',
                'usage': { 'value': 305.0 },
                'users': { 'value': 3.7 },
                'load': { 'value': 67.0 },
                'time': { 'value': 4.3 },
                'quota': { 'value': 413.0 },
                'sessions': { 'value': 3.0 },
                'containers': { 'value': 8.0 },
            }, {
                'name': 'Workload Engine',
                'type': 'engines',
                'usage': { 'value': 375.0 },
                'users': { 'value': 0.0 },
                'load': { 'value': 94.0 },
                'time': { 'value': 0.0 },
                'quota': { 'value': 50.0 },
                'sessions': { 'value': 0.0 },
                'containers': { 'value': 0.0 },
            }, {
                'name': 'High Availability',
                'type': 'container',
                'usage': { 'value': 392.0 },
                'users': { 'value': 0.2 },
                'load': { 'value': 98.0 },
                'time': { 'value': 0.0 },
                'quota': { 'value': 38.0 },
                'sessions': { 'value': 0.0 },
                'containers': { 'value': 2.0 },
            }, {
                'name': 'Database',
                'type': 'engines',
                'usage': { 'value': 408.0 },
                'users': { 'value': 3.2 },
                'load': { 'value': 87.0 },
                'time': { 'value': 6.5 },
                'quota': { 'value': 562.0 },
                'sessions': { 'value': 0.0 },
                'containers': { 'value': 45.0 },
            }, {
                'name': 'Logs',
                'type': 'containers',
                'usage': { 'value': 452.0 },
                'users': { 'value': 25.0 },
                'load': { 'value': 51.0 },
                'time': { 'value': 4.9 },
                'quota': { 'value': 326.0 },
                'sessions': { 'value': 2.0 },
                'containers': { 'value': 22.0 },
            }, {
                'name': 'Orchestrator',
                'type': 'service',
                'usage': { 'value': 518.0 },
                'users': { 'value': 26.0 },
                'load': { 'value': 65.0 },
                'time': { 'value': 7.0 },
                'quota': { 'value': 54.0 },
                'sessions': { 'value': 12.0 },
                'containers': { 'value': 6.0 },
            },
        ];
        this.filteredData = this.data;
        this.filteredTotal = this.data.length;
        this.searchTerm = '';
        this.fromRow = 1;
        this.currentPage = 1;
        this.pageSize = 5;
        this.sortBy = 'name';
        this.sortOrder = core_2.TdDataTableSortingOrder.Descending;
        // Chart
        this.multi = data_1.multi.map(function (group) {
            group.series = group.series.map(function (dataItem) {
                dataItem.name = new Date(dataItem.name);
                return dataItem;
            });
            return group;
        });
    }
    EditorTemplateComponent.prototype.ngAfterViewInit = function () {
        this._titleService.setTitle('Teradata Studio Express 2017');
        this.filter();
    };
    EditorTemplateComponent.prototype.sort = function (sortEvent) {
        this.sortBy = sortEvent.name;
        this.sortOrder = sortEvent.order;
        this.filter();
    };
    EditorTemplateComponent.prototype.search = function (searchTerm) {
        this.searchTerm = searchTerm;
        this.filter();
    };
    EditorTemplateComponent.prototype.page = function (pagingEvent) {
        this.fromRow = pagingEvent.fromRow;
        this.currentPage = pagingEvent.page;
        this.pageSize = pagingEvent.pageSize;
        this.filter();
    };
    EditorTemplateComponent.prototype.filter = function () {
        var newData = this.data;
        newData = this._dataTableService.filterData(newData, this.searchTerm, true);
        this.filteredTotal = newData.length;
        newData = this._dataTableService.sortData(newData, this.sortBy, this.sortOrder);
        newData = this._dataTableService.pageData(newData, this.fromRow, this.currentPage * this.pageSize);
        this.filteredData = newData;
    };
    return EditorTemplateComponent;
}());
EditorTemplateComponent = __decorate([
    core_1.Component({
        selector: 'qs-editor',
        templateUrl: './editor.component.html',
        styleUrls: ['./editor.component.scss'],
    })
], EditorTemplateComponent);
exports.EditorTemplateComponent = EditorTemplateComponent;
