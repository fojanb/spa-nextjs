import dataStyles from "../styles/Data.module.css";
import Link from "next/link";
const Data = (props) => {
  // console.log(props);
  // console.log(props.entities[1].title);
  let data = props.entities;
  return (
    <div className={dataStyles.grid}>
      {data.map((card, index) => (
        <Link href="/card/[id]" as={`/card/${card.id}`}>
          <div className={dataStyles.card}>
            <h3 key={index}>
              {index + 1} - {card.title}
            </h3>
            <p>{card.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default Data;
