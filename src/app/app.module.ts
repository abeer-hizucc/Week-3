import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HoverComponent } from './hover/hover.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { ParentComponent } from './parent/parent.component';
import { Week3Component } from './week3/week3.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { VulnerableDirectiveDirective } from './vulnerable-directive/vulnerable-directive.directive';
import { XSSAttackComponent } from './xssattack/xssattack.component';
import { DirectiveExampleComponent } from './week3/directive-example/directive-example.component';
import { WhileDirective } from './vulnerable-directive/while.directive';
import { UnlessDirective } from './unless/unless.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HoverComponent,
    GameControlComponent,
    OddComponent,
    EvenComponent,
    ParentComponent,
    Week3Component,
    BasicHighlightDirective,
    BetterHighlightDirective,
    VulnerableDirectiveDirective,
    XSSAttackComponent,
    DirectiveExampleComponent,
    WhileDirective,UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
