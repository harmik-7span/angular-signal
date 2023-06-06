import { ChangeDetectorRef, Component, OnInit, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-signal';
  count = signal(0);
  totalPrice = computed(() => this.count()*10);
  color = computed(() => this.count()>5?'green':'blue');
  e = effect(() => console.log('dh',this.totalPrice()));
  x = signal(5)
  y = signal(6)
  z = computed(()=>this.x()+this.y());
  a = 5;
  b=6;
  c= this.a+this.b;
  
  
  constructor(private change:ChangeDetectorRef){
   console.log('object');
  }

  ngOnInit(): void {
    this.x.set(10) 
    this.a =7;

    
    console.log(this.change.detectChanges());
  }
  
  onInc(){
   
    this.count.update(e=>e+1)
    
  }
  onDec(){
    this.count.update(e=>e-1)
    
  }
}
