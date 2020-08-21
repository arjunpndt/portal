var app = angular.module('Homepage', ['ui.router', 'gridster']);

app.controller('maincontroller', ['$scope', function($scope) {

    $scope.editEnabled = true;
    let main = this;

    main.templates = ["template1", "template2", "template3", "template4", "template5"]
    $scope.standardItems = [
        { sizeX: 6, sizeY: 1, row: 0, col: 0 }, //template 1(attendance)
        { sizeX: 4, sizeY: 2, row: 2, col: 0 }, //template 2(calendar)
        { sizeX: 2, sizeY: 2, row: 2, col: 4 }, //template 3(birthday)
        { sizeX: 3, sizeY: 2, row: 4, col: 0 }, //template 4(marks)
        { sizeX: 3, sizeY: 2, row: 4, col: 3 }, //template 5(timetable)

    ];
    $scope.gridsterOpts = {
        columns: 6, // the width of the grid, in columns
        pushing: true, // whether to push other items out of the way on move or resize
        floating: true, // whether to automatically float items up so they stack (you can temporarily disable if you are adding unsorted items with ng-repeat)
        swapping: false, // whether or not to have items of the same size switch places instead of pushing down if they are the same size
        width: 'auto', // can be an integer or 'auto'. 'auto' scales gridster to be the full width of its containing element
        colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
        rowHeight: 'match', // can be an integer or 'match'.  Match uses the colWidth, giving you square widgets.
        margins: [20, 20], // the pixel distance between each widget
        outerMargin: true, // whether margins apply to outer edges of the grid
        sparse: false, // "true" can increase performance of dragging and resizing for big grid (e.g. 20x50)
        isMobile: false, // stacks the grid items if true
        mobileBreakPoint: 700, // if the screen is not wider that this, remove the grid layout and stack the items
        mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
        minColumns: 1, // the minimum columns the grid must have
        minRows: 2, // the minimum height of the grid, in rows
        maxRows: 100,
        defaultSizeX: 2, // the default width of a gridster item, if not specifed
        defaultSizeY: 1, // the default height of a gridster item, if not specified
        minSizeX: 1, // minimum column width of an item
        maxSizeX: null, // maximum column width of an item
        minSizeY: 1, // minumum row height of an item
        maxSizeY: null, // maximum row height of an item
        resizable: {
            enabled: false,
            handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
            start: function(event, $element, widget) {}, // optional callback fired when resize is started,
            resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
            stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
        },
        draggable: {
            enabled: true, // whether dragging items is supported
            // handle: '.my-class', // optional selector for drag handle
            start: function(event, $element, widget) {}, // optional callback fired when drag is started,
            drag: function(event, $element, widget) {}, // optional callback fired when item is moved,
            stop: function(event, $element, widget) {} // optional callback fired when item is finished dragging
        }
    };

}]);


app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            views: {
                'template1': {
                    templateUrl: 'template1.htm',
                    controller: 'template1Controller',

                }
            }
        })
    $urlRouterProvider.otherwise('/dashboard');
})