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
  experienceId: string;
  date: string;
  restaurantName: string;
  restaurantId: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  personName: string;
  personId: string;
  rating: number;
  dishes: Dish[];
  notes?: string;
}

export interface Dish {
  imageUrl?: string;
  dishName: string;
  dishDescription?: string;
  rating?: number;
  notes?: string;
}
