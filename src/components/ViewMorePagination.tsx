export default function ViewMorePagination({
  setLimit,
}: {
  setLimit: () => void;
}) {
  return (
    <button
      onClick={() => {
        // setPage(page + 1);
        setLimit();
      }}
    >
      View More
    </button>
  );
}

// (
//     <Pagination>
//       <PaginationItem>
//         <PaginationLink first href="#" onClick={() => goToPage(1)} />
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           previous
//           href="#"
//           onClick={() => {
//             goToPage(Math.max(1, currentPage - 1));
//             setLimitMinus(currentPage);
//           }}
//         />
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           href="#"
//           onClick={() => {
//             if (currentPage > 1) {
//               setLimitMinus(1);
//             } else if (currentPage < 1) {
//               setLimitPlus(1);
//             }
//             goToPage(1);
//           }}
//         >
//           1
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           href="#"
//           onClick={() => {
//             if (currentPage > 2) {
//               setLimitMinus(2);
//             } else if (currentPage < 2) {
//               setLimitPlus(2);
//             }
//             goToPage(2);
//           }}
//         >
//           2
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           href="#"
//           onClick={() => {
//             if (currentPage > 3) {
//               setLimitMinus(3);
//             } else if (currentPage < 3) {
//               setLimitPlus(3);
//             }
//             goToPage(3);
//           }}
//         >
//           3
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           href="#"
//           onClick={() => {
//             if (currentPage > 4) {
//               setLimitMinus(4);
//             } else if (currentPage < 4) {
//               setLimitPlus(4);
//             }
//             goToPage(4);
//           }}
//         >
//           4
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           href="#"
//           onClick={() => {
//             if (currentPage > 5) {
//               setLimitMinus(5);
//             } else if (currentPage < 5) {
//               setLimitPlus(5);
//             }
//             goToPage(5);
//           }}
//         >
//           5
//         </PaginationLink>
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink
//           next
//           href="#"
//           onClick={() => {
//             goToPage(Math.min(lastPage, currentPage + 1));
//             setLimitPlus(currentPage);
//           }}
//         />
//       </PaginationItem>
//       <PaginationItem>
//         <PaginationLink last href="#" onClick={() => goToPage(lastPage)} />
//       </PaginationItem>
//     </Pagination>
//   );
