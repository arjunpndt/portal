app.controller('dndCtrl', function dndCtrl($scope) {
    $scope.model = [{
            "id": 1,
            "value": "FIRST ROW?"
        },
        {
            "id": 2,
            "value": "SECOND ROW "
        },
        {
            "id": 3,
            "value": "THIRD ROW"
        },
        {
            "id": 4,
            "value": "FORTH ROW"
        }
    ];

    $scope.$watch("model", function(value) {
        console.log("Model: " + value.map(function(e) { return e.id }).join(','));
    }, true);
});