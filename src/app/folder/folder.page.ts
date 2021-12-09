import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public boy:number=0;
  public kilo:number=0;
  public sonuc:number=0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  hesapla(){
    this.sonuc = (this.kilo/((this.boy/100)*(this.boy/100)));
    console.log("boy:"+this.boy+" kilo:"+this.kilo+" SONUÇ:"+this.sonuc);
  }
}
