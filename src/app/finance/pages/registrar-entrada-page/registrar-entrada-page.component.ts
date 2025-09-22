import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { EntradasService } from '../../services/entradas.service';
import { Entrada } from '../../interfaces/entradas.interface';

@Component({
  selector: 'app-registrar-entrada-page',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './registrar-entrada-page.component.html',
})
export default class RegistrarEntradaPageComponent {
  private entradasService = inject(EntradasService);
  fb = inject(FormBuilder);
  hasError = signal(false);
  isPosting = signal(false);

  entradaForm = this.fb.group({
    tipoEntrada: ['', [Validators.required, Validators.minLength(3)]],
    monto: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.pattern(/^\d+(\.\d{1,2})?$/),
      ],
    ],
    fecha: ['', [Validators.required, Validators.minLength(6)]],
    facturaUrl: [''],
  });
  onSubmit() {
    if (this.entradaForm.invalid) {
      this.hasError.set(true);
      setTimeout(() => {
        this.hasError.set(false);
      }, 2000);
      return;
    }
    const { tipoEntrada, monto, facturaUrl, fecha } = this.entradaForm.value;
    console.log({
      tipoEntrada,
      monto,
      facturaUrl,
      fecha: this.convertDate(fecha!),
    });

    const newEntrada: Entrada = {
      Tipo_entrada: tipoEntrada!,
      Monto: this.entradaForm.value.monto!.toString(),
      Factura: facturaUrl || '',
      Fecha: this.convertDate(fecha!),
      id_usuario: '1',
    };

    this.entradasService.create(newEntrada).subscribe(
      (resp) => {
        console.log('Entrada creada:', resp);
        this.entradaForm.reset();
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
