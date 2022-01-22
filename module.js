var mod = angular.module("mod",[]);
// day2

// mod.controller("ctr",function($scope){
//     $scope.a = "Hello World";
//     $scope.obj = {name:"Obaid", age:19, ms: "Single"};
//     $scope.img = "bg3.jpg";
//     $scope.chk = false;
// });


//Day3 & 4

mod.controller("ctr",function($scope){
    $scope.x = 0;
    $scope.increment = function(){
        $scope.x++;
    }
    $scope.reset = function(){
        $scope.x = 0;
    }
});

mod.controller("ctrl",function($scope){
    $scope.n=2
    $scope.student = [
        {id : 1, fname : "Shaghil", lname : "Arshad", batch : "2107F", Likes : 0, DisLike : 0},
        {id : 2, fname : "Umar", lname : "Naeem", batch : "2107F", Likes : 0, DisLike : 0},
        {id : 3, fname : "Faisal", lname : "Malik", batch : "2107F", Likes : 0, DisLike : 0},
        {id : 4, fname : "Bilal", lname : "Amjad", batch : "2107F", Likes : 0, DisLike : 0},
        {id : 5, fname : "Ali", lname : "Rashid", batch : "2107F", Likes : 0, DisLike : 0}
    ];
    $scope.IncrementLikes = function(x){
        x.Likes+=1;
    }
    $scope.IncrementDislikes = function(x){
        x.DisLike+=1;
    }

});