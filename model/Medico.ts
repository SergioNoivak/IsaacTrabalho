export default class Medico{


    public nome:String;
    public CRM:String;
    public periodoAtendimento:String;
    public CPF:Number;
    public predio:String;
    public setor:String;


    public constructor( nome:String,CRM:String,periodoAtendimento:String,CPF:Number,predio:String,setor:String){

        this.nome=nome;
        this.CRM=CRM;
        this.periodoAtendimento=periodoAtendimento;
        this.CPF=CPF;
        this.predio=predio;
        this.setor=setor;
    }

}   