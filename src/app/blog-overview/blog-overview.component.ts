import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogOverviewService } from './../blog-overview.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.css']
})
export class BlogOverviewComponent implements OnInit {
  blogEntries: Blog[] = [];

  constructor(private blogOverviewService: BlogOverviewService, private router: Router) { }

  ngOnInit(): void {
    this.getAll();
  }

  routeDetailPage(i) {
    this.router.navigate(['detail'], {queryParams: {index: i}})
  }

  async getAll() {
    this.blogEntries = await this.blogOverviewService.getAll();
  }
}
