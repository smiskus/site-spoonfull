export interface NewExperience {
  date: string;
  dishes: NewDish[];
  restaurantId?: string;
  newRestaurant?: NewRestaurant;
  rating?: number;
  notes?: string;
}

export interface NewDish {
  name?: string;
  description?: string;
  rating?: number;
  notes?: string;
}

export interface NewRestaurant {
  restaurantName?: string;
  tags?: string[];
  description?: string;
  address?: string;
}
