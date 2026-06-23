import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DsModule } from '@githubanotaai/design-system';

import { PayloadService, PayloadPage } from '../../services/payload.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, DsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit, OnDestroy {
  page: PayloadPage | null = null;
  loading = true;
  error: string | null = null;

  private routeSub?: Subscription;

  constructor(
    private payloadService: PayloadService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || 'home';
      this.loadPage(slug);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  retry(): void {
    const slug = this.route.snapshot.paramMap.get('slug') || 'home';
    this.loadPage(slug);
  }

  private loadPage(slug: string): void {
    this.loading = true;
    this.error = null;
    this.payloadService.getPageBySlug(slug).subscribe({
      next: (page) => {
        this.page = page;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load page content. Please try again later.';
        this.loading = false;
      },
    });
  }

  getMediaUrl(media: any, size?: string): string {
    return this.payloadService.getMediaUrl(media, size);
  }

  openAdmin(): void {
    window.open('http://localhost:3000/admin', '_blank');
  }

  navigateTo(url: string): void {
    if (url) {
      window.location.href = url;
    }
  }
}
