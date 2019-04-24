import { Injectable } from '@angular/core';

/**
 * Messages service
 */
@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  // REDIS??
  /** A cache of messages */
  messages: string[] = [];

  /**
   * add a new message to cache.
   * @param message the new message
   */
  add(message: string): void {
    this.messages.push(message);
  }

  /**
   * clear the cache of messages.
   */
  clear(): void {
    this.messages = [];
  }
}
