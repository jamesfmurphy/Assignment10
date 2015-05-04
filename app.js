var app = angular.module('Comment', []);
app.controller('CommentCtrl', function($scope) {
    $scope.newComment = '';
    $scope.comments = [
        'May the 4th be with you',
        'Live long and prosper',
        'Earl grey ... hot'
    ];
    $scope.delete = function(comment) {
        var indexOf = $scope.comments.indexOf(comment);
        if (indexOf !== -1) {
            $scope.comments.splice(indexOf, 1);
        }
    };
    $scope.plus = function(e) {
        e.preventDefault();
        $scope.comments.push($scope.newComment);
        $scope.newComment = '';
    };
});