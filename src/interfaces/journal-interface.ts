export interface NoteInterface {
  id?: string;
  title: string;
  body: string;
  date: Date | number;
  imageUrls?: string[];
}

export interface CloudImageInterface {
  public_id: string;
  secure_url: string;
  asset_id?: string;
  version?: number;
  version_id?: string;
  signature?: string;
  width?: number;
  height?: number;
  format?: string;
  resource_type?: string;
  created_at?: string;
  tags?: string[] | null;
  bytes?: number;
  type?: string;
  etag?: string;
  placeholder?: false;
  url?: string;
  asset_folder?: string;
  display_name?: string;
  original_filename?: string;
}

export interface FileInterface {
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
  lastModified: number;
  lastModifiedDate: Date;
}

export interface SidebarItemInterface {
  id?: string | undefined;
  title: string;
  body: string;
  date: Date | number;
  imageUrls?: string[];
}
