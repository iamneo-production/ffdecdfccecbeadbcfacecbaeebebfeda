import { Component ,OnInit} from "@angular/core";

@Component({
selector: "app-root",
templateUrl: "./app.component.html",
styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
ngOnInit(): void {
for(let i=0;i<this.total.length;i++)
{
this.totalCal += (this.total[i].count * this.total[i].calory)
}
}
title = "calorietracker";
hide:boolean = false;
foods = [{name:"Apple",calory:81,image:"https://subzfresh.com/wp-content/uploads/2022/04/apple_158989157.jpg"},
{name:"Banana",calory:105,image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/800px-Banana-Single.jpg"},
{name:"Dates",calory:228,image:"https://media.istockphoto.com/id/1211281586/photo/dates-fruts.jpg?s=612x612&w=0&k=20&c=1mxFE2ws9o_fhqphWMZeZ7ik3z0FROWA5bxL45zzWkw="},
{name:"Grapes(1 cup)",calory:114,image:"https://www.freepnglogos.com/uploads/grapes-png/grapes-dimidwa-12.png"},
{name:"Biscuit",calory:103,image:"https://freepngimg.com/save/137043-sweet-biscuit-png-image-high-quality/500x500"},
{name:"Strawberries",calory:45,image:"https://media.istockphoto.com/id/1157946861/photo/red-berry-strawberry-isolated.jpg?s=612x612&w=0&k=20&c=HyxZMbI_e-vDJbrzZkTz5zWCAo1mBEzWbvVlyigbi-E="}
]
total = [{name:"Apple",calory:81,count:1},{name:"Banana",calory:105,count:2},{name:"Dates",calory:228,
count:3},{name:"Grapes(1 cup)",calory:114,count:3},{name:"Biscuit",calory:103,count:5},{name:"Strawberries",calory:45,count:6}];
totalCal:number = 0;

set(e:any)
{
e.preventDefault()
this.hide = true;

}
addFood(e:any,name:string,calory:string,image:string)
{
e.preventDefault();
this.foods.push({name:name,calory:parseInt(calory),image:image})
console.log(this.foods)
this.hide=false
}

add(name:string,calory:number,count:string)
{
if(count !="")
{
for(let item of this.total){
  if(item.name === name){
    item.count += parseInt(count);
    console.log(this.total);
    this.sum(calory,count);
    return;
  }
}

this.total.push({name:name,calory:calory,count:parseInt(count)})
this.sum(calory,count)
console.log(this.total)
}
}

sum(calory:number,count:string)
{
this.totalCal += (parseInt(count) * calory)
console.log(this.totalCal)
}
}
-------------------------------

4.FILTER.PIPE.TS

import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
name: "filter"
})
export class FilterPipe implements PipeTransform {

transform(value: any,filter:string){
if (filter == ""){
return value;
}
const foods = [];
for(let v of value)
{
if(v.name.includes(filter))
{
foods.push(v);
}
}

return foods;
}

} 