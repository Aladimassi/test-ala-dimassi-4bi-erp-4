import { Component } from '@angular/core';
import { Jardin } from '../../models/jardin';
import { JardinService } from '../../services/jardin.service';

@Component({
  selector: 'app-list-jardin',
  templateUrl: './list-jardin.component.html',
  styleUrl: './list-jardin.component.css'
})
export class ListJardinComponent {
  jardins: Jardin[] = [];
  searchTerm: string = '';

  filterJardin(): Jardin[] {
    if(this.searchTerm == '' || !this.searchTerm){
      return this.jardins;
    }
    return this.jardins.filter( 
      jardin => 
        jardin.id.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        jardin.adresse.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  constructor(private jardinService: JardinService) { }

  ngOnInit(): void {
    this.jardinService.getAllJardin().subscribe((data)=>{
      this.jardins = data;
    });
  }

  deleteJardin(id: string){
    this.jardinService.deleteJardin(id).subscribe(()=>{
      this.jardins = this.jardins.filter(j => j.id != id);
    });
  }
}
