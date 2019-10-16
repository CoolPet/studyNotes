export default{
    template:`
        <div>
            <h2>{{message}}</h2>
            <h2>{{name}}</h2>
            <button @click="btnClick">按钮</button>
        </div>
    `,
    data(){
        return{
            message: "Hello World",
            name: "coderwhy"
        }
    },
    methods:{
        btnClick(){
            console.log("我是按钮")
        }
    }
}