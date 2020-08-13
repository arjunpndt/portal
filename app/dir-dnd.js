app.directive('dndList', function() {
    return function(scope, element, attrs) {
        var toUpdate;
        var startIndex = -1;
        scope.$watch(attrs.dndList, function(value) {
            toUpdate = value;
        }, true);

        $(element[0]).sortable({
            items: 'li',
            start: function(event, ui) {

                startIndex = ($(ui.item).index());
            },
            stop: function(event, ui) {

                var newIndex = ($(ui.item).index());
                var toMove = toUpdate[startIndex];
                toUpdate.splice(startIndex, 1);
                toUpdate.splice(newIndex, 0, toMove);

                scope.$apply(scope.model);
            },
            axis: 'y'
        })
    }
});