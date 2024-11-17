export type SubscriberCallback<M> = (message: M) => void;

export interface ListenerInterface<M> {
  subscribe(label: string, callback: SubscriberCallback<M>): void;
  unsubscribe(label: string): void;

  initListener(): void;
  destroyListener(): void;

  isListenerOn(): boolean;
}
