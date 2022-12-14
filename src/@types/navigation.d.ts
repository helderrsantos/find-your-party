import { IEventDTO } from './event';

export type ParamList = {
  Home: undefined;
  Events: { category: string };
  Details: { event: IEventDTO };
  Cart: undefined;
  Tickets: undefined;
};
