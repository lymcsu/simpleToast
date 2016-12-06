define(['jquery'], function ($){
	function SimpleToast (){
	};
	SimpleToast.prototype.toasting = function (opt){
		var opts = $.extend({}, SimpleToast.OPTIONS, opt);
		var toastHtml = createHtml();
		$(toastHtml).appendTo($('body')).fadeIn(function (){
			var that = $(this);
			if(opts.model === "alert"){
				$(".simple-toast-close").on("click", function (){
					that.fadeOut(function(){that.remove();});
				})
			}else{
				setTimeout(function (){
					that.fadeOut(function(){that.remove();});
				}, opts.staytime);
			}
		});
		function createHtml (){
			var iconType = null, closeBtn = "";
			switch(opts.type){
				case "success":
				iconType = "icon-success";
				break;
				case "error":
				iconType = "icon-warning1";
				break;
				case "notice":
				iconType = "icon-warning1";
				break;
				case "warning":
				iconType = "icon-warning";
				break;
			};
			if(opts.model === "alert"){
				closeBtn = '<i class="simple-toast-close iconfont icon-error"></i>';
			};
			
			var html = '<div class="simple-toast-pop">' +
							closeBtn +
							'<div class="simple-toast-icon">' +
								'<i class="iconfont '+ iconType +' '+ opts.type +'"></i>' +
							'</div>' +
							'<div class="simple-toast-message">' +
								'<p>'+ opts.content +'</p>' +
							'</div>' +
						'</div>';
			return html;
		};
	};
	SimpleToast.OPTIONS = {
		type: "success",   // 'error','warning','notice'
		staytime: 1000,   // at this time toast fading out
		content: "Success!",  // words in the toast text
		model: "toast" //'toast' fadeOut at optstime or 'alert' with closebtn
	};

	return {
		SimpleToast: SimpleToast
	};
});