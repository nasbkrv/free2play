import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gameFilter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(games: any[], allGames: any[], ...args: any): any[] {
    if (!games) {
      return [];
    }
    if (
      args.every((arg: string) => {
        return !arg || arg == '';
      })
    ) {
      return games;
    }
    let filteredGames: any[] = allGames;

    args.forEach((filter: string) => {
      if (filter && filter != '') {
        let indexOfFilter = args.indexOf(filter);

        switch (indexOfFilter) {
          case 0:
            filteredGames = filteredGames.filter((game) => {
              return game['title']
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase());
            });
            break;
          case 1:
            filteredGames = filteredGames.filter((game) => {
              return game['genre']
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase());
            });
            break;
          case 2:
            filteredGames = filteredGames.filter((game) => {
              return game['platform']
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase());
            });
            break;
          case 3:
            filteredGames = filteredGames.filter((game) => {
              return game['publisher']
                .toLocaleLowerCase()
                .includes(filter.toLocaleLowerCase());
            });
            break;
        }
      }
    });

    return filteredGames;
  }
}

@Pipe({
  name: 'searchPublisher',
  pure: false,
})
export class PublisherPipe implements PipeTransform {
  transform(publishers: any[], textSearch: string): any[] {
    if (!publishers) {
      return [];
    }
    if (!textSearch) {
      return publishers;
    }
    textSearch = textSearch.toLocaleLowerCase();

    return publishers.filter((publisher) => {
      return publisher.toLocaleLowerCase().includes(textSearch);
    });
  }
}

@Pipe({
  name: 'convertToString',
  pure: false,
})
export class ConvertToStringPipe implements PipeTransform {
  transform(unkn: any, type?: string): any {
    if (type) {
      if (type == 'upper') {
        unkn = unkn.toString().toUpperCase();
      } else if (type == 'lower') {
        unkn = unkn.toString().toLowerCase();
      }
    }
    return unkn;
  }
}
