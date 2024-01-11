import { useState } from "react";

type SortState = {
  prop: string;
  sort: "asc" | "desc";
};

export function useSort<T>({
  items,
  initialSort,
}: {
  items: T[];
  initialSort: SortState;
}) {
  const [state, setState] = useState<SortState>(initialSort);

  const sortBy = (prop: string) => {
    if (state.prop !== prop) {
      setState({ prop, sort: state.sort === "asc" ? "desc" : "asc" });
    } else {
      setState({ prop, sort: state.sort === "asc" ? "desc" : "asc" });
    }
  };

  return {
    itemsSorted: items.sort((a: any, b: any) => {
      const propA = a[state.prop] as number;
      const propB = b[state.prop] as number;
      if (state.sort === "asc") {
        return propB - propA;
      } else {
        return propA - propB;
      }
    }),
    sortState: state,
    sortBy,
  };
}
