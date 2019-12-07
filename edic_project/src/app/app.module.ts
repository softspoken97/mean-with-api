import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSelectModule,
  MatCheckboxModule
} from '@angular/material';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { HeaderComponent } from './structure/header/header.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthInterceptor } from './auth/auth-interceptor';
import { EsriComponent } from './datacomponents/esri/esri.component';
import { MetacrawlComponent } from './datacomponents/metacrawl/metacrawl.component';
import { ExperimentComponent } from './datacomponents/experiment/experiment.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { StepperComponent } from './datacomponents/stepper/stepper.component';
import { MaterialModule } from './datacomponents/stepper/material-module';
import { HomeComponent } from './datacomponents/home/home.component';
import { FooterComponent } from './structure/footer/footer.component';

import { SearchComponent } from './structure/search/search.component';

// List Components
import { SpeciesListComponent } from './species/species-list/species-list.component';
import { ScenarioListComponent } from './datacomponents/scenario/scenario-list/scenario-list.component';
import { LayerListComponent } from './datacomponents/layers/layer-list/layer-list.component';
import { OccurrenceListComponent } from './datacomponents/occurrence/occurrence-list/occurrence-list.component';
import { AlgorithmListComponent } from './datacomponents/algorithm/algorithm-list/algorithm-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    LoginComponent,
    SignupComponent,
    EsriComponent,
    MetacrawlComponent,
    ExperimentComponent,
    StepperComponent,
    AlgorithmListComponent,
    HomeComponent,
    FooterComponent,
    SpeciesListComponent,
    LayerListComponent,
    ScenarioListComponent,
    OccurrenceListComponent,
    SearchComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    MaterialModule
  ],
  entryComponents: [StepperComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
