import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NotyService, TodoService } from '@app/services';
import { ModelMetadataService } from 'app/services/model-metadata.service';
import { FormHelper } from 'app/shared/helpers';
import { ITodoModel } from 'app/shared/models/Itodo.model';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  id: any;
  entityName!: string;
  entityOptions: any;
  form!: FormGroup;
  statusOptions = [
    { text: 'TODO', value: 'TODO'},
    { text: 'In-progress', value: 'In-progress'},
    { text: 'Done', value: 'Done'},
  ]

  constructor(private route: ActivatedRoute, private router: Router, private todoService: TodoService,
   private notyService:NotyService,  private metaService: ModelMetadataService, ) { }


  ngOnInit(): void {
    this.route.params.subscribe(x => {
      const id = x['id'];
      if (Number(id)) {
        this.id = id;
        this.todoService.get<ITodoModel>(id).subscribe((response: ITodoModel) => {
          this.form = FormHelper.toFormGroup(this.metaService.getTodoMeta(), response);
        });
      } else {
        const model = <ITodoModel>{ targetDate: new Date() };
        this.form = FormHelper.toFormGroup(this.metaService.getTodoMeta(), model);
      }
    });
  }


  onSubmit() {
    console.log('log')
    if (this.form.valid) {
      this.todoService.put(this.form.value).subscribe((response) => {
        if (response) {
          this.notyService.notifySuccess('Collection is saved successfully');
          this.ngOnInit();
        }
      });
    }
  }

}
