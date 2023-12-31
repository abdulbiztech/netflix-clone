import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { AuthService } from './../../../shared/services/auth.service';
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DescriptionPipe } from 'src/app/shared/pipes/description.pipe';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, DescriptionPipe],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  @Input({ required: true }) bannerTitle = '';
  @Input() bannerOverview = '';
  @Input() key = 'HhfrYWxHCJw';
  private sanitizer = inject(DomSanitizer);
  videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['key']) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${this.key}?autoplay=1&mute=1&loop=1&controls=0`
      );
    }
  }
}
