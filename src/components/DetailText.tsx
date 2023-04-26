import { useDetailTextQuery } from "@/api-queries";

export default function DetailText() {
  const query = useDetailTextQuery();
	
  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

	const object = query.data;

  return (
    <div>
			<p>coucou</p>
      <p>{object.objectID}</p>
    </div>
  );
}
