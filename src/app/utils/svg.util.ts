import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
    const imgDir = 'assets/svgicon';
    const dayDir = 'assets/svgicon/days';
    const avatarDIr = 'assets/avatar';
    ir.addSvgIconInNamespace('avatars', 'avatars', ds.bypassSecurityTrustResourceUrl('assets/avatar/avatars.svg'));
    ir.addSvgIcon('hide', ds.bypassSecurityTrustResourceUrl(`${imgDir}/hide.svg`));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${imgDir}/projects.svg`));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${imgDir}/month.svg`));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${imgDir}/week.svg`));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${imgDir}/day.svg`));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(`assets/img/add.svg`));
    ir.addSvgIcon('invite', ds.bypassSecurityTrustResourceUrl(`assets/img/invite.svg`));
    ir.addSvgIcon('edit', ds.bypassSecurityTrustResourceUrl(`assets/img/edit.svg`));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(`assets/img/delete.svg`));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(`assets/img/icons/move.svg`));
    ir.addSvgIcon('add1', ds.bypassSecurityTrustResourceUrl(`assets/img/icons/add1.svg`));
    ir.addSvgIcon('down', ds.bypassSecurityTrustResourceUrl(`assets/img/icons/down.svg`));
    ir.addSvgIcon('clock', ds.bypassSecurityTrustResourceUrl(`assets/img/icons/clock.svg`));
    ir.addSvgIcon('avatar1', ds.bypassSecurityTrustResourceUrl(`assets/avatar/avatar1.svg`));
    ir.addSvgIcon('avatar2', ds.bypassSecurityTrustResourceUrl(`assets/avatar/avatar2.svg`));
    ir.addSvgIcon('avatar3', ds.bypassSecurityTrustResourceUrl(`assets/avatar/avatar3.svg`));
    ir.addSvgIcon('avatar4', ds.bypassSecurityTrustResourceUrl(`assets/avatar/avatar4.svg`));
    ir.addSvgIcon('avatar5', ds.bypassSecurityTrustResourceUrl(`assets/avatar/avatar5.svg`));
    ir.addSvgIcon('down', ds.bypassSecurityTrustResourceUrl(`assets/img/down.svg`));
    ir.addSvgIcon('up', ds.bypassSecurityTrustResourceUrl(`assets/img/up.svg`));
    const day = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ];
    day.forEach(d => {
        ir.addSvgIcon(`日历${d}`, ds.bypassSecurityTrustResourceUrl(`${dayDir}/日历${d}.svg`));
    });
};
