import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { AbstractControl, FormBuilder } from '@angular/forms';
import Validation from "./validation";
import {AuthenticationService} from "../services/authentication.service";
import {LocalService} from "../services/local.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private _router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
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

    this.authenticationService.signUp(this.form).subscribe(user => {
      LocalService.saveData('user', JSON.stringify(user));
      Swal.fire(
        'Zarejstrowano!',
        'Rejstracja przebiegła poprawnie, zaloguj się!',
        'success'
      ).then(() => this._router.navigate(['login']));
    }, () => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Coś poszło nie tak, spróbuj ponownie!'
      })
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
