import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-test-server',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css'],

})


export class TestComponent implements OnInit {

    Username = '';
    showSecret = false;
    log = [];
    

    constructor() {
    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    onResetUsername() {
        this.Username = '';
    }

    onToggleDetails(){
      this.showSecret = !this.showSecret;
      this.log.push(this.log.length+1);

    }
    

}