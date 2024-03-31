import { Component, OnInit } from '@angular/core';
import { SetupService } from '../../../services/setup.service';
import { Setup } from '../../../Setup';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { faTimes,faEdit } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { Comment } from '../../../Comment';
import { FormGroup,FormControl,Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrl: './setup.component.css'
})
export class SetupComponent implements OnInit{
  setup?: Setup;

  faTimes = faTimes
  faEdit = faEdit

  baseApiUrl = environment.baseApiUrl

  commentForm!:FormGroup

  constructor(
    private setupService: SetupService,
    private route: ActivatedRoute, 
    private messagesService: MessagesService,
    private router:Router,
    private commentService: CommentService
    ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.setupService
    .getSetup(id)
    .subscribe((item) => (this.setup = item.data))
    this.commentForm = new FormGroup({
      text:new FormControl('',[Validators.required]),
      username:new FormControl('',[Validators.required])
    })
  }

  get text(){
    return this.commentForm.get("text")!
  }

  get username(){
    return this.commentForm.get('username')!
  }

 async removeHandler(id:number){
    await this.setupService.removeSetup(id).subscribe()


    this.messagesService.add("Setup excluído com sucesso!")

    this.router.navigate(['/'])
  }

 async onSubmit(formDirective: FormGroupDirective){
    if(this.commentForm.invalid){
      return
    }

    const data: Comment = this.commentForm.value
    data.setupId = Number(this.setup!.id)

    await this.commentService
    .createComment(data)
    .subscribe((comments) => this.setup!.comments!.push(comments.data))

    this.messagesService.add("Comentário adicionado!")

    this.commentForm.reset()

    formDirective.resetForm();
  }
}
