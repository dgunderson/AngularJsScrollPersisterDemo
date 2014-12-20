(function (angular) {
	"use strict";

	angular.module("ScrollPersisterApp").controller("homeController", ["$route", "scrollPersisterService", homeController]);

	function homeController($route, scrollPersisterService) {

		var vm = this;

		vm.ReloadRoute = reloadRoute;
		vm.GetScrollTop = getScrollTop;
		vm.SetScrollTop = setScrollTop;
		vm.GetReloadCount = getReloadCount;

		function reloadRoute() {
			scrollPersisterService.IncrementReloadCount();
			$route.reload();
		}

		function getScrollTop() {
			return scrollPersisterService.GetScrollTop();
		}

		function setScrollTop(scrollTop) {
			scrollPersisterService.SetScrollTop(scrollTop);
		}

		function getReloadCount() {
			return scrollPersisterService.GetReloadCount();
		}
	}
})(angular);