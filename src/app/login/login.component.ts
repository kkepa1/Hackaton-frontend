import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private _router: Router
        ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.authenticationService.signIn(this.form).subscribe(() => {
      this._router.navigate(['main-page']);
    }, () => {
      Swal.fire({
        icon: 'error',
        title: 'Podana nazwa użytkownika lub hasło są niepoprawne!',
        text: 'Spróbuj ponownie!'
      });
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
