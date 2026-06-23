import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, catchError, of } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PayloadMedia {
  id: string;
  alt: string;
  url: string;
  thumbnailURL?: string;
  filename: string;
  mimeType: string;
  sizes?: {
    thumbnail?: { url: string };
    hero?: { url: string };
  };
}

export interface HeroSection {
  blockType: 'hero';
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: PayloadMedia;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSection {
  blockType: 'features';
  sectionTitle: string;
  sectionSubtitle?: string;
  features: Feature[];
}

export interface CtaSection {
  blockType: 'cta';
  headline: string;
  subheadline?: string;
  buttonText: string;
  buttonLink?: string;
  backgroundColor: 'primary' | 'dark' | 'light' | 'white';
}

export interface RichTextSection {
  blockType: 'richText';
  content: any;
}

export interface RegistrationFormSection {
  blockType: 'registrationForm';
  title: string;
  subtitle?: string;
  submitButtonText: string;
  successMessage: string;
}

export type PageSection = HeroSection | FeaturesSection | CtaSection | RegistrationFormSection | RichTextSection;

export interface PayloadPage {
  id: string;
  title: string;
  slug: string;
  metaDescription?: string;
  sections: PageSection[];
  status: 'draft' | 'published';
  updatedAt: string;
  createdAt: string;
}

export interface PayloadApiResponse<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

@Injectable({
  providedIn: 'root',
})
export class PayloadService {
  private apiUrl = environment.payloadApiUrl;

  constructor(private http: HttpClient) {}

  getPageBySlug(slug: string): Observable<PayloadPage | null> {
    return this.http
      .get<PayloadApiResponse<PayloadPage>>(`${this.apiUrl}/pages`, {
        params: {
          where: JSON.stringify({ slug: { equals: slug } }),
          depth: '2',
        },
      })
      .pipe(
        map((response) => response.docs[0] || null),
        catchError(() => of(null)),
      );
  }

  getMediaUrl(media: PayloadMedia | undefined, size?: string): string {
    if (!media) return '';
    if (size && media.sizes?.[size as keyof typeof media.sizes]) {
      return media.sizes[size as keyof typeof media.sizes]!.url;
    }
    return media.url;
  }
}
