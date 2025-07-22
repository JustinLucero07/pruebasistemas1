import { Component } from '@angular/core';
import { UniversidadserviceService } from '../universidadservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-universidad',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './universidad.component.html',
  styleUrl: './universidad.component.scss'
})
export class UniversidadComponent {
 personas: any[] = [];
  nuevaPersona = { nombre: ''};

  constructor(private universidads: UniversidadserviceService) {}

  ngOnInit(): void {
    this.cargarUniverisadd();
  }

  cargarUniverisadd(): void {
    this.universidads.listarUniversidades().subscribe(data => {
      this.personas = data;
    });
  }

  agregarUniversidad(): void {
    if (this.nuevaPersona.nombre) {
      this.universidads.crearUniversidad(this.nuevaPersona).subscribe(() => {
        this.cargarUniverisadd(); 
        this.nuevaPersona = { nombre: ''}; 
      });
    }
  }
}
