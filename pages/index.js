import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error, isLoading } = useSWR("/api/inventory", fetcher);

  if (error) return <div>Failed to load inventory</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!data) return null;

  return (
    <ul>
      {data.map((item) => {
        return (
          <li>
            {item.name} {item.desc}
          </li>
        );
      })}
    </ul>
  );
}
