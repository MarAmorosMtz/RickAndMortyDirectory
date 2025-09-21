import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NgxPaginationModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true
})
export class App {
  p = signal(1);
  paginationId = 'charactersPagination';

  results = resource({
    params: () => ({page: this.p()}),
    loader: async ({params}) => {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${params.page}`);
      return res.json();
    }
  });

  nextPage() {
    const next = this.results.value()?.info.next;
    if (next) {
      this.p.set(this.p() + 1);
    }
  }

  prevPage() {
    if (this.p() > 1) {
      this.p.set(this.p() - 1);
    }
  }

  trackById(index: number, item: any) {
    return item.id;
  }
}
