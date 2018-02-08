import { LoginComponent } from './login/login.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { routing } from './login.routes';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
      LoginComponent,
      RegisterComponent
  ],
  imports: [
      SharedModule,
      routing
  ],
  providers: [],
})
export class LoginModule { }
