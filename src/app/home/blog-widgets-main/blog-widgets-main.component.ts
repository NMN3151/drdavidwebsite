import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface ArticleMeta {
  slug: string;
  title: string;
}

@Component({
  selector: 'app-blog-widgets-main',
  templateUrl: './blog-widgets-main.component.html',
  styleUrls: ['./blog-widgets-main.component.css']
})
export class BlogWidgetsMainComponent implements OnInit {

  currentSlug = '';

  private readonly articles: ArticleMeta[] = [
    { slug: '3-ways-to-supercharge-your-employee-reviews',            title: '3 Ways To Supercharge Your Employee Reviews' },
    { slug: 'from-good-to-great-ceo-cfo-relationship',                title: 'From good to great, how to strengthen the CEO-CFO relationship' },
    { slug: 'principles-and-practices-to-supercharge',                title: 'Principles And Practices To Supercharge' },
    { slug: '5-ways-to-engage-at-a-higher-level',                     title: '5 ways to engage at a higher level with colleagues and team members' },
    { slug: 'rural-hospitals-struggle-under-private-equity-ownership', title: 'Rural Hospitals Struggle Under Private Equity Ownership' },
    { slug: 'ksb-hospital-leader-shares-implemented-ideas',           title: 'The leader of Katherine Shaw Bethea Hospital shares how some implemented ideas have fared' },
    { slug: 'rural-hospital-ceo-local-ownership-vs-private-equity',   title: 'Why One Rural Hospital CEO Advocates For Local Ownership Over Private Equity' },
    { slug: 'assessing-impact-private-equity-rural-hospitals',        title: 'Assessing the impact of private equity ownership on rural hospitals' },
    { slug: 'impact-private-equity-firms-rural-hospitals',            title: 'The Impact of Private Equity Firms on Rural Hospitals' },
    { slug: 'current-model-doesnt-work-illinois-hospital-ceo',        title: "The current model doesn't work: Illinois hospital CEO on private equity hospital acquisition" },
    { slug: 'giving-his-best',                                         title: 'Giving His Best' },
    { slug: 'lessons-from-children-leading-with-authentic-love',      title: 'Lessons from Children: Leading with Empowering Authentic Love' },
    { slug: 'turnover-trouble',                                        title: 'Turnover Trouble' },
    { slug: 'gratuity',                                                title: 'Gratuity' },
    { slug: 'leading-with-love',                                       title: 'Leading With Love' },
    { slug: 'healthcare-is-a-right',                                   title: 'Healthcare is a Right' },
    { slug: 'not-all-superheroes-wear-capes',                         title: 'Not All Superheroes Wear Capes' },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Read the last segment of the URL as the slug
    this.route.url.subscribe(segments => {
      this.currentSlug = segments[segments.length - 1]?.path ?? '';
    });
  }

  get currentArticle(): ArticleMeta | undefined {
    return this.articles.find(a => a.slug === this.currentSlug);
  }

  goToAllArticles(): void {
    this.router.navigate(['/home/blog']);
  }
}