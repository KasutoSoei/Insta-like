export abstract class BaseRepository<T> {
  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract create(data: unknown): Promise<T>;
  abstract update(id: string, data: unknown): Promise<T | null>;
  abstract delete(id: string): Promise<boolean>;
}
