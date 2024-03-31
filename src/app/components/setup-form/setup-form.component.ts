import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Setup } from '../../Setup';
@Component({
  selector: 'app-setup-form',
  templateUrl: './setup-form.component.html',
  styleUrl: './setup-form.component.css'
})
export class SetupFormComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Setup>()
  @Input() btnText !: string
  @Input() setupData : Setup | null = null
  setupForm !: FormGroup
  
  constructor(){ }

  ngOnInit(): void {
    this.setupForm = new FormGroup({
      id: new FormControl(this.setupData ? this.setupData.id : ''),
      title: new FormControl(this.setupData ? this.setupData.title : ''),
      description: new FormControl(this.setupData ? this.setupData.description : ''),
      image: new FormControl(''),
    });
  }

  get title(){
    return this.setupForm.get('title')!;
  }

  get description(){
    return this.setupForm.get('description')!;
  }

  onFileSelected(event: any){
    const file: File = event.target.files[0]

    this.setupForm.patchValue({image:file})
  }

  submit(){
    if(this.setupForm.invalid){
      return;
    }

    console.log(this.setupForm.value);

    this.onSubmit.emit(this.setupForm.value)
  }
}
