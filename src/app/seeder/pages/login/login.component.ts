import { Component, OnInit } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ERROR_MESSAGE_MAP } from '../../error.message';
import { AuthService } from '../../../shared/services/http/auth.service';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule, MatCard, MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  hide = true;
  formGroup: FormGroup;
  responseError: string | null = null;

  constructor(private auth: AuthService, private router: Router) {
    this.formGroup = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    })
  }

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe(() => {
      if (!!this.responseError) {
        this.responseError = null
      }
    })
  }



  onLogin() {
    this.auth.login({ ...this.formGroup.value })
      .subscribe((response) => {
        this.router.navigate(["home"]);
      }, (errMessage) => {
        this.responseError = errMessage || 'Invalid credentials'
      })
  }

  getErrorMessage(formControlName: string) {
    return ERROR_MESSAGE_MAP[formControlName][Object.keys(this.formGroup.get(formControlName)?.errors || {})[0]] || ""
  }


}
