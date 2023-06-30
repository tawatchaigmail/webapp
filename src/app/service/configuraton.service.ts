@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  private configurationSubject = new ReplaySubject<any>(1);

  constructor(private httpClient: HttpClient) {
    this.load();
  }

  // method can be used to refresh configuration
  load(): void {
    this.httpClient.get('/assets/config.json')
      .pipe(
        catchError(() => of(null)),
        filter(Boolean),
      )
      .subscribe((configuration: any) => this.configurationSubject.next(configuration));
  }

  getValue(key: string, defaultValue?: any): Observable<any> {
    return this.configurationSubject
      .pipe(
        map((configuration: any) => configuration[key] || defaultValue),
      );
  }
}
