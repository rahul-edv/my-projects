import { useLoaderData } from "react-router-dom";

export default function CareerDetail() {
  const career = useLoaderData();
  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting Salary : {career.salary}</p>
      <p>Location : {career.location}</p>
      <div className="details">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
        accusantium eligendi aliquid odio doloremque quidem eum amet explicabo
        in iusto!
      </div>
    </div>
  );
}

// loader function from react router dom
export const careerDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/careers/" + id);
  if (!res.ok) {
    throw Error("Could not find the role");
  }
  return res.json();
};
