import {computed} from '@angular/core';
import {EntityId, EntityState} from '@ngrx/signals/entities';
import {signalStoreFeature, type, withComputed, withState , } from '@ngrx/signals'

export type SelectedEntityState = { selectSntityId: EntityId | null};

export function withSelectedEntity<Entity>(){
   return signalStoreFeature(
      {
        state: type<EntityState<Entity>>()
      },
      withState<SelectedEntityState>({selectedentityId : null}),
      withComputed(({ entityMap, selectedEntityId }) => ({
          selecteEntity: computed(() => {
              const selectedId = selecteEntityId();
              return selectedId ? entityMap()[selectedId] : null;
          })
      }))
   )
}