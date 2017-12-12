// var config 是json对象
var config = {

	//访问网络
	getHttpData: function(aa, cb) { //function中可以传入值，也可以是 function对象
		console.log("getHttpData aa " + aa)
//		console.log("getHttpData cb " +  cb )

		cb({"name":"wj","age":26});//给传入的function返回一个结果

	}

};