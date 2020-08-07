import { withRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";

function MayAnhItem({ router, employee }) {
  const [employee2, setEmployee2] = useState({});
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/2")
      .then((res) => res.json())
      .then((res) => {
        setEmployee2(res);
        console.log("employee 2 client", res);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>{`${router.query.slug} | Máy ảnh đẹp`}</title>
      </Head>
      <div>{`${router.query["slug-danhmuc"]}/${router.query.slug}`}</div>
    </div>
  );
}

MayAnhItem.getInitialProps = async (ctx) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await res.json();
  console.log("employee 1", json);
  return { employee: json };
};

export default withRouter(MayAnhItem);
