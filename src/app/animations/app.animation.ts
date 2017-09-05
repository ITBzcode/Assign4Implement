import { trigger, state, style, animate, transition } from '@angular/animations';

export function flyInOut() {
    return trigger('flyInOut',[
        state('*', style({ opacity: 1, transform: 'translateX(0)'})),
        transition(':enter', [
            style({ transform: 'translateX(-100%)', opacity:0 }),
            animate('750ms ease-in')
        ]),
        transition(':leave', [
            animate('700ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
        ])
    ]);
}