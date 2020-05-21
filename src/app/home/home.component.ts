import { Component, OnInit, ViewChild } from "@angular/core";
import { Autenticacao } from "../autenticacao.service";
import { Progresso } from "../progresso.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  @ViewChild("publicacoes",{static: true})
  public publicacoes: any;

  constructor(private autenticacao: Autenticacao) {}

  ngOnInit() {}

  public sair(): void {
    this.autenticacao.sair();
  }

  public atualizarTimeLine(): void {
   this.publicacoes.atualizarTimeLine()
  }
}
