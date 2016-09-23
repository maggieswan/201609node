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
//创建entity  可以操作数据库
var personEntity = new PersonModel({
    name : "maggiename",
    age  : 6,
    email: "maggie@qq.com"
});
 //entity只有一个方法 就是save方法  把自己保存到数据库里面
personEntity.save(function(error,doc){ //coc 放着保存之后的最新信息
    if(error){
        console.log("error :" + error);
    }else{
        console.log(doc);
    }
});
//create也能够用了对数据进行保存，可以省略定义entity这一步
PersonModel.create({ name:"maggie2", age:7,email:'sdf'}, function(error,doc){
    if(error) {
        console.log(error);
    } else {
        console.log(doc);
    }
});
PersonModel.find({},function(err,docs){//第一个参数是 查询条件
    //若没有向find传递参数，默认的是显示所有文档
if(err){
console.log('err'+err);
}else{
console.log('docs'+docs); // 数组类型
}
    }
);










