import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNGModule } from './prime-ng/prime-ng.module';
import { LoginComponent } from './persona/login/login.component';
import { PreguntasComponent } from './persona/preguntas/preguntas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule} from '@angular/fire/compat'
import { NavbarComponent } from './navbar/navbar.component';
import { RegistroComponent } from './persona/registro/registro.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AnswerComponent } from './paginas/answer/answer.component';
import { QuestionComponent } from './paginas/question/question.component';
import { ToastModule } from 'primeng/toast';
import { ToastrModule } from 'ngx-toastr';
import { RequestionComponent } from './paginas/requestion/requestion.component';
import { EditComponent } from './paginas/edit/edit.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { EditAnswerComponent } from './paginas/edit-answer/edit-answer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreguntasComponent,
    NavbarComponent,
    RegistroComponent,
    AnswerComponent,
    QuestionComponent,
    RequestionComponent,
    EditComponent,
    EditAnswerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNGModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    NgbModule,
    FormsModule,
    MatCardModule,
   InfiniteScrollModule,
   ScrollingModule,
    ToastrModule.forRoot(),
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth())



  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
