import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-input',
  templateUrl: './app-input.component.html',
  styleUrls: ['./app-input.component.scss']
})
export class AppInputComponent implements OnInit {

  @Input() form!: AbstractControl;
  @Input() name!: string;
  @Input() label!: string;
  @Input() type!: string;
  @Input() showInputValidationMessages: boolean = false;
  @Input() tooltiptext!: string;
  @Input() icon!: string;
  @Input() isDisabled!: boolean;
  @Input() floatLabel!: FloatLabelType;
  control!: FormControl;
  isRequired!: boolean;

  constructor() { }

  ngOnInit() {
    // Default type is text
    if (!this.type) {
      this.type = 'text';
    }

    this.control = this.form.get(this.name) as FormControl;
    if (this.control && this.control.validator) {
      const validator = this.control.validator(new FormControl());
      this.isRequired = (validator && validator['required']) ? true : false;
    }

    // Default float type Auto
    if (this.floatLabel) {
      this.floatLabel = 'auto';
    }

  }

}

