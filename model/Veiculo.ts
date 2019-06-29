export default class Veiculo{
    public modelo:any;
    public montadora:any;
    public cambio:any;
    public numeroSerie:any;
    public proprietario:any;
    public ano:any;


    public constructor(modelo:any,montadora:any,cambio:any,numeroSerie:any,proprietario:any,ano:any){

        this.modelo=modelo;
        this.montadora=montadora;
        this.cambio=cambio;
        this.numeroSerie=numeroSerie;
        this.proprietario=proprietario;
        this.ano=ano;
    }

    public zerar(){

        this.modelo="";
        this.montadora="";
        this.cambio="Manual";
        this.numeroSerie=0;
        this.proprietario="";
        this.ano="";

    }



}