import { Component, OnInit } from "@angular/core";
import { CardModule } from "primeng/card";
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CommonModule } from '@angular/common';
import { Contact } from "app/products/data-access/contact.model";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
  standalone: true,
  imports: [ CardModule, ButtonModule, InputTextModule, InputTextareaModule, FormsModule, FloatLabelModule, CommonModule],
})
export class ContactComponent implements OnInit {

  message!: Contact
  showMessage!: boolean

  ngOnInit() {
    this.showMessage = false
    this.message = new Contact("","")
  }

  envoieMsg(){
    console.log(this.message.contenu)
    console.log(this.message.email)
    // Il faudrait ajouter une requête (database) pour pouvoir mettre le showmessage en true
    this.showMessage = true

  }
}
