
import { IncidentService } from './incident.service';
import { Incident } from './incident';
// import{ no_schema_errors} from angular/core;
import { from } from 'rxjs';
import { core } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('incidentservice', () => {
  let service: IncidentService

  beforeEach(() => {
  
    schemas: [NO_ERRORS_SCHEMA]  
  })

  it('should have no messages to start', () => {
    service = new IncidentService();

    expect(service.createIncident.length).toBe(0);
  })

  it('should create a incident when create is called', () => {
    service = new IncidentService();

    service.createIncident;

    expect(service.createIncident.length).toBe(1);
  })

  //  it('should remove all messages when clear is called', () => {
  // //   service = new MessageService();
  // //   service.add('message1');

  // //   service.clear();

  // //   expect(service.messages.length).toBe(0);
  // // })

})