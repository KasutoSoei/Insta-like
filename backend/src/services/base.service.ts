export abstract class BaseService<T> {
  constructor(protected readonly repository: unknown) {}

  async findAll(): Promise<T[]> {
    // To be implemented by concrete services
    return [] as T[];
  }

  async findById(id: string): Promise<T | null> {
    // To be implemented by concrete services
    return null;
  }

  async create(data: unknown): Promise<T> {
    // To be implemented by concrete services
    return data as T;
  }

  async update(id: string, data: unknown): Promise<T | null> {
    // To be implemented by concrete services
    return null;
  }

  async delete(id: string): Promise<boolean> {
    // To be implemented by concrete services
    return false;
  }
}
