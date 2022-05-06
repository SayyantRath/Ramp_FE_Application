import { useEffect, useState } from "react";

const TestComponent = (props) => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    if (!props.input) {
      setInterval(() => setDate(new Date()), 1000);
    }
  }, [props.input]);

  if (!props.input) {
    return (
      <div>
        {date.toLocaleString("en-US", {
          weekday: "long",
          day: "numeric",
          year: "numeric",
          month: "long",
          hour: "numeric",
          minute: "numeric",
          second: "numeric"
        })}
      </div>
    );
  } else if (Array.isArray(props.input)) {
    return props.input.map((element, index) => {
      return <div key={index}>{element}</div>;
    });
  } else {
    return <div>{props.input}</div>;
  }
};

export default TestComponent;
