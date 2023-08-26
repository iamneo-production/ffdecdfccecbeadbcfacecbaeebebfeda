import { Component,OnInit} from '@angular/core';


interface Fruits{
    name:string
    calory:number;
    image: any;
}
interface Today{
  name:string
  calory:number;
  image: any;
  count : number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'calory';
  visible = false;
  name1 :string = '';
  calory1: string = '';
  image1:any; 
  count1 : string='';
  cal_val :number = 0
  search :string = ''
  openform(){
    this.visible = true;
  }
  fruit :Fruits[] = [{name:'apple',calory:24,image:"..\assets\Images\apple.jpg"},
                    {name:'Banana',calory:24,image:"..\assets\Images\banana.jpg"}];
  today : Today[] =[];


  onKey(event: string){
    this.search = event;
  }
  storevalue(name1:string,calory1:string,image1:any): void{
    let f = {name:name1,calory:Number(calory1),image:image1}
    this.fruit.push(f);
    
  }
  closeform(){
    this.visible = false;
  }
  add(count1:string):void{
    let c = { name:this.name1,calory:Number(this.calory1),image:this.image1,count:Number(count1) }
    this.cal_val+= c.count * c.calory;
    this.today.push(c);
  }  
}