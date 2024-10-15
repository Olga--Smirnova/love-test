import { Component, Input, Injectable } from '@angular/core';
import {
    CommonModule, NgFor,
    UpperCasePipe } from '@angular/common';
import { Member } from '../member';

@Component({
    standalone: true,
    selector: 'app-members',
    templateUrl: '../member/member.html',
    imports: [
        CommonModule,
        NgFor,
        UpperCasePipe
    ],
})

@Injectable({
    providedIn: 'root'
})

export class MemberComponent {

    readonly baseUrl = '/assets/images';

    members: Member[] = [
        {
            id: 0,
            name: 'Ольга',
            age: 25,
            city: 'Пермь',
            radius: 500,
            photo: `${this.baseUrl}/olga25.jpg`,
            status: true
        },
        {
            id: 1,
            name: 'Ирина',
            age: 27,
            city: 'Москва',
            radius: 500,
            photo: `${this.baseUrl}/Ирина27.jpg`,
            status: true
        },
        {
            id: 2,
            name: 'Кристина',
            age: 30,
            city: 'Москва',
            radius: 500,
            photo: `${this.baseUrl}/Кристина30.jpg`,
            status: true
        },
        {
            id: 3,
            name: 'Вероника',
            age: 29,
            city: 'Москва',
            radius: 500,
            photo: `${this.baseUrl}/Вероника29.jpg`,
            status: true
        },
        {
            id: 4,
            name: 'Жанна',
            age: 25,
            city: 'Москва',
            radius: 500,
            photo: `${this.baseUrl}/Жанна25.jpg`,
            status: true
        },
        {
            id: 5,
            name: 'Александра',
            age: 32,
            city: 'Москва',
            radius: 500,
            photo: `${this.baseUrl}/Александра32.jpg`,
            status: true
        },
        {
            id: 6,
            name: 'Нина',
            age: 40,
            city: 'Москва',
            radius: 500,
            photo: '',
            status: true
        },
        {
            id: 7,
            name: 'Ольга',
            age: 25,
            city: 'Москва',
            radius: 500,
            photo: '',
            status: true
        },
        {
            id: 8,
            name: 'Маша',
            age: 39,
            city: 'Пермь',
            radius: 500,
            photo: '',
            status: true
        },
        {
            id: 9,
            name: 'Марина',
            age: 27,
            city: 'Москва',
            radius: 500,
            photo: '',
            status: true
        },
        {
            id: 10,
            name: 'Ольга',
            age: 29,
            city: 'Пермь',
            radius: 500,
            photo: '',
            status: true
        },
        {
            id: 11,
            name: 'Катя',
            age: 28,
            city: 'Москва',
            radius: 500,
            photo: '',
            status: true
        },
        {
            id: 12,
            name: 'Эмилия',
            age: 34,
            city: 'Москва',
            radius: 500,
            photo: '',
            status: true
        }
    ];

    getAllMembers(): Member[] {
        return this.members;
      }

    @Input() member!: Member;
}