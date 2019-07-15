/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { User_postComponent } from './user_post.component';

describe('User_postComponent', () => {
  let component: User_postComponent;
  let fixture: ComponentFixture<User_postComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User_postComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User_postComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
