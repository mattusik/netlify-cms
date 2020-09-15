import { isBoolean } from 'lodash';
import { MediaFile } from '../backend';

interface Options {
  partial?: boolean;
  raw?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  label?: string | null;
  isModification?: boolean | null;
  mediaFiles?: MediaFile[] | null;
  author?: string;
  updatedOn?: string;
  status?: string;
  meta?: { path?: string };
  i18nStructure?: string;
  contentKey?: string;
  slugWithLocale?: string;
}

export interface EntryValue {
  collection: string;
  slug: string;
  path: string;
  partial: boolean;
  raw: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  label: string | null;
  isModification: boolean | null;
  mediaFiles: MediaFile[];
  author: string;
  updatedOn: string;
  status?: string;
  meta: { path?: string };
  i18nStructure?: string;
  contentKey?: string;
  slugWithLocale?: string;
}

export function createEntry(collection: string, slug = '', path = '', options: Options = {}) {
  const returnObj: EntryValue = {
    collection,
    slug,
    path,
    partial: options.partial || false,
    raw: options.raw || '',
    data: options.data || {},
    label: options.label || null,
    isModification: isBoolean(options.isModification) ? options.isModification : null,
    mediaFiles: options.mediaFiles || [],
    author: options.author || '',
    updatedOn: options.updatedOn || '',
    status: options.status || '',
    meta: options.meta || {},
    ...(options.contentKey && {
      contentKey: options.contentKey,
    }),
    ...(options.i18nStructure && {
      i18nStructure: options.i18nStructure,
    }),
    ...(options.slugWithLocale && {
      slugWithLocale: options.slugWithLocale,
    }),
  };

  return returnObj;
}
