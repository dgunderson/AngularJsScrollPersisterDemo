(function (angular) {
	"use strict";

	angular.module("ScrollPersisterApp").directive("scrollPersister", ["scrollPersisterService", scrollPersister]);

	function scrollPersister(scrollPersisterService) {
		return {
			restrict: "A",
			link: function (scope, element) {
				element[0].scrollTop = scrollPersisterService.GetScrollTop();

				scope.$on('$destroy', function () {
					scrollPersisterService.SetScrollTop(element[0].scrollTop);
				});
			}
		};
	}
})(angular);