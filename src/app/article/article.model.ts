export class Article {
  title: string;
  link: string;
  votes: number;
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }
  // tslint:disable-next-line:typedef
  voteUp(): boolean {
    this.votes += 1;
    return false;
  }
  // tslint:disable-next-line:typedef
  voteDown(): boolean {
    this.votes -= 1;
    return false;
  }
  domain(): string {
    try {
 // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      return domainAndPath.split('/')[0]; } catch (err) {
      return null; }
    }
}
