import { Component, OnInit } from '@angular/core';
import { Setup } from '../../../Setup';
import { SetupService } from '../../../services/setup.service';
import { MessagesService } from '../../../services/messages.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-setup',
  templateUrl: './new-setup.component.html',
  styleUrl: './new-setup.component.css'
})
export class NewSetupComponent implements OnInit {
  btnText = "Compartilhar!"

  constructor(
    private setupService:SetupService, 
    private messagesService: MessagesService,
    private router: Router
    ) {}

  ngOnInit(): void {
    
    
  }
  
 async createHandler(setup:Setup){
    const formData = new FormData()

    formData.append('title', setup.title)
    formData.append('description', setup.description)
    if(setup.image){
      formData.append('image', setup.image)
    }
  

// todo

await this.setupService.createSetups(formData).subscribe()

this.messagesService.add("Setup adicionado com sucesso!")

this.router.navigate(['/'])
}
}