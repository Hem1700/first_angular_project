import { Component, OnInit } from "@angular/core";


@Component({
    selector: 'app-test-server',
    templateUrl: './test.component.html'

})


export class TestComponent implements OnInit {

    Username = '';


    constructor() {

    }
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    onResetUsername() {
        this.Username = '';
    }

}