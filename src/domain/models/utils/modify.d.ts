// Merges interfaces R into T, overwriting properties with the same name.
export type Modify<T, R> = Omit<T, keyof R> & R;
