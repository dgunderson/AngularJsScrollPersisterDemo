(function (angular) {
	"use strict";

	angular.module("ScrollPersisterApp").directive("scrollPersister", [scrollPersister]);

	function scrollPersister() {
		return {
			restrict: "A",
			link: function (scope, element, attributes) {
				scope.$watch(attributes.scrollPersister, function (newValue, oldValue) {
					element[0].scrollTop = newValue;
				});

				element[0].onscroll = function () {
					var scrollTop = element[0].scrollTop;

					if (scrollTop !== 0)
						scope.vm.SetScrollTop(element[0].scrollTop);
				}
			}
		};
	}
})(angular);