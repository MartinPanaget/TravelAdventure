import { Blog } from './blog';
import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class BlogOverviewService extends Dexie{
  blog: Dexie.Table<Blog, string>;


  constructor() {
    super('TravelBlogDatabase');
  }
  add(title: string, content: string, author: string): Promise<any> {
    const id = uuidv4();
    const date = new Date();
    const createdOn = date.getDate() + "."+ date.getMonth()+ "." + date.getFullYear();
    return this.blog.add({ id, title, content, author, createdOn});
  }

  getAll(): Promise<Blog[]> {
    return this.blog.toArray();
  }
}
