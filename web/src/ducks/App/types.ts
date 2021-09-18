
export const ActionTypes = {
  SET_FOUND_ITEMS_BY_SEARCH: 'APP/SET_FOUND_ITEMS_BY_SEARCH',
  SET_ERROR: 'APP/SET_ERROR',
  KEY_SEARCH: 'APP/KEY_SEARCH',
  SET_SCREEN: 'APP/SET_SCREEN',

}

export interface SearchState {
  readonly screen?: string;
  readonly error?: string;
  readonly foundItensBySearch?: any[];
  readonly theme?: Theme;
  readonly keySearch?: string;
}

export interface SearchAction {
  readonly type: string;
  readonly payload?: SearchState;
}

export interface Theme {
  MODE: string;
  BACKGROUND_IMAGE: string;
  LOGO_IMAGE: string;
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  SECONDARY_TEXT_COLOR?: string;
  ICON_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  PRIMARY_BUTTON_TEXT_COLOR: string;
  PROGRESS_BAR_COLOR: string;
  STATUS_BAR_STYLE: 'default' | 'light-content' | 'dark-content' | undefined;
  STATUS_BAR_COLOR: string;
  TOP_BAR_COLOR: string;
}
