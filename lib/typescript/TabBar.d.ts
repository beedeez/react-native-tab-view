import * as React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Props as IndicatorProps } from './TabBarIndicator';
import { Route, Scene, SceneRendererProps, NavigationState, Layout, Event } from './types';
export declare type Props<T extends Route> = SceneRendererProps & {
    navigationState: NavigationState<T>;
    scrollEnabled?: boolean;
    bounces?: boolean;
    activeColor?: string;
    inactiveColor?: string;
    pressColor?: string;
    pressOpacity?: number;
    getLabelText: (scene: Scene<T>) => string | undefined;
    getAccessible: (scene: Scene<T>) => boolean | undefined;
    getAccessibilityLabel: (scene: Scene<T>) => string | undefined;
    getTestID: (scene: Scene<T>) => string | undefined;
    renderLabel?: (scene: Scene<T> & {
        focused: boolean;
        color: string;
    }) => React.ReactNode;
    renderIcon?: (scene: Scene<T> & {
        focused: boolean;
        color: string;
    }) => React.ReactNode;
    renderBadge?: (scene: Scene<T>) => React.ReactNode;
    renderIndicator: (props: IndicatorProps<T>) => React.ReactNode;
    onTabPress?: (scene: Scene<T> & Event) => void;
    onTabLongPress?: (scene: Scene<T>) => void;
    tabStyle?: StyleProp<ViewStyle>;
    indicatorStyle?: StyleProp<ViewStyle>;
    indicatorContainerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
};
declare type State = {
    layout: Layout;
    tabWidths: {
        [key: string]: number;
    };
};
export default class TabBar<T extends Route> extends React.Component<Props<T>, State> {
    static defaultProps: {
        getLabelText: ({ route }: Scene<Route>) => string;
        getAccessible: ({ route }: Scene<Route>) => boolean;
        getAccessibilityLabel: ({ route }: Scene<Route>) => string;
        getTestID: ({ route }: Scene<Route>) => string;
        renderIndicator: (props: IndicatorProps<Route>) => JSX.Element;
    };
    state: State;
    componentDidUpdate(prevProps: Props<T>, prevState: State): void;
    private measuredTabWidths;
    private scrollAmount;
    private scrollView;
    private getFlattenedTabWidth;
    private getComputedTabWidth;
    private getMemoizedTabWidthGettter;
    private getMaxScrollDistance;
    private getTabBarWidth;
    private normalizeScrollValue;
    private getScrollAmount;
    private resetScroll;
    private handleLayout;
    private getTranslateX;
    render(): JSX.Element;
}
export {};