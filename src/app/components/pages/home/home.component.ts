import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../../services/setup.service';
import { Setup } from '../../../Setup';
import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  allSetups: Setup[] =[]
  setups: Setup[] = []
  baseApiUrl = environment.baseApiUrl

  faSearch = faSearch
  searchTerm: string =""

  constructor(private setupService: SetupService){

  }

  ngOnInit(): void {
    this.setupService.getSetups().subscribe((items)=>{
      const data = items.data
      data.map((item)=>{
        item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR')
      })

      this.allSetups = data
      this.setups = data
    })
  }

  search(e:Event):void{
    const target = e.target as HTMLInputElement
    const value = target.value
    this.setups = this.allSetups.filter(setup =>
      setup.title.toLowerCase().includes(value))
  }
}
