import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideBarComponent } from './menu-sidebar.component';

describe('MenuSideBarComponent', () => {
  let component: MenuSideBarComponent;
  let fixture: ComponentFixture<MenuSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuSideBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
