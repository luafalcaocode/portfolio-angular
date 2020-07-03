import { Component, OnInit, Input, ɵLocaleDataIndex, ElementRef } from '@angular/core';
import { ArticleViewModel } from '../viewModels/article.viewModel';
import { ArticleMock } from './mocks/article.mock';
import { LoaderService } from '../services/layout/loader.service';
import { LoadingService } from '../services/layout/loading.service';
import { CommonService } from '../services/layout/common.service';
import { MenuService } from '../services/layout/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input() article: ArticleMock;
  allArticles: any[];
  comments: any[];
  isLoading: boolean;
  public loading: any;
  id: number;

  defaultStyle: any;


  public articles: ArticleViewModel[];
  public selectedArticle: ArticleViewModel;

  constructor(public loaderService: LoaderService, public commonService: CommonService, public menuService: MenuService, public router: ActivatedRoute, public navigator: Router, public loadingService: LoadingService, public elementRef: ElementRef) {
    this.defaultStyle = {};
  }

  ngOnInit() {
    const nav = (<HTMLElement>document.getElementById('navDesktop'));
    const logo = (<HTMLElement>document.querySelector('a.lcode'));
    const links = document.querySelectorAll('li.item-menu-principal');

    (<HTMLInputElement>document.getElementById('navMobile')).style.backgroundColor = 'black';

    this.defaultStyle.backgroundColor = nav.style.backgroundColor;
    this.defaultStyle.height = nav.style.height;
    this.defaultStyle.paddingTop = nav.style.paddingTop;
    this.defaultStyle.paddingLeft = nav.style.paddingLeft;
    this.defaultStyle.marginTop = nav.style.marginTop;

    nav.style.backgroundColor = '#000';
    nav.style.height = '58px';
    nav.style.paddingTop = '15px';
    nav.style.paddingLeft = '100px';
    logo.style.marginTop = '-8px';

    Array.from(links).forEach((item: HTMLElement) => {
      item.style.fontSize = '17px';
    });

    this.loading = this.elementRef.nativeElement.querySelector('.page-loading');
    this.loadingService.hide(this.loading);
  }

  ngOnDestroy() {
    const nav = (<HTMLElement>document.getElementById('navDesktop'));
    const logo = (<HTMLElement>document.querySelector('a.lcode'));
    const links = document.querySelectorAll('li.item-menu-principal');

    nav.style.backgroundColor =  this.defaultStyle.backgroundColor;
    nav.style.height = this.defaultStyle.height;
    nav.style.paddingTop =  this.defaultStyle.paddingTop;
    nav.style.paddingLeft = this.defaultStyle.paddingLeft;
    nav.style.marginTop = this.defaultStyle.marginTop;
  }
}
