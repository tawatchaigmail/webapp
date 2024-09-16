interface UpdateStr<T> {
  id: string;
  changes: Partial<T>;
}

interface UpdateNum<T> {
  id: number;
  changes: Partial<T>;
}

type Update<T> = UpdateStr<T> | UpdateNum<T>;