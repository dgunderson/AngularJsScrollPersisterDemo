(function (angular) {
	"use strict";

	angular.module("ScrollPersisterApp").controller("homeController", ["$route", "scrollPersisterService", homeController]);

	function homeController($route, scrollPersisterService) {

		var vm = this;

		vm.ReloadRoute = reloadRoute;
		vm.GetReloadCount = getReloadCount;

		function reloadRoute() {
			scrollPersisterService.IncrementReloadCount();
			$route.reload();
		}

		function getReloadCount() {
			return scrollPersisterService.GetReloadCount();
		}
	}
})(angular);