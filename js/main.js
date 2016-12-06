require.config({
	paths: {'jquery':'jquery-1.9.1'}
});
requirejs(['jquery','simpleToast'], function ($, simpleToast){
	var sToast = new simpleToast.SimpleToast();
	$("#toast").on("click", function (){
		$.proxy(sToast.toasting({model: "alert", content: "成功！", type: "success", staytime: 1400}), sToast)
	});
});