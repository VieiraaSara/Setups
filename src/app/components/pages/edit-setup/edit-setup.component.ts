import { Component, OnInit } from '@angular/core';
import { Setup } from '../../../Setup';
import { SetupService } from '../../../services/setup.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from '../../../services/messages.service';

@Component({
  selector: 'app-edit-setup',
  templateUrl: './edit-setup.component.html',
  styleUrl: './edit-setup.component.css'
})
export class EditSetupComponent implements OnInit{
  setup!:Setup
  btnText: string = 'Editar'


  constructor(
    private setupService: SetupService,
    private route: ActivatedRoute,
    private messageService: MessagesService,
    private router : Router
    ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.setupService.getSetup(id).subscribe((item)=>{
      this.setup = item.data
    })
  }

 async editHandler(setupData: Setup){
    const id = this.setup.id

    const formData = new FormData()

    formData.append('title', setupData.title)
    formData.append('description', setupData.description)

    if(setupData.image){
      formData.append('image', setupData.image)
    }

    await this.setupService.updateSetup(id!, formData).subscribe()

    this.messageService.add(`Setup ${id} foi atualizado com sucesso!`)

    this.router.navigate(['/'])
  }

}
