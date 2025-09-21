import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-entrada-page',
  imports: [ReactiveFormsModule],
  templateUrl: './registrar-entrada-page.component.html'
})
export default class RegistrarEntradaPageComponent { 
   fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(false)

  entradaForm = this.fb.group({
    tipoEntrada: ['', [Validators.required, Validators.minLength(3)]],
    monto: ['', [Validators.required, Validators.minLength(6)]],
    fecha: ['', [Validators.required, Validators.minLength(6)]],
    facturaUrl: ['']



  });
  onSubmit(){
    if(this.entradaForm.invalid) {
      this.hasError.set(true)
      setTimeout(() => {
        this.hasError.set(false);
      },2000)
      return;
    }
    const { tipoEntrada,monto,facturaUrl,fecha } = this.entradaForm.value;
    console.log({ tipoEntrada,monto,facturaUrl,fecha });
    
    }

}
