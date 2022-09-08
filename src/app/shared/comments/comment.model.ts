export type CommentType = 'all' | 'first' | 'second' | 'third' | 'qualify' | 'sprint' | 'race';

export interface Comment {
  firstname: string;
  lastname: string | string;
  age: number | null;
  email: string | null;
  comment: string;
  raceId?: number;
  type: CommentType;
}
