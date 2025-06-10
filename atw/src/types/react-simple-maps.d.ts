declare module 'react-simple-maps' {
  import { ComponentType, ReactNode } from 'react';

  interface GeographyProps {
    geography: any;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    onClick?: () => void;
    style?: {
      default?: any;
      hover?: any;
      pressed?: any;
    };
  }

  interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: any[] }) => ReactNode;
  }

  interface ComposableMapProps {
    projection?: string;
    projectionConfig?: {
      scale?: number;
      center?: [number, number];
    };
    children?: ReactNode;
  }

  export const ComposableMap: ComponentType<ComposableMapProps>;
  export const Geographies: ComponentType<GeographiesProps>;
  export const Geography: ComponentType<GeographyProps>;
} 