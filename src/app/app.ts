import { Component, resource, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string };
  location: { name: string };
  episode: string[];
  image: string;
}

interface Episode {
  id: number;
  name: string;
  episode: string;
}

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
  filterCategories = [
    { label: 'All', value: 'all' },
    { label: 'Alive', value: 'alive' },
    { label: 'Dead', value: 'dead' },
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' }
  ];
  selectedCategory = signal('');

  seasons = [
    'Season 1', 'Season 2', 'Season 3', 'Season 4', 
    'Season 5', 'Season 6'
  ];

  selectedSeason = signal('');


  search = signal('');
  showFilters = signal(false);
  selectedFilter = signal('');
  filterValue = signal('');
  episodesBySeason: Record<string, Episode[]> = {};

  results = resource({
    params: () => ({page: this.p()}),
    loader: async ({params}) => {
      const res = await fetch(`https://rickandmortyapi.com/api/character?page=${params.page}`);
      return res.json();
    }
  });

  constructor() {
    this.loadEpisodes();
  }

  async loadEpisodes() {
    let page = 1;
    let episodes: Episode[] = [];
    let totalPages = 1;

    do {
      const res = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
      const data = await res.json();
      episodes.push(...data.results);
      totalPages = data.info.pages;
      page++;
    } while (page <= totalPages);

    episodes.forEach(ep => {
      const season = `Season ${parseInt(ep.episode.slice(1, 3))}`; // "S01E01" -> "Season 1"
      if (!this.episodesBySeason[season]) this.episodesBySeason[season] = [];
      this.episodesBySeason[season].push(ep);
    });
  }

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

  firstPage(){
    this.p.set(1)
  }

  trackById(index: number, item: any) {
    return item.id;
  }

  get filteredResults(): Character[] {
  let list: Character[] = this.results.value()?.results || [];

  if (this.search()) {
    const filter = this.search().toLowerCase();
    list = list.filter(c => c.name.toLowerCase().includes(filter));
  }

  const cat = this.selectedCategory();
  if (cat) {
    list = list.filter(c => {
      switch (cat) {
        case 'all': return true;
        case 'alive': return c.status && c.status == 'Alive';
        case 'dead': return c.status && c.status == 'Dead';
        case 'male': return c.gender && c.gender == 'Male';
        case 'female': return c.gender && c.gender == 'Female';
        default: return true;
      }
    });
  }

  const season = this.selectedSeason();
    if (season && this.episodesBySeason[season]) {
      const episodeUrls = this.episodesBySeason[season].map(e => `https://rickandmortyapi.com/api/episode/${e.id}`);
      list = list.filter(c => c.episode.some(ep => episodeUrls.includes(ep)));
    }

    return list;
  }

  setSeason(season: string) {
    this.selectedSeason.set(season);
  }
}
