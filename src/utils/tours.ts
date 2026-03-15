export interface Tour {
  id: number;
  title: string;
  description: string;
  category_name: string;
  duration: string;
  price: string;
  image: string | null;
  slug: string | null;
  tags_names?: string[];
  views?: number;
}

export const DEFAULT_TOUR_IMAGE = '/tour.jpg';

export const getTourFallbackImage = (tour: Pick<Tour, 'slug' | 'title'>) => {
  if (tour.slug === 'umra-safari-2025') {
    return '/umra_tour_image_1773558901840.png';
  }

  if (tour.slug === 'turkiya-sayohati') {
    return '/turkey_tour_image_1773558917457.png';
  }

  if (tour.title.toLowerCase().includes('umra')) {
    return '/umra_tour_image_1773558901840.png';
  }

  if (tour.title.toLowerCase().includes('turkiya')) {
    return '/turkey_tour_image_1773558917457.png';
  }

  return DEFAULT_TOUR_IMAGE;
};

export const normalizeTourImage = (
  tour: Pick<Tour, 'image' | 'slug' | 'title'>,
  backendUrl: string,
) => {
  if (!tour.image) {
    return getTourFallbackImage(tour);
  }

  if (tour.image.startsWith('http')) {
    return tour.image;
  }

  return `${backendUrl}${tour.image}`;
};

export const normalizeTour = (tour: Tour, backendUrl: string): Tour => ({
  ...tour,
  image: normalizeTourImage(tour, backendUrl),
});
