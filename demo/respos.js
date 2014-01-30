/* jQuery.respos(git@github.com:1026/jQuery.respos.git)
   version: 0.0.0
   author: 1026
   License: MIT */
;(function($) {
	$.fn.respos = function(e) {
		$(window).on('load resize',function(){
			resposition();
		});

		var _item = $(e);
		var criterion = this;

		function resposition(){
			var _criterionH = criterion.attr('height');
			var _criterionW = criterion.attr('width');
			var newH = criterion.height();
			var newW = criterion.width();

			_item.removeAttr('style');

			_item.each(function(){
				var _itemImgH = $(this).find('img').attr('height');
				var _itemL = parseInt($(this).css('left'));
				var _itemT = parseInt($(this).css('top'));

				$(this).find('img').height(newH*_itemImgH/_criterionH).width('auto');
				$(this).css({
					left: Math.round(_itemL/_criterionW*newW),
					top: Math.round(_itemT/_criterionH*newH)
				});
			});
		}
	};
})(jQuery);