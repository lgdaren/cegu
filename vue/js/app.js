new Vue({
	el:'#test',
	data:{
		message:'你好世界，你好李刚!',
		ts:[
			{text:"北京的秋天"},
			{text:"上海的夜"},
			{text:"杭州的夕阳残荷"}
		]
	},
	methods:{
		reverMessage:function(){
			this.message=this.message.split('').reverse().join('');
		},
		results:function(){
			var arr=this.message.split(',');
			this.message=Math.max.apply(null, arr);
			var num1=this.message;
			if(num1%2==0){
				this.message=num1+"最大并且为偶数";
			}else if(num1%2!=0){
				this.message=num1+"最大并且为奇数";
			}
			$(".p").css("color","red")
		}
	}
	
})   