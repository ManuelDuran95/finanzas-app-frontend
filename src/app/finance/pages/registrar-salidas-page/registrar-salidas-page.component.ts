import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SalidasService } from '../../services/salidas.service';
import { Salida } from '../../interfaces/salidas.interface';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-registrar-salidas-page',
  imports: [ReactiveFormsModule, MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,],
  templateUrl: './registrar-salidas-page.component.html',
})
export default class RegistrarSalidasPageComponent {
  private salidasService = inject(SalidasService);
  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);

  salidaForm = this.fb.group({
    tipoSalida: ['', [Validators.required, Validators.minLength(3)]],
    monto: ['', [Validators.required, Validators.minLength(1)]],
    fecha: ['', [Validators.required, Validators.minLength(6)]],
    facturaUrl: [''],
  });
  onSubmit() {
    console.log(this.salidaForm.value);
    if (this.salidaForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const { tipoSalida, monto, facturaUrl, fecha } = this.salidaForm.value;
    console.log({ tipoSalida, monto, facturaUrl, fecha });
    const newEntrada: Salida= {
      Tipo_salida: tipoSalida!,
      Monto: this.salidaForm.value.monto!.toString(),
      Factura: facturaUrl || '',
      Fecha: this.convertDate(fecha!),
      id_usuario: '1',
    };
     this.salidasService.create(newEntrada).subscribe(
      (resp) => {
        console.log('Entrada creada:', resp);
        this.salidaForm.reset();
      },
      (error) => {
        console.error('Error al crear la entrada:', error);
      }
    );



  }


  convertDate(date: string): string {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
