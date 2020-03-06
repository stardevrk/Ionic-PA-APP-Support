angular.module('starter.directives', [])

.directive('isoGrid', function($timeout) {
  // return {
  //   link: function (scope, element, attrs) {
  //       $timeout(function(){
  //         console.log("AAAAAAAAAAAAAAAAA");
  //         element.isotope({ 
  //             itemSelector: '.item',
  //             layoutMode: 'fitRows',
  //             // getSortData : {
  //             //     title: function(e) {
  //             //         return e.find('h2').text();
  //             //     }
  //             // },
  //             // sortBy: 'title',
  //             // sortAscending: true
  //         });
  //       });
  //   }
  // };
  return function (scope, element, attrs) {
    console.log("Element = ", element);
  };
}); 