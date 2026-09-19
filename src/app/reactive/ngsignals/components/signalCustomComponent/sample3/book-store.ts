
import {signalStore} from '@ngrx/signals';
import {withEntites} from '@ngrx/signal/entities';

import {withSelectedEntity} from './with_select_entity';
import {Book} from './interfaceBook'

export const BookStore = signalStore(
    withEntities<book>(),
    withSelectedEntity()
)