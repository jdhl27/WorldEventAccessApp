import apiClient from './apiClient';

export interface Event {
  id: string;
  name: string;
  description: string;
  logo: string;
  eventStartDate: string;
  eventEndDate: string;
  address: string;
  organizer: string;
  status: number;
  visitorPrice: number;
  exhibitorPrice: number;
  capacity: number;
  selfRegistration: boolean;
  selfRegistrationDeadline: string;
  manualRegistration: boolean;
  manualRegistrationDeadline: string;
  createdAt: string;
  createdBy: string;
  rooms: string;
  companyCode: string;
  organizerEmail: string;
  hasFreeParking: boolean;
  hasStandardParking: boolean;
  standardParkingPrice: number;
  hasVIPParking: boolean;
  vipParkingPrice: number;
  requireNames: boolean;
  zelleAccount: string;
  cashAppAccount: string;
  earlyBirdTotalTickets: number;
  regularTotalTickets: number;
  lastMinuteTotalTickets: number;
  earlyBirdPrice: number;
  lastMinutePrice: number;
  eventRegistrants: any[];
  eventTickets: any[];
  eventTicketCoupon: any[];
  zellePercentage: number;
  cashPercentage: number;
  zelleFee: number;
  cashFee: number;
  creditCardPercentage: number;
  creditCardFee: number;
}

export const fetchEvents = async (): Promise<Event[]> => {
  const response = await apiClient.get<Event[]>('/Event');
  return response.data;
};

export const getEventById = async (eventId: string): Promise<Event> => {
  const response = await apiClient.get<Event>(`/Event/${eventId}`);

  return response.data;
};
