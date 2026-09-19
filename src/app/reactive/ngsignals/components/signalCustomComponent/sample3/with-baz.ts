import {Signal} from '@angular/core';

import {signalStoreFeatur, type, withMsthods} from '@ngrx/signals'

export function withBaz<Foo extends string | number>() {
     return signalStoreFeature(
     {
        prop: type <{foo: Signal<foo>}>(),
        methods : type<{bar(foo: number): void}>(),
        
     },
     withmsthods((store) => ({
        baz(): void {
           const foo = store.foo();
           store.bar(typeof foo === 'number' ? foo : Number(foo))
        },
     } 
     )
} 