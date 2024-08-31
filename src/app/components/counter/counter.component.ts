import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-counter",
    standalone: true,
    templateUrl : "./counter.component.html",
    styleUrl : "./counter.component.css"
})
export class CounterComponent implements OnInit{
    // public numar=5
    @Input() numar=5
    @Input() min=3
    @Input() max=10
    @Input() step=2

    @Output() numarSchimbat=new EventEmitter<number>()
    minusDezactivat=false
    plusDezactivat=false
    poza="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4slcf45veZzzgVBkL8OpMUuANrqbSv34lRw&s"
    
    ngOnInit(): void {
       this.seteazaButoane()
       this.numarSchimbat.emit(this.numar)
    }

    private seteazaButoane(){
        this.minusDezactivat=false
        this.plusDezactivat=false
        if (this.numar<=this.min){
            this.minusDezactivat=true
        }
        if (this.numar>=this.max){
            this.plusDezactivat=true
        }
    }
    
    amDatClickPeMinus(){
        //this.numar--
        this.numar=this.numar-this.step
        this.seteazaButoane()
        this.numarSchimbat.emit(this.numar)
    }
    
    amDatClickPePlus(){
        this.numar+=this.step
        this.seteazaButoane()
        this.numarSchimbat.emit(this.numar)
    }

}