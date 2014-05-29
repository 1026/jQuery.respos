/* jQuery.respos(git@github.com:1026/jQuery.respos.git)
   version: 0.0.0
   author: 1026
   License: MIT */
;(function($) {
	$.fn.respos = function(wrap, options) {

		options = $.extend({
			width: null,
			height: null
		}, options);

		$(window).on('load resize',function(){
			resposition();
		});

		var $item = this;
		var $criterion = $(wrap);

		function resposition(){
			var _criterionW = $criterion.attr('width');
			var _criterionH = $criterion.attr('height');

			var criterionW = (isFinite(_criterionW)) ? $criterion.attr('width') : options.width;
			var criterionH = (isFinite(_criterionH)) ? $criterion.attr('height') : options.height;

			var newW = $criterion.outerWidth();
			var newH = $criterion.outerHeight();

			$item.each(function(){
				$(this).removeAttr('style');

				var _itemH = $(this).height();
				var _itemW = $(this).width();
				var _itemL = parseInt($(this).css('left'));
				var _itemT = parseInt($(this).css('top'));

				$(this).height(newH*_itemH/criterionH).width(newW*_itemW/criterionW);
				$(this).css({
					left: Math.round(_itemL/criterionW*newW),
					top: Math.round(_itemT/criterionH*newH)
				});
			});
		}
	};
})(jQuery);