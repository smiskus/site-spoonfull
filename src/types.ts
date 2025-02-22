export interface Restuarant {
  id: string;
  name: string;
  address: string;
  labels: string[];
  avgRating: number;
  lastDateVisited: string;
  experience: Experience[];
}

export interface Experience {
  date: string;
  restaurantName: string;
  restaurantId: string;
  rating: number;
  reviews: Review[];
  notes?: string;
}

export interface Review {
  personName: string;
  personId: string;
  rating: number;
  dishes: Dish[];
}

export interface Dish {
  imageUrl?: string;
  dishName: string;
  dishDescription?: string;
  rating?: number;
  notes?: string;
}
