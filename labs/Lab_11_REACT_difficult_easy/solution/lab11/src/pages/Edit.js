import { useParams } from "react-router-dom";

const Edit = ({ events }) => {
  const { id } = useParams();
  const filteredEvents = events.filter((event) => {
    return event.date == id;
  });
  console.log(filteredEvents);
  return <div>Edit</div>;
};
export default Edit;
