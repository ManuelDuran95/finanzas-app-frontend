import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-salidas-page',
  imports: [ReactiveFormsModule],
  templateUrl: './registrar-salidas-page.component.html'
})
export default class RegistrarSalidasPageComponent { 
   fb = inject(FormBuilder)
  hasError = signal(false)
  isPosting = signal(false)

  salidaForm = this.fb.group({
    tipoSalida: ['', [Validators.required, Validators.minLength(3)]],
    monto: ['', [Validators.required, Validators.minLength(6)]],
    fecha: ['', [Validators.required, Validators.minLength(6)]],
    facturaUrl: ['']



  });
  onSubmit(){
    if(this.salidaForm.invalid) {
      this.hasError.set(true)
      setTimeout(() => {
        this.hasError.set(false);
      },2000)
      return;
    }
    const { tipoSalida,monto,facturaUrl,fecha } = this.salidaForm.value;
    console.log({ tipoSalida,monto,facturaUrl,fecha });
    }
}
