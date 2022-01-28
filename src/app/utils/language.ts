export class Language {

  constructor() {
  }

  /**
   * @method setLanguage()
   * @description Set the WebSite language based on the browser language
   */

  public setLanguage(translateService: any): void {
    translateService.setDefaultLang('es');
    translateService.use('es');
    // const setAuthLanguage = (navigator.language.indexOf('-') !== -1) ? navigator.language.substring(0, navigator.language.indexOf('-')) : navigator.language;
    // translateService.use(setAuthLanguage);
  }
}
