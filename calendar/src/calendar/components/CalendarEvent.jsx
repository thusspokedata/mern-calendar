// export const CalendarEvent = (props) => {
//   console.log(props);
//   return <div>Calendar Event</div>;
// };

export const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <>
      <strong>{title}</strong>
      <span> - {user.name}</span>
    </>
  );
};
