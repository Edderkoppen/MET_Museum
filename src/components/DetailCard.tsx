import { useDetailQuery } from "@/api-queries";

import RightDetail from "./RightDetail";

import "../styles/detail.scss";

export default function DetailCard() {
  const query = useDetailQuery();

  if (query.error) return <div>failed to load</div>;
  if (query.isLoading) return <div>Loading...</div>;

  const object = query.data;

  return (
    <div className="content">
      <div>
        <img src={object.primaryImageSmall} alt={object.title} />
      </div>
      <div>
        <RightDetail />
      </div>
    </div>
  );
}
