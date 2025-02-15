import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'currency';
  currencies:any=[];
  ToVal:number=0
  selectorF:any
  selectorT:any
  fromVal:number=0
  toVal:any=0
  details1:any
  details2:any

  selectcurF(event:any)
    {
     this.selectorF=event.target.value.split(',')[0] 
     console.log(this.selectorF)
     this.details1=event.target.value.split(',')[1]
    } 
    selectcurT(event:any)
    {
     this.selectorT=event.target.value.split(',')[0] 
     console.log(this.selectorT)
     this.details2=event.target.value.split(',')[1]
    }
 
    async start()
    {
      try{
        const res=await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json')
        const data=await res.json()
        this.currencies=Object.entries(data)
        console.log(this.currencies)

      }
      catch(error)
      {
        console.error(error)
      }
    }

    

    FromCon(event:any)
    {
      this.fromVal=event.target.value;
      console.log(this.fromVal)
    }

    ToCon(event:any)
    {
      this.ToVal=event.target.value;
      console.log(this.toVal)
    }

    async onclick()
    {
      try{
      const res1=await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${this.selectorF}.json`);
      const data1=await res1.json()
      console.log(data1)
      this.ToVal= this.fromVal * data1[this.selectorF][this.selectorT]
      }
      catch(error)
      {
        console.error(error)
      }
    }
  }

