export interface UseCase<T, R> {
    execute(input: T): Promise<R>;
}