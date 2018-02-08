import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
// import { DomSanitizer } from '@angular/platform-browser';
// import { MatIconRegistry } from '@angular/material';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    showTopTop: boolean;
    upOrdown: any;
    @Output() sidebar = new EventEmitter<void>();
    @Output() toggleDarkTheme = new EventEmitter<boolean>();
    constructor() {
        this.upOrdown = 'down';
        // iconRegistry.addSvgIcon('hide', sanitizer.bypassSecurityTrustResourceUrl('assets/svgicon/hide.svg'));
    }

    manageSidebar(position: any) {
        this.sidebar.emit(position);
    }

    onChange(checked: any) {
        this.toggleDarkTheme.emit(checked.checked);
    }

    down() {
        this.showTopTop = true;
    }

    up() {
        this.showTopTop = false;
    }
}
