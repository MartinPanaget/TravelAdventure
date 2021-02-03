import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogOverviewService } from '../blog-overview.service';
import {ArticleCreateService} from '../article-create.service';

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {
  blogEntries: Blog[] = [];


  constructor(private blogOverviewService: BlogOverviewService, private articleCreateService: ArticleCreateService) {}

  ngOnInit(): void {
    this.getAll();
  }

  async getAll() {
    this.blogEntries = await this.blogOverviewService.getAll();
  }

  async add(title: string, subtitle: string, content:string, author: string) {
    await this.blogOverviewService.add(title, subtitle, content, author);
    this.getAll();
  }
}
