import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

export default function TestFetcher() {
  const fetcher = useFetcher();
  const [health, setHealth] = useState<undefined | string>(undefined);

  useEffect(() => {
    console.log("changed fetcher");
    fetcher.load("/healthcheck");
  }, [fetcher]);

  useEffect(() => {
    console.log("changed health");
    setHealth(fetcher.data);
  }, [fetcher.data]);

  return <div>test: {health}</div>;
}
