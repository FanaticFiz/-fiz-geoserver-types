export interface BBOX {
  minx: number;
  maxx: number;

  miny: number;
  maxy: number;

  crs: string | { '@class': string, $: string };
}
