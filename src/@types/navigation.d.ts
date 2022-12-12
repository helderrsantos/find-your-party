import { IEventDTO } from './event';

export type ParamList = {
  Home: undefined;
  Event: { category: string };
  Details: { event: IEventDTO };
  Cart: undefined;
  Tickets: undefined;
};
