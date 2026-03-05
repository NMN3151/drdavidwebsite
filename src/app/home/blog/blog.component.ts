import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

interface BlogArticle {
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  readonly PAGE_SIZE = 4;

  currentPage = 1;

  allArticles: BlogArticle[] = [
    // Page 1
    {
      title: '3 Ways To Supercharge Your Employee Reviews',
      excerpt:
        'Employee reviews can be a powerful tool for engaging and motivating your team. Here are three rules to help supercharge your employee reviews. By David Schreiner Employee reviews can be fraught with tension on both sides of the table. But it doesn’t have to be...',
      image:
        '../../../assets/images/blogimages/3 Ways To Supercharge Your Employee Reviews.jpg',
      slug: '3-ways-to-supercharge-your-employee-reviews',
    },
    {
      title: 'From good to great, how to strengthen the CEO-CFO relationship',
      excerpt:
        'Beckers - May 2024 Even when the going gets tough, Dixon, Ill.-based Katherine Shaw Bethea Hospital CEO David Schreiner, PhD, and CFO Austin B. Frazier Jr. have successfully collaborated to evolve and develop strategies, with a little bit of laughter, to strengthen their working relationship...',
      image:
        '../../../assets/images/blogimages/From good to great, how to strengthen the CEO-CFO relationship.jpeg',
      slug: 'from-good-to-great-ceo-cfo-relationship',
    },
    {
      title: 'Principles And Practices To Supercharge',
      excerpt:
        'Communications In Your Work Culture By David L. Schreiner, Ph.D., FACHE The room grew quiet. All of the executive team members had shared their thoughts on the topic. The only person not to speak was the CEO. “He always encourages us to speak first, and...',
      image:
        '../../../assets/images/blogimages/Principles And Practices To Supercharge.jpg',
      slug: 'principles-and-practices-to-supercharge',
    },
    {
      title:
        '5 ways to engage at a higher level with colleagues and team members',
      excerpt:
        'You own your own practice and the demands on your time leave you wishing you had more than 24 hours in every day. What if you could invest four minutes in reading this article to realize a rate of return that would allow you to...',
      image:
        '../../../assets/images/blogimages/5 ways to engage at a higher level with colleagues and team members.jpeg',
      slug: '5-ways-to-engage-at-a-higher-level',
    },

    // Page 2
    {
      title: 'Rural Hospitals Struggle Under Private Equity Ownership',
      excerpt:
        'Original article on Electronic Health Reporter By David L. Schreiner, Ph.D., FACHE Private equity ownership of rural hospitals is growing, but so are concerns about the effects private equity firms can have on quality of care in small, community hospitals. A new study reveals that care is riskier...',
      image:
        '../../../assets/images/blogimages/Rural Hospitals Struggle Under Private Equity Ownership.jpg',
      slug: 'rural-hospitals-struggle-under-private-equity-ownership',
    },
    {
      title:
        'The leader of Katherine Shaw Bethea Hospital shares how some implemented ideas have fared',
      excerpt:
        'Orginally posted by HealthLeaders BY Jay Asser, January 30, 2024 Many rural hospital CEOs are searching for answers in their mission to keep the doors open in the face of financial turmoil. For David Schreiner, CEO of Katherine Shaw Bethea Hospital, not every strategy his...',
      image:
        '../../../assets/images/blogimages/The leader of Katherine Shaw Bethea Hospital shares how some implemented ideas have fared.png',
      slug: 'ksb-hospital-leader-shares-implemented-ideas',
    },
    {
      title:
        'WHY ONE RURAL HOSPITAL CEO ADVOCATES FOR LOCAL OWNERSHIP OVER PRIVATE EQUITY',
      excerpt:
        'Original post on HealthLeaders By Jay Asser, January 26,2024 When it comes to patient care, the choice is clear, says David Schreiner. KEY TAKEAWAYS In the United States, at least 386 hospitals have been acquired by private equity firms, with 34% of all private equity-owned hospitals...',
      image:
        '../../../assets/images/blogimages/WHY ONE RURAL HOSPITAL CEO ADVOCATES FOR LOCAL OWNERSHIP OVER PRIVATE EQUITY.png',
      slug: 'rural-hospital-ceo-local-ownership-vs-private-equity',
    },
    {
      title:
        'Assessing the impact of private equity ownership on rural hospitals',
      excerpt:
        'Originally published on DOTmed HealthCare Business News by Gus Iversen, Editor in Chief, January 25, 2024 For better or worse, private equity investment is playing an increasingly central role in healthcare. Dr. David L. Schreiner president of Katherine Shaw Bethea Hospital in Dixon, IL, and author...',
      image:
        '../../../assets/images/blogimages/Assessing the impact of private equity ownership on rural hospitals.png',
      slug: 'assessing-impact-private-equity-rural-hospitals',
    },

    // Page 3
    {
      title:
        'The Impact of Private Equity Firms on Rural Hospitals: A Call for Reform',
      excerpt:
        'Originally published on Medriva By Mason Walker Recent studies have sparked discussions around the role of private equity firms in the acquisition of hospitals and the subsequent impact on patient outcomes. These findings have particularly underscored the potential threat to the independence of rural hospitals...',
      image:
        '../../../assets/images/blogimages/The Impact of Private Equity Firms on Rural Hospitals.png',
      slug: 'impact-private-equity-firms-rural-hospitals',
    },
    {
      title:
        '‘The current model doesn’t work’: Illinois hospital CEO on private equity hospital acquisition',
      excerpt:
        'Dr. David Schreiner speaks candidly about the limitations of current private equity models in healthcare, drawing from real-world experience leading an independent rural hospital in Illinois...',
      image:
        "../../../assets/images/blogimages/The current model doesn’t work  Illinois hospital CEO on private equity hospital acquisition.png",
      slug: 'current-model-doesnt-work-illinois-hospital-ceo',
    },
    {
      title: 'Giving His Best',
      excerpt:
        'Originally published in Dixon Living Fall 2023 David Schreiner knows a few things about leadership. He’s in charge of an operation that employs nearly 1,000 people, a place where decisions can mean the difference between life and death. He’s even earned a degree in the...',
      image: '../../../assets/images/blogimages/Giving_His_Best.jpg',
      slug: 'giving-his-best',
    },
    {
      title: 'Lessons from Children: Leading with Empowering, Authentic Love',
      excerpt:
        'Originally Published in Healthcare Executive NOV/DEC 2023 Written by: David L. Schreiner, PhD, FACHE, president/CEO of Katherine Shaw Bethea Hospital, Dixon, Ill. and Melanie M. Miller, Exceptional Student Education teacher As we gain experience and become wiser with age, it’s important to reflect on the...',
      image:
        '../../../assets/images/blogimages/Lessons from Children Leading with Empowering Authentic Lov.jpg',
      slug: 'lessons-from-children-leading-with-authentic-love',
    },

    // Page 4
    {
      title: 'Turnover Trouble? Hospital CEO Shares Retention Strategies',
      excerpt:
        'Written by Chris Westfall and originally featured in Forbes In 2022, turnover rates for segments of the healthcare industry ranged from 19.5% at hospitals to 65% for at-home care providers to 94% at nursing homes. According to a new report from software company Oracle, this level of...',
      image: '../../../assets/images/blogimages/Turnover Trouble.jpg',
      slug: 'turnover-trouble',
    },
    {
      title: 'Gratuity',
      excerpt:
        "Imagine this. As your health system's CEO, you finish a meeting with a physician, stand to walk them to your office door, and present them with a handheld tablet on which they determine your compensation. The choices are 0%, 10%, 20%, and 25%. The process...",
      image: '../../../assets/images/blogimages/Gratuity.jpg',
      slug: 'gratuity',
    },
    {
      title:
        'Leading With Love: Five Strategies To Engage Your Rural Hospital Board Members',
      excerpt:
        'Published in The Governance Institute, December 2021 I tell our senior leaders that we have twelve Super Bowls every year. These big moments are when we get together to have hospital board meetings, and I want each one to be special for everyone involved. Board...',
      image: '../../../assets/images/blogimages/Leading With Love.jpg',
      slug: 'leading-with-love',
    },
    {
      title: 'Healthcare is a Right',
      excerpt:
        'I believe all Americans deserve access to a medical professional to make them feel better when they’re sick or hurt. In my experience, that access feels even more important when the hurting person is my spouse, a young child or an elderly parent. In situations...',
      image: '../../../assets/images/blogimages/Healthcare is a Right.jpeg',
      slug: 'healthcare-is-a-right',
    },

    // Page 5
    {
      title: 'Not All Superheroes Wear Capes',
      excerpt:
        'The COVID-19 pandemic is surging across our country, and true heroes are emerging. America’s healthcare workers are tirelessly caring for those patients that exhibit symptoms of the virus (fever, dry cough, or shortness of breath). When I see our team members staffing a drive-thru screening...',
      image:
        '../../../assets/images/blogimages/Not All Superheroes Wear Capes.jpeg',
      slug: 'not-all-superheroes-wear-capes',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const page = parseInt(params['page'], 10);
      this.currentPage =
        isNaN(page) || page < 1 ? 1 : Math.min(page, this.totalPages);
    });
  }

  get totalPages(): number {
    return Math.ceil(this.allArticles.length / this.PAGE_SIZE);
  }

  get pageNumbers(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  get pagedArticles(): BlogArticle[] {
    const start = (this.currentPage - 1) * this.PAGE_SIZE;
    return this.allArticles.slice(start, start + this.PAGE_SIZE);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { page },
      queryParamsHandling: 'merge',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  navigateToArticle(article: BlogArticle): void {
    this.router.navigate(['/home', article.slug]);
  }
}
