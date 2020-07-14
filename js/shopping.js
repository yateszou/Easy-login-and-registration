
const zyc = new Vue({
  el:"#app",
  data:{
    phones:[
      {
        id:1,
        name:"小米10",
        img:"img/xm10_lunbo01.jpg",
        // imgs:[
        //   {img:"img/xm10_lunbo01.jpg"},
        //   {img:"img/xm10_lunbo02.jpg"},
        //   {img:"img/xm10_lunbo03.jpg"},
        //   {img:"img/xm10_lunbo04.jpg"},
        //   {img:"img/xm10_lunbo05.jpg"}
        // ],
        price:20.00,
        count:1
      },
      {
        id:2,
        name:"小米10 Pro",
        img:"img/xm10pro_lunbo01.jpg",
        price:30.00,
        count:1
      },
      {
        id:3,
        name:"Redmi K30",
        img:"img/redmi-k30-1.jpg",
        price:40.00,
        count:1
      },
      {
        id:4,
        name:"Redmi K30 Pro",
        img:"img/redmi-k30-pro-1.jpg",
        price:50.00,
        count:1
      },
    ]
  },
  methods:{
    // getFinalPrice(price){
    //   return "￥" + price.toFixed(2)
    // }
    decrement(index){
      this.phones[index].count --
    },
    increment(index){
      this.phones[index].count ++
    },
    removeHandle(index){
      this.phones.splice(index,1)
    }
  },
  computed:{
    totalPrice(){
      //1.普通for循环
//    let totalPrice = 0
//    for(let i = 0;i < this.books.length;i++){
//      totalPrice += this.books[i].price * this.books[i].count
//    }
//    return totalPrice

      //2.for(let i in this.books)
//		let totalPrice = 0
//		for(let i in this.books){
//			totalPrice += this.books[i].price * this.books[i].count
//		}
//		return totalPrice

      //3.for(let i of this.books)
//			let totalPrice = 0
//			for(let item of this.books){
//				totalPrice += item.price * item.count
//			}
//			return totalPrice

      return this.phones.reduce(function(preValue,phone){
        return preValue + phone.price * phone.count
      },0)
    }
  },
  filters:{
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})

//需求：先把数组内小于100的数字乘以2然后相加
const nums = [10,20,100,120,30,130,40,140]


//es6箭头
let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre,n) => pre + n)
console.log(total)


////链式操作
//let total = nums.filter(function(n){
//	return n < 100
//}).map(function(n){
//	return n * 2
//}).reduce(function(preValue,n){
//	return preValue + n
//},0)
//console.log(total)


////filterh函数使用
//let newNums = nums.filter(function(n){
//	return n<100
//})
//console.log(newNums)

////map函数使用
//let new2Nums = newNums.map(function(n){
//	return n*2
//})
//console.log(new2Nums)

////reduce函数使用
////reduce对数组中所有内容进行汇总
//let total = new2Nums.reduce(function(preValue,n){
//	return preValue + n
//},0)
//console.log(total)