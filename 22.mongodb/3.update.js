var mongoose = require("mongoose");
var db = mongoose.connect("mongodb://localhost:27017/maggiebase");//数据库名字随便起maggiebase
db.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
db.connection.on("open", function () {
    console.log("数据库连接成功");
});
//数据库的集合之结构定义  定义一个骨架（字段的名字和类型）
var PersonSchema = new mongoose.Schema({
    name : String,
    age  : Number,
    email: String
});
//创建一个数据库操作模型 model
var PersonModel = mongoose.model("person", PersonSchema);//person：数据库中的集合名称,当我们对其添加数据时如果person已经存在，则会保存到其目录下，如果未存在，则会创建person集合，然后在保存数据。
PersonModel.update({name:'maggie2'},{$inc:{age:2}},{multi:true},function(err,result){ // age增加2
if(err){  //$inc  = increment累加
  console.error(err);
}else{
    console.log(result);
}
});
PersonModel.remove({age:8},function(err,result){
    if(err){
        console.error(err);
    }else{
        console.log(result);
    }
});

























