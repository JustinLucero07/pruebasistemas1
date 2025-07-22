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
  nuevaPersona = { nombre: '', edad: 0};

  constructor(private universidads: UniversidadserviceService) {}

  ngOnInit(): void {
    this.cargarPersonas();
  }

  cargarPersonas(): void {
    this.universidads.listarPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  agregarPersona(): void {
    if (this.nuevaPersona.nombre) {
      this.universidads.agregarPersona(this.nuevaPersona).subscribe(() => {
        this.cargarPersonas(); 
        this.nuevaPersona = { nombre: '', edad: 0}; 
      });
    }
  }
}
