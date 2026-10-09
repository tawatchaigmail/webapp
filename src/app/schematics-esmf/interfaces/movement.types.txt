export interface Movement {
    isMoving: boolean;
    speed: number;
    speedLimitWarning: TrafficLight;
    position: SpatialPosition;
}

export enum TrafficLight {
    Green = 'green',
    Yellow = 'yellow',
    Red = 'red',
}

export interface SpatialPosition {
    latitude: number;
    longitude: number;
    altitude?: number;
}