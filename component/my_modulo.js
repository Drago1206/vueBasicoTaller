export  default{

    data(){
        return{
            mensaje: "Gracias por la tortura :3",
            objeto: false,
            button: null,
            objetos:[],
            nuevoobj:'',
            clic: false,
            selec:false,
            elm:false,
            mapes:false,
            nuevoarray:'',
            mapeo:''
        }
    },
    methods:{
        nuevoobjt(){
            this.objetos.push({
                dato: this.nuevoobj
            })
            console.log(this.objetos)
        },
        almacenarray(){

        },
        operacionesarray(){


        },
        primeroo(){
            this.objetos.shift()
        },
        ultimoo(){
            this.objetos.pop()
        },
        comienzo(){
            this.objetos.unshift({
                dato: this.nuevoarray
            })
            console.log(this.objetos)
        },
        final(){
            this.objetos.push({
                dato:this.nuevoarray
            })
        },
        mape(){  this.mapeo.map((caso)=>({caso}))

        }
    }
    

}