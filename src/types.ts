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
    rating: number;
    photos: string[];
    dishes: string[];
    notes: string;
}