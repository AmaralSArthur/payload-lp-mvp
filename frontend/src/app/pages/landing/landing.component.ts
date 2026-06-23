import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DsModule } from '@githubanotaai/design-system';

import { PayloadService, PayloadPage } from '../../services/payload.service';
import { environment } from '../../../environments/environment';

interface RegistrationForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, DsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent implements OnInit, OnDestroy {
  page: PayloadPage | null = null;
  loading = true;
  error: string | null = null;

  form: RegistrationForm = { name: '', email: '', company: '', phone: '', message: '' };
  formSubmitted = false;
  formSubmitting = false;
  formError: string | null = null;
  formSuccessMessage = '';

  private routeSub?: Subscription;

  constructor(
    private payloadService: PayloadService,
    private route: ActivatedRoute,
    private http: HttpClient,
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

  submitRegistration(successMessage: string): void {
    if (this.formSubmitting) return;
    this.formSubmitting = true;
    this.formError = null;
    this.formSuccessMessage = successMessage;

    const slug = this.route.snapshot.paramMap.get('slug') || 'home';
    this.http
      .post(`${environment.payloadApiUrl}/registrations`, {
        ...this.form,
        pageSlug: slug,
      })
      .subscribe({
        next: () => {
          this.formSubmitted = true;
          this.formSubmitting = false;
          this.form = { name: '', email: '', company: '', phone: '', message: '' };
        },
        error: () => {
          this.formError = 'Something went wrong. Please try again.';
          this.formSubmitting = false;
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
