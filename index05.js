var app=new Vue({
    el:"#app",
    data:{
        city:"",
    },
    methods:{
        searchWeather:function () {
            axios.get('http://wthrcdn.etouch.cn/weather_mini')
        }
    }
})
