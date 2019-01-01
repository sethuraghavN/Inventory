import {LoginComponent } from "./login.component";
import { of } from "rxjs";
import { NO_ERRORS_SCHEMA } from "@angular/core";
// import { stringify } from '@angular/core/src/util';

describe('HeroesComponent', () => {
  let component: LoginComponent;
  let loginn;
  let mockloginService;

  beforeEach(() => {
    loginn = [
      {email:{}},
      {password:{}},

    ]

    mockloginService = jasmine.createSpyObj(['login'])

    component = new LoginComponent(mockloginService,loginn);
  })

  describe('login', () => {

    it('should have email and password ', () => {
      mockloginService.login.and.returnValue(of(true))
      component.login = loginn;

      component.login();

      expect(component.login.length).toBe(true);
    })

    it('should call login', () => {
      mockloginService.loginHero.and.returnValue(of(true))
      component.login = loginn;

      component.login();

      expect(mockloginService.deleteHero).toHaveBeenCalledWith(true);
    })
  })
})