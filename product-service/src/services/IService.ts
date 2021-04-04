export default interface IService<T> {
    getAll(): Promise<T[]>,
    getById(id: string):  Promise<T> | null,
};
