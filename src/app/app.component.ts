import { Component, inject } from '@angular/core';
import {
    NgIf,
    NgFor,
    UpperCasePipe,
    CommonModule
} from '@angular/common';
import { Member } from "./member";
import { MemberComponent } from './member/member.component';

@Component({
    selector: 'app-root',
    template: `
            <header class="container-fluid px-4 px-lg-5 header">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="w-100 ps-1 ps-lg-2">
                        <h1 class="mb-0 text-center ps-4">{{ title }}</h1>
                    </div>

                    <button class="btn btn-clear pe-0 border-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFilters" aria-expanded="false" aria-controls="collapseFilters">
                        <svg class="icon" viewBox="0 0 18 18"> 
                            <use xlink:href="#humburger-icon" x="0" y="0" />
                        </svg>
                    </button>
                    
                </div>
            </header>

            <div class="container-fluid px-4 px-lg-5 collapse bg-light" id="collapseFilters">
                <div class="row pt-2 pb-3 pt-lg-4 pb-lg-4">
                    <div class="col col-lg-3">
                        <label class="form-label form-label-sm t-sm t-grey mb-1">город</label>
                        <select class="form-select form-select-sm select-filter" aria-label="город" #filter>
                            <option selected value="all">Любой</option>
                            <option value="Москва">Москва</option>
                            <option value="Пермь">Пермь</option>
                        </select>
                    </div>

                    <div class="col col-lg-3">
                        <label class="form-label form-label-sm t-sm t-grey mb-1">возраст</label>
                        <select class="form-select form-select-sm select-filter" aria-label="возраст" #filterAge>
                            <option selected value="0">Любой</option>
                            <option value="25">моложе 25</option>
                            <option value="30">моложе 30</option>
                            <option value="35">моложе 35</option>
                            <option value="40">моложе 40</option>
                        </select>
                    </div>

                    <div class="col col-lg-2 align-self-end">
                        <button class="btn btn-sm btn-primary w-100" type="button" (click)="filterResults(filter.value, filterAge.value)">Filter</button>
                    </div>
                </div>
            </div>

            <div class="container-fluid px-4 px-lg-5 mt-3 mt-lg-2">
                <div class="row">
                    <app-members class="col-6 col-md-4 col-lg-3 card-wrapper" *ngFor="let member of filteredMembers" [member]="member"></app-members>
                </div>
            </div>
           `,
    standalone: true,
    imports: [
        CommonModule,
        MemberComponent
    ],
    styleUrls: ['../styles.css'],
})

export class AppComponent {
    title = 'Поиск пары';

    members: Member[] = [];
    memberComponent: MemberComponent = inject(MemberComponent);
    filteredMembers: Member[] = [];

    constructor() {
        this.members = this.memberComponent.getAllMembers();
        this.filteredMembers = this.members;
      }

    filterResults(city: string, age: string) {
        var inputAge = Number(age);

        if (!city || city=='all' ) {
          this.filteredMembers = this.members;
          //return;
        }else{
            this.filteredMembers = this.members.filter(
                members => members?.city.toLowerCase().includes(city.toLowerCase())
              );
        }

        if (inputAge==0 ) {
            this.filteredMembers = this.filteredMembers;
            return;
          }else{
              this.filteredMembers = this.filteredMembers.filter(
                  members => members?.age<=inputAge
                );
        }
    }

}
