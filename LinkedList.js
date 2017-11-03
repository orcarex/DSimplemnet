//IIFE
(function(){
//implement linked list    

var root = this;
//前置符號
var priviousDSimpl = root.ds;

//List相關屬性
var List = function (){
    this.head = null;
    this.tial = null;
}


//easier to use
//把List的prototype放到ds上
 root.ds = List;

List.prototype = {

    createNode : function(){
        return { data:null,next:null};
    },

    //尾部增加資料
    append : function(data){
        if(this.head === null){
            this.head = this.createNode();
            this.tial = this.head;
        }
        else{
            //下一個list node
            this.tial.next = this.createNode();
            this.tial = this.tail.next;
        }
        //接入data
        this.tial.data = data;
    },

    //從頭插入
    prepend : function(data){
        if(this.head === null){
            this.head = this.createNode();
            this.tial = this.head;
        }
        else{
            //List頭部暫存
            var temp = this.head;
            //創造新的頭部
            this.head = this.createNode();
            //新的頭部next指向舊的頭部
            this.head.next = temp;
        }
        //資料給新的頭部
        this.head.data = data;
    },

    //是空回傳true 不然回傳false
    isEmpty: function(){
        return head === null;
    },

    size : function(){
        var length = 0 ;
        while(List!=null){
            length++;
        }
        return length;
    },

    toString : function() {
        // 建立一個變數幫助迴圈
        let pointer = this.head;
        let string = '';
        // 循序檢查 pointer 指到的 node 是否存在，若存在則串接資料內容成字串
        while(pointer) {
            string += pointer.data;
            // 指到下一個元素
            pointer = pointer.next;
        }
        return string;
    },

    indexOf : function(){

    }

}


//init call
}.call(this))