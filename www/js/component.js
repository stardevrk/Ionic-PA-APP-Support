angular.module('starter')
.component('videoSessionSlider', {
        template:'<ion-slide-box class="row-slide-box" show-pager="false" does-continue="true" on-slide-changed="slideHasChanged($index)" delegate-handle="$index" ng-init="parentIndex=$index" ng-repeat="videoSession in $ctrl.videos">' + 
        '<ion-slide ng-repeat="video in videoSession.videoSession">' +
          '<div class="slide-item">' +
            '<img ng-src="{{video.video_info.thumbnail}}" class="slide-img">' +
            '<button style="font-size:15px;" class="button-swiper-prev" ng-click="previous($parent.$index)">Prev</button>' +
            '<button style="font-size:15px;" class="button-swiper-next" ng-click="next($parent.$index)">Next</button>' +
          '</div>' +
        '</ion-slide>' +
      '</ion-slide-box>',
      bindings:{
        videos: '<' //one way data binding
      },
      controller: function($scope, $ionicSlideBoxDelegate){
         //component controller
         $scope.next = function(sliderHandle) {
          var sliderInstanceArray = $ionicSlideBoxDelegate["_instances"];
          sliderInstanceArray[parseInt(sliderHandle)].next();
        };
        $scope.previous = function(sliderHandle) {
          var sliderInstanceArray = $ionicSlideBoxDelegate["_instances"];
          sliderInstanceArray[parseInt(sliderHandle)].previous();
        };
      }
})