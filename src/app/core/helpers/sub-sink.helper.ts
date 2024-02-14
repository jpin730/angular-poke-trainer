import { Subscription } from 'rxjs'

export class SubSink {
  private _subscription = new Subscription()

  set sink(subscription: Subscription) {
    this._subscription.add(subscription)
  }

  unsubscribe() {
    this._subscription.unsubscribe()
  }
}
