import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WordsService {
  constructor(private http: HttpClient) {}
}
