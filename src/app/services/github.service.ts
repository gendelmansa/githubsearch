import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
    private username:string;
    private client_id = 'a23d3a6142491659f606';
    private client_secret = '20ad07e0898083cb7c9eff378255501e569c83b0';

    constructor(private _http: Http){ 
        console.log('Github Service Ready...')
        this.username = 'gendelmansa'
    }

    getUser(){
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    getRepos(){
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }
}