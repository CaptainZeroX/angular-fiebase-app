import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { DashboarComponent } from './components/dashboar/dashboar.component';
import { VerifyEmailComponentComponent } from './components/verify-email-component/verify-email-component.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SecureInnerPageGuard } from './shared/guard/secure-inner-page.guard';
import { Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent, canActivate: [SecureInnerPageGuard] },
  { path: 'register-user', component: SignUpComponent , canActivate: [SecureInnerPageGuard]},
  { path: 'dashboard', component: DashboarComponent , canActivate: [AuthGuard]},
  { path: 'forgot-password', component: ForgotPasswordComponent }
];