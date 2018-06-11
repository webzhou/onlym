/*
 * asideUi 侧栏
 */
(function($) {
	$.fn.asideUi = function(options) {
		var defaults = {
			size: '100%',
			hasmask: true,
			position: 'left',
			sidertime: 300
		};
		var val = $.extend(defaults, options);
		var obj = function() {},
			_self = this,
			thisMask = $("<div class='ui-aside-mask'></div>"),
			thisCss = {},
			thisCss2 = {};
		thisCss[val.position] = '-' + val.size;
		this.css({
			'top': (val.position == "bottom") ? "auto" : 0,
			'bottom': 0
		});
		thisCss2[val.position] = 0;
		_self.css(thisCss);
		
		obj.toggle = function() {
			if(_self.hasClass('ui-aside-open')) {
				_self.removeClass('ui-aside-open');
				_self.animate(thisCss, val.sidertime);
				$('.ui-aside-mask').animate({
					'opacity': 0
				}, 100, function() {
					$(this).remove();
				});
			} else {
				_self.addClass('ui-aside-open');
				_self.animate(thisCss2, val.sidertime);
				if(val.hasmask) {
					$('body').append(thisMask);
					$(".ui-aside-mask").animate({
						'opacity': 1
					}, 100);
				}
			}
		};
        thisMask.on('click', function() {
            console.log("zz");
            obj.toggle();
        });
		return obj;
	};
})(window.Zepto || window.jQuery);
/*
 * 返回顶部
 */
function goTop(acceleration, time) {
	acceleration = acceleration || 0.1;
	time = time || 16;
	var x1 = 0;
	var y1 = 0;
	var x2 = 0;
	var y2 = 0;
	var x3 = 0;
	var y3 = 0;
	if(document.documentElement) {
		x1 = document.documentElement.scrollLeft || 0;
		y1 = document.documentElement.scrollTop || 0;
	}
	if(document.body) {
		x2 = document.body.scrollLeft || 0;
		y2 = document.body.scrollTop || 0;
	}
	var x3 = window.scrollX || 0;
	var y3 = window.scrollY || 0;
	// 滚动条到页面顶部的水平距离
	var x = Math.max(x1, Math.max(x2, x3));
	// 滚动条到页面顶部的垂直距离
	var y = Math.max(y1, Math.max(y2, y3));
	// 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
	var speed = 1 + acceleration;
	window.scrollTo(Math.floor(x / speed), Math.floor(y / speed));
	// 如果距离不为零, 继续调用迭代本函数
	if(x > 0 || y > 0) {
		var invokeFunction = "goTop(" + acceleration + ", " + time + ")";
		window.setTimeout(invokeFunction, time);
	}
}

/*
 * ui-progress进度条
 */
;
(function($) {
	$.fn.progressUi = function(options) {
		var defaults = {
			skin: ''
		};
		var val = $.extend(defaults, options);
		var attrs = {
				max: this.attr('max') || 0,
				value: this.attr("value") || 0
			},
			doms = $('<div class="ui-progressBox"></div>');
		domsContent = $('<div class="progress-content ' + val.skin + '"></div>');
		this.wrap(doms);
		domsContent.animate({
			'width': attrs.value / attrs.max * 100 + '%',
		});
		doms.prepend(domsContent);
	};
})(window.Zepto || window.jQuery)