import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogOverviewService } from './../blog-overview.service';
import {ArticleCreateService} from '../article-create.service';

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.css']
})
export class BlogOverviewComponent implements OnInit {
  blogEntries: Blog[] = [];

  constructor(private blogOverviewService: BlogOverviewService) { }

  ngOnInit(): void {
    this.getAll();
  }
  async getAll() {
    this.blogEntries = await this.blogOverviewService.getAll();
  }

  async add(title: string, content: string, author: string) {
    await this.blogOverviewService.add(title, content, author);
    this.getAll();
  }
}
