import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsFormComponent } from './forms/jobs-form/jobs-form.component';
import { LoginComponent } from './login/login.component';
import { UserSettingsComponent } from './user-panel/user-settings/user-settings.component';
import { UserInboxComponent } from './user-panel/user-inbox/user-inbox.component';
import { UserHomeComponent } from './user-panel/user-home/user-home.component';
import { UserLiveFeedsComponent } from './user-panel/user-live-feeds/user-live-feeds.component';
import { UserSideNavComponent } from './user-panel/user-side-nav/user-side-nav.component';
import { UserRightColComponent } from './user-panel/user-right-col/user-right-col.component';
import { HrDashboardComponent } from './hr-panel/hr-dashboard/hr-dashboard.component';
import { HrSettingsComponent } from './hr-panel/hr-settings/hr-settings.component';
import { HrProfileComponent } from './hr-panel/hr-profile/hr-profile.component';
import { HrSearchComponent } from './hr-panel/hr-search/hr-search.component';
import { CandidateListComponent } from './hr-panel/candidate-list/candidate-list.component';
import { CandidateViweComponent } from './hr-panel/candidate-viwe/candidate-viwe.component';
import { HrInboxComponent } from './hr-panel/hr-inbox/hr-inbox.component';
import { HrSideNavComponent } from './hr-panel/hr-side-nav/hr-side-nav.component';
import { UserReplyComponent } from './user-panel/user-reply/user-reply.component';
import { UserProfileComponent } from './user-panel/user-profile/user-profile.component';
import { UserSavedJobsComponent } from './user-panel/user-saved-jobs/user-saved-jobs.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'header', component: HeaderComponent},
  {path:'footer', component: FooterComponent},
  {path:'jobs', component: JobsComponent},
  {path:'joblist', component: JobsListComponent},
  {path:'jobdetails', component: JobDetailsComponent},
  {path:'jobsform', component: JobsFormComponent},
  {path:'login', component: LoginComponent},
  {path:'user-home', component: UserHomeComponent},
  {path:'user-inbox', component: UserInboxComponent},
  {path:'user-live-feeds', component: UserLiveFeedsComponent},
  {path:'user-settings', component: UserSettingsComponent},
  {path:'user-side-nave', component: UserSideNavComponent},
  {path:'user-right-nav', component: UserRightColComponent},
  {path:'hr-dashboard', component: HrDashboardComponent},
  {path:'hr-settings', component: HrSettingsComponent},
  {path:'hr-profile', component: HrProfileComponent},
  {path:'hr-search', component: HrSearchComponent},
  {path:'candidate-list', component: CandidateListComponent},
  {path:'candidate-view', component: CandidateViweComponent},
  {path:'hr-inbox', component: HrInboxComponent},
  {path:'hr-side-nav', component: HrSideNavComponent},
  {path:'user-reply', component: UserReplyComponent},
  {path:'user-profile', component: UserProfileComponent},
  {path:'user-saved-jobs', component: UserSavedJobsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  JobsComponent,
  JobsListComponent,
  JobDetailsComponent,
  JobsFormComponent,
  LoginComponent,
  UserSettingsComponent,
  UserInboxComponent,
  UserHomeComponent,
  UserLiveFeedsComponent,
  UserSideNavComponent,
  UserRightColComponent,
  HrDashboardComponent,
  HrSettingsComponent,
  HrProfileComponent,
  HrSearchComponent,
  CandidateListComponent,
  CandidateViweComponent,
  HrInboxComponent,
  HrSideNavComponent,
  UserReplyComponent,
  UserProfileComponent,
  UserSavedJobsComponent
]
