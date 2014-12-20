(function (angular) {
	"use strict";

	angular.module("ScrollPersisterApp").factory("scrollPersisterService", [scrollPersisterService]);

	function scrollPersisterService() {

		var _scrollTop;
		var _reloadCount;

		function getScrollTop() {
			return _scrollTop;
		}

		function setScrollTop(scrollTop) {
			_scrollTop = scrollTop;
		}

		function getReloadCount() {
			return _reloadCount || (_reloadCount = 0);
		}

		function incrementReloadCount() {
			_reloadCount++;
		}

		return {
			GetScrollTop: getScrollTop,
			SetScrollTop: setScrollTop,
			GetReloadCount: getReloadCount,
			IncrementReloadCount: incrementReloadCount
		};
	}
})(angular);