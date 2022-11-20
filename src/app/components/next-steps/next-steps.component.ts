import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserForm } from 'src/app/common/data.interface';
import { userFormStateSelector } from 'src/app/state/form.state';

@Component({
  selector: 'app-next-steps',
  templateUrl: './next-steps.component.html',
  styleUrls: ['./next-steps.component.scss'],
})
export class NextStepsComponent implements OnInit {
  form: FormGroup = this.fb.group(
    {
      gender: this.fb.control('', [Validators.required]),
      firstName: this.fb.control('', [Validators.required]),
      lastName: this.fb.control('', [Validators.required]),
      dateOfBirth: this.fb.control('', [Validators.required]),
      nationality: this.fb.control('', [Validators.required]),
    },
    {
      updateOn: 'blur',
    }
  );
  genderSelection: string;
  test: Observable<UserForm>;

  constructor(private fb: FormBuilder, private store: Store) {
    this.store
      .pipe(select(userFormStateSelector))
      .subscribe((x) => this.form?.patchValue(x));
  }

  ngOnInit(): void {}

  continue() {

  }
}
