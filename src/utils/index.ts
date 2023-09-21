export * from "./regExp";

export const nonNullable = <T>(value: T): value is NonNullable<T> =>
	value != null;
