// Declare axios types
import { AxiosInstance } from 'axios';

export type ProviderValue = AxiosInstance;
export type DefaultValue = null;
export type ContextValue = DefaultValue | ProviderValue;
