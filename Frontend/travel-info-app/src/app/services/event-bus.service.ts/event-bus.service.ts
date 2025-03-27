import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { EventData } from '../../shared/event.class';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private eventSubject$ = new Subject<EventData>();

  constructor() { }

  emit(event: EventData) {
    this.eventSubject$.next(event);
  }

  on(eventName: string, action: any): Subscription {
    return this.eventSubject$.pipe(
      filter((e: EventData) => e.name === eventName),
      map((e: EventData) => e["value"])).subscribe(action);
  }
}
