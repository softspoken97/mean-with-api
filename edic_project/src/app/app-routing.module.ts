import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { EsriComponent } from './datacomponents/esri/esri.component';
import { MetacrawlComponent } from './datacomponents/metacrawl/metacrawl.component';
import { ExperimentComponent } from './datacomponents/experiment/experiment.component';
import { StepperComponent } from './datacomponents/stepper/stepper.component';

import { HomeComponent } from './datacomponents/home/home.component';

// List components
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { OccurrenceListComponent } from './datacomponents/occurrence/occurrence-list/occurrence-list.component';
import { ScenarioListComponent } from './datacomponents/scenario/scenario-list/scenario-list.component';
import { LayerListComponent } from './datacomponents/layers/layer-list/layer-list.component';
import { AlgorithmListComponent } from './datacomponents/algorithm/algorithm-list/algorithm-list.component';



const routes: Routes = [
  { path: '', component: ExperimentComponent },
  { path: 'create', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'edit/:postId', component: PostCreateComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'esri', component: EsriComponent },
  { path: 'metacrawl', component: MetacrawlComponent },
  // { path: 'experiment', component: ExperimentComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'algorithm', component: AlgorithmListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'species-list-component', component: SpeciesListComponent },
  { path: 'occurrence-list-component', component: OccurrenceListComponent },
  { path: 'layer-list-component', component: LayerListComponent },
  { path: 'scenario-list-component', component: ScenarioListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule {}
