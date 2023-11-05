// import { TData } from "./types";

// export default function getData(value: string): void {
//   setIsLoading(true);
//   const url: string =
//     value === ''
//       ? `https://dummyjson.com/products?skip=${
//           (currentPage - 1) * Number(pageItems)
//         }&limit=${pageItems}`
//       : `https://dummyjson.com/products/search?q=${value}&?skip=${
//           (currentPage - 1) * Number(pageItems)
//         }&limit=${pageItems}`;
//   fetch(url)
//     .then((res) => {
//       if (res.status === 404) setError(true);
//       return res.json();
//     })
//     .then((data: TData) => {
//       console.log(data);
//       setData(data);
//       setIsLoading(false);
//     });
// }
