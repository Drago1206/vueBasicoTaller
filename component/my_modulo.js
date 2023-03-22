export  default{

    data(){
        return{
            mensaje: "Gracias por la tortura :3",
            objeto: false,
            button: null,
            objetos:[],
            nuevoobj:'',
            Viearray:" ",
            nuevoarray: ''
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
        operacionescomb(){
            
        }
    }
    

}