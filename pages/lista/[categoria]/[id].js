import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";



const Lista = (props) => {
  const router = useRouter();
  const { products } = props.data;
  console.log(props.data);

  return (
    <Layout>
      {props.data.map((item) => {
        return (
          <p key={item.id}>
            {item.id} - {item.name}
            {item.SubCategories.map((sub) => {
              return <p>{sub.name}</p>;
            })}
          </p>
        );
      })}
    </Layout>
  );
};

export default Lista;

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps(context) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch("http://localhost:5000/api/category/all ");
  const data = await res.json();

  return {
    props: {
      data
    }
  };
}
