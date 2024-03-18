import { ReactNode } from 'react';
import { BasicStatus, PermissionType, UserStateEnum } from './enum';

export interface UserToken {
  accessToken?: string;
  refreshToken?: string;
}

export interface UserInfo {
  id: string;
  email: string;
  username: string;
  password?: string;
  avatar?: string;
  // role?: Role;
  role?: string[];
  // status?: BasicStatus;
  permissions?: Permission[];
  token?: string;
}

export interface Organization {
  id: string;
  name: string;
  status: 'enable' | 'disable';
  desc?: string;
  order?: number;
  children?: Organization[];
}

export interface Permission {
  id: string;
  parentId: string;
  name: string;
  label: string;
  type: PermissionType;
  route: string;
  status?: BasicStatus;
  order?: number;
  icon?: string;
  component?: string;
  hide?: boolean;
  frameSrc?: string;
  newFeature?: boolean;
  children?: Permission[];
}
export interface NavItem {
  itemKey: string;
  text: string;
  icon?: ReactNode;
  items?: NavItem[];
}

export interface Role {
  id: string;
  name: string;
  label: string;
  status: BasicStatus;
  order?: number;
  desc?: string;
  permission?: Permission[];
}

export interface SystemUser {
  id: string;
  name:string;
  email: string;
  mobile: string;
  age?: number;
  state: UserStateEnum;
  remark?: string;
}