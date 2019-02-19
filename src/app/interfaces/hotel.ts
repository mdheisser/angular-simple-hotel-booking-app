export interface HotelModel {
  id: String;
  createdAt: Date;
  name: String;
  image: String;
  latitude: Number;
  longitude: Number;
  available: Boolean;
  positiveReviews: Number;
  negativeReviews: Number;
  description: String;
}
