export function Pagination({ page, totalPages }: { page: number; totalPages: number }) {
  return (
    <p>
      Page {page} / {totalPages}
    </p>
  );
}
